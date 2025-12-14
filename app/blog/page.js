// BlogPage.jsx (Server Component)
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import BlogList from "../components/blogList"; // Client Component
import SidebarActualite from "../components/SidebarActualite";

import { allActualitesQuery} from "@/sanity/lib/queries";


export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);
  const actualites = await client.fetch(allActualitesQuery);

return (
  <section className="bg-base-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* SIDEBAR GAUCHE */}
        <aside className="lg:col-span-1">
          <SidebarActualite actualites={actualites} />
        </aside>

        {/* BLOG (INCHANGÉ) */}
        <main className="lg:col-span-3">
          <BlogList posts={posts} />
        </main>
      </div>
    </div>
  </section>
);
   
}
