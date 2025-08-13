import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Firemná identita | Branding a dizajn značky',
  description: 'Profesionálna firemná identita a branding. Logo dizajn, vizuálna identita, brand guidelines. Zvýšte rozpoznateľnosť značky o 80%.',
};

export default function FiremnaIdentitaPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Firemná identita', url: '/sluzby/firemna-identita' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Firemná identita a branding
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dizajn značky
            </p>
          </div>

          {/* What is Corporate Identity */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je firemná identita?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Firemná identita je súhrn vizuálnych a komunikačných prvkov, ktoré definujú charakter a hodnoty značky. Profesionálna firemná identita zahŕňa logo dizajn, farebnú paletu, typografiu, komunikačný štýl, vizuálne materiály a brand guidelines.
              </p>
            </div>
          </section>

          {/* Why Invest */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do firemnej identity?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rozpoznateľnosť</h3>
                  <p className="text-gray-700">Zvýšenie rozpoznateľnosti značky o 80%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dôvera</h3>
                  <p className="text-gray-700">Budovanie dôvery u zákazníkov</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Diferenciaция</h3>
                  <p className="text-gray-700">Odlíšenie od konkurencie</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konzistencia</h3>
                  <p className="text-gray-700">Konzistentná komunikácia vo všetkých kanáloch</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hodnota</h3>
                  <p className="text-gray-700">Vyššia vnímaná hodnota produktov a služieb</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Profesionalita</h3>
                  <p className="text-gray-700">Profesionálny vzhľad firmy</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces tvorby firemnej identity
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Výskum značky</h3>
                  <p className="text-gray-700">Workshop na definovanie hodnôt, vízie a osobnosti značky</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vizuálny koncept</h3>
                  <p className="text-gray-700">Vývoj vizuálnych konceptov loga, farieb a typografie</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Manuál značky</h3>
                  <p className="text-gray-700">Vytvorenie kompletného manuálu použitia značky</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Aplikácie značky</h3>
                  <p className="text-gray-700">Aplikácia identity na všetky materiály a kanály</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník firemnej identity
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Základný balík</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-6">2 300 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Logo a brand guidelines
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Vizitky a základné materiály
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 3-4 týždne
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Štandardný balík</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-6">3 900 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      + rozšírené guidelines
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Email šablóny
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Social media grafiky
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 4-6 týždňov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prémiový balík</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-6">5 750 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Kompletná identita
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Prezentácie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Všetky aplikácie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 6-8 týždňov
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
                Často kladené otázky o firemnej identite
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Čo obsahuje kompletná firemná identita?
                  </h3>
                  <p className="text-gray-700">
                    Kompletná identita obsahuje logo a varianty, farebnú paletu, typografiu, brand guidelines, vizitky, hlavičkové papiere, prezentačné šablóny a online materiály.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako dlho trvá vytvorenie firemnej identity?
                  </h3>
                  <p className="text-gray-700">
                    Kompletná firemná identita sa vytvorí za 4-8 týždňov. Proces zahŕňa workshop značky, vývoj konceptu, návrhové iterácie a finalizáciu všetkých materiálov.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dodávate manuál značky?
                  </h3>
                  <p className="text-gray-700">
                    Áno, každá firemná identita obsahuje detailný manuál značky s pravidlami použitia loga, farieb, typografie, komunikačného tónu a aplikácie.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Môžete prepracovať existujúcu identitu?
                  </h3>
                  <p className="text-gray-700">
                    Áno, špecializujeme sa aj na rebranding existujúcich firiem. Analyzujeme súčasnú identitu, definujeme nové smery a postupne transformujeme značku.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké formáty súborov dodávate?
                  </h3>
                  <p className="text-gray-700">
                    Dodávame logo a materiály vo všetkých potrebných formátoch: AI, EPS, PDF (pre tlač), PNG, SVG (pre web), JPG a špecifické formáty pre rôzne aplikácie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-purple-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si profesionálnu firemnú identitu
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašou značkou
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

