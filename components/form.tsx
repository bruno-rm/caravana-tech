"use client";

import { createPost } from "@/lib/actions";
import { useState } from "react";


//section, title, author, content

export default function Form() {
  return (
    <form action={createPost} className="bg-black p-6  w-full space-y-4 ">
      <div>
        <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
          Título
        </label>
        <input
          type="text"
          name="title"
          required
          className="w-full border bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
          placeholder="Insira um título"
        />
      </div>

      <div>
        <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
          Conteúdo
        </label>
        <textarea
          rows={4}
          cols={50}
          name="content"
          required
          className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
          placeholder="Insira o conteúdo do post"
        />
      </div>

      <div>
        <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
          Descrição
        </label>
        <textarea
          rows={4}
          cols={50}
          name="description"
          required
          className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
          placeholder="Insira uma descrição"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
            Autor
          </label>
          <input
            type="text"
            name="author"
            required
            className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
            placeholder="Insira o nome do autor"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-sm text-[#b4b4b4] font-semibold mb-1"
          >
            Seção
          </label>

          <select
            defaultValue=""
            name="section"
            required
            className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
          >
            <option value="" disabled hidden>
              Escolha uma seção:
            </option>
            <option value="notícias">Notícias</option>
            <option value="eventos">Eventos</option>
            <option value="artigos">Artigos</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
            Imagem
          </label>
          <input
            type="text"
            name="image"
            required
            className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
            placeholder="Insira o nome da imagem"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm text-[#b4b4b4] font-semibold mb-1">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            required
            className="field-sizing-content w-full border  bg-white border-[#b4b4b4]  p-2 focus:ring-1 focus:ring-[#b4b4b4] focus:outline-none"
            placeholder="Crie um slug de identificação para o post"
          />
        </div>
      </div>

      <div className="flex justify-center p-6">
        <button
          type="submit"
          className="w-40 cursor-pointer bg-[#353535] hover:text-[#b4b4b4]  text-white font-medium py-2  transition"
        >
          Enviar post
        </button>
      </div>

      
      
      
    </form>
  );
}
