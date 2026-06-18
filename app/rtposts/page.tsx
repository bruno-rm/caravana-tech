import Link from "next/link";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic' 


export default async function PostsPage() {

  const posts = await prisma.richTextPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="w-full md:w-3/5 mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Link href="/new-post">
          <Button>Create Post</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/rtposts/${post.id}`}>
            <div className="border rounded-lg p-6 hover:bg-slate-50">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-sm text-slate-500 mt-2">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
