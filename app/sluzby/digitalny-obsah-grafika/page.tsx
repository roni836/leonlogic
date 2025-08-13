import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Digitálny obsah | Grafika pre sociálne siete',
  description: 'Profesionálny digitálny obsah a grafika. Social media posty, animácie, video obsah, infografiky. Zvýšte engagement o 650%.',
};

export default function DigitalnyObsahGrafikaPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Digitálny obsah a grafika', url: '/sluzby/digitalny-obsah-grafika' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digitálny obsah a grafika
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kreatívne služby
            </p>
          </div>

          {/* What is Digital Content */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je digitálny obsah a grafika?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Digitálny obsah a grafika zahŕňajú tvorbu vizuálnych materiálov pre online a digitálne platformy. Patrí sem grafický dizajn, animácie, video obsah, infografiky, obsah pre sociálne siete, reklamné bannery, prezentácie a interaktívne prvky.
              </p>
            </div>
          </section>

          {/* Why Invest */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do digitálneho obsahu?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Zapojenie</h3>
                  <p className="text-gray-700">Zvýšenie zapojenia o 650% oproti textu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konverzie</h3>
                  <p className="text-gray-700">Lepšie miery konverzie</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Virálny potenciál</h3>
                  <p className="text-gray-700">Virálny potenciál na sociálnych sieťach</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Profesionalita</h3>
                  <p className="text-gray-700">Profesionálny vzhľad komunikácie značky</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimalizácia</h3>
                  <p className="text-gray-700">Optimalizácia pre rôzne platformy</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand awareness</h3>
                  <p className="text-gray-700">Budovanie brand awareness</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces tvorby digitálneho obsahu
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Stratégia obsahu</h3>
                  <p className="text-gray-700">Plánovanie obsahu a stratégie pre jednotlivé platformy</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kreatívny dizajn</h3>
                  <p className="text-gray-700">Tvorba grafických šablón, animácií a video obsahu</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimalizácia pre viaceré platformy</h3>
                  <p className="text-gray-700">Prispôsobenie obsahu pre Instagram, Facebook, LinkedIn, TikTok</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sledovanie výkonnosti</h3>
                  <p className="text-gray-700">Sledovanie zapojenia a optimalizácia obsahu</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník digitálneho obsahu
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Základný balík</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-6">275 - 460 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      5-10 grafických šablón
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Písanie obsahu: 46€/stránka
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Štandardný balík</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-6">460 - 920 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      10-15 postov, animácie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Prémiové prvky: 18€/stránka
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prémiový balík</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-6">920+ €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      20+ postov, video obsah
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Kompletný copywriting
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
                Často kladené otázky o digitálnom obsahu
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké typy digitálneho obsahu vytvárate?
                  </h3>
                  <p className="text-gray-700">
                    Vytvárame príspevky pre sociálne siete, reklamné bannery, infografiky, animované obrázky, krátke videá, prezentácie, šablóny emailov, webovú grafiku.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako často dodávate nový obsah?
                  </h3>
                  <p className="text-gray-700">
                    Ponúkame rôzne frekvencie: týždenné balíky (4-8 príspevkov), dvojtýženné (8-15 príspevkov) alebo mesačné balíky (15-30 príspevkov) podľa potrieb.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Prispôsobujete obsah rôznym platformám?
                  </h3>
                  <p className="text-gray-700">
                    Áno, každý obsah optimalizujeme pre špecifické platformy - Instagram, Facebook, LinkedIn, TikTok, YouTube so správnymi rozmermi a formátmi.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Zabezpečujete aj písanie textov k vizuálom?
                  </h3>
                  <p className="text-gray-700">
                    Áno, k vizuálnemu obsahu dodávame aj texty - popisky, značky, výzvy na akciu a kompletnú stratégiu obsahu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Môžeme zasahovať do kreatívneho procesu?
                  </h3>
                  <p className="text-gray-700">
                    Samozrejme, pracujeme spolupracovne. Poskytujeme kreatívne zadanie, prezentujeme koncepty, zapracovávame spätnú väzbu a finalizujeme podľa požiadaviek.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-orange-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s profesionálnym digitálnym obsahom
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašou vizuálnou komunikáciou
              </p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

