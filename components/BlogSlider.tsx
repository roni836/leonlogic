'use client';

import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { IRootState } from '@/store';
import FilledLeftArrowIcon from './Icons/FilledLeftArrowIcon';
import FilledRightArrowIcon from './Icons/FilledRightArrowIcon';

import Link from 'next/link';

const BlogSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="container">
            <div className="mb-6 flex flex-col items-center gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
                <div className="text-center md:text-left md:rtl:text-right">
                    <p className="mb-7 inline-flex rounded-full bg-success-light/10 px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light dark:text-secondary dark:bg-secondary/[0.12]">
                        blog
                    </p>
                    <h2 className="text-2xl font-extrabold leading-tight md:text-[40px]">
                        Latest <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Articles</span>
                    </h2>
                </div>
                <div className="flex items-center gap-8">
                    <a href="#" className="font-bold hover:text-secondary duration-200">
                        view all
                    </a>
                    <div className="flex items-center gap-2.5 rtl:flex-row-reverse">
                        <button
                            type="button"
                            className="swiper-button-prev2 duration-200 flex h-12 w-12 items-center justify-center rounded-full bg-[#9199B5] dark:bg-[#9199B5]/[0.12] text-white after:hidden hover:bg-[#9199B5]/10 dark:hover:bg-[#9199B5] dark:text-white hover:text-[#9199B5] dark:hover:text-white"
                            aria-label="leftArrowIcon"
                        >
                            <FilledLeftArrowIcon className="h-3.5 w-3.5" />
                            <span className="sr-only">Previous</span>
                        </button>
                        <button
                            type="button"
                            className="swiper-button-next2 duration-200 flex h-12 w-12 items-center justify-center rounded-full bg-[#9199B5] dark:bg-[#9199B5]/[0.12] text-white after:hidden hover:bg-[#9199B5]/10 dark:hover:bg-[#9199B5] dark:text-white hover:text-[#9199B5] dark:hover:text-white"
                            aria-label="rightArrowIcon"
                        >
                            <FilledRightArrowIcon className="h-3.5 w-3.5" />
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="swiper blog-slider">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={32}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        1280: {
                            slidesPerView: 2,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    <SwiperSlide>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">10 Reasons to invest in SEO copywriting services</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-1.jpg" className="w-full h-full object-cover" alt="blog1" height={339} width={346} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">How to get hired at a top Digital Marketing Agency</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-2.jpg" className="w-full h-full object-cover" alt="blog2" height={326} width={346} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">10 Reasons to invest in SEO copywriting services</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-1.jpg" className="w-full h-full object-cover" alt="blog1" height={339} width={346} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">How to get hired at a top Digital Marketing Agency</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-2.jpg" className="w-full h-full object-cover" alt="blog1" height={326} width={346} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BlogSlider;
