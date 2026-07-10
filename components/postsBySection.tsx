import Link from "next/link";
// import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
// import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";

// import { listPosts } from "@/lib/data";
import PostsTable from "./posts-table";

import Image from "next/image";
import ReadOnlyEditor from "./tiptap-templates/simple/read-only-editor";
 
export const dynamic = "force-dynamic";

export default async function PostsBySection({ section }: { section: string }) {
  const posts = await prisma.richTextPost.findMany({
    orderBy: { createdAt: "desc" },
    where: {
      section
    },
  });

  const extractImagesFromHTML = (htmlContent: string) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const urls = [];
    let match;

    while ((match = imgRegex.exec(htmlContent)) !== null) {
      urls.push(match[1]);
    }

    return urls;
  };

   

  return (
    <>
      {/* <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/rtposts/${post.id}`}>
              <div className="border rounded-lg p-6 hover:bg-slate-50">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-sm text-slate-500 mt-2">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
            <div>
              <ReadOnlyEditor content={post.content} />

              <Image
                src={extractImagesFromHTML(post.content)[0]}
                width={2700}
                height={1132}
                alt="logo"
                className="ml-1 w-[40%] md:w-[25%]"
              ></Image>
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3  md:ml-12 md:mr-12">
        
        {posts.length > 0 ? (
         
          posts.map((item, index) => (
            
            <div key={index}>
              <PostsTable 
                title={item.title}
                description={item.description}
                image={item.imageUrl ? item.imageUrl : extractImagesFromHTML(item.content)[0]}
                slug={item.slug}
              />
            </div>
          ))
        ) : ( 
          <ul>
            <div className="text-center text-red-500 py-6">
              No data available
            </div>
          </ul>
        )}
      </div>
    </>
  );
}




// import Link from "next/link";
// // import { Button } from "@/components/ui/button";
// import prisma from "@/lib/prisma";
// // import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";

// // import { listPosts } from "@/lib/data";
// import PostsTable from "./posts-table";

// import Image from "next/image";
// import ReadOnlyEditor from "./tiptap-templates/simple/read-only-editor";
 
// export const dynamic = "force-dynamic";

// export default async function homePosts() {
//   const posts = await prisma.richTextPost.findMany({
//     orderBy: { createdAt: "desc" },
//   });

//   const extractImagesFromHTML = (htmlContent: string) => {
//     const imgRegex = /<img[^>]+src="([^">]+)"/g;
//     const urls = [];
//     let match;

//     while ((match = imgRegex.exec(htmlContent)) !== null) {
//       urls.push(match[1]);
//     }

//     return urls;
//   };

//   return (
//     <>
//       <div className="space-y-4">
//         {posts.map((post) => (
//           <div key={post.id}>
//             <Link href={`/rtposts/${post.id}`}>
//               <div className="border rounded-lg p-6 hover:bg-slate-50">
//                 <h2 className="text-2xl font-bold">{post.title}</h2>
//                 <p className="text-sm text-slate-500 mt-2">
//                   {new Date(post.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             </Link>
//             <div>
//               <ReadOnlyEditor content={post.content} />

//               <Image
//                 src={extractImagesFromHTML(post.content)[0]}
//                 width={2700}
//                 height={1132}
//                 alt="logo"
//                 className="ml-1 w-[40%] md:w-[25%]"
//               ></Image>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3  md:ml-12 md:mr-12">
//         {posts.length > 0 ? (
//           posts.map((item, index) => (
//             <div key={index}>
//               <PostsTable 
//                 title={item.title}
//                 description={item.description}
//                 image={item.imageUrl}
//                 content={item.content}
//                 slug={item.slug}
//               />
//             </div>
//           ))
//         ) : (
//           <ul>
//             <div className="text-center text-red-500 py-6">
//               No data available
//             </div>
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }
