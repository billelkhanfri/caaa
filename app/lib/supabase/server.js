import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

/**
 * Crée un client Supabase côté serveur.
 * @param {boolean} useServiceRole - true pour utiliser la clé service_role (admin)
 */
export function createSupabaseServer({ useServiceRole = false } = {}) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase env variables missing");
  }

  const key = useServiceRole ? supabaseServiceRoleKey : supabaseAnonKey;

  if (useServiceRole && !supabaseServiceRoleKey) {
    throw new Error("Supabase service role key is missing");
  }

  // cookies() fonctionne uniquement côté serveur
  const cookieStore = cookies();

  return createClient(supabaseUrl, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll().map((c) => ({
          name: c.name,
          value: c.value,
          options: {}, // Next.js cookies() ne fournit pas directement options
        }));
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options || {});
        });
      },
    },
  });
}
