// sanity/lib/queries.js

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author,
    mainImage
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    publishedAt,
    author,
    mainImage,
    content
  }
`;
export const allActualitesQuery = `
  *[_type == "actualite"] | order(date desc) {
    title,
    category,
    date,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;
export const actualiteQuery = `*[_type == "actualite" && slug.current == $slug][0]{
  title,
  category,
  date,
  content,
  "imageUrl": image.asset->url
}`;
