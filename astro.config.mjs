import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";

import { defaultLocale } from './src/constants';
import {localeKeys, locales} from '/src/lib/i18n'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  // trailingSlash: 'never',
  i18n: {
    defaultLocale,
    locales: localeKeys,
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page.startsWith(`${site}/blog`),
      i18n: {
        defaultLocale, // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales,
      },
    }),
    mdx()
  ]
});