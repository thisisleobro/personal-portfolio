import type { GetStaticPathsResult } from "astro";
import { defaultLocale } from "../constants";

const matches = import.meta.glob('../assets/i18n/**/translation.json', { eager: true });
export const translations = Object.values(matches) as any;
export const localeKeys = translations.map(({lang_key}: {lang_key: string}) => lang_key)
export const locales = translations.reduce((acc: any, cur: any) => ({ ...acc, [cur.lang_key]: cur.lang_key }), {})

export const getStaticPathsImpl = () => localeKeys
	.filter((locale: string) => locale !== defaultLocale)
	.reduce((paths: GetStaticPathsResult, locale: string) =>
		paths.concat({
			params: {
				lang: locale
			}
		}),
		[]
	)