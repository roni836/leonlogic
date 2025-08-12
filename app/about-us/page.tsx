import AboutUsModal from '@/components/AboutUsModal';
import CountsUp from '@/components/CountsUp';
import CreativityIcon from '@/components/Icons/CreativityIcon';
import GrowthIcon from '@/components/Icons/GrowthIcon';
import InovationIcon from '@/components/Icons/InovationIcon';
import PassionIcon from '@/components/Icons/PassionIcon';
import QualityIcon from '@/components/Icons/QualityIcon';
import TeamWorkIcon from '@/components/Icons/TeamWorkIcon';
import TopRightArrowIcon from '@/components/Icons/TopRightArrowIcon';
import OurValuesCard from '@/components/OurValuesCard';
import AboutUsPartnersSlider from '@/components/AboutUsPartnersSlider';
import Image from 'next/image';
import SpecialistsDevelopers from '@/components/SpecialistsDevelopers';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About-Us | Leonlogic',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'About-Us | Leonlogic',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/about-us',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'About-Us | Leonlogic',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/about-us` },
    },
};

const page = () => {
    return (
        <>
            <section className="relative pb-20 pt-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div>
                        <h1
                            className="mx-auto max-w-[949px] text-center text-3xl font-black italic md:text-[50px] md:leading-[59px] uppercase"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            Sme tím skúsených odborníkov
                            <span className="text-secondary"> z rôznych oblastí</span>
                        </h1>
                        <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5 text-center max-w-[582px] mx-auto">
                            Špecializujeme sa na tvorbu webstránok, e-shopov a digitálny marketing. Pomáhame firmám rásť online už od roku 2019.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                        <div className="lg:max-w-[563px]">
                            <p className="mb-7 inline-flex rounded-full bg-success-light/10 px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light dark:text-secondary dark:bg-secondary/[0.08]">
                                o nás
                            </p>
                            <h2 className="text-2xl font-extrabold leading-tight md:text-[40px]">
                                Digitálna agentúra so <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">skúsenosťami</span> 
                            </h2>
                            <p className="text-base text-gray dark:text-[#9199B5] mt-5">
                              Vytvárame webové riešenia, ktoré pomáhajú slovenským firmám uspieť online. Od návrhu až po realizáciu.
                            </p>
                            <div className="flex gap-2.5 mt-12 items-center">
                                <span>
                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.24237 8.49987L0 0.5H4.73974L10 8.49987V8.48184L4.73974 16.5H0L5.24237 8.48184" fill="#07D673" />
                                    </svg>
                                </span>
                                <p className="font-semibold">Digitálna kreatívna agentúra</p>
                            </div>
                            <div className="flex gap-2.5 mt-8 items-center">
                                <span>
                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.24237 8.49987L0 0.5H4.73974L10 8.49987V8.48184L4.73974 16.5H0L5.24237 8.48184" fill="#07D673" />
                                    </svg>
                                </span>
                                <p className="font-semibold">Riešenia na mieru </p>
                            </div>
                            <div className="flex gap-2.5 mt-8 items-center">
                                <span>
                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.24237 8.49987L0 0.5H4.73974L10 8.49987V8.48184L4.73974 16.5H0L5.24237 8.48184" fill="#07D673" />
                                    </svg>
                                </span>
                                <p className="font-semibold">Tvorba webov a e-shopov</p>
                            </div>
                            <a href="#" className="btn mt-12">
                                Zistiť viac o nás
                            </a>
                        </div>
                        <div className="max-w-[841px] w-full" data-aos="fade-left" data-aos-duration="1000">
                            <Image src="/assets/images/about-img.png" className="w-full h-full object-cover" alt="about-img" width={841} height={530} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 py-12 md:py-16 border-y-2 border-[#9199B5]/10">
                        <div className="relative text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp start={0} suffix="h" delay={1} end={24} duration={2} />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">Priemerná odpoveď </span>
                            <span className="absolute inset-y-0 my-auto h-7 w-0.5 bg-secondary ltr:right-0 rtl:left-0"></span>
                        </div>
                        <div className="relative text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp start={0} suffix="+" delay={1} end={4} duration={2} />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">Roky skúseností </span>
                            <span className="absolute inset-y-0 my-auto h-7 w-0.5 bg-secondary ltr:right-0 rtl:left-0 hidden md:block"></span>
                        </div>
                        <div className="relative text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp start={0} suffix="+" delay={1} end={12} duration={2} />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">Technológií </span>
                            <span className="absolute inset-y-0 my-auto h-7 w-0.5 bg-secondary ltr:right-0 rtl:left-0"></span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp start={0} delay={1} end={0} duration={2} />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">Skrytých poplatkov</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <AboutUsModal />
                        <div>
                            <p className="mb-7 inline-flex rounded-full bg-success-light/10 px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light dark:text-secondary dark:bg-secondary/[0.08]">
                                NAŠA MISIA
                            </p>
                            <h2 className="text-2xl font-extrabold leading-tight md:text-[40px]">
                                Chcete, aby vaša firma rástla{' '}
                                <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">online? </span>
                                Sme tu pre vás.
                            </h2>
                            <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                               Našou misiou je pomáhať slovenským firmám uspieť v digitálnom svete. Vytvárame webstránky a e-shopy, ktoré skutočne fungujú a prinášajú výsledky. Každý projekt riešime individuálne, pretože každá firma je iná.
                            </p>
                            <button
                                type="button"
                                className="group flex items-center justify-center w-20 h-20 sm:w-[90px] sm:h-[90px] border-2 border-[#9199B5]/[0.12] rounded-full mt-8 sm:mt-12"
                            >
                                <span className="sr-only">Let&apos;s go</span>
                                <TopRightArrowIcon className="group-hover:-mt-2 duration-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light dark:text-secondary dark:bg-secondary/[0.08]">
                            Naše hodnoty
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px]">
                            Hodnoty, ktoré <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> nás vedú</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 mt-12">
                        <OurValuesCard icon={<InovationIcon />} description="Používame najnovšie technológie a trendy vo webdesigne." title="Inovácie" />

                        <OurValuesCard icon={<TeamWorkIcon />} description="Spolupracujeme ako jeden tím so spoločným cieľom." title="Tímová práca" />

                        <OurValuesCard icon={<CreativityIcon />} description="Každý projekt riešime kreatívne a originálne." title="Kreativita" />

                        <OurValuesCard icon={<QualityIcon />} description="Kvalita je pre nás na prvom mieste v každom projekte." title="Kvalita" />

                        <OurValuesCard icon={<GrowthIcon />} description="Pomáhame klientom rásť a zlepšovať sa." title="Rast" />

                        <OurValuesCard icon={<PassionIcon />} description="Robíme svoju prácu s vášňou a nadšením." title="Vášeň" />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] max-w-[396px] mx-auto">Spolupracujeme s firmami po
                            <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> celom Slovensku</span>
                        </h2>
                    </div>
                    <div className="swiper partners-slider mt-12">
                        <AboutUsPartnersSlider />
                    </div>
                </div>
            </section>

            {/* <SpecialistsDevelopers /> */}

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className='bg-[url("/assets/images/newsletter.png")] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative'>
                <GetInTouch />
            </section>
        </>
    );
};

export default page;
