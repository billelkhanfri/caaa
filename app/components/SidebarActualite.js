// components/SidebarActualite.tsx

import Link from "next/link";

export default function SidebarActualite({ actualites }) {
  
  return (
    <div className="card bg-base-200 shadow-md sticky top-24">
      <div className="card-body p-5">
        <h3 className="text-xl font-bold">Actualités</h3>
        <div className="divider my-2" />

        <ul className="space-y-4">
          {actualites.slice(0, 5).map((actu) => (
            <li key={actu.slug}>
              <Link
                href={`/actualite/${actu.slug}`}
                className="block hover:bg-base-100 rounded-lg p-3 transition"
              >
                <span className="badge badge-outline badge-primary mb-2">
                  {actu.category}
                </span>

                <p className="font-medium leading-snug line-clamp-2">
                  {actu.title}
                </p>

                <p className="text-sm text-gray-500 mt-1">{actu.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
