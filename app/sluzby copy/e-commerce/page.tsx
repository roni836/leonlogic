import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import Image from 'next/image';
import helper from '@/libs/helper';
import FAQuestions from '@/components/FAQuestions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'E-commerce riešenia | Tvorba e-shopov | Online obchody',
    description: 'Profesionálne e-commerce riešenia. Tvorba e-shopov s platobným systémom, napojením na porovnávače cien a SEO optimalizáciou. 5+ rokov skúseností.',
    openGraph: {
        ...helper.openGraphData,
        title: 'E-commerce riešenia | Tvorba e-shopov | Online obchody',
        description: 'Profesionálne e-commerce riešenia. Tvorba e-shopov s platobným systémom, napojením na porovnávače cien a SEO optimalizáciou. 5+ rokov skúseností.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/sluzby/e-commerce',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'E-commerce riešenia | Tvorba e-shopov | Online obchody',
        description: 'Profesionálne e-commerce riešenia. Tvorba e-shopov s platobným systémom, napojením na porovnávače cien a SEO optimalizáciou. 5+ rokov skúseností.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/e-commerce`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/e-commerce` },
    },
};

const page = () => {
    return (
        <>
            <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div>
                        <h1
                            className="text-3xl md:text-[50px] font-black uppercase md:leading-[59px] max-w-[1019px] italic"
                        >
                            <span className="text-gray-900 dark:text-white">Tvorba <span className="text-secondary">eshopov</span> a riešenia </span>

                        </h1>
                        <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
                            E-commerce riešenie je komplexná platforma umožňujúca firmám predávať produkty a služby cez internet. Moderný e-shop zahŕňa webový obchod, platobný systém, správu skladových zásob, CRM systém a marketingové nástroje pre efektívny online predaj na slovenskom trhu.

                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-12 md:pb-[60px]">
                <div className="container">
                    <div className="max-w-[500px]">
                        <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                            Prečo si vybrať naše{' '}
                            <span className="bg-[url('/assets/images/line.svg')] bg-bottom bg-no-repeat">e-commerce služby?</span>
                        </h2>
                        <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                            Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody prostredníctvom pokročilých technológií a overených stratégií.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">01</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Dizajn a UX</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Responzívny dizajn zameraný na konverzie a používateľskú prívetivosť
                            </p>
                        </div>

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">02</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Nastavenie e-shopu</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Kompletné nastavenie online obchodu s produktmi, kategóriami a platobným systémom
                            </p>
                        </div>

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">03</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Marketingové nástroje</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                SEO optimalizácia, napojenie na porovnávače cien a remarketing kampane
                            </p>
                        </div>

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">04</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Analytika a podpora</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Sledovanie predajov, Google Analytics a 24/7 technická podpora
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="border-y-2 border-[#9199B5]/10 py-12 md:py-[100px]">
                        <div className="flex flex-col lg:flex-row items-center 2xl:gap-44 gap-10">
                            <div className="lg:max-w-[563px]">
                                <span className="rounded-[50px] bg-success-light/[0.08] px-5 py-3 text-base font-bold text-success-light dark:text-secondary dark:bg-secondary/[0.08]">
                                    ČO ROBÍME
                                </span>
                                <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                    Pomáhame firmám rásť s e-commerce riešeniami
                                </h2>
                                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                    Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody prostredníctvom pokročilých technológií a overených stratégií.
                                </p>
                                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>5+ rokov skúseností s tvorbou e-shopov</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Napojenie na platobné brány a služby</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Responzívny dizajn optimalizovaný pre mobilné zariadenia</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>SEO optimalizácia už od začiatku</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Technická podpora</p>
                                    </li>

                                </ul>
                                <Link href="/contact-us" className="btn mt-7 md:mt-12">
                                    Začať spoluprácu
                                </Link>
                            </div>
                            <div className="max-w-[650px] w-full" data-aos="flip-left" data-aos-duration="1000">
                                <Image src="/assets/images/marketing.png" className="w-full h-full object-cover" alt="marketing" width={650} height={522} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            CENNÍK E-SHOPOV
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Koľko stojí vytvorenie <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">eshopu?</span>
                        </h2>
                        <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Tvorba e-shopu na kľúč od 1 980€ s kompletným riešením.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Cena e-shopu zahŕňa dizajn, programovanie a podporu - bez skrytých poplatkov.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                            {/* Table Header */}
                            <div className="bg-gray-100 dark:bg-gray-700 p-6">
                                <div className="grid grid-cols-4 gap-4 text-gray-900 dark:text-white font-bold text-center">
                                    <div className="text-left">Typ e-shopu</div>
                                    <div>Cena</div>
                                    <div>Funkcie</div>
                                    <div>Doba realizácie</div>
                                </div>
                                <div className="mt-4">
                                    <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                </div>
                            </div>

                            {/* Table Rows */}
                            <div>
                                {/* Basic Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Základný e-shop</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">1 980 - 2 345 €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Do 100 produktov, základné platby</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">4-6 týždňov</div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                    </div>
                                </div>

                                {/* Advanced Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Pokročilý e-shop</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">2 900 - 3 680 €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Neobmedzené produkty, všetky integrácie</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">6-8 týždňov</div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                    </div>
                                </div>

                                {/* Enterprise Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Podnikové riešenie</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">4 600+ €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Vlastné funkcie, API integrácie</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">8-12 týždňov</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 text-center">
                                <Link href="/contact-us" className="btn">
                                    Získať cenovú ponuku
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#5d6c74] italic">
                            *Uvedené ceny sú orientačné a finálna cena sa určuje na základe konkrétnych požiadaviek a náročnosti projektu.
                        </p>
                    </div>
                </div>
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

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-secondary/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            REALIZOVANÉ PROJEKTY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Z NAŠEJ <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">DIELNE</span>
                        </h2>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/1.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 1"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/2.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 2"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/3.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 3"
                                width={754}
                                height={401}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/4.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 4"
                                width={754}
                                height={401}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[url('/assets/images/newsletter.png')] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative">
                <GetInTouch />
            </section>
        </>
    );
};

export default page;

// JSON-LD Schema Markup for AI Search Engines and SEO
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Domov",
                    "item": process.env.NEXT_PUBLIC_APP_URL
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Služby",
                    "item": `${process.env.NEXT_PUBLIC_APP_URL}/sluzby`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "E-commerce riešenia",
                    "item": `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/e-commerce`
                }
            ]
        },
        {
            "@type": "Service",
            "name": "E-commerce riešenia a tvorba e-shopov",
            "description": "Profesionálne e-commerce riešenia. Tvorba e-shopov s platobným systémom, napojením na porovnávače cien a SEO optimalizáciou. 5+ rokov skúseností.",
            "provider": {
                "@type": "Organization",
                "name": "Leonlogic",
                "url": process.env.NEXT_PUBLIC_APP_URL,
                "description": "Digitálna agentúra špecializujúca sa na e-commerce riešenia"
            },
            "serviceType": "E-commerce Development",
            "areaServed": "Slovakia",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "E-commerce balíčky",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Základný e-shop",
                            "description": "Do 100 produktov, základné platby"
                        },
                        "price": "1980",
                        "priceCurrency": "EUR",
                        "priceValidUntil": "2025-12-31"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Pokročilý e-shop",
                            "description": "Neobmedzené produkty, všetky integrácie"
                        },
                        "price": "2900",
                        "priceCurrency": "EUR",
                        "priceValidUntil": "2025-12-31"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Podnikové riešenie",
                            "description": "Vlastné funkcie, API integrácie"
                        },
                        "price": "4600",
                        "priceCurrency": "EUR",
                        "priceValidUntil": "2025-12-31"
                    }
                ]
            },
            "serviceOutput": [
                "Webový obchod",
                "Platobný systém",
                "Správa skladových zásob",
                "CRM systém",
                "Marketingové nástroje",
                "SEO optimalizácia",
                "Integrácia s porovnávačmi cien",
                "Remarketing kampane",
                "Google Analytics",
                "24/7 technická podpora"
            ],
            "keywords": [
                "e-commerce",
                "e-shop",
                "online obchod",
                "webový obchod",
                "platobný systém",
                "SEO optimalizácia",
                "porovnávače cien",
                "CRM systém",
                "digitálna agentúra",
                "Slovakia"
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Koľko stojí vytvorenie e-shopu?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ceny e-shopov začínajú od 1 980€ pre základný balík. Finálna cena sa určuje na základe konkrétnych požiadaviek a náročnosti projektu."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Ako dlho trvá vytvorenie e-shopu?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Základný e-shop: 4-6 týždňov, pokročilý: 6-8 týždňov, podnikové riešenie: 8-12 týždňov."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Aké funkcie zahŕňa e-commerce riešenie?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Webový obchod, platobný systém, správu skladových zásob, CRM systém, marketingové nástroje, SEO optimalizáciu a 24/7 podporu."
                    }
                }
            ]
        },
        {
            "@type": "Organization",
            "name": "Leonlogic",
            "url": process.env.NEXT_PUBLIC_APP_URL,
            "logo": `${process.env.NEXT_PUBLIC_APP_URL}/assets/images/leonlogic.svg`,
            "description": "Digitálna agentúra špecializujúca sa na e-commerce riešenia, webový dizajn a digitálny marketing",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "SK",
                "addressLocality": "Slovakia"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+421915376588",
                "contactType": "customer service",
                "availableLanguage": ["Slovak", "English"]
            },
            "sameAs": [
                "https://www.facebook.com/leonlogic",
                "https://www.instagram.com/leonlogic"
            ]
        }
    ]
};

// Add schema to head
if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}
