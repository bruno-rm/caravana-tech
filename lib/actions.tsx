"use server";


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { AuthError } from 'next-auth';
import { signIn } from "@/auth";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const section = formData.get("section");
  const author = formData.get("author");
  const content = formData.get("content");
  const description = formData.get("content");
  const image = formData.get("image");
  const slug = formData.get("slug");

  try {
    await sql`
      INSERT INTO posts (section, title, author, content, description, image, slug)
        VALUES (${section}, ${title}, ${author}, ${content}, ${description}, ${image}, ${slug})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: "Database Error: Failed to Create Post.",
    };
  }

  console.log(title);

  revalidatePath("/criar-post");
  redirect("/criar-post");
}