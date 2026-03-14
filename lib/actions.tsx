"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import z from "zod";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

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
    author: z.string(),
    content: z.string(),
    description: z.string(),
    image: z.string(),
    slug: z.string(),
  });
  const parse = schema.safeParse({
    title: formData.get("title"),
    section: formData.get("section"),
    author: formData.get("author"),
    content: formData.get("content"),
    description: formData.get("content"),
    image: formData.get("image"),
    slug: formData.get("slug"),
  });

  if (!parse.success) {
    return { message: "Failed to create post" };
  }

  const data = parse.data;

  try {
    await sql`
      INSERT INTO posts (section, title, author, content, description, image, slug)
        VALUES (${data.section}, ${data.title}, ${data.author}, ${data.content}, ${data.description}, ${data.image}, ${data.slug})
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



import { writeFile } from "fs/promises";
import path from "path";

export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File;

  if (!file || file.size === 0) {
    throw new Error("No file uploaded");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = Date.now() + "-" + file.name;

  const filePath = path.join(
    process.cwd(),
    "public/uploads",
    filename
  );

  await writeFile(filePath, buffer);

  return

  //return { success: true };

  //redirect("/");
}


// import fs from "node:fs/promises";

// export async function uploadFile(
//   prevState: {
//     message: string | undefined;
//   },
//   formData: FormData,
// ) {
//   const file = formData.get("file") as File;
//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = new Uint8Array(arrayBuffer);  

//   try {
//     await fs.writeFile(`./public/images/${file.name}`, buffer);
    
//   } catch (error) {
//      console.error(error);
//      return {
//       message: "Database Error: Failed to upload.",
//     };
//   }

//   revalidatePath("/");
// }

// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import postgres from "postgres";
// import { AuthError } from 'next-auth';
// import { signIn } from "@/auth";

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

// export async function createPost(formData: FormData) {
//   const title = formData.get("title");
//   const section = formData.get("section");
//   const author = formData.get("author");
//   const content = formData.get("content");
//   const description = formData.get("content");
//   const image = formData.get("image");
//   const slug = formData.get("slug");

//   try {
//     await sql`
//       INSERT INTO posts (section, title, author, content, description, image, slug)
//         VALUES (${section}, ${title}, ${author}, ${content}, ${description}, ${image}, ${slug})
//     `;
//   } catch (error) {
//     // We'll also log the error to the console for now
//     console.error(error);
//     return {
//       message: "Database Error: Failed to Create Post.",
//     };
//   }

//   console.log(title);

//   revalidatePath("/criar-post");
//   redirect("/criar-post");
// }
