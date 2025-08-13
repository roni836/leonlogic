import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Tvorba webstránok | WordPress, React | Web development',
  description: 'Profesionálna tvorba webstránok. Responzívne weby, WordPress, rýchle načítanie, SEO optimalizácia. Webstránky od 1500€.',
};

export default function TvorbaWebstranokPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Tvorba webstránok', url: '/sluzby/tvorba-webstranok' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tvorba webstránok
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderný web development
            </p>
          </div>

          {/* What is Website Creation */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je tvorba webstránok?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tvorba webstránok je proces vývoja funkčných a responzívnych webových stránok pomocou moderných technológií. Zahŕňa frontend a backend programovanie, databázové riešenia, CMS integráciu, SEO optimalizáciu a testovanie pre dosiahnutie maximálneho výkonu a bezpečnosti.
              </p>
            </div>
          </section>

          {/* Why Choose Our Services */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo si vybrať naše služby vývoja webstránok?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Moderné technológie</h3>
                  <p className="text-gray-700">Moderné technológie (React, Vue, WordPress)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Responzívny dizajn</h3>
                  <p className="text-gray-700">Responzívny dizajn zameraný na mobily</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Page Speed</h3>
                  <p className="text-gray-700">Page Speed skóre 90+ bodov</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO optimalizácia</h3>
                  <p className="text-gray-700">SEO optimalizácia už od začiatku</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bezpečnosť</h3>
                  <p className="text-gray-700">Bezpečné a škálovateľné riešenia</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR compliance</h3>
                  <p className="text-gray-700">GDPR compliance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces vývoja webstránok
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technické plánovanie</h3>
                  <p className="text-gray-700">Výber technológií a architektúry webstránky</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend vývoj</h3>
                  <p className="text-gray-700">Kódovanie responzívneho dizajnu a interakcií</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend a CMS</h3>
                  <p className="text-gray-700">Vývoj backend funkcionalít a CMS integrácia</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-teal-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Testovanie a spustenie</h3>
                  <p className="text-gray-700">Komplexné testovanie a spustenie webstránky</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník tvorby webstránok
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vstupná stránka</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-6">505 - 830 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      WordPress, Webflow, Framer
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Responzívny dizajn, základné animácie
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-teal-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Podnikový web (4 stránky)</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-6">1 060 - 1 795 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      WordPress, Webflow, Framer
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      CMS, SEO, pokročilé animácie
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce/Booking (10 stránok)</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-6">1 980 - 3 680 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      WordPress, Webflow + e-commerce
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Platby, rezervácie, CMS, SEO
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
                Často kladené otázky o tvorbe webstránok
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Tvoríte webstránky pre firmy?
                  </h3>
                  <p className="text-gray-700">
                    Áno, špecializujeme sa na tvorbu webstránok pre firmy. Máme referencie od klientov z rôznych regiónov.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako dlho trvá vytvorenie webstránky?
                  </h3>
                  <p className="text-gray-700">
                    Jednoduchá prezentačka: 3-4 týždne. Podnikový web: 6-8 týždňov. Komplexná aplikácia: 3-6 mesiacov. Doba závisí od rozsahu funkcií a obsahu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Sú webstránky optimalizované pre vyhľadávače?
                  </h3>
                  <p className="text-gray-700">
                    Áno, všetky webstránky optimalizujeme pre Google: technické SEO, meta tagy, štruktúrované dáta, rýchlosť načítania, mobilnú optimalizáciu a keyword optimalizáciu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Môžeme upravovať obsah sami?
                  </h3>
                  <p className="text-gray-700">
                    Áno, implementujeme CMS (najčastejšie WordPress) s jednoduchým administrátorským panelom pre správu obsahu, obrázkov, blogov a základných nastavení.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aká je technická podpora?
                  </h3>
                  <p className="text-gray-700">
                    3 mesiace bezplatná podpora, potom mesačné maintenance balíky (100-300€) zahŕňajúce aktualizácie, zálohovanie, monitoring a menšie úpravy.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké technológie používate?
                  </h3>
                  <p className="text-gray-700">
                    Používame WordPress, React, Vue.js, Node.js, PHP, Laravel, HTML5, CSS3, JavaScript ES6+, MySQL, PostgreSQL a moderné nástroje nasadenia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-teal-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si profesionálnu webstránku
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašou webstránkou
              </p>
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

