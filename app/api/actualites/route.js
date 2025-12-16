import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  let query = supabase
    .from("actualites")
    .select("*")
    .order("date", { descending: true });

  if (category) query = query.eq("category", category);

  const { data, error } = await query;

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
