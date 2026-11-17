import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      introduction: z.string(),
      image: image(),
      imageAlt: z.string(),
      demo: z.url(),
      source: z.url(),
      technologies: z.array(z.string()),
      order: z.number(),
    }),
});

export const collections = { projects };
