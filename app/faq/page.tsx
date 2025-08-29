import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import FAQuestions from '@/components/FAQuestions';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'FAQ – LeonLogic: odpovede na najčastejšie otázky',
    description: 'Máte otázky? V našom FAQ nájdete odpovede o SEO, webových riešeniach, digitálnom marketingu, e-shope a službách LeonLogic.',
    openGraph: {
        ...helper.openGraphData,
        title: 'FAQ – LeonLogic: odpovede na najčastejšie otázky',
        description: 'Máte otázky? V našom FAQ nájdete odpovede o SEO, webových riešeniach, digitálnom marketingu, e-shope a službách LeonLogic.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/faq',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'FAQ – LeonLogic: odpovede na najčastejšie otázky',
        description: 'Máte otázky? V našom FAQ nájdete odpovede o SEO, webových riešeniach, digitálnom marketingu, e-shope a službách LeonLogic.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/faq`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/faq` },
    },
};

const page = () => {
    return (
        <>

            <section className="pb-12 pt-32 md:pt-52">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-[50px] md:leading-[60px] font-black italic uppercase" data-aos="zoom-in" data-aos-duration="1000">
                            Frequently Asked <span className="text-secondary">Questions</span>
                        </h1>
                        <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5 max-w-[582px] mx-auto">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#9199B5]/10 py-16">
                <div className="container">
                    <FAQuestions />
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
