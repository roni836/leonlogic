import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Vývoj aplikácií | iOS, Android | React Native',
  description: 'Profesionálny vývoj mobilných aplikácií pre iOS a Android. React Native, Flutter, custom apps, App Store optimization. Aplikácie od 8000€.',
};

export default function VyvojMobilnychAplikaciiPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Vývoj mobilných aplikácií', url: '/sluzby/vyvoj-mobilnych-aplikacii' }
            ]} 
          />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vývoj mobilných aplikácií
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              iOS, Android development
            </p>
          </div>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je vývoj mobilných aplikácií?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Vývoj mobilných aplikácií je proces tvorby softvérových riešení pre smartfóny a tablety. Zahŕňa natívny vývoj pre iOS a Android, cross-platform riešenia, backend APIs, databázové systémy, push notifikácie, in-app purchases a App Store optimalizáciu.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do mobilnej aplikácie?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Priamy kanál</h3>
                  <p className="text-gray-700">Priamy kanál ku zákazníkom</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Push notifikácie</h3>
                  <p className="text-gray-700">Push notifikácie pre engagement</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Offline funkcionalita</h3>
                  <p className="text-gray-700">Offline funkcionalita</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Natívne funkcie</h3>
                  <p className="text-gray-700">Natívne funkcie zariadenia (GPS, kamera)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-cyan-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Vytvorte si profesionálnu mobilnú aplikáciu
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašou aplikáciou
              </p>
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}
