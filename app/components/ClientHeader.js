"use client"; // ✅ Client Component pour useState / useEffect

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

export default function ClientHeader() {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data?.session;
      if (session?.user?.email) setUserEmail(session.user.email);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/benevoles/login");
  };

  return (
    <header className="flex justify-between items-center bg-primary text-primary-content p-4">
      <h1 className="text-xl font-bold">Espace Bénévoles</h1>
      <div className="flex items-center space-x-4">
        {userEmail && <span>{userEmail}</span>}
        <button className="btn btn-error" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </header>
  );
}
