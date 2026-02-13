import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

export const collections = {
  techs: defineCollection({
    loader: glob({ pattern: '*/techs/*.md', base: './src/contents' }),
    schema: z.object({
      title: z.string(),
      order: z.number().positive(),
      iconUrl: z.string().url(),
    }),
  }),
  experiences: defineCollection({
    loader: glob({ pattern: '*/experiences/**/*.md', base: './src/contents' }),
    schema: z.object({
      title: z.array(z.string()),
      order: z.number().positive().default(1),
      when: z.string().optional(),
      subprojects: z.array(z.string()).optional(),
      pageUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      stack: z.array(z.string()).optional(),
      fixedPart: z.array(z.string()),
    }),
  }),
}
