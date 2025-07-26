'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import FilledRightArrowIcon from './Icons/FilledRightArrowIcon';
import FilledLeftArrowIcon from './Icons/FilledLeftArrowIcon';

const DigitalServicesSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="relative">
            <div className="mb-10 flex items-center justify-center gap-5 2xl:mb-0 rtl:flex-row-reverse">
                <button
                    type="button"
                    className="swiper-button-prev duration-200 static! inset-y-0! left-4! my-auto! flex! h-12! w-12! items-center! justify-center! rounded-full bg-[#9199B5] dark:bg-[#9199B5]/[0.12] text-white! after:hidden hover:bg-[#9199B5]/10! dark:hover:bg-[#9199B5]! dark:text-white! hover:text-[#9199B5]! 2xl:absolute! 2xl:-left-20! shrink-0 dark:hover:text-white!"
                    aria-label="Name"
                >
                    <FilledLeftArrowIcon className="!h-3.5 !w-3.5" />
                    <span className='sr-only'>Previous</span>
                </button>
                <button
                    type="button"
                    className="swiper-button-next duration-200 static! inset-y-0! right-4! my-auto! flex! h-12! w-12! items-center! justify-center! rounded-full bg-[#9199B5] dark:bg-[#9199B5]/[0.12] text-white! after:hidden hover:bg-[#9199B5]/10! dark:hover:bg-[#9199B5]! dark:text-white! hover:text-[#9199B5]! 2xl:absolute! 2xl:-right-20! dark:hover:text-white!"
                    aria-label="Name"
                >
                    <FilledRightArrowIcon className="!h-3.5 !w-3.5" />
                    <span className='sr-only'>Next</span>

                </button>
            </div>
            <div className="swiper service-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={32}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1600: {
                            slidesPerView: 4,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    <SwiperSlide>
                        <div className="mb-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image src="/assets/images/icon-mail.svg" className="w-full h-full object-cover" alt="icon mail" width={60} height={60} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Email Marketing</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image
                                    src="/assets/images/icon-instagram.svg"
                                    className="w-full h-full object-cover"
                                    alt="icon instagram"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Social Media</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mb-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image src="/assets/images/icon-fb-ads.svg" className="w-full h-full object-cover" alt="icon fb ads" width={60} height={60} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Google/FB Ads</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image src="/assets/images/icon-content.svg" className="w-full h-full object-cover" alt="icon content" width={60} height={60} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Content Strategy</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mb-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image src="/assets/images/icon-mail.svg" className="w-full h-full object-cover" alt="icon mail" width={60} height={60} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Email Marketing</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image
                                    src="/assets/images/icon-instagram.svg"
                                    className="w-full h-full object-cover"
                                    alt="icon instagram"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Social Media</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mb-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image src="/assets/images/icon-fb-ads.svg" className="w-full h-full object-cover" alt="icon fb ads" width={60} height={60} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Google/FB Ads</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-7 rounded-2xl border-[3px] border-[#9199B5]/10 dark:bg-linear-to-b dark:from-[#002738] dark:to-transparent p-8">
                            <div className="mb-7 w-[60px] h-[60px]">
                                <Image src="/assets/images/icon-content.svg" className="w-full h-full object-cover" alt="icon content" width={60} height={60} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-semibold dark:text-white">Content Strategy</h3>
                                <p className="text-lg text-gray">Our design services starts and ends best in class experience.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default DigitalServicesSlider;
