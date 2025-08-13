import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

import type { Metadata } from 'next';
import helper from '@/libs/helper';

export const metadata: Metadata = {
    title: 'Webový dizajn | UX/UI dizajn webstránok | Leonlogic',
    description: 'Profesionálny webový dizajn. Responzívne webstránky, mobile-first prístup, optimalizácia konverzií. Zvýšte konverzie o 50%. 5+ rokov skúseností.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Webový dizajn | UX/UI dizajn webstránok | Leonlogic',
        description: 'Profesionálny webový dizajn. Responzívne webstránky, mobile-first prístup, optimalizácia konverzií. Zvýšte konverzie o 50%. 5+ rokov skúseností.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/sluzby/webovy-dizajn',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Webový dizajn | UX/UI dizajn webstránok | Leonlogic',
        description: 'Profesionálny webový dizajn. Responzívne webstránky, mobile-first prístup, optimalizácia konverzií. Zvýšte konverzie o 50%. 5+ rokov skúseností.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/webovy-dizajn`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/webovy-dizajn` },
    },
};

export default function WebovyDizajnPage() {
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
                        "name": "Webový dizajn",
                        "item": `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/webovy-dizajn`
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Webový dizajn a UX/UI dizajn webstránok",
                "description": "Profesionálny webový dizajn. Responzívne webstránky, mobile-first prístup, optimalizácia konverzií. Zvýšte konverzie o 50%. 5+ rokov skúseností.",
                "provider": {
                    "@type": "Organization",
                    "name": "Leonlogic",
                    "url": process.env.NEXT_PUBLIC_APP_URL,
                    "description": "Digitálna agentúra špecializujúca sa na webový dizajn a e-commerce riešenia"
                },
                "serviceType": "Web Design",
                "areaServed": "Slovakia",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Webový dizajn balíčky",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Základný dizajn (5 stránok)",
                                "description": "Jednoduché webstránky s responzívnym dizajnom"
                            },
                            "price": "980",
                            "priceCurrency": "EUR",
                            "priceValidUntil": "2025-12-31"
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "E-commerce/Booking (10 stránok)",
                                "description": "Komplexný dizajn, conversion focus"
                            },
                            "price": "2345",
                            "priceCurrency": "EUR",
                            "priceValidUntil": "2025-12-31"
                        }
                    ]
                },
                "serviceOutput": [
                    "UX výskum",
                    "Wireframing",
                    "UI dizajn",
                    "Responzívny dizajn",
                    "Mobile-first prístup",
                    "Dizajnový systém",
                    "Knižnica komponentov",
                    "Technické špecifikácie",
                    "Optimalizácia konverzií",
                    "SEO optimalizácia"
                ],
                "keywords": [
                    "webový dizajn",
                    "UX dizajn",
                    "UI dizajn",
                    "responzívny dizajn",
                    "mobile-first",
                    "webstránky",
                    "konverzie",
                    "Slovakia",
                    "digitálna agentúra"
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Čo zahŕňa kompletný webový dizajn?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Kompletný webový dizajn zahŕňa UX výskum, wireframing, UI dizajn všetkých stránok, responzívne verzie, interaktívne prototypy, dizajnový systém."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Ako dlho trvá proces webového dizajnu?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Proces dizajnu trvá 3-6 týždňov: UX výskum (1 týždeň), wireframing (1 týždeň), UI dizajn (2-3 týždne), revízie a finalizácia (1 týždeň)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Koľko stojí webový dizajn?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Základný dizajn 5 stránok: od 980€, E-commerce/Booking 10 stránok: 2 345 - 4 600€. Cena závisí od zložitosti a funkcií."
                        }
                    }
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
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Webový dizajn', url: '/sluzby/webovy-dizajn' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Webový dizajn
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderné responzívne webstránky
            </p>
          </div>

          {/* What is Modern Web Design */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je moderný webový dizajn?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Moderný webový dizajn je proces tvorby vizuálne atraktívnych a funkčných webových stránok optimalizovaných pre všetky zariadenia. Zahŕňa UX/UI dizajn, responzívne rozloženia, optimalizáciu výkonu, štandardy dostupnosti a štruktúry priateľské pre vyhľadávače.
              </p>
            </div>
          </section>

          {/* Why Invest */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do moderného webového dizajnu?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konverzie</h3>
                  <p className="text-gray-700">Zvýšenie konverzií o 30-50%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Používateľské skúsenosti</h3>
                  <p className="text-gray-700">Lepšie používateľské skúsenosti</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile-first</h3>
                  <p className="text-gray-700">Mobile-first prístup (65% návštevnosti z mobilov)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rýchlosť</h3>
                  <p className="text-gray-700">Rýchle načítanie stránok</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO optimalizácia</h3>
                  <p className="text-gray-700">Štruktúry optimalizované pre vyhľadávače</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Profesionalita</h3>
                  <p className="text-gray-700">Profesionálny vzhľad značky</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces webového dizajnu
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">UX výskum</h3>
                  <p className="text-gray-700">Výskum používateľov a analýza konkurencie</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Tvorba wireframov</h3>
                  <p className="text-gray-700">Tvorba wireframov a štruktúry webstránky</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">UI dizajn</h3>
                  <p className="text-gray-700">Vizuálny dizajn všetkých stránok a responzívnych verzií</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Prototypovanie</h3>
                  <p className="text-gray-700">Interaktívne prototypy a odovzdanie vývojárom</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník webového dizajnu
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vstupná stránka</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">370 - 690 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      UX/UI dizajn jednej stránky
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 1-2 týždne
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-indigo-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Podnikové webstránky (4 stránky)</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">1 150 - 2 300 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Kompletný dizajn, moodboard
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 2-4 týždne
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce/Booking (10 stránok)</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">2 345 - 4 600 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Komplexný dizajn, conversion focus
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 4-6 týždňov
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Často kladené otázky o webovom dizajne
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Čo zahŕňa kompletný webový dizajn?
                  </h3>
                  <p className="text-gray-700">
                    Kompletný webový dizajn zahŕňa UX výskum, wireframing, UI dizajn všetkých stránok, responzívne verzie, interaktívne prototypy, dizajnový systém.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako zabezpečujete responzívnosť webu?
                  </h3>
                  <p className="text-gray-700">
                    Používame mobile-first prístup s breakpoints pre všetky zariadenia. Testujeme na skutočných zariadeniach a optimalizujeme pre dotykové rozhrania.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dodávate aj obsah pre web?
                  </h3>
                  <p className="text-gray-700">
                    Áno, poskytujeme copywriting, fotografie (archívne alebo vlastné), ikony, ilustrácie a optimalizujeme existujúci obsah pre webovú prezentáciu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako dlho trvá proces webového dizajnu?
                  </h3>
                  <p className="text-gray-700">
                    Proces dizajnu trvá 3-6 týždňov: UX výskum (1 týždeň), wireframing (1 týždeň), UI dizajn (2-3 týždne), revízie a finalizácia (1 týždeň).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Spolupracujete s vývojármi?
                  </h3>
                  <p className="text-gray-700">
                    Áno, poskytujeme súbory pripravené pre vývojárov, dizajnový systém, knižnicu komponentov a technické špecifikácie. Môžeme odporúčať vývojárskych partnerov.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-indigo-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si moderný webový dizajn
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašou webstránkou
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

