import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

import { defaultLocale } from './src/constants';
import { localeKeys } from './src/lib/i18n'

const site = process.env.SITE_URL || 'http://localhost:4321'


// https://astro.build/config
export default defineConfig({
  site,
  // trailingSlash: 'never',
  i18n: {
    defaultLocale,
    locales: localeKeys,
  },
  markdown:{
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-light',
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      // filter: (page) => !page.startsWith(`${site}/blog/`) && !page.startsWith(`${site}/pt/blog/`),
      i18n: {
        defaultLocale, // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: localeKeys.reduce((locales, localeKey) => (locales[localeKey] = localeKey, locales), {}),
      },
    }),
  ]
});