import Image from 'next/image';
import DotBulletIcon from '@/components/Icons/DotBulletIcon';
import MobileAppIcon from '@/components/Icons/MobileAppIcon';
import UiUxIcon from '@/components/Icons/UiUxIcon';
import WebDevlopmentIcon from '@/components/Icons/WebDevlopmentIcon';
import TechnologyCard from '@/components/TechnologyCard';
import HtmlIcon from '@/components/Icons/HtmlIcon';
import CssIcon from '@/components/Icons/CssIcon';
import ReactIcon from '@/components/Icons/ReactIcon';
import AngularIcon from '@/components/Icons/AngularIcon';
import JavaScriptIcon from '@/components/Icons/JavaScriptIcon';
import VueIcon from '@/components/Icons/VueIcon';
import LaravelIcon from '@/components/Icons/LaravelIcon';
import BootstrapIcon from '@/components/Icons/BootstrapIcon';
import NextIcon from '@/components/Icons/NextIcon';
import NodeIcon from '@/components/Icons/NodeIcon';
import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projekt [Názov projektu] – LeonLogic: SEO, web a marketing riešenia',
    description: 'Pozrite si detail projektu [Názov projektu], kde sme pre klienta realizovali [služba – napr. SEO optimalizáciu, webdizajn, e-shop riešenie]. Výsledkom bol [krátky výsledok – napr. zvýšenie návštevnosti o 120%].',
    openGraph: {
        ...helper.openGraphData,
        title: 'Projekt [Názov projektu] – LeonLogic: SEO, web a marketing riešenia',
        description: 'Pozrite si detail projektu [Názov projektu], kde sme pre klienta realizovali [služba – napr. SEO optimalizáciu, webdizajn, e-shop riešenie]. Výsledkom bol [krátky výsledok – napr. zvýšenie návštevnosti o 120%].',
        url: process.env.NEXT_PUBLIC_APP_URL + '/portfolio-detail',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Projekt [Názov projektu] – LeonLogic: SEO, web a marketing riešenia',
        description: 'Pozrite si detail projektu [Názov projektu], kde sme pre klienta realizovali [služba – napr. SEO optimalizáciu, webdizajn, e-shop riešenie]. Výsledkom bol [krátky výsledok – napr. zvýšenie návštevnosti o 120%].',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio-detail`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/portfolio-detail` },
    },
};

const page = () => {
    return (
        <>
            <section className="relative pt-32 md:pt-52 dark:bg-primary overflow-hidden">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 md:bottom-5 2xl:bottom-[34px] end-0 md:rtl:rounded-br-[50px] md:ltr:rounded-bl-[50px] md:rtl:-skew-y-2 md:ltr:skew-y-2"></div>
                <div className="container relative">
                    <div className="flex flex-col 2xl:flex-row gap-10 justify-between">
                        <div>
                            <h1
                                className="uppercase italic text-2xl sm:text-[28px] sm:leading-[30px] max-w-[519px] mx-auto 2xl:mx-0 text-center 2xl:text-start"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                SaaS up Website For Unique <span className="text-4xl sm:text-6xl font-black text-secondary">Start-Up Brands</span>
                            </h1>
                            <div className="flex items-center justify-center 2xl:justify-start gap-2.5 mt-8">
                                <span className="uppercase py-3 px-5 text-sm font-bold rounded-[50px] bg-success/[0.08] text-success dark:text-[#9199B5] dark:bg-[#9199B5]/[0.12]">
                                    Dashboard
                                </span>
                                <span className="uppercase py-3 px-5 text-sm font-bold rounded-[50px] bg-success/[0.08] text-success dark:text-[#9199B5] dark:bg-[#9199B5]/[0.12]">
                                    project management
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 justify-center 2xl:justify-start mt-[30px]">
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="bg-white dark:bg-[#112C3C] p-5 rounded-[15px] border-2 border-[#9199B5]/[0.12] hover:border-secondary duration-200 relative top-0 hover:-top-2">
                                        <p className="font-semibold leading-5">Project Name</p>
                                        <p className="text-sm leading-4 font-semibold mt-2.5 text-gray dark:text-[#9199B5]">iFight Depression</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="bg-white dark:bg-[#112C3C] p-5 rounded-[15px] border-2 border-[#9199B5]/[0.12] hover:border-secondary duration-200 relative top-0 hover:-top-2">
                                        <p className="font-semibold leading-5">Website</p>
                                        <p className="text-sm leading-4 font-semibold mt-2.5 text-gray dark:text-[#9199B5]">iFightdepression.com</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="bg-white dark:bg-[#112C3C] p-5 rounded-[15px] border-2 border-[#9199B5]/[0.12] hover:border-secondary duration-200 relative top-0 hover:-top-2">
                                        <p className="font-semibold leading-5">Services</p>
                                        <p className="text-sm leading-4 font-semibold mt-2.5 text-gray dark:text-[#9199B5]">Web Development</p>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="bg-white dark:bg-[#112C3C] p-5 rounded-[15px] border-2 border-[#9199B5]/[0.12] hover:border-secondary duration-200 relative top-0 hover:-top-2">
                                        <p className="font-semibold leading-5">Type</p>
                                        <p className="text-sm leading-4 font-semibold mt-2.5 text-gray dark:text-[#9199B5]">UX Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[800px] w-full mx-auto mb-0">
                            <Image
                                src="/assets/images/portfolio-banner.png"
                                className="w-full h-full object-cover rtl:rotate-y-180"
                                alt="portfolio-banner"
                                width={800}
                                height={310}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/assets/images/portfolio-1.png" alt="portfolio-1" width={752} height={459} />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <Image src="/assets/images/portfolio-2.png" alt="portfolio-2" width={752} height={459} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="rounded-2xl overflow-hidden">
                        <Image src="/assets/images/project-img.jpg" alt="portfolio" width={1536} height={500} />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div>
                        <h2 className="text-[28px]/6 font-bold">Project Summary</h2>
                        <p className="text-gray mt-5 md:mt-8 dark:text-[#9199B5]">
                            Social media often feeds into the discovery of new content such as news stories, and “discovery” is a search activity. Many people
                            also perform searches at social media sites to find social media content For instance, Twitter is a social site to share short
                            messages
                        </p>
                        <p className="text-gray mt-2.5 dark:text-[#9199B5]">
                            Social connections may also impact the relevancy of some search results, either within a social media network or at a ‘mainstream’
                            search engine. Social media itself is a catch-all term for sites that may provide radically different social actions.
                        </p>
                        <p className="text-gray mt-2.5 dark:text-[#9199B5]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-12 md:py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-8">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="bg-white dark:bg-[#9199B5]/[0.12] border-2 border-[#9199B5]/[0.12] rounded-2xl duration-200 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] p-5 sm:p-[30px] hover:bg-secondary/10 hover:border-secondary">
                                <div className="flex flex-col sm:flex-row gap-5 text-center sm:rtl:text-right sm:ltr:text-left sm:gap-8">
                                    <div className="border-2 border-secondary/10 rounded-full flex items-center justify-center w-[60px] h-[60px] bg-linear-to-b from-secondary/10 to-transparent shrink-0 mx-auto">
                                        <MobileAppIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Mobile App</h3>
                                        <p className="text-lg text-gray mt-2.5 dark:text-[#9199B5]">Many desktop publishing packages and web page editors.</p>
                                        <div className="flex gap-2.5 items-center justify-center sm:justify-start mt-8">
                                            <DotBulletIcon />
                                            <p className="text-g font-semibold">Web and Mobile App Design</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center justify-center sm:justify-start mt-2.5">
                                            <span>
                                                <DotBulletIcon />
                                            </span>
                                            <p className="text-g font-semibold">Front-end Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="bg-white dark:bg-[#9199B5]/[0.12] border-2 border-[#9199B5]/[0.12] rounded-2xl duration-200 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] p-5 sm:p-[30px] hover:bg-secondary/10 hover:border-secondary">
                                <div className="flex flex-col sm:flex-row gap-5 text-center sm:rtl:text-right sm:ltr:text-left sm:gap-8">
                                    <div className="border-2 border-secondary/10 rounded-full flex items-center justify-center w-[60px] h-[60px] bg-linear-to-b from-secondary/10 to-transparent shrink-0 mx-auto">
                                        <UiUxIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">UX/UI Design</h3>
                                        <p className="text-lg text-gray mt-2.5 dark:text-[#9199B5]">Many desktop publishing packages and web page editors.</p>
                                        <div className="flex gap-2.5 items-center justify-center sm:justify-start mt-8">
                                            <span>
                                                <DotBulletIcon />
                                            </span>
                                            <p className="text-g font-semibold">Web and Mobile App Design</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center justify-center sm:justify-start mt-2.5">
                                            <span>
                                                <DotBulletIcon />
                                            </span>
                                            <p className="text-g font-semibold">Front-end Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="bg-white dark:bg-[#9199B5]/[0.12] border-2 border-[#9199B5]/[0.12] rounded-2xl duration-200 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] p-5 sm:p-[30px] hover:bg-secondary/10 hover:border-secondary">
                                <div className="flex flex-col sm:flex-row gap-5 text-center sm:rtl:text-right sm:ltr:text-left sm:gap-8">
                                    <div className="border-2 border-secondary/10 rounded-full flex items-center justify-center w-[60px] h-[60px] bg-linear-to-b from-secondary/10 to-transparent shrink-0 mx-auto">
                                        <WebDevlopmentIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Web Development</h3>
                                        <p className="text-lg text-gray mt-2.5 dark:text-[#9199B5]">Many desktop publishing packages and web page editors.</p>
                                        <div className="flex gap-2.5 items-center justify-center sm:justify-start mt-8">
                                            <span>
                                                <DotBulletIcon />
                                            </span>
                                            <p className="text-g font-semibold">Web and Mobile App Design</p>
                                        </div>
                                        <div className="flex gap-2.5 items-center justify-center sm:justify-start mt-2.5">
                                            <span>
                                                <DotBulletIcon />
                                            </span>
                                            <p className="text-g font-semibold">Front-end Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="bg-white dark:bg-[#9199B5]/[0.12] py-16 border-2 border-[#9199B5]/[0.12] rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)]">
                        <h2 className="text-[28px] font-bold text-center leading-8">Team Members</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-center mt-12 gap-5">
                            <div className="text-center group">
                                <div className="rounded-full overflow-hidden mx-auto w-28 sm:w-36 grayscale group-hover:grayscale-0 duration-300 bg-[#9199B5]/[0.12]">
                                    <Image src="/assets/images/developer-2.png" alt="developer-2" width={144} height={139} />
                                </div>
                                <h3 className="text-xl font-bold mt-5">Lucy Liu</h3>
                                <p className="text-lg font-semibold text-gray mt-1">Developer</p>
                            </div>
                            <div className="text-center group">
                                <div className="rounded-full overflow-hidden mx-auto w-28 sm:w-36 grayscale group-hover:grayscale-0 duration-300 bg-[#9199B5]/[0.12]">
                                    <Image src="/assets/images/developer-1.png" alt="developer-1" width={144} height={136} />
                                </div>
                                <h3 className="text-xl font-bold mt-5">Lucy Liu</h3>
                                <p className="text-lg font-semibold text-gray mt-1">Developer</p>
                            </div>
                            <div className="text-center group">
                                <div className="rounded-full overflow-hidden mx-auto w-28 sm:w-36 grayscale group-hover:grayscale-0 duration-300 bg-[#9199B5]/[0.12]">
                                    <Image src="/assets/images/developer-6.png" alt="developer-6" width={144} height={138} />
                                </div>
                                <h3 className="text-xl font-bold mt-5">Lucy Liu</h3>
                                <p className="text-lg font-semibold text-gray mt-1">Developer</p>
                            </div>
                            <div className="text-center group">
                                <div className="rounded-full overflow-hidden mx-auto w-28 sm:w-36 grayscale group-hover:grayscale-0 duration-300 bg-[#9199B5]/[0.12]">
                                    <Image src="/assets/images/developer-3.png" alt="developer-3" width={144} height={138} />
                                </div>
                                <h3 className="text-xl font-bold mt-5">Lucy Liu</h3>
                                <p className="text-lg font-semibold text-gray mt-1">Developer</p>
                            </div>
                            <div className="text-center group">
                                <div className="rounded-full overflow-hidden mx-auto w-28 sm:w-36 grayscale group-hover:grayscale-0 duration-300 bg-[#9199B5]/[0.12]">
                                    <Image src="/assets/images/developer-4.png" alt="developer-4" width={144} height={136} />
                                </div>
                                <h3 className="text-xl font-bold mt-5">Lucy Liu</h3>
                                <p className="text-lg font-semibold text-gray mt-1">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <h2 className="text-[28px] font-bold text-center leading-8">Technologies</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-12 gap-5 sm:gap-8">
                        <TechnologyCard icon={<HtmlIcon />} title="HTML" borderHover="hover:border-[#EF652A]" />
                        <TechnologyCard icon={<CssIcon />} title="CSS3" borderHover="hover:border-[#1C88C7]" />
                        <TechnologyCard icon={<ReactIcon />} title="React" borderHover="hover:border-[#61DAFB]" />
                        <TechnologyCard icon={<AngularIcon />} title="Angular" borderHover="hover:border-[#B52E31]" />
                        <TechnologyCard icon={<JavaScriptIcon />} title="JavaScript" borderHover="hover:border-[#FFDE25]" />
                        <TechnologyCard icon={<VueIcon />} title="Vue.js" borderHover="hover:border-[#4DBA87]" />
                        <TechnologyCard icon={<LaravelIcon />} title="Laravel" borderHover="hover:border-[#FB503B]" />
                        <TechnologyCard icon={<BootstrapIcon />} title="Bootstrap" borderHover="hover:border-[#900BFE]" />
                        <TechnologyCard icon={<NextIcon />} title="Next.js" borderHover="hover:border-black" />
                        <TechnologyCard icon={<NodeIcon />} title="NodeJS" borderHover="hover:border-[#8CC84B]" />
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
        </>
    );
};

export default page;
