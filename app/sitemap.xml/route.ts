const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
const lastMod = new Date().toISOString();

async function generateSiteMap() {
    try {
        return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
		<loc>${baseUrl}/sitemap/pages.xml</loc>
		<lastmod>${lastMod}</lastmod>
	</sitemap>
</sitemapindex>`;
    } catch (error) {}
}

export async function GET() {
    const body = await generateSiteMap();

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    });
}
