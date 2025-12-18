import ActualiteForm from "../../../components/ActualiteForm";
import { createSupabaseServer } from "../../../lib/supabase/server";
import { redirect } from "next/navigation";

export default function NewactualitePage() {
  async function createactualite(formData) {
    "use server";

    const supabase = createSupabaseServer();
      const title = formData.get("title");
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

    const { error } = await supabase.from("actualites").insert({
      title,
      slug,
      category: formData.get("category"),
      content: formData.get("content"),
      date: formData.get("date"),
      image: {
        alt: title,
        url: formData.get("imageUrl"),
      },
    });
    if (error) {
      throw new Error(error.message);
    }

    redirect("/admin/actualites");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ActualiteForm action={createactualite} />
    </div>
  );
}
