"use client";

export default function PostForm({ initialData = {}, action }) {
  return (
    <form action={action} className="card bg-base-100 shadow p-6 space-y-4">
      <h2 className="text-xl font-bold">Article</h2>

      {/* TITRE */}
      <div className="space-y-1">
        <label htmlFor="title" className="font-medium">
          Titre <span className="text-error">*</span>
        </label>
        <input
          id="title"
          name="title"
          placeholder="Ex : Inauguration du centre culturel"
          className="input input-bordered w-full"
          required
        />
      </div>
      {/* EXTRAIT */}
      <div className="space-y-1">
        <label htmlFor="excerpt" className="font-medium">
          Extrait
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          placeholder="Résumé court de l’article (optionnel)"
          className="textarea textarea-bordered w-full"
          rows={3}
        />
      </div>
      {/* NOUVEAU MÉDIA */}
      <div className="space-y-1">
        <label htmlFor="media" className="font-medium">
          Image ou vidéo
        </label>
        <input
          id="media"
          type="file"
          name="media"
          accept="image/*,video/*"
          className="file-input file-input-bordered w-full"
        />
      </div>

      {/* CONTENU */}
      <div className="space-y-1">
        <label htmlFor="content" className="font-medium">
          Contenu <span className="text-error">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Rédige ici le contenu complet de l’article…"
          className="textarea textarea-bordered w-full"
          rows={8}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Enregistrer
      </button>
    </form>
  );
}
