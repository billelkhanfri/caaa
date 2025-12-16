// app/blog/page.js
import BlogList from "@/app/components/blogList";
import SidebarActualite from "@/app/components/SidebarActualite";

export default async function BlogPage() {
  const postsRes = await fetch("/api/posts", {
    cache: "no-store",
  });

  if (!postsRes.ok) {
    throw new Error("Erreur lors du chargement des articles");
  }

  const posts = await postsRes.json();

  const actualitesRes = await fetch("/api/actualites", {
    cache: "no-store",
  });

  if (!actualitesRes.ok) {
    throw new Error("Erreur lors du chargement des actualités");
  }

  const actualites = await actualitesRes.json();

  return (
    <section className="bg-base-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <SidebarActualite actualites={actualites} />
          </aside>

          <main className="lg:col-span-3">
            <BlogList posts={posts} />
          </main>
        </div>
      </div>
    </section>
  );
}
