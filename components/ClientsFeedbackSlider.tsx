'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { IRootState } from '@/store';
import FilledLeftArrowIcon from './Icons/FilledLeftArrowIcon';
import FilledRightArrowIcon from './Icons/FilledRightArrowIcon';

const ClientsFeedbackSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="container">
            <div className="mb-6 flex flex-col items-center gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
                <div className="text-center md:text-left md:rtl:text-right">
                    <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                        REFERENCIE
                    </p>
                    <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                        Prinášame <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> výsledky, ktoré </span> hovoria za nás
                    </h2>
                </div>
                <div className="flex items-center gap-8">
                    <a href="#" className="font-bold hover:text-secondary duration-200">
                        view all
                    </a>
                    <div className="flex items-center gap-2.5 rtl:flex-row-reverse">
                        <button
                            type="button"
                            className="swiper-button-prev1 duration-200 flex h-12 w-12 items-center justify-center rounded-full bg-[#9199B5] dark:bg-[#9199B5]/[0.12] text-white after:hidden hover:bg-[#9199B5]/10 dark:hover:bg-[#9199B5] dark:text-white hover:text-[#9199B5] dark:hover:text-white"
                            aria-label="Name"
                        >
                            <FilledLeftArrowIcon className="!h-3.5 !w-3.5" />
                            <span className='sr-only'>Previous</span>
                        </button>
                        <button
                            type="button"
                            className="swiper-button-next1 duration-200 flex h-12 w-12 items-center justify-center rounded-full bg-[#9199B5] dark:bg-[#9199B5]/[0.12] text-white after:hidden hover:bg-[#9199B5]/10 dark:hover:bg-[#9199B5] dark:text-white hover:text-[#9199B5] dark:hover:text-white"
                            aria-label="Name"
                        >
                            <FilledRightArrowIcon className="!h-3.5 !w-3.5" />
                            <span className='sr-only'>Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                spaceBetween={32}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1600: {
                        slidesPerView: 3,
                    },
                }}
                dir={isRtl ? 'rtl' : 'ltr'}
                key={isRtl ? 'true' : 'false'}
            >
                <SwiperSlide>
                    <div className="rounded-2xl border-[3px] border-[#9199B5]/10 bg-white dark:bg-[#9199B5]/[0.12] p-8">
                        <h3 className="mb-7 border-s-[3px] border-secondary ps-2.5 text-sm font-bold uppercase text-success dark:text-secondary">E-shop úspech
                        </h3>
                        <p className="mb-7 text-lg dark:text-white">
                            S LeonLogic máme len tie najlepšie skúsenosti. Vytvorili nám eshop, ktorý splnil všetky naše očakávania – a dokonca ich aj predčil. Mnoho vecí sami navrhli, priniesli kreatívne nápady a počas celého procesu nám ochotne radili. Boli nielen technicky zdatní, ale aj veľmi profesionálni.
                        </p>
                        <div className="flex gap-2.5">
                            <div className="h-12 w-12 flex-none overflow-hidden rounded-full">
                                <Image
                                    src="/assets/images/profile-pic1.jpg"
                                    alt="profile pic1"
                                    className="h-full w-full object-cover rtl:rotate-y-180"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="font-semibold">
                                <h4 className="text-lg text-success dark:text-secondary">Monika O.</h4>
                                <p className="text-gray dark:text-[#9199B5]">Majiteľka cukrárne Torty M.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl border-[3px] border-[#9199B5]/10 bg-white dark:bg-[#9199B5]/[0.12] p-8">
                        <h3 className="mb-7 border-s-[3px] border-secondary ps-2.5 text-sm font-bold uppercase text-success dark:text-secondary">
                            AI aplikácia
                        </h3>
                        <p className="mb-7 text-lg dark:text-white">
                            Potreboval som vytvoriť webovú aplikáciu na mieru, na generovanie fotografií pomocou AI a s realizáciou mi perfektne pomohli. Tím preukázal, že sa v problematike naozaj vyzná. Vždy ochotne odpovedali na moje otázky a dokonale pochopili moju víziu. Výsledkom je skvelá a plne funkčná webová aplikácia.
                        </p>
                        <div className="flex gap-2.5">
                            <div className="h-12 w-12 flex-none overflow-hidden rounded-full">
                                <Image
                                    src="/assets/images/profile-pic2.jpg"
                                    alt="profile pic2"
                                    className="h-full w-full object-cover rtl:rotate-y-180"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="font-semibold">
                                <h4 className="text-lg text-success dark:text-secondary">Thom S.</h4>
                                <p className="text-gray dark:text-[#9199B5]">SnapShots</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-2xl border-[3px] border-[#9199B5]/10 bg-white dark:bg-[#9199B5]/[0.12] p-8">
                        <h3 className="mb-7 border-s-[3px] border-secondary ps-2.5 text-sm font-bold uppercase text-success dark:text-secondary">
                            Virtuálne sídlo
                        </h3>
                        <p className="mb-7 text-lg dark:text-white">
                            Potrebovali sme systém pre správu virtuálnych sídiel s online evidenciou pošty. Leonlogic nám vytvoril web, kde klienti môžu sledovať doručené zásielky a prezerať dokumenty 24/7. Predtým sme museli každému volať o novej pošte, teraz sa všetko eviduje automaticky. Ušetrilo nám to množstvo času a klienti sú spokojní s prehľadom.
                        </p>
                        <div className="flex gap-2.5">
                            <div className="h-12 w-12 flex-none overflow-hidden rounded-full">
                                <Image
                                    src="/assets/images/profile-pic3.jpg"
                                    alt="profile pic3"
                                    className="h-full w-full object-cover rtl:rotate-y-180"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="font-semibold">
                                <h4 className="text-lg text-success dark:text-secondary">Matej B.</h4>
                                <p className="text-gray dark:text-[#9199B5]">Majiteľ FlexiSídlo</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ClientsFeedbackSlider;
