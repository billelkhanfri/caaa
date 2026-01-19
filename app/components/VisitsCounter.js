"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Users } from "lucide-react"; // icône visiteurs


export default function VisitsCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1️⃣ Crée un visitor_id unique
    let visitor_id = localStorage.getItem("visitor_id");
    if (!visitor_id) {
      visitor_id = uuidv4();
      localStorage.setItem("visitor_id", visitor_id);
    }

    // 2️⃣ Vérifie si déjà compté aujourd'hui
    const todayKey = `visited-${new Date().toISOString().slice(0, 10)}`;
    if (!localStorage.getItem(todayKey)) {
      fetch("/api/visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitor_id }),
      })
      .then(() => localStorage.setItem(todayKey, "1")) // ✅ marque comme compté
      .catch(err => console.error("Visit POST error:", err));
    }

    // 3️⃣ Récupère le compteur total
    fetch("/api/visits")
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error("Visit GET error:", err));
  }, []);


  return (
    <div className="flex justify-center items-center gap-6 shadow-lg p-2  hover:shadow-xl transition-shadow duration-300 bg-white">
      <Users className="text-primary w-4 h-4" />
      <div className="flex flex-col text-center">
        <span className="text-gray-400 text-sm ">Visiteurs</span>
       </div>
       <div>
        <span className="text-md font-bold text-primary ">{count}</span>
      </div>
    </div>
  );
}
