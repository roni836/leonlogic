import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Tlačové služby | Grafický dizajn pre tlač',
  description: 'Profesionálne tlačové služby a grafický dizajn. Letáky, brožúry, vizitky, veľkoformátová tlač. Súbory pripravené na tlač.',
};

export default function TlacoveSluzbyPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Tlačové služby', url: '/sluzby/tlacove-sluzby' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tlačové služby
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grafický dizajn pre tlač
            </p>
          </div>

          {/* What are Printing Services */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo sú tlačové služby?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tlačové služby zahŕňajú grafický dizajn a prípravu materiálov určených pre tlač. Patrí sem tvorba letákov, brožúr, katalógov, vizitiek, reklamných panelov, roll-up bannerov, obalov a ďalších tlačových materiálov s profesionálnou prípravou.
              </p>
            </div>
          </section>

          {/* Why Need Professional Printing Services */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo potrebujete profesionálne tlačové služby?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vysoká kvalita</h3>
                  <p className="text-gray-700">Vysoká kvalita tlače bez problémov</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Správne farby</h3>
                  <p className="text-gray-700">Správne nastavenie farieb (CMYK)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Print-ready súbory</h3>
                  <p className="text-gray-700">Príprava súborov pripravených na tlač</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Značky orezania</h3>
                  <p className="text-gray-700">Značky orezania a bezpečné zóny</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Poradenstvo</h3>
                  <p className="text-gray-700">Poradenstvo k materiálom a papierom</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontrola kvality</h3>
                  <p className="text-gray-700">Kontrola kvality pred tlačou</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces tlačových služieb
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dizajnový brief</h3>
                  <p className="text-gray-700">Konzultácia požiadaviek a špecifikácia projektu</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kreatívny dizajn</h3>
                  <p className="text-gray-700">Grafický dizajn a príprava pre tlač</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Príprava pre tlač</h3>
                  <p className="text-gray-700">Kontrola súborov, farby CMYK a print-ready export</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontrola kvality</h3>
                  <p className="text-gray-700">Finálna kontrola a koordinácia s tlačiarňou</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník tlačových služieb
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizitky</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">115 - 230 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Dizajn, print-ready súbory
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 3-5 dní
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Faktúry/Šablóny</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">46 - 110 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Základné až prémiové faktúry
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 2-3 dni
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Brožúry, katalógy</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">460 - 1 380 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Viacstranový dizajn, väzba
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Doba realizácie: 7-10 dní
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
                Často kladené otázky o tlačových službách
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké tlačové materiály dizajnujete?
                  </h3>
                  <p className="text-gray-700">
                    Dizajnujeme vizitky, letáky, brožúry, katalógy, plagáty, roll-up bannery, reklamné panely, etikety, obaly, kalendáre, prezentačné zložky a firemné materiály.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Zabezpečujete aj samotnú tlač?
                  </h3>
                  <p className="text-gray-700">
                    Spolupracujeme s overenými tlačiarňami. Môžeme zabezpečiť kompletnú produkciu alebo dodať súbory pripravené na tlač pre vašu tlačiareň.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako pripravujete súbory pre tlač?
                  </h3>
                  <p className="text-gray-700">
                    Všetky súbory pripravujeme v CMYK, s presahom, značkami orezania, správnym rozlíšením (300 DPI) a vo formátoch pripravených na tlač (PDF/X-1a, PDF/X-4).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Poradíte s výberom materiálov?
                  </h3>
                  <p className="text-gray-700">
                    Áno, poradíme s výberom papiera, gramáže, finalizačných možností (laminácia, UV lak, reliéfna tlač) a optimálnych tlačových techník pre váš projekt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aká je doba dodania pre tlačové projekty?
                  </h3>
                  <p className="text-gray-700">
                    Dizajn: 3-10 dní podľa zložitosti. Tlač: 3-14 dní podľa typu materiálu a nákladu. Expresné služby dostupné za príplatok.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-red-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s profesionálnymi tlačovými službami
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašimi tlačovými materiálmi
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

