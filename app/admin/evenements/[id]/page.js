import { createSupabaseServer } from "../../../lib/supabase/server";
import DeleteModal from "../../../components/DeleteModal";

import Link from "next/link";
import { redirect } from "next/navigation";export default async function EditEventPage({ params }) {
  const { id } = await params;
  const supabase = await createSupabaseServer();

  // 🔹 Récupération du post
  const { data: event, error } = await supabase
    .from("evenements")
    .select("*")
    .eq("id", id)
    .single();
      if (error || !event) return <div>Evénement introuvable</div>;
      // 🔹 Server Action pour UPDATE
  async function updateEvent(formData) {
    "use server";

    const supabase = await createSupabaseServer();
    const title = formData.get("title")?.toString().trim();
    const date = formData.get("date")?.toString().trim() || null;
   
    if (!title) throw new Error("Le titre est obligatoire"); 
    // 🔹 Update dans Supabase
    const { data, error } = await supabase
  .from("evenements")
  .update({
    title,
    date,
  
  })
  .eq("id", id)
  .select();

if (error) {
  console.error("UPDATE ERROR:", error);
  throw new Error(error.message);
}

console.log("UPDATED:", data);


  
    redirect("/admin/evenements");
  }
   // 🔹 Server Action pour DELETE avec confirmation
  async function deleteEvent(formData) {
    "use server";

   

    const supabase = await createSupabaseServer();
    await supabase.from("evenements").delete().eq("id", id);
    redirect("/admin/evenements");
  }

   return (
    <section className="py-16 px-6 "> 
    <div className="max-w-3xl mx-auto space-y-6 ">
       <Link href="/admin/evenements" className="btn btn-ghost mb-8">
          ← Retour
        </Link>
      {/* Formulaire Update */}
      <form action={updateEvent} className="card bg-base-100 shadow p-6 space-y-4">
         <h1 className="text-2xl font-bold">Modifier l’événement </h1>
        <input
          name="title"
          defaultValue={event.title}
          required
          className="input input-bordered w-full"
          placeholder="titre"
        />
        
        {/* Date */}
        <input
          type="date"
          name="date"
          placeholder="Date"
          className="input input-bordered w-full"
          defaultValue={
            event.date
              ? new Date(event.date).toISOString().split("T")[0]
              : ""
          }
        />
      
        <button type="submit" className="btn btn-primary w-full">
          Enregistrer
        </button>
      </form>

      {/* Formulaire Delete avec confirmation */}
              <DeleteModal action={deleteEvent} />
      
    
    </div>
    </section>
  );
}
