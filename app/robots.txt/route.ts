const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com';

function generateSiteMap(): string {
    return `User-agent: *
Disallow: /admin/
Disallow: /leonlogic-dashboard/
Allow: /sluzby/
Allow: /sluzby/*

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap/services.xml`;
}

export function GET(): Response {
    const body: string = generateSiteMap();

    return new Response(body);
}
