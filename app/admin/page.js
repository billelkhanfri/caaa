"use client";

import { supabaseClient } from "../lib/supabase/client";
import { useEffect, useState } from "react";
import ResetPassword from "../components/ResetPassword";

export default function BenevolesHomePage() {
  const supabase = supabaseClient();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [userName, setUserName] = useState(""); // pour affichage "Bienvenue"
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fetchUserProfile = async () => {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData?.session) {
      // redirection si pas connecté
      window.location.href = "/admin/login";
      return;
    }

    const userId = sessionData.session.user.id;

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("first_name, last_name")
      .eq("id", userId)
      .maybeSingle();

    if (error) console.error("Erreur fetch profil :", error);

    setFirstName(profile?.first_name || "");
    setLastName(profile?.last_name || "");
    setUserName(profile?.first_name || "Utilisateur");

    setLoading(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    setUpdating(true);

    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData?.session?.user?.id;

    if (!userId) return;

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: userId, // clé primaire liée à Supabase Auth
        first_name: firstName,
        last_name: lastName,
      })
      .eq("id", userId);

    if (error) {
      console.error("Erreur mise à jour profil :", error);
      alert("Impossible de mettre à jour le profil.");
    } else {
      setUserName(firstName); // met à jour le prénom affiché
      alert("Profil mis à jour !");
    }

    setUpdating(false);
  };

  if (loading) return <p className="p-8">Chargement...</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">
        Bienvenue <span className="text-primary">{userName} 👋</span>
      </h1>

      <p className="mb-8 text-gray-600">
        Vous êtes connecté à l’espace admin. Gérez vos informations et la
        sécurité de votre compte.
      </p>
<div className="flex flex-col md:flex-row gap-6">
  {/* 🧍 Carte Profil */}
  <div className="card w-full md:w-1/2 bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
    <div className="card-body">
      <h2 className="card-title">Profil</h2>
      <p className="text-gray-500 text-sm mb-4">Informations personnelles</p>

      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Prénom</span>
          </label>
          <input
            type="text"
            placeholder="Votre prénom"
            className="input input-bordered w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Nom</span>
          </label>
          <input
            type="text"
            placeholder="Votre nom"
            className="input input-bordered w-full"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-full mt-2"
          onClick={handleUpdateProfile}
          disabled={updating}
        >
          {updating ? "Mise à jour..." : "Mettre à jour"}
        </button>
      </div>
    </div>
  </div>

  {/* 🔐 Carte Sécurité */}
  <div className="card w-full md:w-1/2 bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
    <div className="card-body">
      <h2 className="card-title">Sécurité</h2>
      <p className="text-gray-500 text-sm mb-4">
        Modifier ou réinitialiser votre mot de passe
      </p>

   
      
       
        <div className="">
          <ResetPassword />
        </div>
  
    </div>
  </div>
</div>

    
    </>
  );
}
