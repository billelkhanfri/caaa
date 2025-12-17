"use client";

import { useEffect, useState } from "react";
import BenevolesDashboardLayout from "../../components/BenevolesDashboardLayout";
import { supabaseClient } from "../../lib/supabase/client";

export default function ActualitesClient() {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActualites = async () => {
      try {
        const { data, error } = await supabaseClient
          .from("actualites") // nom exact de ta table
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Erreur Supabase :", error);
        } else {
          setActualites(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActualites();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <BenevolesDashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Actualités</h1>
      {actualites.length === 0 && <p>Aucune actualité pour le moment.</p>}
      {actualites.map((a) => (
        <div key={a.id} className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold">{a.title}</h2>
          <p>{a.content}</p>
        </div>
      ))}
    </BenevolesDashboardLayout>
  );
}
