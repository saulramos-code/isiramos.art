import type { ImageMetadata } from "astro";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/uploads/**/*.{webp,png,jpg,jpeg}",
  { eager: true }
);

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => [
    path.replace("/src/assets", ""),
    module.default,
  ])
);

const fallbackImage = images["/uploads/social-share.webp"] ?? Object.values(images)[0];

export function resolveImage(path: string): ImageMetadata {
  const normalizedPath = path.replace(/\\/g, "/").replace(/^\/?public/, "");
  const image = images[normalizedPath];

  if (image) return image;

  console.warn(`[images] No se encontró "${path}" en src/assets/uploads.`);

  if (!fallbackImage) {
    throw new Error("No hay imágenes disponibles para usar como fallback.");
  }

  return fallbackImage;
}