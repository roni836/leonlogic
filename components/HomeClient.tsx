'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import CountsUp from '@/components/CountsUp';
import DigitalServicesSlider from '@/components/DigitalServicesSlider';
import FAQuestions from '@/components/FAQuestions';
import EmailIcon from '@/components/Icons/EmailIcon';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import ThunderIcon from '@/components/Icons/ThunderIcon';
import PartnerSlider from '@/components/PartersSlider';
import PricingPlansChart from '@/components/PricingPlansChart';
import SpecialistsDevelopers from '@/components/SpecialistsDevelopers';
import Script from 'next/script';
import BlogSlider from '@/components/BlogSlider';
import GetInTouch from '@/components/GetInTouch';
import ReviewCard from '@/components/ReviewCard';
import HeroReviewCarousel from '@/components/HeroReviewCarousel';
import WebsiteAuditModal from '@/components/WebsiteAuditModal';

export default function HomeClient() {
    const [showAuditModal, setShowAuditModal] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted!');
        const form = e.target as HTMLFormElement;
        const emailInput = form.querySelector('input[type="text"]') as HTMLInputElement;
        const email = emailInput.value.trim();

        console.log('Email:', email);

        if (email && email.includes('@')) {
            console.log('Valid email, opening modal...');
            setUserEmail(email);
            setShowAuditModal(true);
            emailInput.value = '';
        } else {
            console.log('Invalid email');
        }
    };

    console.log('Modal state:', showAuditModal);

    return (
        <>
            <WebsiteAuditModal
                isOpen={showAuditModal}
                onClose={() => { setShowAuditModal(false); setUserEmail(''); }}
                userEmail={userEmail}
            />

            <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] 2xl:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <div>
                            <span className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-gray px-5 py-2 font-semibold uppercase text-white">
                                <ThunderIcon className="h-6 w-3.5" />
                                Digitálna agentúra pre váš rast
                            </span>
                            <h1
                                className="mb-5 text-3xl font-black uppercase md:text-5xl 2xl:text-[70px] 2xl:leading-tight dark:text-white"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                Získajte bezplatný 
                                <br />
                                 <span className="bg-[url('/assets/images/line.svg')] bg-bottom-left bg-no-repeat">audit </span> webu
                            </h1>
                            <p className="mb-7 max-w-[590px] text-lg text-[#4B5576] dark:text-[#9199B5]">
                              Zistite, ako zlepšiť výkonnosť vášho webu a SEO. Analýza trvá 3 minúty, výsledky dostanete okamžite.
                            </p>

                            <div className="mb-2.5 w-full max-w-[350px]">
                                <form onSubmit={handleEmailSubmit}>
                                    <div className="relative">
                                        <span className="absolute top-1/2 -translate-y-1/2 text-secondary ltr:left-4 rtl:right-4">
                                            <EmailIcon className="h-6 w-6" />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Zadajte váš email a začnite rásť"
                                            className="form-input border-2 border-[#E1E6F5] dark:text-white dark:border-[#9199B5] pe-14 ps-12 placeholder:text-primary dark:placeholder:text-white peer"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="absolute inset-y-0 my-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary peer-focus:opacity-100 opacity-0 duration-300 dark:bg-secondary font-bold uppercase text-white hover:bg-secondary/80 ltr:right-1.5 rtl:left-1.5"
                                        >
                                            <span className="sr-only">Submit</span>
                                            <RightArrowIcon />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <HeroReviewCarousel />
                        </div>
                        <div className="hidden lg:block" data-aos="fade-left" data-aos-duration="1000">
                            <Image
                                src="/assets/images/banner-img.png"
                                className="block dark:hidden rtl:rotate-y-180"
                                alt="banner img"
                                width={827}
                                height={631}
                            />
                            <Image
                                src="/assets/images/banner-img-dark.png"
                                className="hidden dark:block rtl:rotate-y-180"
                                alt="banner img dark"
                                width={758}
                                height={579}
                                priority={true}
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-[170px] start-4 w-full max-w-xs rotate-2 rtl:-rotate-2 bg-success px-8 py-4 text-center md:-bottom-[200px] md:start-0 md:left-0 md:max-w-2xl md:px-32 lg:max-w-4xl 2xl:max-w-6xl">
                        <Image
                            src="/assets/images/subtract.svg"
                            className="absolute -start-6 -top-7 z-1 max-w-[60px] md:-start-12 rtl:rotate-y-180 md:-top-16 md:max-w-none block dark:hidden"
                            alt="subtract"
                            width={130}
                            height={137}
                        />
                        <Image
                            src="/assets/images/Subtract-dark.svg"
                            className="absolute -start-6 -top-7 z-1 max-w-[60px] md:-start-12 rtl:rotate-y-180 md:-top-16 md:max-w-none hidden dark:block"
                            alt="Subtract dark"
                            width={128}
                            height={139}
                        />
                        <div className="absolute -start-px -top-px border-b-30 rtl:border-r-30 ltr:border-l-30 border-b-transparent rtl:border-r-white ltr:border-l-white dark:rtl:border-r-primary dark:ltr:border-l-primary md:border-b-70 md:rtl:border-r-70 md:ltr:border-l-70"></div>
                        <h2 className="mb-3 leading-tight text-secondary md:mb-6 md:text-[22px]">Medzi našich klientov patria lídri svojich odvetví</h2>
                        <PartnerSlider />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <p className="mb-7 inline-flex rounded-full dark:bg-success-light/10 bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            ČO VYTVÁRAME
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                           Poskytujeme komplexné<br />
                            <span className="bg-[url(/assets/images/line1.svg)] bg-bottom-right bg-no-repeat">digitálne riešenia</span>
                        </h2>
                    </div>
                    <DigitalServicesSlider />
                </div>
            </section>

            <section className="md:py-16">
                <div className="container">
                    <div className="grid gap-10 rounded-2xl bg-primary dark:bg-[#9199B5]/[0.12] px-4 md:px-10 lg:grid-cols-2 2xl:px-24">
                        <div className="pt-10 md:pt-20 lg:max-w-lg lg:pb-28">
                            <p className="mb-8 inline-flex items-center gap-1 text-xl font-bold uppercase italic text-secondary">
                                <span className="inline-flex h-4 w-4 rounded-full border-[3px] border-success"></span>SME LEONLOGIC
                            </p>

                            <h2 className="mb-2.5 text-2xl font-extrabold leading-snug text-white md:text-[40px]">
                                Digitálna agentúra
                                <br />pre
                                <span className="bg-[url(/assets/images/line1.svg)] bg-bottom-right bg-no-repeat font-light italic"> moderné firmy</span>
                            </h2>

                            <p className="mb-7 text-white">
                               Pomáhame firmám zlepšiť ich online prítomnosť a digitálny marketing. Špecializujeme sa na efektívne riešenia, ktoré prinášajú merateľné výsledky. Každý projekt riešime s dôrazom na váš biznis a konkrétne ciele.
                            </p>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2.5 rounded-2xl bg-secondary px-5 py-4 font-bold uppercase duration-500 hover:bg-white dark:text-black"
                            >
                                ZAČAŤ SPOLUPRÁCU
                                <RightArrowIcon />
                            </Link>
                        </div>

                        <div className="flex items-end md:pt-14 max-w-[652px] w-full" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/we-img.svg" alt="we img" width={652} height={460} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            VYBRANÉ PROJEKTY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Digitálne  <span className="bg-[url(/assets/images/line1.svg)] bg-bottom-right bg-no-repeat">prípadové štúdie </span> úspechov
                        </h2>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/1.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project1"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/2.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project2"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/3.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project3"
                                width={754}
                                height={401}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/4.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="project4"
                                width={754}
                                height={401}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/*
            <SpecialistsDevelopers />
            */}

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[#9199B5]/10 py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            ČASTO KLADENÉ OTÁZKY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Často kladené <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> otázky</span>
                        </h2>
                    </div>
                    <FAQuestions />
                </div>
            </section>
            <section className="py-12 md:py-16">
                <BlogSlider />
            </section>
            <section className="relative bg-[#08544F] py-12">
                <GetInTouch />
            </section>

            {/*
            <section className="py-12 md:py-16">
                <PricingPlansChart />
            </section>
            */}

            <Script id="home-faq-json-ld" type="application/ld+json">
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
} 