import { z } from "zod";

export const actualiteSchema = z.object({
  title: z.string().min(1, "Le titre est obligatoire"),
  category: z.string().min(1, "La catégorie est obligatoire"),
  content: z.string().min(1, "Le contenu est obligatoire"),
});
