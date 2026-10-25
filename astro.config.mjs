// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://isiramos.art',
  redirects: {
    '/proyectos/bancas-y-paredes/': '/proyectos/bancas-y-paredes',
  },

  integrations: [
    partytown(),
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/blog/') &&
        (!page.includes('/obra-disponible/') || page.endsWith('/obra-disponible/')),
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});