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

            <Script id="faq-json-ld" type="application/ld+json">
                {`{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                      "@type": "Question",
                      "name": "Why do I need free Instagram followers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                      }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to receive my free Instagram followers?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Are these free Instagram followers real?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How do I keep my free Instagram followers?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is it safe to use your free service?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Why is this service free?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "How do I make money on my Instagram?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What if I need to contact you about my account?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      }]
                }`}
            </Script>
        </>
    );
};

export default page;
