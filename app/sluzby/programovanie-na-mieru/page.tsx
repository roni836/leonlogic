import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Programovanie na mieru | Custom softvér development',
  description: 'Profesionálne programovanie na mieru. Custom softvér, API development, integrácie, podnikové riešenia. Softvér šitý presne na vaše potreby.',
};

export default function ProgramovanieNaMieruPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Programovanie na mieru', url: '/sluzby/programovanie-na-mieru' }
            ]} 
          />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Programovanie na mieru
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom softvér development
            </p>
          </div>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je programovanie na mieru?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Programovanie na mieru je vývoj softvérových riešení presne navrhnutých pre špecifické podnikové potreby klienta. Zahŕňa analýzu procesov, návrh architektúry systému, databázové modelovanie, API development, integrácie, testovanie a nasadenie aplikácií.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo si vybrať programovanie na mieru?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Presné riešenie</h3>
                  <p className="text-gray-700">Riešenie presne podľa vašich potrieb</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Plná kontrola</h3>
                  <p className="text-gray-700">Plná kontrola nad funkcionalitou</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Škálovateľnosť</h3>
                  <p className="text-gray-700">Škálovateľná architektúra</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konkurenčná výhoda</h3>
                  <p className="text-gray-700">Konkurenčná výhoda na trhu</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-violet-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si softvér na mieru
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašimi softvérovými potrebami
              </p>
              <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

