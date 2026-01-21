import { createSupabaseServer } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import DeleteModal from "../../../components/DeleteModal";

export default async function EditPostPage({ params }) {
  const { slug } = await params;
  const supabase = await createSupabaseServer();

  // 🔹 Récupération du post
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) return <div>Post introuvable</div>;

  // 🔹 Server Action pour UPDATE
  async function updatePost(formData) {
    "use server";

    const supabase = await createSupabaseServer();
    const title = formData.get("title")?.toString().trim();
    const excerpt = formData.get("excerpt")?.toString().trim() || null;
    const content = formData.get("content")?.toString().trim() || null;
    const file = formData.get("media");

    if (!title) throw new Error("Le titre est obligatoire");

    const newSlug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    let media = post.main_image ?? null;

    // 🔹 Upload media si fichier fourni
    if (file && file.size > 0) {
      // Limite taille par exemple 5MB
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("Le fichier est trop volumineux (max 5MB).");
      }

      // Vérifie type image/vidéo
      if (!file.type.startsWith("image") && !file.type.startsWith("video")) {
        throw new Error("Type de fichier non supporté.");
      }

      const extension = file.name.split(".").pop();
      const fileName = `${newSlug}-${crypto.randomUUID()}.${extension}`;
      const filePath = `posts/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file, { contentType: file.type, upsert: false });

      if (uploadError) throw new Error(uploadError.message);

      const { data } = supabase.storage.from("media").getPublicUrl(filePath);
      media = {
        url: data.publicUrl,
        alt: title,
        type: file.type.startsWith("video") ? "video" : "image",
      };
    }

    // 🔹 Update dans Supabase
    await supabase
      .from("posts")
      .update({
        title,
        slug: newSlug,
        excerpt,
        content,
        main_image: media,
        updated_at: new Date().toISOString(),
      })
      .eq("id", post.id);

    redirect("/admin/posts");
  }

  // 🔹 Server Action pour DELETE avec confirmation
  async function deletePost(formData) {
    "use server";

   

    const supabase = await createSupabaseServer();
    await supabase.from("posts").delete().eq("id", post.id);
    redirect("/admin/posts");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
       <Link href="/admin/posts" className="btn btn-ghost mb-8">
          ← Retour
        </Link>
      {/* Formulaire Update */}
      <form action={updatePost}  className="card bg-base-100 shadow p-6 space-y-4">
                 <h1 className="text-2xl font-bold">Modifier l’article</h1>

        <input
          name="title"
          defaultValue={post.title}
          required
          className="input input-bordered w-full"
        />
        <textarea
          name="excerpt"
          defaultValue={post.excerpt || ""}
          className="textarea textarea-bordered w-full"
          rows={3}
        /> 
        <textarea
          name="content"
          defaultValue={post.content || ""}
          className="textarea textarea-bordered w-full"
          rows={8}
        />
        {post.main_image?.url && (
          <div className="text-sm text-gray-500">
            Média actuel :{" "}
            <a
              href={post.main_image.url}
              target="_blank"
              rel="noreferrer"
              className="link ml-2"
            >
              Voir
            </a>
          </div>
        )}
        <input
          type="file"
          name="media"
          accept="image/*,video/*"
          className="file-input file-input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Enregistrer
        </button>
      </form>

      {/* Formulaire Delete avec confirmation */}
      <DeleteModal action={deletePost} />
   
    </div>
  );
}
