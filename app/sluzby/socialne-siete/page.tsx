import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Social media marketing | Správa sociálnych sietí',
  description: 'Profesionálna správa sociálnych sietí. Facebook, Instagram marketing, content tvorba, community management. Zvýšte engagement o 300%.',
};

export default function SocialneSietePage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Sociálne siete', url: '/sluzby/socialne-siete' }
            ]} 
          />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Správa sociálnych sietí
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Social media marketing
            </p>
          </div>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je správa sociálnych sietí?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Správa sociálnych sietí je komplexné riadenie online prítomnosti značky na platformách ako Facebook, Instagram, LinkedIn, TikTok. Zahŕňa content creation, community management, paid advertising, influencer collaborations a performance analytics.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do social media marketingu?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Priama komunikácia</h3>
                  <p className="text-gray-700">Priama komunikácia so zákazníkmi</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand awareness</h3>
                  <p className="text-gray-700">Brand awareness building</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Viral marketing</h3>
                  <p className="text-gray-700">Viral marketing potential</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer service</h3>
                  <p className="text-gray-700">Customer service channel</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-sky-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite so správou sociálnych sietí
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s vašimi sociálnymi sieťami
              </p>
              <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

