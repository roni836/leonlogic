import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/sluzby/',
          '/sluzby/*',
          '/portfolio',
          '/blog',
          '/blog/*',
          '/o-nas',
          '/kontakt',
          '/faq',
          '/career',
          '/calculator',
          '/privacy-policy',
          '/terms-and-conditions',
          '/team',
          '/assets/*',
        ],
        disallow: [
          '/admin/',
          '/leonlogic-dashboard/',
          '/api/',
          '/_next/',
          '/debug-auth',
          '/test-*',
          '*.json',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/leonlogic-dashboard/',
          '/api/',
          '/_next/',
          '/debug-auth',
          '/test-*',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/leonlogic-dashboard/',
          '/api/',
          '/_next/',
          '/debug-auth',
          '/test-*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
