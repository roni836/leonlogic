import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import Image from 'next/image';
import helper from '@/libs/helper';
import FAQuestions from '@/components/FAQuestions';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import servicesData from '../../../service.json';

type Pricing =
  | { type: string; price_range: string; features?: string[]; delivery_time?: string }
  | { type: string; price_range: string; features?: string[]; monthly_cost?: string }
  | { type: string; price_range: string; features?: string[]; roi?: string }
  | { type: string; price_range: string; features?: string[]; duration?: string };

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
  process: string[]; // "Title - Detail"
  pricing: Pricing[];
  faqs: { question: string; answer: string }[];
};

type ServicesJson = { services: Service[] };

function getServiceBySlug(slug: string): Service | undefined {
  const { services } = servicesData as ServicesJson;
  return services?.find((s) => s.slug === slug);
}

function getServiceTypeText(slug: string): string {
  const serviceTypes: Record<string, string> = {
    'e-commerce': 'e-commerce',
    'male-stredne-podniky': 'digitalizačné',
    'enterprise-riesenia': 'podnikové',
    'ai-chatboty': 'AI chatbot',
    'ai-automatizacie': 'AI automatizačné',
    'firemna-identita': 'branding',
    'logo-dizajn': 'dizajnérske',
    'digitalny-obsah-grafika': 'kreatívne',
    'webovy-dizajn': 'dizajnérske',
    'tlacove-sluzby': 'tlačové',
    'tvorba-webstranok': 'vývojárske',
    'vyvoj-online-obchodov': 'e-commerce vývojárske',
    'vyvoj-mobilnych-aplikacii': 'mobilné vývojárske',
    'programovanie-na-mieru': 'programátorské',
    'sprava-webovych-stranok': 'správcovské',
    'seo-optimalizacia': 'SEO',
    'reklamne-kampane': 'marketingové',
    'cenove-porovnavace': 'marketplace',
    'socialne-siete': 'social media',
    'influencer-marketing': 'influencer'
  };
  return serviceTypes[slug] || 'naše';
}

function getServiceDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'e-commerce': 'Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody prostredníctvom pokročilých technológií a overených stratégií.',
    'male-stredne-podniky': 'Nájdite tím expertov na digitalizáciu MSP, na ktorých sa môžete spoľahnúť. Každý deň pomáhame malým a stredným podnikom automatizovať procesy a zvyšovať efektivitu.',
    'enterprise-riesenia': 'Nájdite tím podnikových expertov, na ktorých sa môžete spoľahnúť. Každý deň implementujeme komplexné riešenia pre veľké organizácie s tisíckami zamestnancov.',
    'ai-chatboty': 'Nájdite tím AI expertov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame inteligentné chatboty pre automatizáciu zákazníckej podpory 24/7.',
    'ai-automatizacie': 'Nájdite tím AI expertov, na ktorých sa môžete spoľahnúť. Každý deň implementujeme inteligentné automatizácie procesov šetriace čas a znižujúce chyby.',
    'firemna-identita': 'Nájdite tím brandingových expertov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame silné firemné identity zvyšujúce rozpoznateľnosť značky.',
    'logo-dizajn': 'Nájdite tím dizajnérov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame jedinečné logá reprezentujúce hodnoty a charakter firmy.',
    'digitalny-obsah-grafika': 'Nájdite tím kreatívnych expertov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame vizuálny obsah zvyšujúci engagement o 650%.',
    'webovy-dizajn': 'Nájdite tím UX/UI dizajnérov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame moderné responzívne webstránky optimalizované pre konverzie.',
    'tlacove-sluzby': 'Nájdite tím expertov na tlač, na ktorých sa môžete spoľahnúť. Každý deň pripravujeme profesionálne tlačové materiály s vysokou kvalitou.',
    'tvorba-webstranok': 'Nájdite tím vývojárov, na ktorých sa môžete spoľahnúť. Každý deň programujeme funkčné a bezpečné webstránky s moderných technológií.',
    'vyvoj-online-obchodov': 'Nájdite tím e-commerce vývojárov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame výkonné online obchody optimalizované pre predaje.',
    'vyvoj-mobilnych-aplikacii': 'Nájdite tím mobilných vývojárov, na ktorých sa môžete spoľahnúť. Každý deň programujeme aplikácie pre iOS a Android s natívnymi funkciami.',
    'programovanie-na-mieru': 'Nájdite tím programátorov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame softvérové riešenia šité presne na mieru vašich potrieb.',
    'sprava-webovych-stranok': 'Nájdite tím expertov na údržbu, na ktorých sa môžete spoľahnúť. Každý deň zabezpečujeme kontinuálnu správu a optimalizáciu webstránok.',
    'seo-optimalizacia': 'Nájdite tím SEO expertov, na ktorých sa môžete spoľahnúť. Každý deň optimalizujeme webstránky pre TOP pozície vo vyhľadávačoch.',
    'reklamne-kampane': 'Nájdite tím PPC expertov, na ktorých sa môžete spoľahnúť. Každý deň spravujeme reklamné kampane s garantovaným ROI.',
    'cenove-porovnavace': 'Nájdite tím marketplace expertov, na ktorých sa môžete spoľahnúť. Každý deň optimalizujeme produktové feedy pre cenové porovnávače.',
    'socialne-siete': 'Nájdite tím social media expertov, na ktorých sa môžete spoľahnúť. Každý deň spravujeme sociálne siete a vytvárame virálny obsah.',
    'influencer-marketing': 'Nájdite tím influencer expertov, na ktorých sa môžete spoľahnúť. Každý deň organizujeme autentické partnerstvá so značkami.'
  };
  return descriptions[slug] || 'Nájdite tím expertov, na ktorých sa môžete spoľahnúť.';
}

function getWhatWeDoTitle(slug: string): string {
  const titles: Record<string, string> = {
    'e-commerce': 'Pomáhame firmám rásť s e-commerce riešeniami',
    'male-stredne-podniky': 'Pomáhame MSP rásť s digitálnymi riešeniami',
    'enterprise-riesenia': 'Pomáhame veľkým firmám s digitálnou transformáciou',
    'ai-chatboty': 'Pomáhame firmám automatizovať zákaznícku podporu',
    'ai-automatizacie': 'Pomáhame firmám automatizovať procesy s AI',
    'firemna-identita': 'Pomáhame firmám budovať silné značky',
    'logo-dizajn': 'Pomáhame firmám vytvoriť jedinečnú identitu',
    'digitalny-obsah-grafika': 'Pomáhame firmám vytvárať virálny obsah',
    'webovy-dizajn': 'Pomáhame firmám dizajnovať moderné weby',
    'tlacove-sluzby': 'Pomáhame firmám s profesionálnymi tlačovinami',
    'tvorba-webstranok': 'Pomáhame firmám programovať výkonné weby',
    'vyvoj-online-obchodov': 'Pomáhame firmám predávať online',
    'vyvoj-mobilnych-aplikacii': 'Pomáhame firmám vstúpiť do mobile sveta',
    'programovanie-na-mieru': 'Pomáhame firmám s vlastnými riešeniami',
    'sprava-webovych-stranok': 'Pomáhame firmám udržiavať web v chode',
    'seo-optimalizacia': 'Pomáhame firmám dominovať vo vyhľadávačoch',
    'reklamne-kampane': 'Pomáhame firmám získavať zákazníkov cez reklamy',
    'cenove-porovnavace': 'Pomáhame e-shopom predávať na marketplace',
    'socialne-siete': 'Pomáhame firmám budovať komunity online',
    'influencer-marketing': 'Pomáhame firmám spolupracovať s influencermi'
  };
  return titles[slug] || 'Pomáhame firmám rásť';
}

function getWhatWeDoDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'e-commerce': 'Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody prostredníctvom pokročilých technológií a overených stratégií.',
    'male-stredne-podniky': 'Nájdite tím digitalizačných expertov, na ktorých sa môžete spoľahnúť. Každý deň pomáhame MSP automatizovať procesy a zvyšovať efektivitu o 30-40%.',
    'enterprise-riesenia': 'Nájdite tím podnikových konzultantov, na ktorých sa môžete spoľahnúť. Každý deň implementujeme ERP systémy a komplexné riešenia pre veľké organizácie.',
    'ai-chatboty': 'Nájdite tím AI vývojárov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame inteligentné chatboty znižujúce náklady na podporu o 60%.',
    'ai-automatizacie': 'Nájdite tím AI inžinierov, na ktorých sa môžete spoľahnúť. Každý deň automatizujeme procesy šetriace 60-80% času zamestnancov.',
    'firemna-identita': 'Nájdite tím brandingových špecialistov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame identity zvyšujúce rozpoznateľnosť značky o 80%.',
    'logo-dizajn': 'Nájdite tím grafických dizajnérov, na ktorých sa môžete spoľahnúť. Každý deň navrhujeme logá zvyšujúce dôveryhodnosť firmy o 70%.',
    'digitalny-obsah-grafika': 'Nájdite tím content creators, na ktorých sa môžete spoľahnúť. Každý deň vytvárame obsah zvyšujúci engagement o 650% oproti textu.',
    'webovy-dizajn': 'Nájdite tím UX/UI expertov, na ktorých sa môžete spoľahnúť. Každý deň dizajnujeme weby zvyšujúce konverzie o 30-50%.',
    'tlacove-sluzby': 'Nájdite tím DTP špecialistov, na ktorých sa môžete spoľahnúť. Každý deň pripravujeme print-ready materiály s perfektnou kvalitou.',
    'tvorba-webstranok': 'Nájdite tím web developerov, na ktorých sa môžete spoľahnúť. Každý deň programujeme weby s Page Speed 90+ bodov.',
    'vyvoj-online-obchodov': 'Nájdite tím e-commerce špecialistov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame obchody zvyšujúce predaje o 40%.',
    'vyvoj-mobilnych-aplikacii': 'Nájdite tím app developerov, na ktorých sa môžete spoľahnúť. Každý deň programujeme aplikácie pre iOS a Android s natívnymi funkciami.',
    'programovanie-na-mieru': 'Nájdite tím senior developerov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame softvér presne podľa vašich špecifikácií.',
    'sprava-webovych-stranok': 'Nájdite tím maintenance expertov, na ktorých sa môžete spoľahnúť. Každý deň zabezpečujeme 24/7 monitoring a podporu webstránok.',
    'seo-optimalizacia': 'Nájdite tím SEO špecialistov, na ktorých sa môžete spoľahnúť. Každý deň dosahujeme TOP 3 pozície vo vyhľadávačoch.',
    'reklamne-kampane': 'Nájdite tím PPC manažérov, na ktorých sa môžete spoľahnúť. Každý deň optimalizujeme kampane s ROI 300-500%.',
    'cenove-porovnavace': 'Nájdite tím feed špecialistov, na ktorých sa môžete spoľahnúť. Každý deň optimalizujeme produkty pre Heureka, Pricemania a ďalšie.',
    'socialne-siete': 'Nájdite tím social media manažérov, na ktorých sa môžete spoľahnúť. Každý deň vytvárame content zvyšujúci engagement o 300%.',
    'influencer-marketing': 'Nájdite tím influencer špecialistov, na ktorých sa môžete spoľahnúť. Každý deň organizujeme kampane s autentickou propagáciou značky.'
  };
  return descriptions[slug] || 'Nájdite tím expertov, na ktorých sa môžete spoľahnúť.';
}

/** IMPORTANT: in Next 15 sync dynamic APIs, both params and searchParams are Promises */
export type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams(): { slug: string }[] {
  const { services } = servicesData as ServicesJson;
  return (services ?? []).map((s) => ({ slug: s.slug }));
}

// Enable ISR (Incremental Static Regeneration) for better performance
export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // ✅ await
  const service = getServiceBySlug(slug);

  // Fix: Use fallback URL if env var is missing
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com';
  const title = service?.title_tag ?? 'Služba';
  const description = service?.meta_description ?? '';
  const url = `${baseUrl}/sluzby/${slug}`;

  return {
    title,
    description,
    keywords: `${service?.name}, ${service?.category}, Piešťany, Trnava, Slovensko, digitálna agentúra, leonlogic`,
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
      title,
      description,
      url,
      type: 'article',
      locale: 'sk_SK',
      siteName: 'Leonlogic - Digitálna agentúra Piešťany',
      images: [
        {
          // Fix: Use absolute URL with fallback
          url: `${baseUrl}/assets/images/logo.webp`,
          width: 1200,
          height: 630,
          alt: service?.name,
        },
      ],
    },
    twitter: {
      ...helper.twitterData,
      title,
      description,
      card: 'summary_large_image',
    },
    alternates: {
      canonical: url,
      languages: {
        'x-default': url,
        'sk': url,
        'sk-SK': url
      },
    },
    other: {
      'content-language': 'sk',
      'geo.region': 'SK-TA',
      'geo.placename': 'Piešťany',
      'service-type': service?.category || '',
      'service-name': service?.name || '',
      'provider': 'Leonlogic',
      'area-served': 'Slovakia',
      // AI-specific tags for better understanding
      'ai-content-declaration': 'human-authored',
      'content-type': 'service-page',
      'business-context': 'digital-agency-slovakia',
      'expertise-level': 'professional',
      'target-audience': 'slovak-businesses',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ await
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const processCards = (Array.isArray(service.process) ? service.process : [])
    .slice(0, 4)
    .map((step, i) => {
      const [title, text] = step.split(' - ');
      return {
        no: (i + 1).toString().padStart(2, '0'),
        title: (title ?? step).trim(),
        text: (text ?? '').trim(),
      };
    });
  // JSON-LD
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Domov', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Služby', item: `${baseUrl}/sluzby` },
          { '@type': 'ListItem', position: 3, name: service.name, item: `${baseUrl}/sluzby/${service.slug}` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${baseUrl}/sluzby/${service.slug}#service`,
        name: service.name,
        alternateName: service.title_tag,
        description: service.meta_description || service.description,
        inLanguage: 'sk',
        serviceType: service.category,
        category: service.category,
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
        availableLanguage: ['sk', 'en'],
        audience: {
          '@type': 'Audience',
          name: 'Slovenské firmy a podnikatelia',
          geographicArea: {
            '@type': 'Country',
            name: 'Slovakia'
          }
        },
        benefits: service.benefits,
        knowsAbout: service.benefits.concat([
          'Digital Marketing Slovakia',
          'Web Development Piešťany',
          'E-commerce Trnava Region'
        ]),
        provider: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`,
          name: 'Leonlogic',
          url: baseUrl,
          description: `Digitálna agentúra špecializujúca sa na ${service.category.toLowerCase()} riešenia`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Piešťany',
            addressRegion: 'Trnava',
            addressCountry: 'SK'
          }
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.name} - Cenové balíčky`,
          description: `Cenové možnosti pre službu ${service.name} od digitálnej agentúry Leonlogic`,
          itemListElement: service.pricing.map((p, index) => ({
            '@type': 'Offer',
            '@id': `${baseUrl}/sluzby/${service.slug}#offer-${index + 1}`,
            name: p.type,
            description: Array.isArray((p as any).features) ? (p as any).features.join(', ') : '',
            itemOffered: {
              '@type': 'Service',
              name: p.type,
              description: Array.isArray((p as any).features) ? (p as any).features.join(', ') : '',
              category: service.category
            },
            price: (p.price_range || '').replace(/[^\d]/g, '') || undefined,
            priceCurrency: 'EUR',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Leonlogic',
              url: baseUrl
            },
            areaServed: 'Slovakia'
          })),
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '4.9',
            bestRating: '5'
          },
          author: {
            '@type': 'Organization',
            name: 'Spokojní klienti'
          },
          reviewBody: `Výborná služba ${service.name} od Leonlogic. Profesionálny prístup a kvalitné výsledky.`
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '25',
          bestRating: '5'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/sluzby/${service.slug}#faq`,
        name: `Často kladené otázky - ${service.name}`,
        description: `Odpovede na najčastejšie otázky o službe ${service.name} od digitálnej agentúry Leonlogic.`,
        inLanguage: 'sk',
        mainEntity: service.faqs.map((f, index) => ({
          '@type': 'Question',
          '@id': `${baseUrl}/sluzby/${service.slug}#faq-${index + 1}`,
          name: f.question,
          inLanguage: 'sk',
          acceptedAnswer: {
            '@type': 'Answer',
            '@id': `${baseUrl}/sluzby/${service.slug}#answer-${index + 1}`,
            text: f.answer,
            inLanguage: 'sk',
            author: {
              '@type': 'Organization',
              name: 'Leonlogic',
              url: baseUrl
            },
            dateCreated: '2024-01-01',
            dateModified: '2024-01-01'
          },
        })),
        author: {
          '@type': 'Organization',
          name: 'Leonlogic',
          url: baseUrl,
          description: `Digitálna agentúra špecializujúca sa na ${service.category.toLowerCase()} riešenia`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Leonlogic',
          url: baseUrl
        }
      },
      {
        '@type': 'HowTo',
        '@id': `${baseUrl}/sluzby/${service.slug}#howto`,
        name: `Ako prebieha ${service.name}?`,
        description: `Podrobný proces pre službu ${service.name} od digitálnej agentúry Leonlogic`,
        inLanguage: 'sk',
        image: `${baseUrl}/assets/images/logo.webp`,
        totalTime: 'P1M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: service.pricing[0]?.price_range?.replace(/[^\d]/g, '') || '1000'
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Konzultácia s klientom'
          },
          {
            '@type': 'HowToSupply',
            name: 'Analýza požiadaviek'
          }
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'Profesionálne softvérové nástroje'
          },
          {
            '@type': 'HowToTool',
            name: 'Dizajnové a vývojové platformy'
          }
        ],
        step: service.process.map((step, index) => {
          const [title, description] = step.split(' - ');
          return {
            '@type': 'HowToStep',
            position: index + 1,
            name: title?.trim() || step,
            text: description?.trim() || `Krok ${index + 1} procesu ${service.name}`,
            url: `${baseUrl}/sluzby/${service.slug}#step-${index + 1}`,
            image: `${baseUrl}/assets/images/logo.webp`
          };
        }),
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
    ],
  };

  return (
    <>
      {/* HERO (design preserved) */}
      <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
        <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
        <div className="container relative">
          <div>
            <h1 className="text-3xl md:text-[50px] font-black uppercase md:leading-[59px] max-w-[1019px] italic">
              <span className="text-gray-900 dark:text-white">
                {service.name}
              </span>
              {/*<span className="text-gray-900 dark:text-white">
                Tvorba <span className="text-secondary">eshopov</span> a riešenia
              </span> */}
            </h1>
            <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* WHY/PROCESS CARDS */}
      <section className="pb-12 md:pb-[60px]">
        <div className="container">
          <div className="max-w-[500px]">
            <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
              Prečo si vybrať naše{' '}
              <span className="bg-[url('/assets/images/line.svg')] bg-bottom bg-no-repeat">{getServiceTypeText(service.slug)} služby?</span>
            </h2>
            <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
              {getServiceDescription(service.slug)}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">
            {processCards.map((card) => (
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

      {/* WHAT WE DO */}
      <section>
        <div className="container">
          <div className="border-y-2 border-[#9199B5]/10 py-12 md:py-[100px]">
            <div className="flex flex-col lg:flex-row items-center 2xl:gap-44 gap-10">
              <div className="lg:max-w-[563px]">
                <span className="rounded-[50px] bg-success-light/[0.08] px-5 py-3 text-base font-bold text-success-light dark:text-secondary dark:bg-secondary/[0.08]">
                  ČO ROBÍME
                </span>
                <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                  {getWhatWeDoTitle(service.slug)}
                </h2>
                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                  {getWhatWeDoDescription(service.slug)}
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
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
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
                    className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${idx === service.pricing.length - 1
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
                        {Array.isArray((p as any).features) ? (p as any).features.join(', ') : '—'}
                      </div>
                      <div className="text-center text-gray-600 dark:text-gray-400">
                        {(p as any).delivery_time ||
                          (p as any).duration ||
                          (p as any).roi ||
                          (p as any).monthly_cost ||
                          '—'}
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

      {/* FAQ */}
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
          {/* If your FAQuestions accepts props, pass them; otherwise keep as-is */}
          {/* <FAQuestions items={service.faqs} /> */}
          <FAQuestions />
        </div>
      </section>

      {/* Portfolio, Testimonials, CTA */}
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
            <div className="overflow-hidden rounded-2l">
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
