import { createClient } from "@supabase/supabase-js";

let supabase = null;

export function getSupabase() {
  if (supabase) return supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.warn("Supabase env variables missing");
    return null;
  }

  supabase = createClient(url, anonKey);
  return supabase;
}
