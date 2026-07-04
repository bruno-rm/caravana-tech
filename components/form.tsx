"use client";

import { createPost } from "@/lib/actions";
import { useActionState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

//section, title, author, content

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction] = useActionState(createPost, initialState);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");

  return (
    <form action={formAction} className="  w-full space-y-4 ">
      <div>
        <label className="block text-sm text-[#48773a] font-semibold mb-1">
          Título
        </label>
        <input
          type="text"
          name="title"
          required
          className="w-full border bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          placeholder="Insira um título"
        />
      </div>
 
      <div>
        <label className="block text-sm text-[#48773a] font-semibold mb-1">
          Conteúdo
        </label>
        <textarea
          rows={4}
          cols={50}
          name="content"
          required
          className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          placeholder="Insira o conteúdo do post"
        />
      </div>

      <div>
        <label className="block text-sm text-[#48773a] font-semibold mb-1">
          Descrição
        </label>
        <textarea
          rows={4}
          cols={50}
          name="description"
          required
          className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          placeholder="A descrição do post aparecerá na página inicial"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm text-[#48773a] font-semibold mb-1">
            Autor(a)
          </label>
          <input
            type="text"
            name="author"
            required
            className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
            placeholder="De quem é a autoria?"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-sm text-[#48773a] font-semibold mb-1"
          >
            Seção
          </label>

          <select
            defaultValue=""
            name="section"
            required
            className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          >
            <option value="" disabled hidden>
              Escolha uma seção:
            </option>
            <option value="notícias">Notícias</option>
            <option value="eventos">Eventos</option>
            <option value="artigos">Artigos</option>
          </select>
        </div>

        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-sm text-[#48773a] font-semibold mb-1"
          >
            Idioma
          </label>

          <select
            defaultValue=""
            name="language"
            required
            className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          >
            <option value="" disabled hidden>
              O post está em qual idioma?
            </option>
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
            <option value="es">Espanhol</option>
          </select>
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm text-[#48773a] font-semibold mb-1">
          Slug
        </label>
        <input
          type="text"
          name="slug"
          required
          className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          placeholder="Crie um slug para o post do tipo: nome-do-post"
        />
      </div>

      <div className="flex-1">
        <label className="block text-sm text-[#48773a] font-semibold mb-1">
          Mídia externa
        </label>
        <input
          type="text"
          name="mediaLink"
          className="field-sizing-content w-full border  bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#48773a] focus:outline-none"
          placeholder="Cole o link para alguma mídia externa"
        />
      </div>



      <div className=" ">
        <div>
          <input type="hidden" name="imageName" value={imageName} />
        </div>

        <div className="flex  flex-col items-center justify-between p-6">
          <p className="pb-2">Escolha um arquivo de imagem de até 4 MB</p>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              console.log("presignedUrl: ", res[0].ufsUrl);
 
              setImageUrl(res[0].ufsUrl);
              setImageName(res[0].name);

              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />

          {imageUrl.length ? (
            <div>
              <Image src={imageUrl} alt={imageName} width={500} height={500} />
            </div>
          ) : null}
        </div>
 
        <div>
          <input type="hidden" name="imageUrl" value={imageUrl} />
        </div>
      </div>

      <div className="flex justify-center p-6">
        <button
          type="submit"
          className="w-40 cursor-pointer bg-[#669a2f] hover:bg-[#48773a] rounded-md text-white font-medium py-2  transition"
        >
          Enviar post
        </button>
      </div>

      <p className="text-red-500">{state?.message}</p>
    </form>
  );
}

// "use client";

// import { createPost } from "@/lib/actions";

// //section, title, author, content

// export default function Form() {
//   return (
//     <form
//       action={async (formData) => {
//         await createPost(formData);
//       }}
//       className="bg-black p-6  w-full space-y-4 "
//     >
//       <div>
//         <label className="block text-sm text-[#48773a] font-semibold mb-1">
//           Título
//         </label>
//         <input
//           type="text"
//           name="title"
//           required
//           className="w-full border bg-white border-[#48773a]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//           placeholder="Insira um título"
//         />
//       </div>

//       <div>
//         <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
//           Conteúdo
//         </label>
//         <textarea
//           rows={4}
//           cols={50}
//           name="content"
//           required
//           className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//           placeholder="Insira o conteúdo do post"
//         />
//       </div>

//       <div>
//         <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
//           Descrição
//         </label>
//         <textarea
//           rows={4}
//           cols={50}
//           name="description"
//           required
//           className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//           placeholder="Insira uma descrição"
//         />
//       </div>

//       <div className="flex space-x-4">
//         <div className="flex-1">
//           <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
//             Autor
//           </label>
//           <input
//             type="text"
//             name="author"
//             required
//             className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//             placeholder="Insira o nome do autor"
//           />
//         </div>

//         <div className="flex-1">
//           <label
//             htmlFor="category"
//             className="block text-sm text-[#b4b4b4] font-semibold mb-1"
//           >
//             Seção
//           </label>

//           <select
//             defaultValue=""
//             name="section"
//             required
//             className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//           >
//             <option value="" disabled hidden>
//               Escolha uma seção:
//             </option>
//             <option value="notícias">Notícias</option>
//             <option value="eventos">Eventos</option>
//             <option value="artigos">Artigos</option>
//           </select>
//         </div>
//       </div>

//       <div className="flex space-x-4">
//         <div className="flex-1">
//           <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
//             Imagem
//           </label>
//           <input
//             type="text"
//             name="image"
//             required
//             className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//             placeholder="Insira o nome da imagem"
//           />
//         </div>

//         <div className="flex-1">
//           <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
//             Slug
//           </label>
//           <input
//             type="text"
//             name="slug"
//             required
//             className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
//             placeholder="Crie um slug de identificação para o post"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center p-6">
//         <button
//           type="submit"
//           className="w-40 cursor-pointer bg-[#353535] hover:text-[#b4b4b4]  text-white font-medium py-2  transition"
//         >
//           Enviar post
//         </button>
//       </div>
//     </form>
//   );
// }
