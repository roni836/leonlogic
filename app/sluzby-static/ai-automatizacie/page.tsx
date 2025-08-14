import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import FAQuestions from '@/components/FAQuestions';
import GetInTouch from '@/components/GetInTouch';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';

export const metadata = {
  title: 'AI automatizácie | Automatizácie s umelou inteligenciou',
  description: 'Inteligentné automatizácie procesov s AI. Úspora času 70%, machine learning, RPA riešenia. Automatizujte rutinné úlohy vo vašej firme.',
};

export default function AIAutomatizaciePage() {
  return (
      <>
          {/* <Breadcrumbs 
            items={[
              { name: 'Domov', url: '/' },
              { name: 'Služby', url: '/sluzby' },
              { name: 'AI Automatizácie', url: '/sluzby/ai-automatizacie' }
            ]} 
          /> */}
          
          {/* Hero Section */}
          {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automatizácie s umelou inteligenciou
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inteligentné riešenia procesov
            </p>
          </div> */}

          {/* What is AI Automation */}
          {/* <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Čo sú automatizácie s umelou inteligenciou?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Automatizácie s umelou inteligenciou sú inteligentné systémy využívajúce AI na automatizáciu komplexných podnikových procesov. Na rozdiel od tradičnej automatizácie dokážu rozhodovať, učiť sa a prispôsobovať na základe dát, čím nahradzujú rutinné ľudské úlohy.
              </p>
            </div>
          </section> */}

          <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div>
                        <h1
                            className="text-3xl md:text-[50px] font-black uppercase md:leading-[59px] max-w-[1019px] italic"
                        >
                            <span className="text-gray-900 dark:text-white">Automatizácie  <span className="text-secondary">s umelou </span> inteligenciou </span>

                        </h1>
                        <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
                           Automatizácie s umelou inteligenciou sú inteligentné systémy využívajúce AI na automatizáciu komplexných podnikových procesov. Na rozdiel od tradičnej automatizácie dokážu rozhodovať, učiť sa a prispôsobovať na základe dát, čím nahradzujú rutinné ľudské úlohy.
                        </p>
                    </div>
                </div>
            </section>


              <section className="pb-12 md:pb-[60px]">
                <div className="container">
                    <div className="max-w-[500px]">
                        <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                            Prečo si vybrať naše{' '}
                            <span className="bg-[url('/assets/images/line.svg')] bg-bottom bg-no-repeat">e-commerce služby?</span>
                        </h2>
                        <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                            Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody prostredníctvom pokročilých technológií a overených stratégií.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">01</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Dizajn a UX</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Responzívny dizajn zameraný na konverzie a používateľskú prívetivosť
                            </p>
                        </div>

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">02</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Nastavenie e-shopu</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Kompletné nastavenie online obchodu s produktmi, kategóriami a platobným systémom
                            </p>
                        </div>

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">03</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Marketingové nástroje</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                SEO optimalizácia, napojenie na porovnávače cien a remarketing kampane
                            </p>
                        </div>

                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">04</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Analytika a podpora</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Sledovanie predajov, Google Analytics a 24/7 technická podpora
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="border-y-2 border-[#9199B5]/10 py-12 md:py-[100px]">
                        <div className="flex flex-col lg:flex-row items-center 2xl:gap-44 gap-10">
                            <div className="lg:max-w-[563px]">
                                <span className="rounded-[50px] bg-success-light/[0.08] px-5 py-3 text-base font-bold text-success-light dark:text-secondary dark:bg-secondary/[0.08]">
                                    ČO ROBÍME
                                </span>
                                <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                    Pomáhame firmám rásť s e-commerce riešeniami
                                </h2>
                                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                    Nájdite tím e-commerce expertov, na ktorých sa môžete spoľahnúť. Každý deň budujeme úspešné online obchody prostredníctvom pokročilých technológií a overených stratégií.
                                </p>
                                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>5+ rokov skúseností s tvorbou e-shopov</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Napojenie na platobné brány a služby</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Responzívny dizajn optimalizovaný pre mobilné zariadenia</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>SEO optimalizácia už od začiatku</p>
                                    </li>

                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Technická podpora</p>
                                    </li>

                                </ul>
                                <Link href="/contact-us" className="btn mt-7 md:mt-12">
                                    Začať spoluprácu
                                </Link>
                            </div>
                            <div className="max-w-[650px] w-full" data-aos="flip-left" data-aos-duration="1000">
                                <Image src="/assets/images/marketing.png" className="w-full h-full object-cover" alt="marketing" width={650} height={522} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            CENNÍK E-SHOPOV
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Koľko stojí vytvorenie <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">eshopu?</span>
                        </h2>
                        <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Tvorba e-shopu na kľúč od 1 980€ s kompletným riešením.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Cena e-shopu zahŕňa dizajn, programovanie a podporu - bez skrytých poplatkov.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                            {/* Table Header */}
                            <div className="bg-gray-100 dark:bg-gray-700 p-6">
                                <div className="grid grid-cols-4 gap-4 text-gray-900 dark:text-white font-bold text-center">
                                    <div className="text-left">Typ e-shopu</div>
                                    <div>Cena</div>
                                    <div>Funkcie</div>
                                    <div>Doba realizácie</div>
                                </div>
                                <div className="mt-4">
                                    <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                </div>
                            </div>

                            {/* Table Rows */}
                            <div>
                                {/* Basic Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Základný e-shop</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">1 980 - 2 345 €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Do 100 produktov, základné platby</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">4-6 týždňov</div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                    </div>
                                </div>

                                {/* Advanced Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Pokročilý e-shop</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">2 900 - 3 680 €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Neobmedzené produkty, všetky integrácie</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">6-8 týždňov</div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                    </div>
                                </div>

                                {/* Enterprise Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Podnikové riešenie</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">4 600+ €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Vlastné funkcie, API integrácie</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">8-12 týždňov</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 text-center">
                                <Link href="/contact-us" className="btn">
                                    Získať cenovú ponuku
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#5d6c74] italic">
                            *Uvedené ceny sú orientačné a finálna cena sa určuje na základe konkrétnych požiadaviek a náročnosti projektu.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#9199B5]/10 py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            ČASTO KLADENÉ OTÁZKY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Často kladené <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">otázky</span>
                        </h2>
                    </div>
                    <FAQuestions />
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-secondary/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            REALIZOVANÉ PROJEKTY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Z NAŠEJ <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">DIELNE</span>
                        </h2>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/1.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 1"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/2.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 2"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/3.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 3"
                                width={754}
                                height={401}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/4.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 4"
                                width={754}
                                height={401}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[url('/assets/images/newsletter.png')] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative">
                <GetInTouch />
            </section>

          {/* <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prečo investovať do AI automatizácií?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Úspora času</h3>
                  <p className="text-gray-700">Úspora času zamestnancov o 60-80%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Eliminácia chýb</h3>
                  <p className="text-gray-700">Eliminácia ľudských chýb v rutinných úlohách</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Spracovanie dát</h3>
                  <p className="text-gray-700">Spracovanie veľkých objemov dát</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Inteligentné rozhodovanie</h3>
                  <p className="text-gray-700">Inteligentné rozhodovanie na základe dát</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 prevádzka</h3>
                  <p className="text-gray-700">Kontinuálna prevádzka 24/7</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Škálovateľnosť</h3>
                  <p className="text-gray-700">Škálovateľnosť podľa potrieb firmy</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Náš proces AI automatizácie
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mapovanie procesov</h3>
                  <p className="text-gray-700">Analýza a mapovanie procesov vhodných na automatizáciu</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vývoj AI modelov</h3>
                  <p className="text-gray-700">Vývoj a tréning AI modelov pre konkrétne úlohy</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrácia pracovného toku</h3>
                  <p className="text-gray-700">Integrácia AI riešení do existujúcich pracovných tokov</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring a učenie</h3>
                  <p className="text-gray-700">Kontinuálne sledovanie výkonu a zlepšovanie presnosti</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Cenník AI automatizácií
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Jednoduché automatizácie</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">1 840 - 7 360 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Základné AI úlohy
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ROI: 3-6 mesiacov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 transform scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Komplexné AI systémy</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">7 360 - 23 000 €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ML modely, predikcie
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ROI: 6-12 mesiacov
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Podnikové platformy</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">23 000+ €</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Plná AI transformácia
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      ROI: 12-18 mesiacov
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Často kladené otázky o AI automatizáciách
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aké procesy sa dajú automatizovať pomocou AI?
                  </h3>
                  <p className="text-gray-700">
                    AI dokáže automatizovať faktúrovanie, spracovanie emailov, analýzu dokumentov, predpoveď predajov, správu skladov, vyhodnocovanie životopisov, zákaznícku segmentáciu.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aký je rozdiel medzi RPA a AI automatizáciou?
                  </h3>
                  <p className="text-gray-700">
                    RPA vykonáva definované kroky, AI automatizácia dokáže rozhodovať a prispôsobovať sa. AI zvládne neštruktúrované dáta, učí sa zo vzorov a pracuje s výnimkami.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Potrebujeme vlastné dáta pre AI automatizáciu?
                  </h3>
                  <p className="text-gray-700">
                    Áno, kvalitné dáta sú kľúčové. Pomôžeme pripraviť, vyčistiť a štruktúrovať existujúce dáta. AI modely sa trénujú na vašich špecifických procesoch.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ako sa AI systém učí a zlepšuje?
                  </h3>
                  <p className="text-gray-700">
                    Systém sa kontinuálne učí z nových dát, spätnej väzby, interakcií používateľov a metrík výkonu. Pravidelne dolaďujeme modely pre optimálnu presnosť.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Je AI automatizácia bezpečná a spoľahlivá?
                  </h3>
                  <p className="text-gray-700">
                    Áno, implementujeme robustné bezpečnostné opatrenia, zálohovacie systémy, audit záznamy a ľudský dohľad pre kritické procesy. Systémy majú 95%+ presnosť.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-blue-600 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Začnite s AI automatizáciou už dnes
              </h2>
              <p className="text-xl mb-8">
                Kontaktujte nás a zistite, ako môžeme automatizovať vaše procesy
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kontaktovať nás
              </button>
            </div>
          </section> */}
      </>
  );
}

