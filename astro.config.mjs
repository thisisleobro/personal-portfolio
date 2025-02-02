// @ts-ignore
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";
import { site, defaultLocale } from './src/constants';


const matches = import.meta.glob('/src/assets/i18n/**/translation.json', { eager: true });
const translations = Object.values(matches);
const translationsKeys = translations.map(({lang_key}) => lang_key)
const locales = translations.reduce((acc, cur) => ({ ...acc, [cur.lang_key]: cur.lang_key }), {})

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'never',
  i18n: {
    defaultLocale,
    locales: translationsKeys
  },
  integrations: [tailwind(), sitemap({
    filter: (page) => page !== `${site}/`,
    i18n: {
      defaultLocale, // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales,
    },
  })]
});