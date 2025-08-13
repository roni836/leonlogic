import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'SEO optimalizácia | Top pozície Google | Organický traffic',
  description: 'Profesionálna SEO optimalizácia. Zvýšte organický traffic o 200%, TOP 3 pozície Google, keyword research, link building.',
};

export default function SEOOptimalizaciaPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'SEO optimalizácia', url: '/sluzby/seo-optimalizacia' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SEO optimalizácia
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pozície vo vyhľadávačoch Google
            </p>
          </div>

          {/* What is SEO */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je SEO optimalizácia?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SEO optimalizácia je proces zlepšovania pozícií webstránky vo vyhľadávačoch pre relevantné kľúčové slová. Moderné SEO zahŕňa technickú optimalizáciu, tvorbu kvalitného obsahu, výskum kľúčových slov, budovanie odkazov, lokálne SEO a kontinuálnu analýzu výkonnosti.
              </p>
            </div>
          </section>

          {/* Why Invest in SEO */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do SEO optimalizácie?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Organický traffic</h3>
                  <p className="text-gray-700">Zvýšenie organickej návštevnosti o 100-300%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">TOP pozície</h3>
                  <p className="text-gray-700">TOP 3 pozície pre cielené kľúčové slová</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konverzie</h3>
                  <p className="text-gray-700">Vyššia konverzná miera z organického trafficu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dlhodobá viditeľnosť</h3>
                  <p className="text-gray-700">Dlhodobá viditeľnosť bez platených reklám</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ROI</h3>
                  <p className="text-gray-700">Návratnosť investície 300-500%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dôveryhodnosť</h3>
                  <p className="text-gray-700">Budovanie authority a dôveryhodnosti</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces SEO optimalizácie
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO analýza</h3>
                  <p className="text-gray-700">Komplexná analýza webstránky a konkurenčný výskum</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Stratégia kľúčových slov</h3>
                  <p className="text-gray-700">Výskum kľúčových slov a SEO stratégia</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">On-page optimalizácia</h3>
                  <p className="text-gray-700">Optimalizácia obsahu, meta tagov a technického SEO</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Budovanie odkazov</h3>
                  <p className="text-gray-700">Budovanie kvalitných spätných odkazov a monitoring pozícií</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník SEO optimalizácie
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokálne SEO</h3>
                  <div className="text-4xl font-bold text-yellow-600 mb-6">275 - 735 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Miestne firmy
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Očakávané výsledky: 3-6 mesiacov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-yellow-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Národné SEO</h3>
                  <div className="text-4xl font-bold text-yellow-600 mb-6">735 - 1 840 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      E-shopy, služby
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Očakávané výsledky: 4-8 mesiacov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Podnikové SEO</h3>
                  <div className="text-4xl font-bold text-yellow-600 mb-6">1 840+ €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Veľké firmy
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Očakávané výsledky: 6-12 mesiacov
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
                Často kladené otázky o SEO
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako dlho trvá, kým uvidím výsledky SEO?
                  </h3>
                  <p className="text-gray-700">
                    Prvé zlepšenia sú viditeľné za 2-3 mesiace, významný rast za 4-6 mesiacov. SEO je dlhodobá stratégia s najlepšími výsledkami po 6-12 mesiacoch kontinuálnej práce.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Poskytujete služby aj pre rôzne regióny?
                  </h3>
                  <p className="text-gray-700">
                    Áno, poskytujeme komplexné SEO služby pre firmy v rôznych regiónoch.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké SEO služby poskytujete?
                  </h3>
                  <p className="text-gray-700">
                    Keyword research, technický SEO audit, on-page optimalizáciu, tvorbu obsahu, link building, lokálne SEO, konkurenčnú analýzu a mesačné reporty.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Garantujete konkrétne pozície?
                  </h3>
                  <p className="text-gray-700">
                    Nezaručujeme konkrétne pozície (žiadna seriózna SEO agentúra nemôže), ale garantujeme merateľné zlepšenia v organickom trafficu a pozíciách kľúčových slov.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Robíte SEO audit?
                  </h3>
                  <p className="text-gray-700">
                    Áno, začíname komplexným SEO auditom identifikujúcim technické problémy, content gaps, keyword príležitosti a konkurenčnú analýzu s akčným plánom.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké nástroje používate pre SEO?
                  </h3>
                  <p className="text-gray-700">
                    Používame Ahrefs, SEMrush, Google Search Console, Google Analytics, Screaming Frog, PageSpeed Insights a vlastné monitoring tools pre tracking progress.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-yellow-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s SEO optimalizáciou už dnes
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašimi pozíciami vo vyhľadávačoch
              </p>
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

