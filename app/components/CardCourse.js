"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";

export default function CardCourse({ title, content, mainImage }) {
  return (
    <div className="card bg-base-100 shadow-sm w-full max-w-sm">
      {mainImage && (
        <figure className="relative w-full h-48 overflow-hidden">
          <Image
            src={urlFor(mainImage).url()}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
          />
        </figure>
      )}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <div className="text-gray-700">
          <PortableText value={content} />
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Savoir plus</button>
        </div>
      </div>
    </div>
  );
}
