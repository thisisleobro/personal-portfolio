const getRobotsTxt = (sitemapURL) => `User-agent: *
Allow: /

Disallow: /blog

Sitemap: ${sitemapURL.href}`;

export const GET = ({ site }) => {
	const sitemapURL = new URL('sitemap-index.xml', site);
	return new Response(getRobotsTxt(sitemapURL));
};