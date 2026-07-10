import ReadOnlyEditor from "@/components/tiptap-templates/simple/read-only-editor";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return <div>Invalid post ID</div>;

  const post = await prisma.richTextPost.findUnique({
    where: { slug },
  });
  if (!post) notFound();

  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link href="/rtposts">
        <Button variant="ghost" className="mb-4">
          ← Back
        </Button>
      </Link>

      <article className="border rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-slate-500 mb-8">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <div>
          {post.mediaLink ? (
            <div className="px-6">
              <iframe
                className="w-full h-120"
                src={`${post.mediaLink}`}
                allowFullScreen
              />
            </div>
          ) : (
            <div></div>
          )}

          <ReadOnlyEditor content={post.content} />
        </div>
      </article>
    </div>
  );
}
