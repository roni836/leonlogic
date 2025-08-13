// 'use client';

import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import Image from 'next/image';
import helper from '@/libs/helper';
import FAQuestions from '@/components/FAQuestions';
import type { Metadata } from 'next';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';

export const metadata: Metadata = {
    title: 'Správa webových stránok | LeonLogic - Profesionálna údržba a správa webov',
    description: 'Kompletná správa a údržba webových stránok. Monitoring, zálohovanie, aktualizácie, SEO optimalizácia a technická podpora 24/7. Zabezpečte si stabilný a rýchly web.',
    keywords: 'správa webových stránok, údržba webu, web hosting, monitoring webu, zálohovanie webu, SEO údržba, technická podpora webu',
    openGraph: {
        title: 'Správa webových stránok | LeonLogic - Profesionálna údržba a správa webov',
        description: 'Kompletná správa a údržba webových stránok. Monitoring, zálohovanie, aktualizácie, SEO optimalizácia a technická podpora 24/7.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/sluzby/sprava-webovych-stranok',
        type: 'website',
        images: [
            {
                url: process.env.NEXT_PUBLIC_APP_URL + '/assets/images/logo.png',
                width: 1200,
                height: 630,
                alt: 'Správa webových stránok - LeonLogic',
            },
        ],
    },
    twitter: {
        ...helper.twitterData,
        title: 'Správa webových stránok | LeonLogic - Profesionálna údržba a správa webov',
        description: 'Kompletná správa a údržba webových stránok. Monitoring, zálohovanie, aktualizácie, SEO optimalizácia a technická podpora 24/7.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/sprava-webovych-stranok`,
        languages: { 'sk-SK': `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/sprava-webovych-stranok`, 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/sprava-webovych-stranok` },
    },
};

const page = () => {
    return (
        <>
            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h1
                                className="text-3xl font-extrabold leading-tight md:text-[50px] md:leading-[60px] dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Správa webových stránok | Profesionálna údržba a <span className="text-secondary">monitoring</span>
                            </h1>
                            <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
                                Zabezpečujeme kompletnú správu a údržbu vašich webových stránok. Od monitoringu výkonu až po technickú podporu - váš web bude vždy funkčný, rýchly a bezpečný.
                            </p>
                            <div className="mt-7 md:mt-12">
                                <Link href="/contact-us" className="btn">
                                    Získať bezplatnú konzultáciu
                                </Link>
                            </div>
                        </div>
                        <div className="relative" data-aos="flip-left" data-aos-duration="1000">
                            <Image src="/assets/images/management.png" className="w-full h-full object-cover" alt="Správa webových stránok" width={650} height={522} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
                        <div className="max-w-[500px]">
                            <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                                Prečo potrebujete profesionálnu správu webových stránok?
                            </h2>
                            <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                Webové stránky potrebujú pravidelnú údržbu, aktualizácie a monitoring. Bez profesionálnej správy môžu stránky spomaliť, byť zraniteľné voči útokom alebo prestať fungovať úplne.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">
                            <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex items-center gap-5">
                                    <span>
                                        <PricebulletPointIcon className="text-[#07D673]" />
                                    </span>
                                    <p className="text-lg font-semibold text-primary dark:text-white">Monitoring 24/7</p>
                                </div>
                                <p className="mt-3 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]">
                                    Nepretržitý monitoring dostupnosti a výkonu vašich webových stránok
                                </p>
                            </div>
                            <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex items-center gap-5">
                                    <span>
                                        <PricebulletPointIcon className="text-[#07D673]" />
                                    </span>
                                    <p className="text-lg font-semibold text-primary dark:text-white">Zálohovanie</p>
                                </div>
                                <p className="mt-3 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]">
                                    Automatické zálohovanie dát a možnosť obnovy v prípade problémov
                                </p>
                            </div>
                            <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex items-center gap-5">
                                    <span>
                                        <PricebulletPointIcon className="text-[#07D673]" />
                                    </span>
                                    <p className="text-lg font-semibold text-primary dark:text-white">Aktualizácie</p>
                                </div>
                                <p className="mt-3 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]">
                                    Pravidelné aktualizácie CMS, pluginov a bezpečnostných opatrení
                                </p>
                            </div>
                            <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex items-center gap-5">
                                    <span>
                                        <PricebulletPointIcon className="text-[#07D673]" />
                                    </span>
                                    <p className="text-lg font-semibold text-primary dark:text-white">Technická podpora</p>
                                </div>
                                <p className="mt-3 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]">
                                    Rýchla technická podpora a riešenie problémov
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
                        <div className="max-w-[500px]">
                            <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                                Náš proces správy webových stránok
                            </h2>
                            <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                Systematický prístup k správe webových stránok zabezpečuje ich optimálnu funkčnosť a výkon.
                            </p>
                        </div>
                        <div className="grid gap-7 sm:grid-cols-2">
                            <div className="space-y-7">
                                <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success text-white text-lg font-bold">
                                        01
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold dark:text-white">Monitoring a analýza</h3>
                                        <p className="mt-2 text-gray dark:text-[#9199B5]">
                                            Nepretržitý monitoring dostupnosti, rýchlosti a výkonu webových stránok s detailnou analýzou
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success text-white text-lg font-bold">
                                        02
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold dark:text-white">Preventívna údržba</h3>
                                        <p className="mt-2 text-gray dark:text-[#9199B5]">
                                            Pravidelné kontroly, aktualizácie a optimalizácia pre predchádzanie problémom
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-7">
                                <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success text-white text-lg font-bold">
                                        03
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold dark:text-white">Zálohovanie a bezpečnosť</h3>
                                        <p className="mt-2 text-gray dark:text-[#9199B5]">
                                            Automatické zálohovanie dát a implementácia bezpečnostných opatrení
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success text-white text-lg font-bold">
                                        04
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold dark:text-white">Technická podpora</h3>
                                        <p className="mt-2 text-gray dark:text-[#9199B5]">
                                            Rýchla reakcia na problémy a kontinuálna technická podpora
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
                        <div className="max-w-[500px]">
                            <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                                Prečo si vybrať naše služby správy webových stránok?
                            </h2>
                            <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                Profesionálna správa webových stránok zabezpečuje ich stabilitu, rýchlosť a bezpečnosť. Naše služby vám ušetria čas a peniaze.
                            </p>
                        </div>
                        <div className="max-w-[650px] w-full" data-aos="flip-left" data-aos-duration="1000">
                            <Image src="/assets/images/management.png" className="w-full h-full object-cover" alt="Správa webových stránok" width={650} height={522} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
                        <div className="max-w-[500px]">
                            <div className="mb-7 md:mb-12">
                                <span className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-secondary/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                                    PREČO SI VYBRAŤ LEONLOGIC
                                </span>
                                <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                    Pomáhame firmám rásť s profesionálnou správou webových stránok.
                                </h2>
                                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                    Nájdite tím expertov na správu webových stránok, na ktorých sa môžete spoľahnúť. Každý deň zabezpečujeme stabilitu a výkon webových stránok našich klientov.
                                </p>
                                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Monitoring dostupnosti 24/7</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Automatické zálohovanie dát</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Pravidelné aktualizácie a údržba</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Bezpečnostné opatrenia a ochrana</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Technická podpora a rýchle riešenie problémov</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>SEO monitoring a optimalizácia</p>
                                    </li>
                                </ul>
                                <Link href="/contact-us" className="btn mt-7 md:mt-12">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-[650px] w-full" data-aos="flip-left" data-aos-duration="1000">
                            <Image src="/assets/images/management.png" className="w-full h-full object-cover" alt="Správa webových stránok" width={650} height={522} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Často kladené otázky
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <FAQuestions />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-secondary/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            SELECTED PROJECTS
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Digital <span className="bg-[url(/assets/images/line1.svg)] bg-bottom-right bg-no-repeat">Case Studies</span>.
                        </h2>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/project1.jpg"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project1"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/project2.jpg"
                                className="h-full h-full object-cover hover:scale-110 duration-300"
                                alt="project2"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/project1.jpg"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project3"
                                width={754}
                                height={401}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/project2.jpg"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project4"
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
