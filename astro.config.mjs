// @ts-nocheck
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), astroI18next()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    includeFiles: [
      "./public/locales/de/translation.json",
      "./public/locales/en/translation.json"
    ],
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});