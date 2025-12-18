import { createSupabaseServer } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";

export default async function EditPostPage({ params }) {
 
  const {slug} = await params;
  // ✅ SUPABASE POUR LE READ (OK ici)
  const supabase = createSupabaseServer();

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug.toLowerCase()) 
    .single();
  if (error || !post) {
    return <div>Post introuvable</div>;
  }
  // ✅ NOUVEAU SUPABASE ICI
  async function updatePost(formData) {
    "use server";

    const supabase = createSupabaseServer();

    await supabase
      .from("posts")
      .update({
        title: formData.get("title"),
        content: formData.get("content"),
      })
      .eq("slug", slug);

    redirect("/admin/posts");
  }

  // ✅ ET ICI AUSSI
  async function deletePost() {
    "use server";

    const supabase = createSupabaseServer();

    await supabase.from("posts").delete().eq("slug",slug);

    redirect("/admin/posts");
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <form action={updatePost} className="space-y-2">
        <input
          name="title"
          defaultValue={post.title}
          className="input input-bordered w-full"
        />

        <textarea
          name="content"
          defaultValue={post.content}
          className="textarea textarea-bordered w-full"
        />

        <button className="btn btn-primary w-full">Modifier</button>
      </form>

      <form action={deletePost}>
        <button className="btn btn-error w-full">Supprimer</button>
      </form>
    </div>
  );
}
