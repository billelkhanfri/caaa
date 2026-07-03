import { createSupabaseServer } from "../../lib/supabase/server";
import Link from "next/link";
import Image from "next/image";

export default async function AdminPostsPage() {
  const supabase = await createSupabaseServer();

  const { data: posts, error } = await supabase
  .from("posts")
.select(`
  *,
  profiles:author_id (
    id,
    first_name,
    last_name
  )
`)

  .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className="p-6">
      {/* HEADER AVEC BOUTON */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Articles</h1>
        <Link
          href="/admin/posts/new"
          className="btn btn-primary btn-outline btn-md flex items-center gap-2"
        >
          + Nouvel article
        </Link>
      </div>

      {/* TABLEAU */}
      <div className="overflow-x-auto rounded-xl shadow-lg bg-base-100">
        <table className="table table-zebra w-full">
          <thead className="bg-accent text-neutral-content">
            <tr>
              <th>Titre</th>
              <th>Résumé</th>
              <th>Image</th>
              <th>Auteur</th>
              <th>Statut</th>
              <th>Publié</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {posts?.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-primary/5 transition-colors"
              >
                {/* TITRE */}
                <td className="font-semibold">{post.title}</td>

                {/* EXCERPT */}
                <td className="max-w-xs truncate text-sm opacity-80">
                  {post.excerpt}
                </td>

                {/* IMAGE */}
                <td>
               {post?.main_image?.url ? (
  post.main_image.type === "video" ? (
    <video
      src={post.main_image.url}
      controls
      className="w-full h-full object-cover"
    />
  ) : (
    <Image
      src={post.main_image.url}
      alt={post.title}
      fill
      className="object-cover"
    />
  )
) : (
  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
    Aucun média
  </div>
)}
                </td>

                {/* AUTEUR */}
                <td>
                  <span className="badge badge-outline badge-info">
                    {post.profiles.first_name[0]}.{post.profiles.last_name}
                  </span>
                </td>

                {/* STATUT */}
                <td>
                  {post.published_at ? (
                    <span className="badge badge-primary">Publié</span>
                  ) : (
                    <span className="badge badge-warning">Brouillon</span>
                  )}
                </td>

                {/* DATE */}
                <td className="text-sm">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString("fr-FR")
                    : "—"}
                </td>

                {/* ACTION */}
                <td>
                  <Link
                    href={`/admin/posts/${post.slug}`}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Modifier
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
