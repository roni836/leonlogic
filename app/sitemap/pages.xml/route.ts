const URL = process.env.NEXT_PUBLIC_APP_URL || '';
const lastMod = new Date().toISOString();

function generateSiteMap(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${URL}</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/service</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/services-detail</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/portfolio</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/portfolio-detail</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/about-us</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/career</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/contact-us</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/team</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog-details</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/faq</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    </urlset>`;
}

export function GET(): Response {
    const body = generateSiteMap();

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    });
}
