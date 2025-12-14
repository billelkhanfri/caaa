import { defineType, defineField } from "sanity";

export default defineType({
  name: "media",
  title: "Média (image / vidéo)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre média",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image / fichier",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "altText",
      title: "Texte alternatif",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "Légende",
      type: "string",
    }),
    defineField({
      name: "credit",
      title: "Crédits / auteur",
      type: "string",
    }),
  ],
});
