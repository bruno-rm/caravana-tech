import { listPosts } from "@/lib/data";
import Image from "next/image";
// import { DeleteExpense, UpdateExpense } from "@/lib/buttons";
import Link from "next/link";

function getFirstThreeWords(paragraph: string) {
  if (!paragraph || typeof paragraph !== "string") {
    return "";
  }

  const regex = /^(\s*\S+){1,3}/u;
  const match = paragraph.match(regex);

  if (match) {
    const firstThree = match[0].trim();
    return firstThree;
  }

  return "";
}

// export default async function PostsTable({section} : {section: string}) {

//   const data = await listPosts(section);

//   return (
//     <div className="w-full bg-black ">
//       {data.length > 0 ? (
//         data.map((item, index) => (
//           <ul key={index}>
//             <Link href={`/posts/${item.slug}`}>
//               <li className="px-6 py-2 text-lg text-[#b4b4b4] font-bold">
//                 {item.title}
//                 <div className="text-sm font-normal text-[#b4b4b4] ">
//                   {item.content}
//                 </div>
//               </li>
//             </Link>
//           </ul>
//         ))
//       ) : (
//         <ul>
//           <li colSpan={4} className="text-center text-gray-500 py-6 italic">
//             No data available
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

export default async function PostsTable({ section }: { section: string }) {
  const data = await listPosts(section);

  return (
    <>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-3 md:mt-30 md:ml-12 md:mr-12  w-full ">
        {data.length > 0
          ? data.map((item, index) => (
              <ul className="" key={index}>
                <li>
                  <div>
                    <h2 className="text-2xl text-[#48773a] font-bold mb-3 font-serif">
                      {item.title}
                    </h2>
                  </div>

                  <div className="relative w-full ">
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.title}
                      width={960}
                      height={640}
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-2">
                    <p className="text-[#382255] text-xl ">{item.content}</p>
                  </div>
                </li>
              </ul>
            ))
          : (
          <ul>
            <li colSpan={4} className="text-center text-gray-500 py-6 italic">
              No data available
            </li>
          </ul>
        )}
      </div>

      {/* <div className="w-full bg-black ">
        {data.length > 0 ? (
          data.map((item, index) => (
            <ul key={index}>
              <Link href={`/posts/${item.slug}`}>
                <li className="px-6 py-2 text-lg text-[#b4b4b4] font-bold">
                  {item.title}
                  <div className="text-sm font-normal text-[#b4b4b4] ">
                    {item.content}
                  </div>
                </li>
              </Link>
            </ul>
          ))
        ) : (
          <ul>
            <li colSpan={4} className="text-center text-gray-500 py-6 italic">
              No data available
            </li>
          </ul>
        )}
      </div> */}
    </>
  );
}
