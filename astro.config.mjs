// @ts-ignore
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";
import { site, defaultLocale } from './src/constants';
import {localeKeys, locales, translations} from '/src/lib/locales'


// https://astro.build/config
export default defineConfig({
  site,
  // trailingSlash: 'never',
  i18n: {
    defaultLocale,
    locales: localeKeys
  },
  integrations: [tailwind(), sitemap({
    // filter: (page) => page !== `${site}/`,
    i18n: {
      defaultLocale, // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales,
    },
  })]
});