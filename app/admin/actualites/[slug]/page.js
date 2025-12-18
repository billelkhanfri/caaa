import { createSupabaseServer } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";

export default async function EditactualitePage({ params }) {
 
  const {slug} = await params;
  // ✅ SUPABASE POUR LE READ (OK ici)
  const supabase = createSupabaseServer();

  const { data: actualite, error } = await supabase
    .from("actualites")
    .select("*")
    .eq("slug", slug.toLowerCase()) 
    .single();
  if (error || !actualite) {
    return <div>actualités introuvable</div>;
  }
  // ✅ NOUVEAU SUPABASE ICI
  async function updateactualite(formData) {
    "use server";

    const supabase = createSupabaseServer();

    await supabase
      .from("actualites")
      .update({
        title: formData.get("title"),
        content: formData.get("content"),
      })
      .eq("slug", slug);

    redirect("/admin/actualites");
  }

  // ✅ ET ICI AUSSI
  async function deleteactualite() {
    "use server";

    const supabase = createSupabaseServer();

    await supabase.from("actualites").delete().eq("slug",slug);

    redirect("/admin/actualites");
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <form action={updateactualite} className="space-y-2">
        <input
          name="title"
          defaultValue={actualite.title}
          className="input input-bordered w-full"
        />

        <textarea
          name="content"
          defaultValue={actualite.content}
          className="textarea textarea-bordered w-full"
        />

        <button className="btn btn-primary w-full">Modifier</button>
      </form>

      <form action={deleteactualite}>
        <button className="btn btn-error w-full">Supprimer</button>
      </form>
    </div>
  );
}
