import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

export const collections = {
  experiences: defineCollection({
    loader: glob({ pattern: '*/experiences/**/*.md', base: './src/contents' }),
    schema: z.object({
      title: z.array(z.string()),
      order: z.number().positive().default(1),
      when: z.string().optional(),
      pageUrl: z.url().optional(),
      githubUrl: z.url().optional(),
      stack: z.array(z.string()).optional(),
      fixedPart: z.array(z.string()),
    }),
  }),
  openSourceContributions: defineCollection({
    loader: glob({
      pattern: '**/open-source-contributions/*.yaml',
      base: './src/contents',
    }),
    schema: z.object({
      owner: z.string(),
      name: z.string(),
      stack: z.array(z.string()),
      contributions: z.array(z.number().int().positive()),
    }),
  }),
}
