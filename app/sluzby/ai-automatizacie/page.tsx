import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'AI automatizácie | Automatizácie s umelou inteligenciou',
  description: 'Inteligentné automatizácie procesov s AI. Úspora času 70%, machine learning, RPA riešenia. Automatizujte rutinné úlohy vo vašej firme.',
};

export default function AIAutomatizaciePage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'AI Automatizácie', url: '/sluzby/ai-automatizacie' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automatizácie s umelou inteligenciou
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inteligentné riešenia procesov
            </p>
          </div>

          {/* What is AI Automation */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo sú automatizácie s umelou inteligenciou?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Automatizácie s umelou inteligenciou sú inteligentné systémy využívajúce AI na automatizáciu komplexných podnikových procesov. Na rozdiel od tradičnej automatizácie dokážu rozhodovať, učiť sa a prispôsobovať na základe dát, čím nahradzujú rutinné ľudské úlohy.
              </p>
            </div>
          </section>

          {/* Why Invest */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do AI automatizácií?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Úspora času</h3>
                  <p className="text-gray-700">Úspora času zamestnancov o 60-80%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Eliminácia chýb</h3>
                  <p className="text-gray-700">Eliminácia ľudských chýb v rutinných úlohách</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Spracovanie dát</h3>
                  <p className="text-gray-700">Spracovanie veľkých objemov dát</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Inteligentné rozhodovanie</h3>
                  <p className="text-gray-700">Inteligentné rozhodovanie na základe dát</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 prevádzka</h3>
                  <p className="text-gray-700">Kontinuálna prevádzka 24/7</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Škálovateľnosť</h3>
                  <p className="text-gray-700">Škálovateľnosť podľa potrieb firmy</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces AI automatizácie
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mapovanie procesov</h3>
                  <p className="text-gray-700">Analýza a mapovanie procesov vhodných na automatizáciu</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vývoj AI modelov</h3>
                  <p className="text-gray-700">Vývoj a tréning AI modelov pre konkrétne úlohy</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrácia pracovného toku</h3>
                  <p className="text-gray-700">Integrácia AI riešení do existujúcich pracovných tokov</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring a učenie</h3>
                  <p className="text-gray-700">Kontinuálne sledovanie výkonu a zlepšovanie presnosti</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník AI automatizácií
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Jednoduché automatizácie</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">1 840 - 7 360 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Základné AI úlohy
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ROI: 3-6 mesiacov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Komplexné AI systémy</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">7 360 - 23 000 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ML modely, predikcie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ROI: 6-12 mesiacov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Podnikové platformy</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">23 000+ €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Plná AI transformácia
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ROI: 12-18 mesiacov
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
                Často kladené otázky o AI automatizáciách
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké procesy sa dajú automatizovať pomocou AI?
                  </h3>
                  <p className="text-gray-700">
                    AI dokáže automatizovať faktúrovanie, spracovanie emailov, analýzu dokumentov, predpoveď predajov, správu skladov, vyhodnocovanie životopisov, zákaznícku segmentáciu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aký je rozdiel medzi RPA a AI automatizáciou?
                  </h3>
                  <p className="text-gray-700">
                    RPA vykonáva definované kroky, AI automatizácia dokáže rozhodovať a prispôsobovať sa. AI zvládne neštruktúrované dáta, učí sa zo vzorov a pracuje s výnimkami.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Potrebujeme vlastné dáta pre AI automatizáciu?
                  </h3>
                  <p className="text-gray-700">
                    Áno, kvalitné dáta sú kľúčové. Pomôžeme pripraviť, vyčistiť a štruktúrovať existujúce dáta. AI modely sa trénujú na vašich špecifických procesoch.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako sa AI systém učí a zlepšuje?
                  </h3>
                  <p className="text-gray-700">
                    Systém sa kontinuálne učí z nových dát, spätnej väzby, interakcií používateľov a metrík výkonu. Pravidelne dolaďujeme modely pre optimálnu presnosť.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Je AI automatizácia bezpečná a spoľahlivá?
                  </h3>
                  <p className="text-gray-700">
                    Áno, implementujeme robustné bezpečnostné opatrenia, zálohovacie systémy, audit záznamy a ľudský dohľad pre kritické procesy. Systémy majú 95%+ presnosť.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-blue-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s AI automatizáciou už dnes
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme automatizovať vaše procesy
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

