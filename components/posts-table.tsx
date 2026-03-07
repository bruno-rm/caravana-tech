import Image from "next/image";

// function getFirstThreeWords(paragraph: string) {
//   if (!paragraph || typeof paragraph !== "string") {
//     return "";
//   }

//   const regex = /^(\s*\S+){1,3}/u;
//   const match = paragraph.match(regex);

//   if (match) {
//     const firstThree = match[0].trim();
//     return firstThree;
//   }

//   return "";
// }

type PostProps = {
  title: string;
  image: string;
  content: string;
};

export default function PostsTable({ title, image, content }: PostProps) {
  return (
    <>
      <div className=" p-6 w-full">
        <div>
          <div>
            <h2 className="text-2xl text-[#48773a] font-bold mb-3 font-serif">
              {title}
            </h2>
          </div>

          <div>
            <Image
              src={`/images/${image}`}
              alt={title}
              width={960}
              height={640}
              className="object-cover"
            />
          </div>

          <div className="mt-2">
            <p className="text-[#382255] text-xl ">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
