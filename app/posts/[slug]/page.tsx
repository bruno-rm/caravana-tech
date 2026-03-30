import { notFound } from "next/navigation";
import { fetchPostBySlug } from "@/lib/data";
import Image from "next/image";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;

  const [post] = await Promise.all([fetchPostBySlug(slug)]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="m-auto md:w-1/2">
        <div className=" px-6 py-4 font-bold text-white text-justify">
          <h1 className="text-3xl text-[#48773a]">{post.title} </h1>
        </div>

        {post.media_link ? (
          <div className="px-6">
            <iframe className="w-full h-120" src={`${post.media_link}`} allowFullScreen />
          </div>
        ) : (
          <div className="w-full  px-6 py-4">
            <Image
              src={`${post.image_url}`}
              width={1000}
              height={1000}
              alt={`${post.image_url}`}
            />
          </div>
        )}

        <div className=" text-[#723c8f] px-6 py-4 font-semibold text-lg text-justify">
          <p className="pb-4" style={{ whiteSpace: "pre-wrap" }}>
            {post.content}
          </p>
        </div>
      </div>
    </>
  );
}
