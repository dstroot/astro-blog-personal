import { defineCollection, reference, z } from 'astro:content'
// import { CATEGORIES } from "@/data/categories";

// const blog = defineCollection({
// 	// Type-check frontmatter using a schema
// 	schema: ({ image }) =>
// 		z.object({
// 			title: z.string().max(80),
// 			description: z.string(),
// 			// Transform date string to Date object
// 			pubDate: z
// 				.string()
// 				.or(z.date())
// 				.transform((val) => new Date(val)),
// 			heroImage: image(),
// 			category: z.enum(CATEGORIES),
// 			tags: z.array(z.string()),
// 			draft: z.boolean().default(false)
// 		})
// })

const posts = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z
        .string()
        .max(99, { message: 'Title must be 99 characters or less.' }),
      excerpt: z
        .string()
        .max(599, { message: 'Excerpt must be 599 characters or less.' }),
      coverImage: z.string().max(99),
      date: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)), // z.coerce.date(), // z.isodate(),
      published: z.boolean().default(false),
      author: z.object({
        name: z.string().max(99),
        picture: z.string().max(99),
      }),
      ogImage: z.object({
        url: z.string().max(99),
      }),
      seoURL: z.string().optional().nullish(),
      relatedPosts: z.array(reference('posts')).optional(),
    }),
})

const snippets = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string().max(99),
      summary: z.string().max(399),
      icon: z.string().max(50),
      date: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)), // z.coerce.date(), // z.isodate(),
      published: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
})

const quotes = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      quote: z.string().max(999),
      author: z.string().max(99),
      publication: z.string().max(99).optional().nullable(),
      category: z.enum(["main"]),
      comments: z.string().max(999).optional()
    })
})

export const collections = { posts, snippets, quotes }

