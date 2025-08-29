const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com';
const lastMod = new Date().toISOString();

import servicesData from '../../../service.json';

function generateServiceSiteMap(): string {
    const { services } = servicesData;
    
    const serviceUrls = services.map(service => `
    <url>
        <loc>${baseUrl}/sluzby/${service.slug}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
        <image:image>
            <image:loc>${baseUrl}/assets/images/logo.webp</image:loc>
            <image:title>${service.name}</image:title>
            <image:caption>${service.meta_description}</image:caption>
        </image:image>
    </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="https://www.sitemaps.org/schemas/sitemap-image/1.1">
    ${serviceUrls}
    </urlset>`;
}

export function GET(): Response {
    const body = generateServiceSiteMap();

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    });
}
