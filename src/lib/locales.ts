const matches = import.meta.glob('../assets/i18n/**/translation.json', { eager: true });
export const translations = Object.values(matches) as any;
export const localeKeys = translations.map(({lang_key}) => lang_key)
export const locales = translations.reduce((acc, cur) => ({ ...acc, [cur.lang_key]: cur.lang_key }), {})