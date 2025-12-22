// app/blog/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
export default async function PostPage({ params }) {
  // ✅ params = Promise (Next 15 / App Router)
  const { slug } = await params;

  if (!slug) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("Erreur lors du chargement de posts");
  }

  const post = await res.json();

 
  if (!post) return <div>Article introuvable</div>;
  const isVideo = (url = "") => /\.(mp4|webm|ogg)$/i.test(url);
const formattedDate = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "long",
  timeZone: "Europe/Paris",
}).format(new Date(post.published_at));

  return (
    <section className="py-20 px-6 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="btn btn-ghost mb-8">
          ← Retour
        </Link>

        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-8">
          {/* Media */}
          <figure className="relative h-90 bg-gray-200 rounded-t-xl overflow-hidden">
            {post?.main_image?.url ? (
              isVideo(post?.main_image?.url) ? (
                <video
                  src={post?.main_image?.url}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={post?.main_image?.url}
                  alt={post.title}
                  fill
                  // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              )
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                Aucun média
              </div>
            )}
          </figure>
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="text-sm text-gray-400 mb-8">
          {post.author} • {formattedDate}
        </div>

        <div className="prose prose-lg max-w-none">{post.content}</div>
      </div>
    </section>
  );
}
