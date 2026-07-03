"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostForm({
  post,
  createAction,
  updateAction,
  deleteAction,
}) {
  const router = useRouter();
  const isEdit = Boolean(post?.id);
  const [uploading, setUploading] = useState(false);
const [uploadError, setUploadError] = useState(null);
const CLOUD_NAME = "qpawdcqy";
const UPLOAD_PRESET = "Billel";

async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Échec upload Cloudinary: ${errText}`);
  }

  const data = await res.json();
  // data.resource_type vaut "image" ou "video"
  return { url: data.secure_url, type: data.resource_type };
}


  async function handleDelete() {
    if (!confirm("Voulez-vous vraiment supprimer ce post ?")) return;
    await deleteAction(post.id);
    router.push("/admin/posts");
  }
async function handleSubmit(event) {
  event.preventDefault();
  setUploadError(null);

  const formData = new FormData(event.currentTarget);
  const file = formData.get("file");
  const mediaUrlInput = formData.get("media_url")?.toString().trim();

  const cleanData = new FormData();
  cleanData.append("title", formData.get("title"));
  cleanData.append("excerpt", formData.get("excerpt"));
  cleanData.append("content", formData.get("content"));

  try {
    // Cas 1 : un fichier a été choisi → upload direct vers Cloudinary
    if (file && file.size > 0) {
      setUploading(true);
      const { url, type } = await uploadToCloudinary(file);
      cleanData.append("media_url", url);
      cleanData.append("media_type", type);
    }
    // Cas 2 : une URL a été saisie manuellement
    else if (mediaUrlInput) {
      cleanData.append("media_url", mediaUrlInput);
      cleanData.append("media_type", "video");
    }
  } catch (err) {
    setUploading(false);
    setUploadError(err.message);
    return; // on arrête ici, pas de submit vers la server action
  }

  setUploading(false);

  if (isEdit) {
    await updateAction(post.id, cleanData);
  } else {
    await createAction(cleanData);
  }

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

        {uploadError && (
  <p className="text-sm text-error">{uploadError}</p>
)}

{/* SUBMIT */}
<button
  type="submit"
  disabled={uploading}
  className="btn btn-primary w-full"
>
  {uploading
    ? "Upload en cours..."
    : isEdit
    ? "Enregistrer"
    : "Créer"}
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