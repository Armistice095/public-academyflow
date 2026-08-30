import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

export default defineConfig({
  // TODO: remplacer par le vrai nom de domaine une fois configuré/acheté
  site: 'https://public-academyflow.onrender.com',
  image: {
    domains: ['images.unsplash.com'],
  },
  prefetch: true,
  integrations: [
    sitemap(),
    starlight({
      title: 'Documentation AcademyFlow',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },
      sidebar: [
        {
          label: 'Démarrer',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: 'Utiliser AcademyFlow',
          items: [{ autogenerate: { directory: 'utilisation' } }],
        },
        {
          label: 'Aide',
          items: [{ autogenerate: { directory: 'aide' } }],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Armistice095/academyflow_relases',
        },
      ],
      disable404Route: true,
      customCss: ['./src/assets/styles/starlight.css'],
      favicon: '/favicon.ico',
      components: {
        SiteTitle: './src/components/ui/starlight/SiteTitle.astro',
        Head: './src/components/ui/starlight/Head.astro',
        MobileMenuFooter:
          './src/components/ui/starlight/MobileMenuFooter.astro',
        ThemeSelect: './src/components/ui/starlight/ThemeSelect.astro',
      },
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
