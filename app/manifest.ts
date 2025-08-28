import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'

  return {
    name: 'Leonlogic - Digitálna agentúra Piešťany',
    short_name: 'Leonlogic',
    description: 'Komplexné digitálne služby na Slovensku. Web development, SEO, digitálny marketing, e-commerce riešenia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#07D673',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'sk',
    dir: 'ltr',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: `${baseUrl}/assets/images/logo.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: `${baseUrl}/assets/images/logo.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: `${baseUrl}/assets/images/logo.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `${baseUrl}/assets/images/logo.png`,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: `${baseUrl}/assets/images/logo.png`,
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Leonlogic - Digitálna agentúra',
      },
      {
        src: `${baseUrl}/assets/images/logo.png`,
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Leonlogic - Digitálna agentúra',
      },
    ],
    shortcuts: [
      {
        name: 'Služby',
        short_name: 'Služby',
        description: 'Pozrieť naše digitálne služby',
        url: '/sluzby',
        icons: [
          {
            src: `${baseUrl}/assets/images/logo.png`,
            sizes: '96x96',
          },
        ],
      },
      {
        name: 'Kontakt',
        short_name: 'Kontakt',
        description: 'Kontaktovať nás',
        url: '/kontakt',
        icons: [
          {
            src: `${baseUrl}/assets/images/logo.png`,
            sizes: '96x96',
          },
        ],
      },
    ],
  }
}
