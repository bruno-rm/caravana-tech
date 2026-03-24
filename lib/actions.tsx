"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import z from "zod";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require", prepare: false });

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function createPost(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    title: z.string(),
    section: z.string(),
    language: z.string(),
    author: z.string(),
    content: z.string(),
    description: z.string(),
    imageName: z.string(),
    imageUrl: z.string(),
    slug: z.string(),
  });
  const parse = schema.safeParse({
    title: formData.get("title"),
    section: formData.get("section"),
    language: formData.get("language"),
    author: formData.get("author"), 
    content: formData.get("content"),
    description: formData.get("content"),
    imageName: formData.get("imageName"),
    imageUrl: formData.get("imageUrl"),
    slug: formData.get("slug"),
  });

  if (!parse.success) {
    return { message: "Failed to create post" };
  }

  const data = parse.data;

  try {
    await sql`
      INSERT INTO posts (section, language, title, author, content, description, image_name, image_url, slug)
        VALUES (${data.section}, ${data.language}, ${data.title}, ${data.author}, ${data.content}, ${data.description}, ${data.imageName}, ${data.imageUrl}, ${data.slug})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: "Database Error: Failed to Create Post.",
    };
  }

  revalidatePath("/criar-post");
  redirect("/criar-post");
}



