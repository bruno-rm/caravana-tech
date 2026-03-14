
import { uploadImage } from "@/lib/actions";


export default function Page() {

  return (
    <main className="p-10 flex justify-center">
      <form
        action={uploadImage}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="file"
          name="image"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Upload Image
        </button>
      </form>
    </main>
  );
}

// import Image from "next/image";
// import fs from "node:fs/promises";

// import UploadForm from "@/components/upload";

// export default async function Page() {
//   const files = await fs.readdir("./public/images");
//   const images = files
//     .filter((file) => file.endsWith(".png"))
//     .map((file) => `/images/${file}`);

//   return (
//     <main>
//       <UploadForm />
//       <div className="flex flex-wrap">
//         {images.map((image) => (
//           <div key={image} className="px-2 h-auto w-1/2">
//             <Image
//               key={image}
//               src={image}
//               width={400}
//               height={400}
//               alt={image}
//               className="object-cover w-full"
//             />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }