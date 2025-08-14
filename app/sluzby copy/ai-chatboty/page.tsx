import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import Image from 'next/image';
import helper from '@/libs/helper';
import FAQuestions from '@/components/FAQuestions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Chatboty | Chatboty s umelou inteligenciou',
    description: 'Inteligentné chatboty pre automatizáciu zákazníckej podpory 24/7. Znížte náklady o 60%, integrácie so systémami.',
    openGraph: {
        ...helper.openGraphData,
        title: 'AI Chatboty | Chatboty s umelou inteligenciou',
        description: 'Inteligentné chatboty pre automatizáciu zákazníckej podpory 24/7. Znížte náklady o 60%, integrácie so systémami.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/sluzby/ai-chatboty',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'AI Chatboty | Chatboty s umelou inteligenciou',
        description: 'Inteligentné chatboty pre automatizáciu zákazníckej podpory 24/7. Znížte náklady o 60%, integrácie so systémami.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/ai-chatboty`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/ai-chatboty` },
    },
};

const page = () => {
    return (
        <>
            <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div>
                        <h1
                            className="text-3xl md:text-[50px] font-black uppercase md:leading-[59px] max-w-[1019px] italic"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            Chatboty s umelou inteligenciou | Automatizácia <span className="text-secondary">zákazníckej podpory</span> 24/7
                        </h1>
                        <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
                            Chatboty s umelou inteligenciou sú inteligentní virtuálni asistenti poháňaní AI technológiami, ktorí automaticky odpovedajú na otázky zákazníkov 24 hodín denne. Využívajú spracovanie prirodzeného jazyka na pochopenie otázok a poskytujú relevantné odpovede v slovenskom jazyku.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-12 md:pb-[60px]">
                <div className="container">
                    <div className="max-w-[500px]">
                        <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                            Prečo zaviesť <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">AI chatboty</span>?
                        </h2>
                        <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                            Nájdite tím AI expertov, na ktorých sa môžete spoľahnúť. Každý deň pomáhame firmám automatizovať zákaznícku podporu prostredníctvom pokročilých AI technológií.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">01</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Nastavenie databázy znalostí</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Vytvorenie databázy znalostí a tréningových dát pre chatbota
                            </p>
                        </div>
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">02</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Tréning NLP</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Tréning jazykového modelu pre pochopenie jazyka
                            </p>
                        </div>
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">03</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Integrácia systémov</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Napojenie na CRM, e-shop a ďalšie podnikové systémy
                            </p>
                        </div>
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">04</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Testovanie a optimalizácia</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Testovanie s reálnymi zákazníkmi a kontinuálne zlepšovanie
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
                                    WHY CHOOSE US
                                </span>
                                <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                    Pomáhame firmám s{' '}
                                    <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">AI chatbotmi</span>.
                                </h2>
                                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                    Nájdite tím AI expertov, na ktorých sa môžete spoľahnúť. Každý deň pomáhame firmám automatizovať zákaznícku podporu prostredníctvom pokročilých AI technológií.
                                </p>
                                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Dostupnosť zákazníckej podpory 24/7</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Zníženie nákladov na podporu o 60%</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Okamžité odpovede na bežné otázky</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Zvýšenie spokojnosti zákazníkov</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Automatická eskalácia na ľudských operátorov</p>
                                    </li>
                                </ul>
                                <Link href="/contact-us" className="btn mt-7 md:mt-12">
                                    Get Started
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
                                    <div className="text-left">Typ chatbotu</div>
                                    <div>Cena</div>
                                    <div>Funkcie</div>
                                    <div>Mesačné náklady</div>
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
                                        <div className="font-semibold text-gray-900 dark:text-white">Základný chatbot</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">1 380 - 3 680 €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Jednoduché Q&A, slovenský jazyk</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">46-140 €</div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="bg-[#9199B5]/20 pt-0.5 w-full block"></span>
                                    </div>
                                </div>

                                {/* Advanced Package */}
                                <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="font-semibold text-gray-900 dark:text-white">Pokročilý AI chatbot</div>
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-secondary">3 680 - 11 040 €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">NLP, integrácie, učenie</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">140-275 €</div>
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
                                            <span className="text-2xl font-bold text-secondary">11 040+ €</span>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">Multijazyčnosť, analytika</div>
                                        <div className="text-center text-gray-600 dark:text-gray-400">275-460 €</div>
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
        </>
    );
};

export default page;
