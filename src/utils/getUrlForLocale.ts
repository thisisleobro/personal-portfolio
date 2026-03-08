import { getUrlForAllLocales } from "./getUrlForAllLocales"

// TODO: naming of arguments is confusing
// Explanation:
// If 2 arguments that means the locale of the url is the default locale and second argument defines the new locale
// If 3 arguments are passed that means the locale of the url is passed as second argument and the new locale is the thirg argument
export const getUrlForLocale = (url: URL, currentLocale: string, newLocale?: ( string | undefined)): LocalizedUrl => {
	const localized = getUrlForAllLocales(url, currentLocale)
		.find(localized => localized.lang === (newLocale || currentLocale))

	if (!localized) {
		throw new Error('getUrlForLocale(): unknow language')
	}

	return localized
}