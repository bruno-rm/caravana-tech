import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.richTextPost.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const {
    author,
    content,
    description,
    imageUrl,
    language,
    mediaLink,
    section,
    slug,
    title,
  } = await request.json();

  if (!title || !content) {
    return NextResponse.json(
      { error: "Pleas fill all the required fields" },
      { status: 400 },
    );
  }

  const post = await prisma.richTextPost.create({
    data: {
      author,
      content,
      description,
      imageUrl,
      language,
      mediaLink,
      section,
      slug,
      title,
    },
  });

  return NextResponse.json(post);
}
