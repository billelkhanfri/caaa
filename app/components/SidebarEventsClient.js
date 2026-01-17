"use client";

import { useState } from "react";
import Link from "next/link";

export default function SidebarEventsClient({ events }) {
  const EVENTS_PER_PAGE = 10;

  // Page actuelle de la pagination
  const [page, setPage] = useState(0);

  // Date du jour (référence pour comparer)
const today = new Date();
today.setHours(0, 0, 0, 0);


  // Calcul des indices pour la pagination
  const startIndex = page * EVENTS_PER_PAGE;
  const paginatedEvents = events.slice(
    startIndex,
    startIndex + EVENTS_PER_PAGE
  );

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

  return (
    <aside className="bg-base-100 p-6 rounded-xl shadow-lg sticky flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">
          Événements
        </h3>

        {events.length === 0 && (
          <p className="text-sm text-gray-500">
            Aucun événement
          </p>
        )}

        <ul className="space-y-4">
          {paginatedEvents.map((event) => {
            const eventDate = new Date(event.date);

            // 👉 Détermine si l’événement est passé
            const isPast = eventDate < today;

            const day = eventDate.getDate();
            const month = eventDate.toLocaleString("fr-FR", {
              month: "short",
            });

            return (
              <li
                key={event.id}
                className={`
                  flex items-center gap-3 p-3 rounded-xl transition
                  ${isPast
                    ? "opacity-50 grayscale cursor-not-allowed"
                    : "hover:bg-primary/10"}
                `}
              >
                {/* Bloc date */}
                <div
                  className={`
                    flex flex-col items-center justify-center
                    w-12 h-12 font-bold rounded-lg p-6
                    ${isPast
                      ? "bg-gray-300 text-gray-600"
                      : "bg-warning text-black"}
                  `}
                >
                  <span className="text-lg">{day}</span>
                  <span className="text-xs">{month}</span>
                </div>

                {/* Titre + lien */}
                {isPast ? (
                  // 👉 Pas cliquable si événement passé
                  <span className="text-sm font-medium ">
                    {event.title}
                  </span>
                ) : (
                  <span
                    
                    className="text-sm font-medium  line-clamp-4"
                  >
                    {event.title}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="btn btn-sm btn-outline"
          >
            ❮
          </button>

          <span className="text-sm text-gray-500">
            Page {page + 1} / {totalPages}
          </span>

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages - 1))
            }
            disabled={page + 1 === totalPages}
            className="btn btn-sm btn-outline"
          >
            ❯
          </button>
        </div>
      )}
    </aside>
  );
}
