import type { GetStaticPathsResult } from "astro";
import i18next, { type Resource } from 'i18next'
import { defaultLocale } from "../constants";
import translationJson from '../assets/i18n/en/translation.json'

type Locale = typeof translationJson;


const matches: Record<string, Locale> = import.meta.glob('../assets/i18n/**/translation.json', { eager: true });
// matches keys are the file paths like: '../assets/i18n/en/translation.json'
export const translations = Object.values(matches);
export const languages = translations.map(({lang_key, lang_description}) => ({key: lang_key, description: lang_description})) || []
export const localeKeys = translations.map(({lang_key}) => lang_key)


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

export const initI18n = async (currentLocale: string = defaultLocale ) => {
	const resources: Resource = {};

	translations.forEach((translation) => resources[translation.lang_key] = { translation } )

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