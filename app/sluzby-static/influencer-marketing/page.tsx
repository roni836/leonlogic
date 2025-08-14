import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Influencer marketing | Partnerstvá so značkami | Influenceri',
  description: 'Profesionálny influencer marketing. Micro/macro influenceri, partnerstvá so značkami, manažment kampaní, merateľné výsledky.',
};

export default function InfluencerMarketingPage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Influencer marketing', url: '/sluzby/influencer-marketing' }
            ]} 
          />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Influencer marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnerstvá so značkami
            </p>
          </div>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je influencer marketing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Influencer marketing je spolupráca značiek s online osobnosťami, ktoré majú zavedené publikum a dôveryhodnosť vo svojej oblasti. Zahŕňa výskum influencerov, plánovanie kampaní, spoluprácu na obsahu, sledovanie výkonnosti a meranie ROI pre autentickú propagáciu značky.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do influencer marketingu?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Autentická propagácia</h3>
                  <p className="text-gray-700">Autentická propagácia značky</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vysoké zapojenie</h3>
                  <p className="text-gray-700">Vysoké miery zapojenia (3-6%)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cielené oslovenie</h3>
                  <p className="text-gray-700">Cielené oslovenie publika</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Budovanie dôvery</h3>
                  <p className="text-gray-700">Budovanie dôvery cez odporúčania</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-fuchsia-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s influencer marketingom
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašimi influencer kampanami
              </p>
              <button className="bg-white text-fuchsia-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

