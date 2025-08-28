import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import FAQuestions from '@/components/FAQuestions';
import NoteManagementAccodian from '@/components/NoteManagementAccodian';
import PricingPlansChart from '@/components/PricingPlansChart';
import ServiceCard from '@/components/ServiceCard';
import ServicePageModal from '@/components/ServicePageModal';
import Image from 'next/image';
import { Metadata } from 'next';
import serviceData from '@/service.json';
import helper from '@/libs/helper';

// Enable ISR for services listing page
export const revalidate = 3600; // Revalidate every hour

interface Service {
    id: number;
    category: string;
    name: string;
    slug: string;
    title_tag: string;
    meta_description: string;
    url: string;
    description: string;
    benefits: string[];
    process: string[];
    pricing: Array<{
        type: string;
        price_range: string;
        features?: string[];
        delivery_time?: string;
        monthly_cost?: string;
        duration?: string;
        roi?: string;
    }>;
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

export const metadata: Metadata = {
  title: 'Digitálne služby Slovensko | Web development, SEO, Marketing | Leonlogic',
  description: 'Komplexné digitálne služby na Slovensku. Web development, SEO optimalizácia, digitálny marketing, e-commerce riešenia. Profesionálna digitálna agentúra Piešťany.',
  keywords: 'digitálne služby, web development, SEO, digitálny marketing, e-commerce, Piešťany, Trnava, Slovensko, leonlogic',
  authors: [{ name: 'Leonlogic Team' }],
  creator: 'Leonlogic',
  publisher: 'Leonlogic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'h6lA2UBfs2cKyOhvGovNc9yLBqYnoNuA1rDh_iKnCtQ',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Digital Agency Services',
  classification: 'Business Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    ...helper.openGraphData,
    title: 'Digitálne služby Slovensko | Web development, SEO, Marketing | Leonlogic',
    description: 'Komplexné digitálne služby na Slovensku. Web development, SEO optimalizácia, digitálny marketing, e-commerce riešenia. Profesionálna digitálna agentúra Piešťany.',
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'}/sluzby`,
    type: 'website',
    locale: 'sk_SK',
    siteName: 'Leonlogic - Digitálna agentúra Piešťany',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'}/assets/images/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Digitálne služby Leonlogic',
      },
    ],
  },
  twitter: {
    ...helper.twitterData,
    title: 'Digitálne služby Slovensko | Web development, SEO, Marketing | Leonlogic',
    description: 'Komplexné digitálne služby na Slovensku. Web development, SEO optimalizácia, digitálny marketing, e-commerce riešenia.',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'}/sluzby`,
    languages: {
      'x-default': `${process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'}/sluzby`,
      'sk': `${process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'}/sluzby`,
      'sk-SK': `${process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'}/sluzby`
    },
  },
  other: {
    'content-language': 'sk',
    'geo.region': 'SK-TA',
    'geo.placename': 'Piešťany',
    'provider': 'Leonlogic',
    'area-served': 'Slovakia',
    'ai-content-declaration': 'human-authored',
    'content-type': 'services-listing-page',
    'business-context': 'digital-agency-slovakia',
    'expertise-level': 'professional',
    'target-audience': 'slovak-businesses',
  },
};

const Page = () => {
    const services = serviceData.services;
    
    // JSON-LD structured data for services listing page
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com';
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Domov', item: baseUrl },
                    { '@type': 'ListItem', position: 2, name: 'Služby', item: `${baseUrl}/sluzby` },
                ],
            },
            {
                '@type': 'ItemList',
                '@id': `${baseUrl}/sluzby#services-list`,
                name: 'Digitálne služby Leonlogic',
                description: 'Komplexné digitálne služby na Slovensku - web development, SEO, digitálny marketing, e-commerce riešenia',
                inLanguage: 'sk',
                numberOfItems: services.length,
                itemListElement: services.map((service, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'Service',
                        '@id': `${baseUrl}/sluzby/${service.slug}#service`,
                        name: service.name,
                        alternateName: service.title_tag,
                        description: service.meta_description || service.description,
                        inLanguage: 'sk',
                        serviceType: service.category,
                        category: service.category,
                        url: `${baseUrl}/sluzby/${service.slug}`,
                        areaServed: [
                            {
                                '@type': 'Country',
                                name: 'Slovakia'
                            },
                            {
                                '@type': 'AdministrativeArea',
                                name: 'Trnava Region'
                            }
                        ],
                        provider: {
                            '@type': 'Organization',
                            '@id': `${baseUrl}#organization`,
                            name: 'Leonlogic',
                            url: baseUrl,
                            description: 'Digitálna agentúra Piešťany',
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: 'Piešťany',
                                addressRegion: 'Trnava',
                                addressCountry: 'SK'
                            }
                        }
                    }
                })),
                author: {
                    '@type': 'Organization',
                    name: 'Leonlogic',
                    url: baseUrl
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Leonlogic',
                    url: baseUrl
                }
            },
            {
                '@type': 'Organization',
                '@id': `${baseUrl}#organization`,
                name: 'Leonlogic',
                url: baseUrl,
                description: 'Digitálna agentúra špecializujúca sa na komplexné digitálne služby',
                logo: `${baseUrl}/assets/images/logo.png`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Piešťany',
                    addressRegion: 'Trnava',
                    addressCountry: 'SK'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    areaServed: 'SK',
                    availableLanguage: ['sk', 'en']
                },
                sameAs: [
                    'https://www.facebook.com/leonlogic',
                    'https://www.linkedin.com/company/leonlogic'
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Digitálne služby',
                    description: 'Komplexné digitálne služby pre slovenské firmy',
                    itemListElement: services.map((service, index) => ({
                        '@type': 'Offer',
                        '@id': `${baseUrl}/sluzby/${service.slug}#offer`,
                        name: service.name,
                        description: service.meta_description || service.description,
                        itemOffered: {
                            '@type': 'Service',
                            name: service.name,
                            description: service.meta_description || service.description,
                            category: service.category
                        },
                        seller: {
                            '@type': 'Organization',
                            name: 'Leonlogic',
                            url: baseUrl
                        },
                        areaServed: 'Slovakia'
                    }))
                }
            }
        ],
    };

    return (
        <>
            <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div className="flex items-center justify-between">
                        <span className="">
                            <svg width="52" height="65" viewBox="0 0 52 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 13L21.5013 0.586207L51.5013 52.5477L30 64.9615L0 13Z" fill="#FFC010" />
                            </svg>
                        </span>
                        <h1
                            className="mx-auto max-w-[708px] text-center text-3xl font-black italic md:text-[50px] md:leading-[59px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            POSKYTUJEME KOMPLEXNÉ <span className="text-secondary">DIGITÁLNE SLUŽBY</span>
                        </h1>
                        <span className="">
                            <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.7514 1.19667C26.7514 0.0419683 29.2514 1.48535 29.2514 3.79475L29.2514 29.9052C29.2514 32.2146 26.7514 33.658 24.7514 32.5033L2.13906 19.448C0.139058 18.2933 0.139062 15.4066 2.13906 14.2519L24.7514 1.19667Z"
                                    fill="#07D673"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>

            <section className="-mt-32 pb-12 md:-mt-44 lg:pb-24 relative">
                <div className="container">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {services.map((service, index) => {
                            // Use existing icons or fallback to a default icon
                            const getIconPath = (slug: string) => {
                                const iconMap: { [key: string]: string } = {
                                    'e-commerce': '/assets/images/icon-mail.svg',
                                    'male-stredne-podniky': '/assets/images/icon-instagram.svg',
                                    'enterprise-riesenia': '/assets/images/icon-fb-ads.svg',
                                    'ai-chatboty': '/assets/images/icon-content.svg',
                                    'ai-automatizacie': '/assets/images/icon-mail.svg',
                                    'firemna-identita': '/assets/images/icon-instagram.svg',
                                    'logo-dizajn': '/assets/images/icon-fb-ads.svg',
                                    'digitalny-obsah-grafika': '/assets/images/icon-content.svg',
                                    'webovy-dizajn': '/assets/images/icon-mail.svg',
                                    'tlacove-sluzby': '/assets/images/icon-instagram.svg',
                                    'tvorba-webstranok': '/assets/images/icon-fb-ads.svg',
                                    'vyvoj-online-obchodov': '/assets/images/icon-content.svg',
                                    'vyvoj-mobilnych-aplikacii': '/assets/images/icon-mail.svg',
                                    'programovanie-na-mieru': '/assets/images/icon-instagram.svg',
                                    'sprava-webovych-stranok': '/assets/images/icon-fb-ads.svg',
                                    'seo-optimalizacia': '/assets/images/icon-content.svg',
                                    'reklamne-kampane': '/assets/images/icon-mail.svg',
                                    'cenove-porovnavace': '/assets/images/icon-instagram.svg',
                                    'socialne-siete': '/assets/images/icon-fb-ads.svg',
                                    'influencer-marketing': '/assets/images/icon-content.svg'
                                };
                                return iconMap[slug] || '/assets/images/icon-mail.svg';
                            };

                            return (
                                <ServiceCard 
                                    key={service.id} 
                                    icon_path={getIconPath(service.slug)} 
                                    title={service.name} 
                                    description={service.description} 
                                    slug={service.slug} 
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex flex-col items-center gap-12 border-y-2 border-[#9199B5]/10 py-12 md:py-[126px] lg:flex-row 2xl:gap-[175px]">
                        <div>
                            <span className="rounded-[50px] bg-success-light/[0.08] dark:bg-secondary/[0.08] px-5 py-3 text-base font-bold text-success-light dark:text-secondary uppercase">
                                KOMPLEXNÉ WEBOVÉ RIEŠENIA
                            </span>
                            <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                Váš  <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> digitálny úspech</span>
                            </h2>
                            <p className="mt-5 max-w-[505px] text-base font-semibold text-gray dark:text-[#9199B5]">
                               Vytvárame moderné webstránky a e-shopy, ktoré pomáhajú vášmu biznesu rásť online. Profesionálny vývoj s pokračujúcou podporou.
                            </p>
                            <NoteManagementAccodian />
                            <button type="button" className="mt-8 btn md:mt-[50px]">
                                ZAČAŤ SPOLUPRÁCU
                            </button>
                        </div>
                        <div className="w-full max-w-[654px]" data-aos="flip-left" data-aos-duration="1000">
                            <Image src="/assets/images/management.png" className="h-full w-full object-cover" alt="management" width={654} height={701} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[#9199B5]/10 py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            ČASTO KLADENÉ OTÁZKY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Často kladené <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">otázky</span>
                        </h2>
                    </div>
                    <FAQuestions />
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
};

export default Page;
