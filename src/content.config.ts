import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		language: z.string(),
		title: z.string(),
		description: z.string().optional(),
		author: z.string().optional(),
		// reference: z.string().optional(),
		// Transform string to Date object
		publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date(),
		previewImage: z.string().optional(),
		// secret: z.boolean().default(false),
		tags: z.array(z.string()).default(['other']),
		// canonicalURL: z.string().optional(),
	}),
});

export const collections = {
	'blog' : blogCollection,
};