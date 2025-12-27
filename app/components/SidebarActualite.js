"use client";

import { useEffect, useState } from "react";
import { supabaseClient } from "../lib/supabase/client";
import SidebarEventsClient from "./SidebarEventsClient";

export default function SidebarActualite() {


const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

      const { data, error } = await supabaseClient()
        .from("evenements")
        .select("id, title, date")
        .gte("date", today)              // ❌ exclut les dates passées
        .order("date", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setEvents(data || []);
      }

      setLoading(false);
    }

    fetchEvents();
  }, []);

  return <SidebarEventsClient events={events} />;
}
