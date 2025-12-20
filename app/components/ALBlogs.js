"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogList({ posts = [] }) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;

  const displayedPosts = showAll ? posts : posts.slice(0, INITIAL_COUNT);

  const isVideo = (url = "") => /\.(mp4|webm|ogg)$/i.test(url);

  return (
    <section className="bg-base-100">
      {/* Header */}
      <div className="mb-16 max-w-4xl">
        <span className="badge badge-warning mb-4">Blog</span>

        <h1 className="text-4xl font-bold text-center mb-8 px-6 py-4 rounded-xl bg-primary/10 text-primary shadow-sm">
          Nos articles
        </h1>

        <p className="text-gray-500 text-lg">
          Découvrez nos actions, nos projets et les moments forts de la vie
          associative.
        </p>
      </div>

      {/* Articles */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => {
          const mediaUrl = post?.main_image?.url;
          const title = post?.title ?? "Sans titre";
          const excerpt = post?.excerpt ?? "";
          const slug = post?.slug ?? "";

          return (
            <div key={slug} className="card bg-base-100 shadow-xl">
              {/* Media */}
              <figure className="relative h-56 bg-gray-200 rounded-t-xl overflow-hidden">
                {mediaUrl ? (
                  isVideo(mediaUrl) ? (
                    <video
                      src={mediaUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={mediaUrl}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    Aucun média
                  </div>
                )}
              </figure>

              {/* Content */}
              <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className="text-gray-500">
                  {excerpt.length > 100
                    ? `${excerpt.slice(0, 100).trim()}…`
                    : excerpt || "Aucun résumé disponible"}
                </p>

                <div className="card-actions justify-end">
                  {slug && (
                    <Link
                      href={`/blog/${slug}`}
                      className="btn btn-primary btn-sm"
                    >
                      Lire plus
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load more */}
      {!showAll && posts.length > INITIAL_COUNT && (
        <div className="text-center mt-16">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-primary"
          >
            Voir tous les articles
          </button>
        </div>
      )}
    </section>
  );
}
