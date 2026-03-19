import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupSchema } from "@/lib/definitions";
import postgres from "postgres";
import z from "zod";



const sql = postgres(process.env.POSTGRES_URL!, {
  prepare: false,
  ssl: "require",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    //Validate request body with Zod
    const parsed = signupSchema.safeParse(body);
    console.log(parsed)


    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid data",
          details: z.flattenError(parsed.error)
          // details: parsed.error.flatten().fieldErrors,
        
        },
        { status: 400 },
        
      );
    }

    

    const { name, email, password } = parsed.data;

    // check if email exists
    const existing = await sql`
      SELECT id FROM users WHERE email = ${email}
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 },
      );
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // insert user
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${passwordHash})
    `;

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
