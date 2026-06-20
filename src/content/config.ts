import { defineCollection, z } from 'astro:content';

const obrasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(), 
    image: z.string().startsWith('/uploads/obras/'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const publicacionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Auto-generated if not provided
    date: z.date(),
    autor: z.string(),
    series: z.string().optional(),
    categoria: z.string().optional(),
    formato: z.string().optional(),
    videoUrl: z.string().url().optional(),
    image: z.string().startsWith('/uploads/publicaciones/').optional(), // Thumbnail
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().startsWith('/uploads/proyectos/').optional(),
    summary: z.string(),
    coordinator: z.string().optional(),
    contact: z.string().optional(), // Email or text
    schedule: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(), // Short description for previews
    author: z.string().default("Church Staff"),
    image: z.object({
      url: z.string().startsWith('/uploads/blog/'),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});

const siteInfoCollection = defineCollection({
  type: 'content', // Could be 'data' if only frontmatter is needed
  schema: z.object({
    title: z.string(), // For identifying the content block
  }),
});

export const collections = {
  obras: obrasCollection,
  publicaciones: publicacionesCollection,
  proyectos: proyectosCollection,
  blog: blogCollection,
  siteInfo: siteInfoCollection,
};