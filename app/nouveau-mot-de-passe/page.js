"use client";

import { useState } from "react";
import { supabaseClient } from "../lib/supabase/client";
import { useSearchParams } from "next/navigation";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const supabase = supabaseClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!code) {
      setMessage("Code invalide.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
      emailChangeToken: code,
    });

    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage(
        "Mot de passe mis à jour ! Vous pouvez maintenant vous connecter."
      );
    }
  };

  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="card bg-white rounded-xl shadow p-6 w-full max-w-md">
        <h2 className="font-semibold text-lg mb-2">
          Nouveau mot de passe
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Choisissez un mot de passe sécurisé pour votre compte.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Changer le mot de passe
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
