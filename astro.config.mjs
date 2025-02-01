// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://carvalho.cv',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"]
  },
  integrations: [tailwind(), sitemap()]
});