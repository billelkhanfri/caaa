"use client";

import { useState } from "react";
import Link from "next/link";

export default function SidebarEventsClient({ events }) {
  const EVENTS_PER_PAGE = 10;
  const [page, setPage] = useState(0);

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
          Événements à venir
        </h3>

        {events.length === 0 && (
          <p className="text-sm text-gray-500">Aucun événement à venir</p>
        )}

        <ul className="space-y-4">
          {paginatedEvents.map((event) => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const month = eventDate.toLocaleString("fr-FR", {
              month: "short",
            });

            return (
              <li
                key={event.id}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition"
              >
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-warning text-black font-bold rounded-lg">
                  <span className="text-lg">{day}</span>
                  <span className="text-xs">{month}</span>
                </div>

                <Link
                  href={`/evenement/${event.slug}`}
                  className="text-sm font-medium hover:underline line-clamp-2"
                >
                  {event.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

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
