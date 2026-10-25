import { defineCollection, z } from "astro:content";

const obrasCollection = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),

    year: z.number(),

    image: z.string().startsWith("/uploads/obras/"),

    // Tipo de obra
    type: z
      .enum([
        "video",
        "fotografia",
        "serie",
        "instalacion",
        "pieza",
      ])
      .optional(),

    // Imágenes adicionales de la obra
    gallery: z
      .array(
        z.object({
          image: z.string().startsWith("/uploads/obras/"),
          alt: z.string(),
        })
      )
      .optional(),

    tags: z.array(z.string()).optional(),

    draft: z.boolean().default(false),

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),
  }),
});

const publicacionesCollection = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),

    slug: z.string().optional(),

    date: z.date(),

    autor: z.string(),

    series: z.string().optional(),

    categoria: z.string().optional(),

    formato: z.string().optional(),

    videoUrl: z.string().url().optional(),

    image: z
      .string()
      .startsWith("/uploads/publicaciones/")
      .optional(),

    summary: z.string().optional(),

    tags: z.array(z.string()).optional(),

    draft: z.boolean().default(false),
  }),
});

const proyectosCollection = defineCollection({
  type: "content",

  schema: z.object({
    name: z.string(),

    logo: z
      .string()
      .startsWith("/uploads/proyectos/")
      .optional(),

    summary: z.string(),

    categoria: z.enum(["fotografia", "arte-objeto"]).optional(),

    coordinator: z.string().optional(),

    contact: z.string().optional(),

    schedule: z.string().optional(),

    year: z.number().optional(),

    order: z.number().optional(),

    draft: z.boolean().default(false),

    gallery: z
      .array(
        z.object({
          image: z.string().startsWith("/uploads/proyectos/"),
          alt: z.string(),
        })
      )
      .optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),

    slug: z.string().optional(),

    pubDate: z.date(),

    description: z.string(),

    author: z.string().default("Isaac Ramos"),

    image: z
      .object({
        url: z.string().startsWith("/uploads/blog/"),
        alt: z.string(),
      })
      .optional(),

    tags: z.array(z.string()).default(["general"]),

    draft: z.boolean().default(false),
  }),
});

export const collections = {
  obras: obrasCollection,
  publicaciones: publicacionesCollection,
  proyectos: proyectosCollection,
  blog: blogCollection,
};