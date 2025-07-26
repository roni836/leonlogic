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

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: 'Greco',
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
                            name: 'Greco',
                            url: process.env.NEXT_PUBLIC_APP_URL || '',
                            id: `${process.env.NEXT_PUBLIC_APP_URL}#organization`,
                            logo: `${process.env.NEXT_PUBLIC_APP_URL}/assets/images/logo.png`,
                            legalName: 'Greco',
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
                            name: 'Greco',
                            url: process.env.NEXT_PUBLIC_APP_URL || '',
                            id: `${process.env.NEXT_PUBLIC_APP_URL}#website`,
                        }),
                    }}
                />
            </head>
            <body>
                <Providers>
                    <App />
                    <div
                        className={`flex min-h-screen flex-col bg-white dark:bg-primary font-gilroy text-base font-medium text-primary antialiased dark:text-white`}
                    >
                        <Header />
                        <div>{children}</div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
