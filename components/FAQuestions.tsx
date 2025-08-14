'use client';

import { useMemo, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import MinusIcon from './Icons/MinusIcon';
import PlusIcon from './Icons/PlusIcon';

type FAQItem = { id?: number; question: string; answer: string };

type Props = {
  /** Optional data to render. If omitted or empty, component will use internal defaults. */
  items?: FAQItem[];
};

const DEFAULT_QUERIES: FAQItem[] = [
  {
    id: 1,
    question: 'Ako zvyčajne prebieha spolupráca?',
    answer:
      'Prvým krokom je úvodná konzultácia s naším expertom pre pochopenie vašich potrieb a pre prípravu presného riešenia. Nasleduje prezentácia a definovanie riešenia projektu a po odsúhlasení sa začne na samotnom vývoji systému. Klient je v procese neustále zahrnutý aby sa dosiahlo všetko podľa vašich predstáv. Na záver vám ukážeme, ako s hotovým projektom pracovať a diskutujeme, ako bude naša spolupráca fungovať v priebehu roka.',
  },
  {
    id: 2,
    question: 'Môžem si stránku editovať aj sám? Pomôžete mi s dodatočnými úpravami?',
    answer:
      'Áno, vytvárame stránky s jednoducho ovládateľným administračným rozhraním. Poskytneme vám základné školenie a sme k dispozícii pre akékolväk dodatočné úpravy alebo rozšírenia.',
  },
  {
    id: 3,
    question: 'Ako prebieha proces návrhu firemnej identity?',
    answer:
      'Začíname workshopom pre pochopenie vašej vízie a hodnôt, vytvoríme niekoľko konceptov loga a firemného štýlu, po výbere dopracujeme finálnu verziu a dodáme kompletný brand manuál s aplikáciami na rôzne materiály.',
  },
  {
    id: 4,
    question: 'Poskytujete podporu po spustení projektu?',
    answer:
      'Áno, poskytujeme technickú podporu a údržbu všetkých našich projektov. Môžeme sa dohodnúť na rôznych typoch podpory podľa vašich potrieb - od základnej technickej podpory až po kompletnú správu a údržbu.',
  },
  {
    id: 5,
    question: 'Čo zahŕňa vytvorenie webovej stránky?',
    answer:
      'Kompletný návrh a vývoj responzívnej webstránky, optimalizáciu pre vyhľadávače (SEO), nastavenie analytiky, základné školenie na správu obsahu a technickú podporu po spustení.',
  },
  {
    id: 6,
    question: 'Čo zahŕňa správa reklamných kampaní? Ako meriате úspešnosť?',
    answer:
      'Nastavenie a optimalizáciu Google Ads a Facebook kampaní, pravidelnú analýzu výkonnosti, A/B testovanie reklám a mesačné reporty s kľúčovými metrikami ako sú konverzie, CTR a náklady na akvizíciu.',
  },
  {
    id: 7,
    question: 'Ako dlho trvá vytvorenie webovej stránky?',
    answer:
      'Čas vývoja závisí od zložitosti projektu. Jednoduché stránky môžeme vytvoriť za 2-3 týždne, komplexnejšie projekty trvajú 4-8 týždňov. Vždy vás informujeme o presnom časovom harmonograme na začiatku spolupráce.',
  },
  {
    id: 8,
    question: 'Ako si môžem objednať vaše služby?',
    answer:
      'Môžete nás kontaktovať cez náš kontaktný formulár, telefonicky alebo emailom. Prvým krokom je vždy bezplatná konzultácia, kde si povieme o vašich potrebách a navrhneme najlepšie riešenie pre váš biznis.',
  },
];

const FAQuestions = ({ items }: Props) => {
  // Decide which data to use: incoming items (if non-empty) else defaults
  const data: Required<FAQItem>[] = useMemo(() => {
    const src = Array.isArray(items) && items.length > 0 ? items : DEFAULT_QUERIES;
    // Ensure every item has a stable numeric id
    return src.map((q, idx) => ({
      id: typeof q.id === 'number' ? q.id : idx + 1,
      question: q.question,
      answer: q.answer,
    }));
  }, [items]);

  // Start with first item's id active
  const [active, setActive] = useState<number | null>(data[0]?.id ?? null);

  const handleAccordionClick = (id: number) => {
    setActive(prev => (prev === id ? null : id));
  };

  return (
    <div
      className="accordion-container grid gap-7 md:grid-cols-2"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="space-y-5">
        {data.map((faq, i) => {
          return (
            i % 2 === 0 && (
              <div
                className="ac mt-0 rounded-2xl bg-white dark:bg-[#9199B5]/[0.12] border-none"
                key={faq.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="ac-header p-0!" itemProp="name">
                  <button
                    type="button"
                    className="ac-trigger after:hidden rtl:text-right! dark:text-white! p-5! text-left"
                    onClick={() => handleAccordionClick(faq.id)}
                  >
                    {faq.question}
                    <div className="trigger-icon ms-auto grid h-6 w-6 shrink-0 place-content-center">
                      {active === faq.id ? (
                        <MinusIcon className="minus-icon h-3 w-3 text-[#FB5D70]" />
                      ) : (
                        <PlusIcon className="plus-icon h-3 w-3" />
                      )}
                    </div>
                  </button>
                </h3>
                <AnimateHeight duration={600} height={active === faq.id ? 'auto' : 0}>
                  <div
                    className="ac-panel"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="px-5 pb-6 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]!"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </AnimateHeight>
              </div>
            )
          );
        })}
      </div>

      <div className="space-y-5">
        {data.map((faq, i) => {
          return (
            i % 2 !== 0 && (
              <div
                className="ac mt-0 rounded-2xl bg-white dark:bg-[#9199B5]/[0.12] border-none"
                key={faq.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="ac-header p-0!" itemProp="name">
                  <button
                    type="button"
                    className="ac-trigger after:hidden rtl:text-right dark:text-white! p-5! text-left"
                    onClick={() => handleAccordionClick(faq.id)}
                  >
                    {faq.question}
                    <div className="trigger-icon ms-auto grid h-6 w-6 shrink-0 place-content-center">
                      {active === faq.id ? (
                        <MinusIcon className="minus-icon h-3 w-3 text-[#FB5D70]" />
                      ) : (
                        <PlusIcon className="plus-icon h-3 w-3" />
                      )}
                    </div>
                  </button>
                </h3>
                <AnimateHeight duration={600} height={active === faq.id ? 'auto' : 0}>
                  <div
                    className="ac-panel"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="px-5 pb-6 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]!"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </AnimateHeight>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default FAQuestions;
