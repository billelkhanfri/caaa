import PostForm from "../../../components/PostForm";
import { createSupabaseServer } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function createPost(formData) {
    "use server";

    const supabase = createSupabaseServer();

    const title = formData.get("title");
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

   const { error } = await supabase.from("posts").insert({
     title,
     slug,
     excerpt: formData.get("excerpt"),
     content: formData.get("content"),
     main_image: {
       alt: title,
       url: formData.get("imageUrl"),
     },
   });
    if (error) {
      throw new Error(error.message);
    }

    redirect("/admin/posts");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <PostForm action={createPost} />
    </div>
  );
}
