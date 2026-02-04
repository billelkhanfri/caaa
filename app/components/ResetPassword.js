"use client";

import { useState } from "react";
import { supabaseClient } from "../lib/supabase/client";

export default function ForgotPassword() {
  const supabase = supabaseClient();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
redirectTo: process.env.NEXT_PUBLIC_RESET_PASSWORD_URL
    });

    if (error) {
      setStatus("error");
      setMessage("Erreur lors de l’envoi. Vérifie l’adresse email.");
    } else {
      setStatus("success");
      setMessage(
        "📩 Email envoyé ! Vérifie ta boîte mail et clique sur le lien pour définir un nouveau mot de passe."
      );
      setEmail("");
    }
  };

  return (
    <div className="card bg-white rounded-xl shadow p-6 w-full max-w-md">
     
    

      {/* FORMULAIRE */}
      {status !== "success" && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
             <p className="text-sm text-gray-500 mb-4">
        Un lien de réinitialisation sera envoyé par email.
      </p>
          <div>
          
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`btn btn-primary w-full ${
              status === "loading" ? "btn-disabled" : ""
            }`}
          >
            {status === "loading"
              ? "Envoi en cours..."
              : "Réinitialiser le mot de passe"}
          </button>
       
        </form>
      )}

      {/* MESSAGE */}
      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}   
    </div>
  );
}
