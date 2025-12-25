"use client";

import { supabaseClient } from "../lib/supabase/client";

export default function UploadVideo() {
  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const supabase = supabaseClient();

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("video")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Erreur upload:", error);
    } else {
      console.log("Vidéo uploadée !");
    }
  }

  return <input type="file" accept="video/*" onChange={handleUpload} />;
}
