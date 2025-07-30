import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import CountsUp from '@/components/CountsUp';
import EmployeesFeedbackModal from '@/components/EmployeesFeedbackModal';
import ComputerIcon from '@/components/Icons/ComputerIcon';
import FeedBackPerkIcon from '@/components/Icons/FeedBackPerkIcon';
import GlobalOpportunitiesPerkIcon from '@/components/Icons/GlobalOpportunitiesPerkIcon';
import GuidancePerkIcon from '@/components/Icons/GuidancePerkIcon';
import InnovationPerkIcon from '@/components/Icons/InnovationPerkIcon';
import LearningPerkIcon from '@/components/Icons/LearningPerkIcon';
import OpenCulturePerkIcon from '@/components/Icons/OpenCulturePerkIcon';
import ProactivePerkIcon from '@/components/Icons/ProactivePerkIcon';
import OpenPositionCard from '@/components/OpenPositionCard';
import Image from 'next/image';
import Link from 'next/link';

import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Career | Greco',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Career | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/career',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Career | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/career`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/career` },
    },
};

const page = () => {
    const css = `.text-border-black {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #000000;
    }
    .dark .text-border-black {
        -webkit-text-stroke-color: #ffffff;
    }`;

    return (
        <>
            <section className="pb-4 overflow-x-hidden">
                <div className="container">
                    <div className="pt-40 lg:pt-[332px] relative">
                        <div className="relative">
                            <Image
                                src="/assets/images/users-img.png"
                                className="max-w-[500px] absolute right-0 -top-44 hidden 2xl:block"
                                alt="users-img"
                                width={500}
                                height={499}
                            />
                            <h1 className="text-4xl lg:text-7xl 2xl:text-[100px] font-black 2xl:leading-none text-center max-w-[985px] mx-auto uppercase relative">
                                <span>One</span> step cl
                                <span>
                                    <Image
                                        src="/assets/images/closer.png"
                                        width={70}
                                        height={68}
                                        className="rounded-full w-10 lg:w-16 2xl:w-[70px] items-center inline-flex border-2 border-black dark:border-white"
                                        alt="closer"
                                    />
                                </span>
                                ser to <span className="text-border-black">your</span> dream job
                            </h1>
                            <Image
                                src="/assets/images/card.png"
                                className="absolute max-w-[320px] -left-[205px] xl:-left-20 -top-[117px] 2xl:max-w-[420px] 2xl:-left-[32px] 2xl:-top-[155px] hidden lg:block"
                                alt="card"
                                width={420}
                                height={348}
                            />
                            <span className="absolute top-24 2xl:top-[155px] rtl:rotate-y-180 rtl:right-40 ltr:left-40 hidden lg:block">
                                <svg width="148" height="141" viewBox="0 0 148 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M88.1228 94.4379C103.992 91.6151 120.185 85.9286 132.066 75.0519C136.39 71.0948 139.573 66.4039 142.875 61.6306C143.107 61.2963 143.023 60.8347 142.688 60.6011C142.351 60.3687 141.889 60.4524 141.657 60.7895C138.418 65.47 135.306 70.0789 131.066 73.9595C119.354 84.6819 103.368 90.2434 87.7246 93.0058L87.6627 92.7685C86.9976 90.1911 84.2615 87.8353 80.5548 86.0285C75.2419 83.4378 67.9677 81.901 62.6633 82.077C60.2797 82.1565 58.2816 82.5918 56.9808 83.3863C55.9661 84.0051 55.3401 84.8427 55.1683 85.8815C54.8038 88.0955 56.4488 90.0669 59.3353 91.5728C65.3711 94.7239 76.8147 96.0893 81.8892 95.4088C83.4737 95.1958 85.068 94.9574 86.6657 94.689C86.7951 95.1392 86.9198 95.5805 87.0218 96.0151C87.3087 97.2543 87.4081 98.4584 86.8229 99.8041C85.9086 101.9 84.129 103.555 82.0173 104.883C78.7203 106.953 74.6074 108.218 71.4592 108.999C53.926 113.347 39.434 108.207 27.8604 100.678C16.1735 93.073 7.44039 83.035 1.53515 77.7142C1.23194 77.4399 0.764341 77.466 0.490047 77.7692C0.215754 78.0724 0.240329 78.5412 0.545058 78.8143C6.48797 84.1699 15.2882 94.264 27.0542 101.919C38.9336 109.65 53.8168 114.899 71.815 110.438C75.0945 109.625 79.3716 108.293 82.8046 106.137C85.1805 104.643 87.1518 102.754 88.1805 100.395C89.1027 98.2772 88.6853 96.4518 88.1228 94.4379ZM86.2594 93.256L86.2298 93.1375C85.6486 90.8843 83.1475 88.9394 79.906 87.3601C74.8008 84.8706 67.8117 83.3882 62.7119 83.5582C60.9633 83.6154 59.4454 83.8652 58.3248 84.3541C57.401 84.7585 56.7624 85.3145 56.6307 86.1221C56.5028 86.8843 56.7676 87.5828 57.2913 88.2247C57.9049 88.9794 58.8538 89.6514 60.0193 90.2605C65.8195 93.2878 76.816 94.5957 81.692 93.9412C83.2062 93.7368 84.7298 93.5099 86.2594 93.256Z"
                                        fill="#07D673"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M142.917 58.6676C143.065 58.9562 143.145 59.4035 143.225 59.8855C143.416 61.0335 143.462 62.3827 143.509 63.0177C143.541 63.4263 143.897 63.7302 144.304 63.7C144.713 63.6686 145.018 63.3135 144.987 62.9049C144.928 62.127 144.864 60.3292 144.567 59.0333C144.407 58.3384 144.161 57.7738 143.868 57.4618C143.369 56.9296 142.637 56.9326 141.762 57.6643C140.727 58.5305 139.19 60.62 137.043 61.2909C136.653 61.4118 136.435 61.8296 136.558 62.218C136.68 62.6091 137.095 62.8267 137.486 62.7045C139.532 62.0639 141.124 60.3203 142.254 59.2208C142.469 59.0121 142.749 58.7942 142.917 58.6676Z"
                                        fill="#07D673"
                                    />
                                </svg>
                            </span>
                            <span className="absolute rtl:right-1/2 ltr:left-1/2 top-32 2xl:top-[177px] rtl:rotate-y-180 hidden lg:block">
                                <svg width="125" height="135" viewBox="0 0 125 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M52.5429 0.00231934H98.8224L68.8468 38.469H125L25.4769 134.618L55.826 69.7847H0L52.5429 0.00231934Z"
                                        fill="#07D673"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="text-center lg:rtl:text-left lg:ltr:text-right mt-12 lg:mt-24">
                                <div className="inline-flex rtl:mr-auto ltr:ml-auto items-center border-2 border-[#9199B5]/[0.12] py-5 px-8 rounded-[60px] gap-4">
                                    <div className="max-w-[170px]">
                                        <Image src="/assets/images/counter-Images.png" width={170} height={50} alt="counter Images" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-success dark:text-white">
                                            <CountsUp start={0} end={87} delay={1} duration={2} suffix="k +" />
                                        </h3>
                                        <p className="text-sm font-semibold text-gray dark:text-[#9199B5]">People Hired</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg md:text-2xl font-semibold mb-6 mt-9 text-center lg:rtl:text-right lg:ltr:text-left">
                                We&apos;re building a culture at Greco where amazing people (like you) can do their best work. If you&apos;re ready to grow your
                                career, you&apos;ve come to the right place.
                            </p>
                            <Image
                                src="/assets/images/career-banner.png"
                                width={768}
                                height={462}
                                className="2xl:-ml-36 rtl:rotate-y-180"
                                alt="career-banner"
                            />
                        </div>
                        <div className="absolute rtl:-left-10 ltr:-right-10 2xl:rtl:-left-32 2xl:ltr:-right-32 bottom-24 max-w-lg xl:max-w-2xl 2xl:max-w-[900px] hidden lg:block rtl:rotate-y-180">
                            <Image src="/assets/images/laptop.png" alt="laptop" width={900} height={694} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="2xl:flex justify-between items-center">
                        <div className="max-w-[1006px]">
                            <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                Current <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Job Openings</span>
                            </h2>
                            <p className="font-semibold text-gray dark:text-[#9199B5]">
                                Wanting to become a vital part of an ever-challenging work environment? Is working with passion, creativity and enthusiasm your
                                forte? Then brush aside everything else and join our team.
                            </p>
                        </div>
                        <div>
                            <Link href="/contact-us" className="btn mt-5">
                                Apply for job
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                        <OpenPositionCard type="web development" title="PHP/Laravel Developer" />
                        <OpenPositionCard type="web Design" title="Product Designer" />
                        <OpenPositionCard type="web app development" title="Flutter Developer" />
                        <OpenPositionCard type="web development" title="PHP/Laravel Developer" />
                        <OpenPositionCard type="web Design" title="Product Designer" />
                        <OpenPositionCard type="web app development" title="Flutter Developer" />
                        <OpenPositionCard type="web development" title="PHP/Laravel Developer" />
                        <OpenPositionCard type="web Design" title="Product Designer" />
                        <OpenPositionCard type="web app development" title="Flutter Developer" />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <h2 className="text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                        Life at <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Greco</span>
                    </h2>
                </div>
                <div className="bg-[url('/assets/images/line.png')] bg-cover bg-center bg-no-repeat lg:mt-16">
                    <div className="container">
                        <div className="sm:flex relative">
                            <div className="absolute z-1 top-40 rtl:-right-32 ltr:-left-32">
                                <Image src="/assets/images/flower.svg" width={140} height={124} alt="flower" />
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/life-img1.png"
                                    width={625}
                                    height={444}
                                    className="sm:rtl:rotate-12 sm:ltr:-rotate-12 mt-5 sm:mt-24 w-full"
                                    alt="life img1"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/life-img2.png"
                                    width={911}
                                    height={704}
                                    className="sm:rtl:-rotate-12 sm:ltr:rotate-12 mt-5 sm:mt-24 w-full"
                                    alt="life img2"
                                />
                            </div>
                            <div className="absolute bottom-28 left-[460px] hidden 2xl:block w-32">
                                <Image src="/assets/images/union.png" alt="union" width={176} height={213} />
                            </div>
                        </div>
                        <div className="sm:flex gap-12">
                            <div>
                                <Image
                                    src="/assets/images/life-img3.png"
                                    width={443}
                                    height={315}
                                    className="sm:rtl:-rotate-12 sm:ltr:rotate-12 mt-5 sm:-mt-16"
                                    alt="life img3"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/life-img4.png"
                                    width={514}
                                    height={365}
                                    className="sm:rtl:rotate-12 sm:ltr:-rotate-12"
                                    alt="life img4"
                                />
                            </div>
                            <div>
                                <Image src="/assets/images/life-img5.png" width={736} height={523} className="mt-5 sm:mt-16" alt="life img5" />
                            </div>
                        </div>
                        <div className="sm:flex gap-12">
                            <div>
                                <Image
                                    src="/assets/images/life-img6.png"
                                    width={850}
                                    height={604}
                                    className="sm:rtl:-rotate-12 sm:ltr:rotate-12 mt-5 sm:-mt-20"
                                    alt="life img6"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/assets/images/life-img7.png"
                                    width={871}
                                    height={619}
                                    className="sm:rtl:rotate-12 sm:ltr:-rotate-12 mt-5 sm:mt-8 lg:mt-36"
                                    alt="life img7"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-16">
                <div className="container">
                    <h2 className="text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                        What Our <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Employees Say</span>
                    </h2>
                    <EmployeesFeedbackModal />
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <h2 className="text-[28px] font-bold leading-8">
                        Perks in <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Greco</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8 sm:mt-12 gap-5 sm:gap-8 uppercase">
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <LearningPerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Learning & Development</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <GuidancePerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Mindful Personal Guidance</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <FeedBackPerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Constructive Feedback</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <OpenCulturePerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Inclusive & Open-Culture</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <InnovationPerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Innovation & Quality First</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <ProactivePerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Proactive Implementation</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <GlobalOpportunitiesPerkIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Best & Global Opportunities</p>
                            </div>
                        </div>
                        <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] hover:border-secondary hover:bg-secondary/5 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] px-2">
                            <div className="flex items-center justify-center gap-2.5">
                                <span>
                                    <ComputerIcon />
                                </span>
                                <p className="text-lg font-semibold text-gray dark:text-white">Work with Latest Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <BlogSlider />
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[url('/assets/images/newsletter.png')] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative">
                <GetInTouch />
            </section>

            <style>{css}</style>
        </>
    );
};

export default page;
