/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: 'de',
  locales: ['de', 'en'],
  routes: {
    de: {
      rent: 'mieten',
      transport: 'transportieren',
    },
    en: {
      rent: 'rent',
      transport: 'transport',
    },
  },
};
