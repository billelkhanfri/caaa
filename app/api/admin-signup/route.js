import { createSupabaseServer } from "../../lib/supabase/server";

export async function POST(req) {
  try {
    const { email, password, firstName } = await req.json();

    // ✅ Utilise la clé service_role côté serveur
    const supabase = createSupabaseServer({ useServiceRole: true });

    // Créer l’utilisateur Auth
    const { data: userData, error: authError } =
      await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });

    if (authError) {
      return new Response(JSON.stringify({ error: authError.message }), {
        status: 400,
      });
    }

    // Créer le profil avec un rôle (admin ou super-admin)
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([
        { id: userData.user.id, first_name: firstName, role: "admin" }, // ou 'super-admin' pour ton premier
      ]);

    if (profileError) {
      return new Response(JSON.stringify({ error: profileError.message }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ message: "Utilisateur créé !" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
