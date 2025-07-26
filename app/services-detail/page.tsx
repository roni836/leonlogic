import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import CountsUp from '@/components/CountsUp';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import SpecialistsDevelopers from '@/components/SpecialistsDevelopers';
import Image from 'next/image';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services-Detail | Greco',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Services-Detail | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/services-detail',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Services-Detail | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/services-detail`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/services-detail` },
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
                            Find the best solution for every stage of your <span className="text-secondary">business development</span>
                        </h1>
                        <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-12 md:pb-[60px]">
                <div className="container">
                    <div className="max-w-[500px]">
                        <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                            Digital <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Strategy</span> Services
                        </h2>
                        <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                            Find a team of digital marketers you can rely on. Every day, we build trust through communication, transparency, and results.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">01</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Campaign Work</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                We make sure all your digital marketing channels are integrated together.
                            </p>
                        </div>
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">02</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Strategy Creation</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                We make sure all your digital marketing channels are integrated together.
                            </p>
                        </div>
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">03</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Target Audience</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                We make sure all your digital marketing channels are integrated together.
                            </p>
                        </div>
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">04</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">The Messaging</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                We make sure all your digital marketing channels are integrated together.
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
                                    We help great brands scale with{' '}
                                    <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">content marketing</span>.
                                </h2>
                                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique.
                                </p>
                                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>This is some text inside of a div</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Lorem ipsum began as scrambled</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Creation timelines for the standard lorem ipsum passage vary</p>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>It&apos;s difficult to find examples of lorem ipsum in use</p>
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

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
                        <div className="relative text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp starts={0} end={650} duration={2} delay={1} suffix="+" />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">SATISFIED CLIENTS</span>
                            <span className="absolute inset-y-0 my-auto h-7 w-0.5 bg-secondary ltr:right-0 rtl:left-0"></span>
                        </div>
                        <div className="relative text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp starts={0} end={99} duration={2} delay={1} suffix="%" />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">POSITIVE FEEDBACK</span>
                            <span className="absolute inset-y-0 my-auto h-7 w-0.5 bg-secondary ltr:right-0 rtl:left-0 hidden md:block"></span>
                        </div>
                        <div className="relative text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp starts={0} end={58} duration={2} delay={1} />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">PERFECT PRODECTS</span>
                            <span className="absolute inset-y-0 my-auto h-7 w-0.5 bg-secondary ltr:right-0 rtl:left-0"></span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-[50px]/9 font-extrabold text-success dark:text-white">
                                <CountsUp starts={0} end={12} duration={2} delay={1} />
                            </h3>
                            <span className="mt-2 sm:mt-7 block text-sm font-semibold uppercase text-gray dark:text-[#9199B5]">AWARDS WIN</span>
                        </div>
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
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project2"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/project3.jpg"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project3"
                                width={754}
                                height={401}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/project4.jpg"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project4"
                                width={754}
                                height={401}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <SpecialistsDevelopers />

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
