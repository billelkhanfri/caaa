import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { actualiteQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";


export default async function ActualitePage({ params }) {
  const { slug } = await params; //

  // Fetch de l'actualité
  const actualite = await client.fetch(actualiteQuery, { slug });

  // Si l’actualité n’existe pas → 404
  if (!actualite) {
    notFound();
  }
  // Formater la date
  const formattedDate = actualite.date
    ? new Date(actualite.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <section className="bg-base-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          {" / "}
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          {" / "}
          <span>{actualite.title}</span>
        </div>

        {/* Header Image */}
        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-8">
          <Image
            src={
              actualite.imageUrl
                ? urlFor(actualite.imageUrl).format("webp").url()
                : "/logo.png"
            }
            alt={actualite.title || "actualité"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        {/* Catégorie */}
        <span className="badge badge-primary badge-outline mb-4">
          {actualite.category || "Non catégorisé"}
        </span>

        {/* Titre et date */}
        <h1 className="text-4xl font-bold mb-4">{actualite.title}</h1>
        <p className="text-gray-500 mb-10">{formattedDate}</p>

        {/* Contenu */}
        <article className="prose max-w-none">
          <p>{actualite.content || "Contenu indisponible"}</p>
        </article>
      </div>
    </section>
  );
}
