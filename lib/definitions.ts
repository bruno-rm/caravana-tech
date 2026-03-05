import { z } from "zod";


export type Expenses = {
  id: number;
  description: string;
  value: string;
  day: number;
  month: number;
  created_at: Date;
};

export type Post = {
  id: number;
  section: string;
  title: string;
  author: string;
  content: string;
  image: string;
  slug: string;
  created_at: Date;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};


export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),

  email: z
    .email("Invalid email")
    .max(100, "Email too long"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password too long"),
});

export type SignupInput = z.infer<typeof signupSchema>;



// CREATE TABLE posts (
//     id SERIAL PRIMARY KEY,
//     section VARCHAR(100) NOT NULL,
//     title VARCHAR(255) NOT NULL,
//     author VARCHAR(150),
//     content TEXT NOT NULL,
//     image VARCHAR(150),
//     slug VARCHAR(255),    
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );