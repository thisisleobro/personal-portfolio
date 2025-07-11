import type { GetStaticPathsResult } from "astro";
import i18next from 'i18next'
import { defaultLocale } from "../constants";


const matches = import.meta.glob('../assets/i18n/**/translation.json', { eager: true });
export const translations = Object.values(matches) as any;
export const languages = translations.map(({lang_key, lang_description}: any) => ({key: lang_key, description: lang_description}))
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

export const initI18n = async (currentLocale) => {
	const resources = {};

	translations.forEach((translation) => {
		resources[translation.lang_key] = {}
		resources[translation.lang_key].translation = {...translation}
	});

	// console.log('resources', resources)

	await i18next.init({
		lng: currentLocale,
		fallbackLng: currentLocale, // SSR only
		// debug: true,
		// lng: Astro.currentLocale,
		// preload: ['en', 'pt'],
		ns: ['translation'],
		defaultNS: 'translation',
		resources,
	});
}