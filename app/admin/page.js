import { createSupabaseServer } from "../lib/supabase/server";

export default async function BenevolesHomePage() {
 const supabase = createSupabaseServer();
 
const {
  data: { user },
} = await supabase.auth.getUser();


  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Bienvenue 👋</h1>

      <p className="mb-6">
        Vous êtes connecté à l’espace admin. Utilisez le menu à gauche pour
        gérer les contenus.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg">Profil</h2>
          <p>Gérer vos informations</p>
        </div>
      </div>
    </>
  );
}
