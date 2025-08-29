import '@/styles/tailwind.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Providers } from '@/store/Providers';
import App from '@/App';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import type { Metadata, Viewport } from 'next';
import helper from '@/libs/helper';
import { Space_Grotesk } from 'next/font/google';
import ConditionalLayout from '@/components/ConditionalLayout';
import Script from 'next/script';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.leonlogic.com'),
    title: 'LeonLogic – Digitálna agentúra pre SEO, web a marketing',
    description: 'LeonLogic je digitálna agentúra pre moderné firmy. Ponúkame tvorbu webov, SEO optimalizáciu, obsahový marketing, správu sociálnych sietí a e-shop riešenia. Pomáhame vám rásť s merateľnými výsledkami.',
    openGraph: {
        ...helper.openGraphData,
        type: 'website',
    },
    icons: {
        icon: '/leonlogic-icon.svg',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="sk">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Leonlogic',
                            url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.leonlogic.com/',
                            id: `${process.env.NEXT_PUBLIC_APP_URL}#organization`,
                            logo: `${process.env.NEXT_PUBLIC_APP_URL}/assets/images/logo.png`,
                            legalName: 'Leonlogic',
                            sameAs: [process.env.NEXT_PUBLIC_APP_URL || ''],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'Leonlogic',
                            url: process.env.NEXT_PUBLIC_APP_URL || '',
                            id: `${process.env.NEXT_PUBLIC_APP_URL}#website`,
                        }),
                    }}
                />
                <meta name="google-site-verification" content="h6lA2UBfs2cKyOhvGovNc9yLBqYnoNuA1rDh_iKnCtQ" />
                {/* Meta Pixel (loads after hydration) */}
                <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1745661109653565');
          fbq('track', 'PageView');
          fbq('track', 'Lead');
        `}</Script>

                {/* Google tag (gtag.js) */}
                <Script
                    id="ga-lib"
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-49323CGTLX`}
                />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-49323CGTLX');
          `}
                </Script>
            </head>
            <body>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src={`https://www.facebook.com/tr?id=1745661109653565&ev=PageView&noscript=1`}
                        alt="body"
                    />
                </noscript>
                <Providers>
                    <App />
                    <ConditionalLayout>
                        {children}
                    </ConditionalLayout>
                </Providers>
            </body>
        </html>
    );
} 