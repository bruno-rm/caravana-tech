"use client";
import type { Editor } from "@tiptap/react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { UploadButton } from  "@/utils/uploadthing";
import Image from "next/image";

export default function Home() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [language, setLanguage] = useState("");
  const [mediaLink, setMediaLink] = useState("");
  const [section, setSection] = useState("");
  const [slug, setSlug] = useState("");
  const [editor, setEditor] = useState<Editor | null>(null);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(editor?.getHTML());

    if (!title.trim() || !editor) {
      alert("Please fill in title and content");
      return;
    }
    setSaving(true);

    try {
      const res = await fetch("api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author,
          content: editor.getHTML(),
          description,
          imageUrl,
          language,
          mediaLink,
          section,
          slug,
          title,
        }),
      });

      if (!res.ok) throw new Error("Failed to save");

      const post = await res.json();
      router.push(`/rtposts/${post.slug}`);
    } catch (error) {
      alert("Failed to save post");
    } finally {
      setSaving(false);
    }
  };
  return (
    <>
      <div className=" max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <Input
            placeholder="Post image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="text-lg"
          /> */}

          <Input
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl"
          />

          <Input
            placeholder="Nome do autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="text-xl"
          />

          <Input
            placeholder="Post description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-lg"
          />

          <Input
            placeholder="Idioma"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-lg"
          />

          <Input
            placeholder="Seção"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="text-lg"
          />

          <Input
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="text-lg"
          />

          <Input
            placeholder="Media link"
            value={mediaLink}
            onChange={(e) => setMediaLink(e.target.value)}
            className="text-lg"
          />

          <div className=" ">
            <div className="flex  flex-col items-center justify-between p-6">
              <p className="pb-2">Escolha um arquivo de imagem de até 4 MB</p>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  console.log("presignedUrl: ", res[0].ufsUrl);
                  console.log("veja isto aqui: ", res[0]);

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
                  <Image
                    src={imageUrl}
                    alt={imageName}
                    width={500}
                    height={500}
                  />
                </div>
              ) : null}
            </div>

            <div>
              <input type="hidden" name="imageUrl" value={imageUrl} />
            </div>
          </div>

          <div className="border rounded-lg">
            <SimpleEditor onEditorReady={setEditor} />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save Post"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/rtposts")}
            >
              View Post
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
