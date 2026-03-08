import { getRelativeLocaleUrl } from "astro:i18n"
import { defaultLocale } from "../constants"
import { languages } from "@libs/i18n"

export const getUrlInAllLocales = (currentUrl: URL, currentLocale: string): LocalizedUrl[] => {
	return languages
	.reduce((urls, {key, description}) => {
		if (key === currentLocale) {
			return urls.concat({
				lang: currentLocale,
				url: currentUrl,
				description,
			})
		}

		if (key === defaultLocale) {
			const url = '/' + currentUrl.pathname.split('/')
				.filter((str) => str)
				.slice(1)
				.join('/')

			return urls.concat({
				lang: key,
				url: new URL(url, currentUrl.origin),
				description,
			})
		}

		return urls.concat({
			lang: key,
			url: new URL(getRelativeLocaleUrl(key, currentUrl.pathname), currentUrl.origin),
			description,
		})
	}, [] as LocalizedUrl[])
}