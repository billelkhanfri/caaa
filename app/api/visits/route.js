import { createSupabaseServer } from "../../lib/supabase/server";

export async function POST(req) {
  try {
    const supabase = await createSupabaseServer();
    const { visitor_id } = await req.json();

    if (!visitor_id)
      return new Response(JSON.stringify({ error: "visitor_id required" }), { status: 400 });

    const today = new Date().toISOString().slice(0, 10);

    // Upsert pour éviter les doublons par jour
    const { error } = await supabase
      .from("visits")
      .upsert([{ visitor_id, visited_on: today }], { onConflict: ["visitor_id", "visited_on"] });

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

    return new Response(JSON.stringify({ message: "ok" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function GET() {
  const supabase = await createSupabaseServer();

  const { count, error } = await supabase
    .from("visits")
    .select("*", { count: "exact", head: true });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify({ count }), { status: 200 });
}
