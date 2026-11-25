import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog: cada archivo .md en src/content/blog es un artículo.
 * El nombre del archivo es la URL: mi-articulo.md → /blog/mi-articulo
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tag: z.string(),
    minutes: z.number(),
    cover: z.enum(['a', 'b', 'c']).default('a'), // a = oliva, b = arena, c = oscuro
    coverText: z.string(),
    order: z.number().default(99), // menor = aparece primero
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
