"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "../lib/supabase/client";

export default function BenevolesLogin() {
  const supabase = supabaseClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Email ou mot de passe incorrect");
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="h-[60vh] flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm md:max-w-md bg-white p-6 md:p-10 rounded-2xl shadow md:shadow-lg space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Admin CAAA</h1>

        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMessage && (
          <p className="text-red-500 text-sm text-center">
            {errorMessage}
          </p>
        )}

        <button className="btn btn-primary w-full">
          Se connecter
        </button>
      </form>
    </div>
  );
}
