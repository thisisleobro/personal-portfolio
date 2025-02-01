const getRobotsTxt = (sitemapURL) => `
User-agent: *
Allow: /*
Disallow: /$

Sitemap: ${sitemapURL.href}
`;

export const prerender = true

export const GET = ({ site }) => {
	const sitemapURL = new URL('sitemap-index.xml', site);
	return new Response(getRobotsTxt(sitemapURL));
};