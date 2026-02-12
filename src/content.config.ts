import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };
