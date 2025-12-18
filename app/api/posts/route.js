import { supabaseClient } from "../../lib/supabase/client";

export async function POST(req) {
  const supabase = supabaseClient();
  const body = await req.json();
  const { data, error } = await supabase.from("posts").insert([
    {
      ...body,
      author: "CAAA",
      slug: body.title.toLowerCase().replace(/\s+/g, "-"),
      published_at: new Date().toISOString(),
    },
  ]);

  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  return new Response(JSON.stringify({ data }), { status: 200 });
}
