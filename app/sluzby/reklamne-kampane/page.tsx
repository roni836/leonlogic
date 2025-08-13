import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Google Ads | Facebook reklamy | PPC kampane',
  description: 'Profesionálne Google Ads a Facebook kampane. PPC reklama s garantovaným ROI, A/B testing, conversion tracking. Certified experts.',
};

export default function ReklamneKampanePage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Reklamné kampane', url: '/sluzby/reklamne-kampane' }
            ]} 
          />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Google Ads a Facebook kampane
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PPC reklama
            </p>
          </div>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo sú online reklamné kampane?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Online reklamné kampane sú platené marketingové aktivity na digitálnych platformách zamerané na získavanie kvalifikovaných zákazníkov. Zahŕňajú Google Ads, Facebook/Instagram reklamy, LinkedIn campaigns, remarketing a display advertising s pokročilým targetingom.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do platených kampaní?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Okamžité výsledky</h3>
                  <p className="text-gray-700">Okamžité výsledky a traffic</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Presný targeting</h3>
                  <p className="text-gray-700">Presný targeting audience</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Merateľný ROI</h3>
                  <p className="text-gray-700">Merateľný ROI a konverzie</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontrola budgetu</h3>
                  <p className="text-gray-700">Kompletná kontrola nad budgetom</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-pink-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s reklamnými kampaňami
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašimi reklamnými kampaňami
              </p>
              <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

