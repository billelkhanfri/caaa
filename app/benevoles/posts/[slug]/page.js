import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogPostPage({ params }) {
  const { slug } = params; // pas de await

  if (!slug) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("Erreur lors du chargement de l’article");
  }

  const post = await res.json();
  if (!post) return <div>Article introuvable</div>;

  // Extraire le texte de content
  const contentText =
    post.content
      ?.map(
        (block) => block.children?.map((child) => child.text).join("") || ""
      )
      .join("\n\n") || "";

  return (
    <section className="py-20 px-6 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="btn btn-ghost mb-8">
          ← Retour
        </Link>

        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-8">
          <Image
            src={post.main_image?.url || "/logo.png"}
            alt={post.main_image?.alt || post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="text-sm text-gray-400 mb-8">
          {post.author} •{" "}
          {new Date(post.published_at).toLocaleDateString("fr-FR")}
        </div>

        <div className="prose prose-lg max-w-none">
          {contentText.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
