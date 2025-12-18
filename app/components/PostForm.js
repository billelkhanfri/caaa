"use client";

export default function PostForm({ initialData = {}, action }) {
  return (
    <form action={action} className="card bg-base-100 shadow p-6 space-y-4">
      <h2 className="text-xl font-bold">Article</h2>

      <input
        name="title"
        className="input input-bordered w-full"
        placeholder="Titre"
        defaultValue={initialData.title || ""}
        required
      />

      <input
        name="imageUrl"
        className="input input-bordered w-full"
        placeholder="URL de l'image"
        defaultValue={initialData.main_image?.url || ""}
      />

      <textarea
        name="excerpt"
        className="textarea textarea-bordered w-full"
        placeholder="Résumé"
        defaultValue={initialData.excerpt || ""}
      />

      <textarea
        name="content"
        className="textarea textarea-bordered w-full min-h-[150px]"
        placeholder="Contenu"
        defaultValue={initialData.content || ""}
      />

      <button type="submit" className="btn btn-primary w-full">
        Enregistrer
      </button>
    </form>
  );
}
