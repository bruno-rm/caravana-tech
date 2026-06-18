import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const posts = await prisma.richTextPost.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const { title, content } = await request.json()
  
  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content required" },
      { status: 400 }
    )
  }

  const post = await prisma.richTextPost.create({
    data: { title, content },
  })

  return NextResponse.json(post)
}