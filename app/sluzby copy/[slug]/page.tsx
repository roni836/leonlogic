// app/sluzby/[slug]/page.tsx
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import Image from 'next/image';
import helper from '@/libs/helper';
import FAQuestions from '@/components/FAQuestions';
import type { Metadata } from 'next';
import servicesData from '@/service.json';

type Service = {
  id: number;
  category: string;
  name: string;
  slug: string;
  title_tag: string;
  meta_description: string;
  url: string;
  description: string;
  benefits: string[];
  process: string[]; // "Step - Detail"
  pricing: { type: string; price_range: string; features?: string[]; delivery_time?: string; monthly_cost?: string; roi?: string; duration?: string }[];
  faqs: { question: string; answer: string }[];
};

type Params = { params: { slug: string } };

function getServiceBySlug(slug: string): Service | undefined {
  const s = (servicesData as { services: Service[] }).services.find(x => x.slug === slug);
  return s;
}

// Dynamic metadata from JSON
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  const title = service?.title_tag ?? 'Služba';
  const description = service?.meta_description ?? '';
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      ...helper.openGraphData,
      title,
      description,
      url,
      type: 'article'
    },
    twitter: {
      ...helper.twitterData,
      title,
      description
    },
    alternates: {
      canonical: url,
      languages: { 'x-default': url }
    }
  };
}

export default function Page({ params }: Params) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    // You can render a 404 or redirect
    return null;
  }

  // Map first 4 process steps into your four cards
  // Each process item uses "Title - Text" format in your JSON
  const processCards = service.process.slice(0, 4).map((step, i) => {
    const [title, text] = step.split(' - ');
    return { no: (i + 1).toString().padStart(2, '0'), title: title?.trim() || step, text: text?.trim() || '' };
  });

  // Build JSON-LD dynamically (Breadcrumbs, Service, FAQPage)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Domov', item: process.env.NEXT_PUBLIC_APP_URL },
          { '@type': 'ListItem', position: 2, name: 'Služby', item: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby` },
          { '@type': 'ListItem', position: 3, name: service.name, item: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/${service.slug}` }
        ]
      },
      {
        '@type': 'Service',
        name: `${service.name} a tvorba e-shopov`,
        description: service.meta_description || service.description,
        provider: {
          '@type': 'Organization',
          name: 'Leonlogic',
          url: process.env.NEXT_PUBLIC_APP_URL,
          description: 'Digitálna agentúra špecializujúca sa na e-commerce riešenia'
        },
        serviceType: 'E-commerce Development',
        areaServed: 'Slovakia',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'E-commerce balíčky',
          itemListElement: service.pricing.map(p => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: p.type, description: (p.features || []).join(', ') },
            price: (p.price_range || '').replace(/[^\d]/g, '') || undefined,
            priceCurrency: 'EUR',
            priceValidUntil: '2025-12-31'
          }))
        },
        serviceOutput: [
          'Webový obchod',
          'Platobný systém',
          'Správa skladových zásob',
          'CRM systém',
          'Marketingové nástroje',
          'SEO optimalizácia',
          'Integrácia s porovnávačmi cien',
          'Remarketing kampane',
          'Google Analytics',
          '24/7 technická podpora'
        ],
        keywords: [
          'e-commerce',
          'e-shop',
          'online obchod',
          'webový obchod',
          'platobný systém',
          'SEO optimalizácia',
          'porovnávače cien',
          'CRM systém',
          'digitálna agentúra',
          'Slovakia'
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      },
      {
        '@type': 'Organization',
        name: 'Leonlogic',
        url: process.env.NEXT_PUBLIC_APP_URL,
        logo: `${process.env.NEXT_PUBLIC_APP_URL}/assets/images/leonlogic.svg`,
        description:
          'Digitálna agentúra špecializujúca sa na e-commerce riešenia, webový dizajn a digitálny marketing',
        address: { '@type': 'PostalAddress', addressCountry: 'SK', addressLocality: 'Slovakia' },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+421915376588',
          contactType: 'customer service',
          availableLanguage: ['Slovak', 'English']
        },
        sameAs: ['https://www.facebook.com/leonlogic', 'https://www.instagram.com/leonlogic']
      }
    ]
  };

  return (
    <>
      {/* ——— HERO (unchanged design, dynamic content) ——— */}
      <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
        <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
        <div className="container relative">
          <div>
            <h1 className="text-3xl md:text-[50px] font-black uppercase md:leading-[59px] max-w-[1019px] italic">
              <span className="text-gray-900 dark:text-white">
                Tvorba <span className="text-secondary">eshopov</span> a riešenia
              </span>
            </h1>
            <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ——— WHY/PROCESS CARDS (unchanged design) ——— */}
      <section className="pb-12 md:pb-[60px]">
        <div className="container">
          <div className="max-w-[500px]">
            <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
              Prečo si vybrať naše{' '}
              <span className="bg-[url('/assets/images/line.svg')] bg-bottom bg-no-repeat">e-commerce služby?</span>
            </h2>
            <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
              Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody
              prostredníctvom pokročilých technológií a overených stratégií.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">
            {processCards.map(card => (
              <div
                key={card.no}
                className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="flex items-center gap-5">
                  <p className="text-[28px] font-bold leading-8 text-secondary">{card.no}</p>
                  <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                </div>
                <h3 className="text-[22px]/6 font-bold left-6 mt-5">{card.title}</h3>
                <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— “ČO ROBÍME” SECTION (unchanged design, dynamic bullet list) ——— */}
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
                  Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody
                  prostredníctvom pokročilých technológií a overených stratégií.
                </p>

                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">
                  {service.benefits.slice(0, 5).map((b, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span>
                        <PricebulletPointIcon className="text-[#07D673]" />
                      </span>
                      <p>{b}</p>
                    </li>
                  ))}
                </ul>

                <Link href="/contact-us" className="btn mt-7 md:mt-12">
                  Začať spoluprácu
                </Link>
              </div>

              <div className="max-w-[650px] w-full" data-aos="flip-left" data-aos-duration="1000">
                <Image
                  src="/assets/images/marketing.png"
                  className="w-full h-full object-cover"
                  alt="marketing"
                  width={650}
                  height={522}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PRICING TABLE (unchanged design, dynamic rows) ——— */}
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
              Tvorba e-shopu na kľúč od {service.pricing[0]?.price_range?.split(' ')[0]} s kompletným riešením.
            </p>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cena e-shopu zahŕňa dizajn, programovanie a podporu - bez skrytých poplatkov.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
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

              {/* Rows */}
              <div>
                {service.pricing.map((p, idx) => (
                  <div
                    key={p.type}
                    className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      idx === service.pricing.length - 1
                        ? 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800'
                        : ''
                    }`}
                  >
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div className="font-semibold text-gray-900 dark:text-white">{p.type}</div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-secondary">{p.price_range}</span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {(p.features || []).join(', ')}
                      </div>
                      <div className="text-center text-gray-600 dark:text-gray-400">
                        {p.delivery_time || p.duration || p.roi || p.monthly_cost || '—'}
                      </div>
                    </div>
                    {idx !== service.pricing.length - 1 && (
                      <div className="mt-4">
                        <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
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

      {/* ——— FAQ ——— */}
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

          {/* If your FAQuestions supports props, pass the data: */}
          {/* <FAQuestions items={service.faqs} /> */}
          {/* If it doesn't, keep as-is and just rely on JSON-LD for rich results: */}
          <FAQuestions />
        </div>
      </section>

      {/* ——— Portfolio, Testimonials, CTA (unchanged) ——— */}
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
              <Image src="/assets/images/1.png" className="h-full w-full object-cover hover:scale-110 duration-300" alt="E-commerce riešenie 1" width={754} height={521} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/assets/images/2.png" className="h-full w-full object-cover hover:scale-110 duration-300" alt="E-commerce riešenie 2" width={754} height={521} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/assets/images/3.png" className="h-full w-full object-cover hover:scale-110 duration-300" alt="E-commerce riešenie 3" width={754} height={401} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/assets/images/4.png" className="h-full w-full object-cover hover:scale-110 duration-300" alt="E-commerce riešenie 4" width={754} height={401} />
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

      {/* JSON-LD (app router friendly) */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
