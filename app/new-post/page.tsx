"use client";
import type { Editor } from "@tiptap/react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [title, setTitle] = useState("");
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
          title,
          content: editor.getHTML(),
        }),
      });

      if (!res.ok) throw new Error("Failed to save");

      const post = await res.json();
      router.push(`/rtposts/${post.id}`);
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
          <Input
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl"
          />
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
