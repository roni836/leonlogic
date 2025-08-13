import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Logo dizajn | Profesionálna tvorba loga',
  description: 'Profesionálny logo dizajn. Jedinečné logá, všetky formáty, 3 revízie zadarmo. Logo hotové za 7 dní od 300€.',
};

export default function LogoDizajnPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Logo dizajn', url: '/sluzby/logo-dizajn' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dizajn loga
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionálna tvorba loga
            </p>
          </div>

          {/* What is Logo Design */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je logo dizajn?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Logo dizajn je proces tvorby grafického symbolu reprezentujúceho značku, firmu alebo produkt. Dobré logo je jednoduché, zapamätateľné, nadčasové a efektívne komunikuje hodnoty a charakter firmy. Je základným kameňom každej vizuálnej identity.
              </p>
            </div>
          </section>

          {/* Why Need Professional Logo */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo potrebujete profesionálne logo?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Prvý dojem</h3>
                  <p className="text-gray-700">Prvý dojem pri stretnutí so značkou</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dôveryhodnosť</h3>
                  <p className="text-gray-700">Zvýšenie dôveryhodnosti o 70%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rozpoznateľnosť</h3>
                  <p className="text-gray-700">Rozpoznateľnosť na trhu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konzistencia</h3>
                  <p className="text-gray-700">Konzistentnosť vo všetkých materiáloch</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dlhodobá investícia</h3>
                  <p className="text-gray-700">Dlhodobá investícia do značky</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Diferenciaция</h3>
                  <p className="text-gray-700">Diferenciácia od konkurencie</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces tvorby loga
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Výskum značky</h3>
                  <p className="text-gray-700">Výskum značky, konkurencie a cieľovej skupiny</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vývoj konceptu</h3>
                  <p className="text-gray-700">Tvorba viacerých konceptov loga v rôznych štýloch</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Prepracovanie dizajnu</h3>
                  <p className="text-gray-700">Prepracovanie vybraného konceptu a revízie</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Finálne dodanie</h3>
                  <p className="text-gray-700">Dodanie loga vo všetkých potrebných formátoch</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník logo dizajnu
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Základné logo</h3>
                  <div className="text-4xl font-bold text-green-600 mb-6">690 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      1 koncept, základné fonty a farby
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 5-7 dní
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Štandardné logo</h3>
                  <div className="text-4xl font-bold text-green-600 mb-6">1 035 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      2 koncepty, detailný font systém
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 7-10 dní
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prémiové logo</h3>
                  <div className="text-4xl font-bold text-green-600 mb-6">1 495 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      4 koncepty, kompletný brand systém
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 10-14 dní
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
                Často kladené otázky o logo dizajne
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Robíte logo dizajn pre firmy?
                  </h3>
                  <p className="text-gray-700">
                    Áno, poskytujeme profesionálny logo dizajn pre firmy v rôznych odvetviach - od wellness po výrobu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako prebieha proces tvorby loga?
                  </h3>
                  <p className="text-gray-700">
                    Proces zahŕňa 5 krokov: zadanie a výskum značky (1 deň), vývoj konceptov (2-3 dni), prezentácia návrhov (1 deň), revízie (2-3 dni), finalizácia a dodanie (1 deň).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Koľko konceptov loga dostaneme?
                  </h3>
                  <p className="text-gray-700">
                    Štandardne dodávame 3-5 konceptov loga v rôznych štýloch. Každý koncept obsahuje základnú variantu a 2-3 alternatívy farebného a typografického riešenia.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké revízie sú zahrnuté v cene?
                  </h3>
                  <p className="text-gray-700">
                    V cene sú zahrnuté 3 kolá revízií vybraného konceptu. Ďalšie revízie sú spoplatnené 50-100 € podľa rozsahu zmien.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    V akých formátoch dodávate logo?
                  </h3>
                  <p className="text-gray-700">
                    Logo dodávame vo všetkých potrebných formátoch: AI, EPS (editovateľné), PDF, PNG s priesvitným pozadím, SVG (pre web), JPG vo farebných aj čiernobielych verziách.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dostaneme vlastnícke práva k logu?
                  </h3>
                  <p className="text-gray-700">
                    Áno, po uhradení faktúry získavate plné vlastnícke práva k logu. Dodávame aj prevodový certifikát a súhlas s používaním vo všetkých médiách.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-green-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si profesionálne logo už dnes
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašou značkou
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

