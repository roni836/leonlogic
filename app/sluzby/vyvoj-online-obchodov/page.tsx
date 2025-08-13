import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Vývoj e-shopov | WooCommerce, Shopify | E-commerce',
  description: 'Profesionálny vývoj e-shopov a online obchodov. WooCommerce, Shopify, platobné brány, integrácie. Zvýšte predaje o 40%.',
};

export default function VyvojOnlineObchodovPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Vývoj online obchodov', url: '/sluzby/vyvoj-online-obchodov' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vývoj online obchodov
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-commerce development
            </p>
          </div>

          {/* What is E-commerce Development */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je vývoj online obchodov?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Vývoj online obchodov je špecializovaný proces tvorby e-shopov s kompletnými e-commerce funkcionalitami. Zahŕňa správu produktov, nákupný košík, platobné brány, správu objednávok, riadenie skladov, integrácie s dopravcami a účtovnými systémami.
              </p>
            </div>
          </section>

          {/* Why Choose Our E-commerce Experts */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo si vybrať našich e-commerce expertov?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Skúsenosti</h3>
                  <p className="text-gray-700">5+ rokov skúseností s e-commerce</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrácie</h3>
                  <p className="text-gray-700">Integrácie so službami</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimalizácia konverzií</h3>
                  <p className="text-gray-700">Optimalizácia konverzií a používateľských ciest</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-channel</h3>
                  <p className="text-gray-700">Multi-channel predaj (web, mobil, sociálne siete)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytika</h3>
                  <p className="text-gray-700">Pokročilé analytiky a reporting</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatizácia</h3>
                  <p className="text-gray-700">Automatizácia marketingu</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces vývoja e-shopov
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nastavenie e-commerce</h3>
                  <p className="text-gray-700">Nastavenie produktov, kategórií a platobných metód</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimalizácia konverzií</h3>
                  <p className="text-gray-700">Optimalizácia nákupného procesu pre vyššie konverzie</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Platby a doprava</h3>
                  <p className="text-gray-700">Integrácia platobných brán a dopravcov</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketingové nástroje</h3>
                  <p className="text-gray-700">Napojenie na porovnávače cien, analytiky a remarketing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník vývoja e-shopov
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Základný e-shop</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-6">1 980 - 2 345 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Do 50 produktov, základné platby
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      WordPress, WooCommerce
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-emerald-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Štandardný e-shop</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-6">2 900 - 3 220 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Neobmedzené produkty, CMS, SEO
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Webflow, Shopify
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prémiový e-shop</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-6">3 680 - 4 600 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Pokročilé funkcie, integrácie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Custom riešenia, API
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
                Často kladené otázky o vývoji e-shopov
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké e-commerce platformy používate?
                  </h3>
                  <p className="text-gray-700">
                    Používame WooCommerce, Shopify, Magento, PrestaShop a vytvárame riešenia na mieru podľa špecifických požiadaviek vašeho podnikania.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké platobné metódy integrujete?
                  </h3>
                  <p className="text-gray-700">
                    Integrujeme všetky populárne platobné brány: PayPal, Stripe, bankové prevody a dobierky.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Robíte integrácie s externými systémami?
                  </h3>
                  <p className="text-gray-700">
                    Áno, integrujeme s účtovnými systémami, skladovými systémami, dopravcami a marketplace.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako optimalizujete e-shop pre konverzie?
                  </h3>
                  <p className="text-gray-700">
                    Optimalizujeme checkout proces, loading speed, mobilné používanie, fotografie produktov, popisky, reviews systém, súvisiace produkty a abandoned cart recovery.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Poskytujete školenie pre správu e-shopu?
                  </h3>
                  <p className="text-gray-700">
                    Áno, poskytujeme kompletné školenie pre administráciu: pridávanie produktov, správa objednávok, inventory management, analytiky a marketing tools.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-emerald-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si profesionálny e-shop
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vaším online obchodom
              </p>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

