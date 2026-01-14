import { createSupabaseServer } from "../lib/supabase/server";
import ActualitesCarousel from "../components/ActualiteCarousel"; // import client component
import ActualitesClient  from "../components/ActualitesClient";
import Link from "next/link";
export default async function ActualitesData() {
  const supabase = await createSupabaseServer();

  const { data: actualites, error } = await supabase
    .from("actualites")
    .select("*");

 
  if (error) {
    return <div>Erreur chargement actualités</div>;
  }

  const data =actualites 
  const latestImages = data.filter((a) => a.image?.url).slice(0, 4);

  return (
    <section className="bg-base-100 p-6">
      {/* Carousel Client */}
      <ActualitesCarousel slides={latestImages} />
      {/* Header */}
      <div className="mb-16 max-w-7xl mx-auto mt-4">
        <h1 className="text-4xl font-bold text-center mb-8 px-6 py-4 rounded-xl bg-primary/10 text-primary shadow-sm">
          Nos Actualités
        </h1>
        <p className="text-gray-500 text-lg">
          Découvrez toutes les actions, projets et moments forts de
          l’association CAAA.
        </p>
      </div>
   <ActualitesClient data={data} />
    
    </section>
  );
}
