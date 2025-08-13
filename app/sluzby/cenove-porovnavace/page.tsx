import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Cenové porovnávače | Integrácia',
  description: 'Integrácia e-shopov s cenovými porovnávačmi. XML feeds, product optimization, zvýšte predaje o 40%.',
};

export default function CenovePorovnavacePage() {
  return (
    <LayoutWrapper>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'Cenové porovnávače', url: '/sluzby/cenove-porovnavace' }
            ]} 
          />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Integrácia s cenovými porovnávačmi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Porovnávače cien
            </p>
          </div>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo je integrácia s cenovými porovnávačmi?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Integrácia s cenovými porovnávačmi je proces napojenia e-shopu na platformy pre automatické zdieľanie produktových dát, cien a dostupnosti. Zahŕňa XML feed optimization, product mapping a performance tracking.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo byť na cenových porovnávačoch?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Viditeľnosť</h3>
                  <p className="text-gray-700">Zvýšenie viditeľnosti produktov o 200%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nový traffic</h3>
                  <p className="text-gray-700">Nový traffic channel s vysokým úmyslom kúpy</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Konkurenčné porovnávanie</h3>
                  <p className="text-gray-700">Konkurenčné porovnávanie cien</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust building</h3>
                  <p className="text-gray-700">Trust building cez customer reviews</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-rose-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Integrujte sa s cenovými porovnávačmi
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme pomôcť s integráciou
              </p>
              <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}

