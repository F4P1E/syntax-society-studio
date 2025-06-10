"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import BlogNavBar from "@/components/blog/BlogNavbar"; // ✅ Import your nav bar

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content, image });
    toast.success("Post submitted!");
    router.push("/blog");
  };

  return (
    <>
      <BlogNavBar /> {/* ✅ Use it here */}

      <main className="min-h-screen py-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center">Share Your Thoughts</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
          <div>
            <label className="block font-medium mb-2">Title</label>
            <Input
              placeholder="Enter your post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Cover Image URL</label>
            <Input
              placeholder="https://example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Content</label>
            <Textarea
              placeholder="Write your blog post here..."
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <Button type="submit" size="lg">Publish Post</Button>
        </form>
      </main>
    </>
  );
}
