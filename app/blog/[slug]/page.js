import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) return <div>Article introuvable</div>;

  return (
    <section className="py-20 px-6 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="btn btn-ghost mb-8">
          ← Retour
        </Link>

        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-8">
          <Image
            src={
              post.mainImage
                ? urlFor(post.mainImage).format("webp").url()
                : "/logo.png"
            }
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="text-sm text-gray-400 mb-8">
          {post.author} •{" "}
          {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
        </div>

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.content} />
        </div>
      </div>
    </section>
  );
}
