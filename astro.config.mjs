import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from "@astrojs/sitemap";

import { site, defaultLocale } from './src/constants';
import {initI18n, localeKeys, locales} from '/src/lib/i18n'

await initI18n()

// https://astro.build/config
export default defineConfig({
  site,
  // trailingSlash: 'never',
  i18n: {
    defaultLocale,
    locales: localeKeys
  },
  integrations: [
    tailwind(),
    sitemap({
      // filter: (page) => page !== `${site}/`,
      i18n: {
        defaultLocale, // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales,
      },
    }),
    mdx()
  ]
});