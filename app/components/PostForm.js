"use client";

import { useRouter } from "next/navigation";

export default function PostForm({
  post,
  createAction,
  updateAction,
  deleteAction,
}) {
  const router = useRouter();
  const isEdit = Boolean(post?.id);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const file = formData.get("file");
    const mediaUrl = formData.get("media_url")?.toString().trim();

    // Nettoyage logique simple
    const cleanData = new FormData();

    cleanData.append("title", formData.get("title"));
    cleanData.append("excerpt", formData.get("excerpt"));
    cleanData.append("content", formData.get("content"));

    // On passe file + url, backend décide
    if (file) cleanData.append("file", file);
    if (mediaUrl) cleanData.append("media_url", mediaUrl);

    if (isEdit) {
      await updateAction(post.id, cleanData);
    } else {
      await createAction(cleanData);
    }

    router.push("/admin/posts");
  }

  async function handleDelete() {
    if (!confirm("Voulez-vous vraiment supprimer ce post ?")) return;
    await deleteAction(post.id);
    router.push("/admin/posts");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow p-6 space-y-5"
      >
        <h1 className="text-2xl font-bold">
          {isEdit ? "Modifier l’article" : "Créer un article"}
        </h1>

        {/* TITLE */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Titre</label>
          <input
            name="title"
            defaultValue={post?.title || ""}
            required
            className="input input-bordered w-full"
            placeholder="Ex: Atelier théâtre FLE"
          />
        </div>

        {/* EXCERPT */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Résumé</label>
          <textarea
            name="excerpt"
            defaultValue={post?.excerpt || ""}
            className="textarea textarea-bordered w-full"
            rows={3}
            placeholder="Résumé court"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Contenu</label>
          <textarea
            name="content"
            defaultValue={post?.content || ""}
            className="textarea textarea-bordered w-full"
            rows={8}
            placeholder="Contenu détaillé"
          />
        </div>

        {/* CURRENT MEDIA */}
        {post?.main_image?.url && (
          <div className="text-sm text-gray-500">
            Média actuel :
            <a
              href={post.main_image.url}
              target="_blank"
              rel="noreferrer"
              className="link ml-2"
            >
              Voir
            </a>
          </div>
        )}

        {/* FILE UPLOAD */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Upload fichier (image / vidéo légère)
          </label>
          <input
            type="file"
            name="file"
            accept="image/*,video/*"
            className="file-input file-input-bordered w-full"
          />
          <p className="text-xs text-gray-500">
            Utiliser pour petits fichiers uniquement
          </p>
        </div>

        {/* MEDIA URL */}
        <div className="space-y-1">
          <label className="text-sm font-medium">
            URL média (Supabase ou externe)
          </label>
          <input
            name="media_url"
            defaultValue={post?.main_image?.url || ""}
            className="input input-bordered w-full"
            placeholder="https://..."
          />
          <p className="text-xs text-gray-500">
            Utiliser seulement si vous avez déjà uploadé le fichier dans Supabase
          </p>
        </div>

        {/* SUBMIT */}
        <button type="submit" className="btn btn-primary w-full">
          {isEdit ? "Enregistrer" : "Créer"}
        </button>
      </form>

      {/* DELETE */}
      {isEdit && (
        <button
          onClick={handleDelete}
          className="btn btn-error w-full"
        >
          Supprimer définitivement
        </button>
      )}
    </div>
  );
}