import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({ src: z.string(), alt: z.string() }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({ src: z.string(), alt: z.string() }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// We added this part for your products:
const productsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    price: z.number(),
    snippet: z.string(),
    image: z.object({ src: z.string(), alt: z.string() }),
    paymentLink: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'products': productsCollection, // This registers it
};
