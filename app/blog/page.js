// app/blog/page.js
import BlogList from "@/app/components/blogList";
import SidebarActualite from "@/app/components/SidebarActualite";

export default async function BlogPage() {
  // Fetch des posts
  const postsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`,
    {
      cache: "no-store",
    }
  );

  if (!postsRes.ok) {
    throw new Error("Erreur lors du chargement des articles");
  }

  const posts = await postsRes.json();

  // Fetch des actualités
  const actualitesRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/actualites`,
    { cache: "no-store" }
  );

  if (!actualitesRes.ok) {
    throw new Error("Erreur lors du chargement des actualités");
  }

  const actualites = await actualitesRes.json();

  return (
    <section className="bg-base-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <SidebarActualite actualites={actualites} />
          </aside>

          {/* BLOG */}
          <main className="lg:col-span-3">
            <BlogList posts={posts} />
          </main>
        </div>
      </div>
    </section>
  );
}
