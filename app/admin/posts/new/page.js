import PostForm from "../../../components/PostForm";
import { createSupabaseServer } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function NewPostPage() {
  async function createPost(formData) {
    "use server";

    const supabase = await createSupabaseServer();

    const title = formData.get("title")?.toString().trim();
    const excerpt = formData.get("excerpt")?.toString().trim() || null;
    const content = formData.get("content")?.toString().trim() || null;

    const file = formData.get("file");
    const mediaUrl = formData.get("media_url")?.toString().trim();

    if (!title) {
      throw new Error("Le titre est obligatoire");
    }

    function slugify(text) {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }

    const baseSlug = slugify(title);
    let slug = baseSlug;
    let counter = 1;

    // 🔒 éviter doublons
    while (true) {
      const { data } = await supabase
        .from("posts")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();

      if (!data) break;

      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("Utilisateur non connecté");
    }

    let mainImage = null;

    // 🔥 1. SI FICHIER → upload Supabase
    if (file && file.size > 0) {
      const extension = file.name.split(".").pop();
      const fileName = `${slug}-${crypto.randomUUID()}.${extension}`;
      const filePath = `posts/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { data } = supabase.storage
        .from("media")
        .getPublicUrl(filePath);

      mainImage = {
        url: data.publicUrl,
        type: file.type.startsWith("video") ? "video" : "image",
        alt: title,
      };
    }

    // 🔥 2. SINON URL → stockée directement
    else if (mediaUrl) {
      mainImage = {
        url: mediaUrl,
        type: "video", // ou "image" si tu veux affiner plus tard
        alt: title,
      };
    }

    // 🔥 INSERT DB
    const { error } = await supabase.from("posts").insert({
      title,
      slug,
      excerpt,
      content,
      author_id: user.id,
      main_image: mainImage,
    });

    if (error) {
      throw new Error(error.message);
    }

    redirect("/admin/posts");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/admin/posts" className="btn btn-ghost mb-8">
        ← Retour
      </Link>

      <PostForm createAction={createPost} />
    </div>
  );
}