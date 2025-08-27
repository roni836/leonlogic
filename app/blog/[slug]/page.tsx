import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import ChainIcon from '@/components/Icons/ChainIcon';
import FilledFacebookIcon from '@/components/Icons/FilledFacebookIcon';
import FilledLinkedinIcon from '@/components/Icons/FilledLinkedinIcon';
import FilledTwitterIcon from '@/components/Icons/FilledTwitterIcon';
import InvertedComma from '@/components/Icons/InvertedComma';
import PinterestIcon from '@/components/Icons/PinterestIcon';
import Image from 'next/image';

import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog-Details | Greco',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog-Details | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog-details',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Blog-Details | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog-details`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/blog-details` },
    },
};

const page = () => {
    return (
        <>
            <section className="pt-32 pb-16 md:pt-52">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-8 justify-between">
                        <div className="lg:w-3/4">
                            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <div className="flex gap-5">
                                    <span className="bg-[#9199B5] w-0.5"></span>
                                    <a href="#">
                                        <span className="sr-only">pinterest</span>
                                        <PinterestIcon />
                                    </a>
                                    <a href="#">
                                        <span className="sr-only">facebook</span>
                                        <FilledFacebookIcon />

                                    </a>
                                    <a href="#">
                                        <span className="sr-only">twitter</span>
                                        <FilledTwitterIcon />
                                    </a>
                                    <a href="#">
                                        <span className="sr-only">linkedin</span>
                                        <FilledLinkedinIcon />
                                    </a>
                                    <a href="#">
                                        <span className="sr-only">link</span>
                                        <ChainIcon />
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-[50px] font-bold md:leading-[70px] mt-5" data-aos="zoom-in" data-aos-duration="1000">
                                10 Reasons to invest in SEO copywriting services
                            </h1>
                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5">
                                Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A survey
                                by Curate also backs the importance of webinars where 79% of buyers are ready to share their contact details in exchange for
                                webinar access.
                            </p>
                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5">
                                Marketing refers to any activities that a company uses to promote its products and services and improve its market share. In
                                order to be successful, marketing requires a combination of advertising savvy, sales, and the ability to deliver goods to
                                end-users. This is normally undertaken by specific professionals or marketers who can work internally (for companies) or
                                externally with other marketing firms. Email was a popular marketing tool in the early days of digital marketing.
                            </p>
                            <div className="max-w-[594px]" data-aos="zoom-in" data-aos-duration="1000">
                                <p className="bg-[#9199B5]/[0.12] py-2.5 px-5 mt-10 text-center rounded-[10px] text-lg leading-[38px] font-mono">
                                    <span className="text-[#0168FF]">Route</span>
                                    <span className="text-[#FB5D70]">::</span>
                                    <span className="text-[#BB4AF3]">get</span>
                                    {`('/see-my-paycheck', `}
                                    <span className="text-[#0168FF]">MyController</span>
                                    <span className="text-[#FB5D70]">::class</span>
                                    {`)`} <span className="text-[#FB5D70]">{`->`}</span>
                                    <span className="text-[#BB4AF3]">middleware</span>
                                    {`('require.pin');`}
                                </p>
                            </div>
                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-10">
                                Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A survey
                                by Curate also backs the importance of webinars where 79% of buyers are ready to share their contact details in exchange for
                                webinar access.
                            </p>
                            <ul className="list-decimal list-inside text-lg text-[#4B5576] dark:text-[#9199B5] mt-10 space-y-2">
                                <li>
                                    Add the{' '}
                                    <a
                                        href="#"
                                        className="text-secondary font-bold border-b border-secondary hover:border-success-light hover:text-success-light duration-200"
                                    >
                                        require.pin
                                    </a>{' '}
                                    middleware to routes or a group of routes requiring a pin
                                </li>
                                <li>The middleware will intercept those routes</li>
                                <li>The package generates a temporary URL to authenticate with their PIN </li>
                                <li>Once the user enters their valid PIN, it will redirect and allow them access to the PIN-protected route</li>
                            </ul>
                            <div className="flex mt-10" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="bg-success dark:bg-secondary w-1 rounded-md"></div>
                                <div className="bg-success/[0.04] dark:bg-secondary/[0.04] rounded-2xl max-w-[608px] relative p-5">
                                    <p className="text-lg text-success dark:text-secondary">
                                        Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward
                                        difficult to leave it. Hahimlam Dirat
                                    </p>
                                    <span className="absolute top-12 right-5">
                                        <InvertedComma className="text-[#001E2B] dark:text-white w-14 h-14" />
                                    </span>
                                </div>
                            </div>
                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                            </p>
                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-10">
                                If you want your article to rank for a <span className="text-success font-bold">specific keyword</span> on{' '}
                                <a
                                    href="#"
                                    className="text-secondary font-bold border-b border-secondary hover:text-success-light hover:border-success-light duration-200"
                                >
                                    https://laravel-news.com/
                                </a>
                                , include it in the title. For example, if you want to rank for how to write a blog, you could consider titles such as:
                            </p>
                            <ul className="text-lg mt-10 list-disc list-inside space-y-5">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Praesent blandit augue sed diam tincidunt faucibus.</li>
                                <li>Donec faucibus lorem pretium mi rhoncus blandit.</li>
                                <li>Quisque posuere tortor mattis est blandit commodo.</li>
                            </ul>
                        </div>
                        <div className="lg:w-2/5">
                            <div className="rounded-[20px] overflow-hidden" data-aos="flip-left" data-aos-duration="1000">
                                <Image src="/assets/images/blog-1.jpg" width={523} height={432} alt="blog 1" />
                            </div>
                            <div className="bg-primary rounded-[20px] mt-8 p-5 sm:p-8 text-white">
                                <h2 className="text-lg font-semibold">Related Posts</h2>
                                <div className="flex items-center gap-2.5 mt-5" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="rounded-[10px] overflow-hidden max-w-[150px]">
                                        <Image src="/assets/images/related-post1.jpg" width={150} height={85} alt="related post1" />
                                    </div>
                                    <div>
                                        <a href="#" className="text-base font-semibold hover:text-secondary duration-200">
                                            Livestream: Playing with Laravel Pipelines
                                        </a>
                                        <p className="text-sm font-semibold text-gray dark:text-[#9199B5] mt-2">Jan 01, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mt-5" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="rounded-[10px] overflow-hidden max-w-[150px]">
                                        <Image src="/assets/images/related-post2.jpg" width={150} height={85} alt="related post2" />
                                    </div>
                                    <div>
                                        <a href="#" className="text-base font-semibold hover:text-secondary duration-200">
                                            Livestream: Playing with Laravel Pipelines
                                        </a>
                                        <p className="text-sm font-semibold text-gray dark:text-[#9199B5] mt-2">Jan 01, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mt-5" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="rounded-[10px] overflow-hidden max-w-[150px]">
                                        <Image src="/assets/images/related-post3.jpg" width={150} height={85} alt="related post3" />
                                    </div>
                                    <div>
                                        <a href="#" className="text-base font-semibold hover:text-secondary duration-200">
                                            Livestream: Playing with Laravel Pipelines
                                        </a>
                                        <p className="text-sm font-semibold text-gray dark:text-[#9199B5] mt-2">Jan 01, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 mt-5" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="rounded-[10px] overflow-hidden max-w-[150px]">
                                        <Image src="/assets/images/related-post4.jpg" width={150} height={85} alt="related post4" />
                                    </div>
                                    <div>
                                        <a href="#" className="text-base font-semibold hover:text-secondary duration-200">
                                            Livestream: Playing with Laravel Pipelines
                                        </a>
                                        <p className="text-sm font-semibold text-gray dark:text-[#9199B5] mt-2">Jan 01, 2023</p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-white/10 mt-8"></div>
                                <h2 className="text-lg font-semibold mt-8">Category</h2>
                                <div className="flex flex-wrap gap-5 mt-5" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Business</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Consulting</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Digital</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Finance</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Support</span>
                                </div>
                                <div className="border-t-2 border-white/10 mt-8"></div>
                                <h2 className="text-lg font-semibold mt-8">Tags</h2>
                                <div className="flex flex-wrap gap-5 mt-5" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Design</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Agency</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Solution</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Start Up</span>
                                    <span className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">Web</span>
                                </div>
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
        </>
    );
};

export default page;
