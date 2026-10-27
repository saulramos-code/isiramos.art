// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const getPageImages = (pathname) => {
  const normalizedPath = decodeURIComponent(pathname).replace(/^\//, '').replace(/\/$/, '');
  const htmlPath = normalizedPath
    ? join(fileURLToPath(new URL('./dist/', import.meta.url)), normalizedPath, 'index.html')
    : join(fileURLToPath(new URL('./dist/', import.meta.url)), 'index.html');

  if (!existsSync(htmlPath)) return [];

  const html = readFileSync(htmlPath, 'utf8');
  const imageSources = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)]
    .map((match) => match[1])
    .filter((source) => source.startsWith('/_astro/') || source.startsWith('/uploads/'));

  return [...new Set(imageSources)].map((source) => ({
    url: new URL(source, 'https://isiramos.art').toString(),
  }));
};

// https://astro.build/config
export default defineConfig({
  site: 'https://isiramos.art',
  redirects: {
    '/proyectos/bancas-y-paredes/': '/proyectos/bancas-y-paredes-2026/',
    '/proyectos/bancas-y-paredes': '/proyectos/bancas-y-paredes-2026/',
  },

  integrations: [
    partytown(),
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/blog/') &&
        (!page.includes('/obra-disponible/') || page.endsWith('/obra-disponible/')),
      namespaces: {
        image: true,
      },
      serialize(item) {
        const images = getPageImages(new URL(item.url).pathname);
        return images.length > 0 ? { ...item, img: images } : item;
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});