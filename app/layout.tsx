import '@/styles/tailwind.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Providers } from '@/store/Providers';
import App from '@/App';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import type { Metadata } from 'next';
import helper from '@/libs/helper';
import { Space_Grotesk } from 'next/font/google';
import ConditionalLayout from '@/components/ConditionalLayout';
import Script from 'next/script';

const FB_PIXEL_ID = '1745661109653565';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: 'Leonlogic',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        type: 'website',
    },
    icons: {
        icon: '/leonlogic-icon.svg',
    },
    robots: {
        index: process.env.NEXT_PUBLIC_IS_PRODUCTION == 'true',
        follow: process.env.NEXT_PUBLIC_IS_PRODUCTION == 'true',
    },
};

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space_grotesk',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Leonlogic',
                            url: process.env.NEXT_PUBLIC_APP_URL || '',
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
                <meta name="robots" content="index, follow" />
                {/* Meta Pixel */}
                <Script id="fb-pixel-script" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
                </Script>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `
              <img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"/>
            `,
                    }}
                />
            </head>
            <body>
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