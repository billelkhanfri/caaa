import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">
          Page introuvable
        </h2>

        <p className="text-base-content/70 mb-6">
          Désolé, la page que vous recherchez n’existe pas ou a été déplacée.
        </p>

        <Link href="/" className="btn btn-primary">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
