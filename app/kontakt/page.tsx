import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import ContactUsForm from '@/components/ContactUsForm';
import FilledEmailIcon from '@/components/Icons/FilledEmailIcon';
import FilledLocationIcon from '@/components/Icons/FilledLocationIcon';
import FilledPhoneIcon from '@/components/Icons/FilledPhoneIcon';
import Image from 'next/image';
import Link from 'next/link';

import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontaktujte nás – LeonLogic digitálna agentúra',
    description: 'Máte otázky alebo záujem o spoluprácu? Kontaktujte digitálnu agentúru LeonLogic. Sme tu pre vás – SEO, webové riešenia, marketing a e-shop projekty.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Kontaktujte nás – LeonLogic digitálna agentúra',
        description: 'Máte otázky alebo záujem o spoluprácu? Kontaktujte digitálnu agentúru LeonLogic. Sme tu pre vás – SEO, webové riešenia, marketing a e-shop projekty.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/kontakt',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Kontaktujte nás – LeonLogic digitálna agentúra',
        description: 'Máte otázky alebo záujem o spoluprácu? Kontaktujte digitálnu agentúru LeonLogic. Sme tu pre vás – SEO, webové riešenia, marketing a e-shop projekty.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/kontakt`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/kontakt` },
    },
};

const page = () => {
    return (
        <>
            <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52">
                <div className="bg-primary dark:bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <h1
                        className="text-3xl md:text-[50px] font-black italic uppercase text-white text-center md:leading-[59px]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Máte otázky? <span className="text-secondary">Napíšte nám!</span>
                    </h1>
                    <p className="text-lg text-gray dark:text-[#9199B5] mt-5 text-center">
                        Sme tu pre vás a radi vám pomôžeme s vašimi projektmi. Kontaktujte nás kedykoľvek.
                    </p>
                </div>
            </section>

            <section className="-mt-12 md:-mt-48 relative">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div data-aos="flip-left" data-aos-duration="1000">
                                    <div className="bg-white dark:bg-[#112C3C] border-2 border-[#9199B5]/[0.12] hover:border-secondary duration-200 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] rounded-2xl p-8">
                                        <span>
                                            <FilledPhoneIcon className="w-10 h-[41px]" />
                                        </span>
                                        <p className="text-lg font-semibold text-gray dark:text-[#9199B5] mt-5">Telefónne číslo</p>
                                        <Link href="tel:+421915376588" className="text-xl font-semibold mt-2.5 hover:text-secondary transition">
                                            +421 915 376 588
                                        </Link>
                                    </div>
                                </div>
                                <div data-aos="flip-left" data-aos-duration="1000">
                                    <div className="bg-white dark:bg-[#112C3C] border-2 border-[#9199B5]/[0.12] hover:border-secondary duration-200 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] rounded-2xl p-8">
                                        <span>
                                            <FilledEmailIcon className="w-10 h-[41px]" />
                                        </span>
                                        <p className="text-lg font-semibold text-gray dark:text-[#9199B5] mt-5">Email ID</p>
                                        <Link href="mailto:leonlogic@leonlogic.com" className="text-xl font-semibold mt-2. hover:text-secondary transition5">
                                            leonlogic@leonlogic.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="sm:mx-auto sm:col-span-2" data-aos="flip-left" data-aos-duration="1000">
                                    <div className="border-2 dark:bg-[#112C3C] border-[#9199B5]/[0.12] hover:border-secondary duration-200 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] rounded-2xl p-8">
                                        <span>
                                            <FilledLocationIcon className="w-[41px] h-[41px]" />
                                        </span>
                                        <p className="text-lg font-semibold text-gray dark:text-[#9199B5] mt-5">Adresa</p>
                                        <p className="text-xl font-semibold mt-2.5">Kostolná 299, 991 26 Nenince</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-10 md:pb-16">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="pb-16 pt-[120px]">
                <div className="container">
                    <div className="max-w-[459px] mx-auto text-center">
                        <h2 className="mt-[30px] pb-4 text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                            Where <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">you&apos;ll find us</span>
                        </h2>
                        <p className="font-semibold text-gray dark:text-[#9199B5]">
                            automates your ad management have routine you can having using external focus automations reaching
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
                            <div className="w-52 min-h-[200px] mx-auto inline-flex items-end">
                                <Image src="/assets/images/bengaluru.png" width={208} height={163} alt="bengaluru" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-8">Bengaluru</h3>
                            <p className="font-semibold text-gray max-w-[195px] mt-2.5 mx-auto dark:text-[#9199B5]">
                                5th Floor, Sona Towers, Vasanth Nagar, Bengaluru
                            </p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
                            <div className="w-52 min-h-[200px] mx-auto inline-flex items-end">
                                <Image src="/assets/images/surat.png" width={208} height={188} alt="surat" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-8">Surat</h3>
                            <p className="font-semibold text-gray max-w-[195px] mt-2.5 mx-auto dark:text-[#9199B5]">9th Floor, Trinity Orion, Vesu, Surat,</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
                            <div className="w-52 min-h-[200px] mx-auto inline-flex items-end">
                                <Image src="/assets/images/mumbai.png" width={208} height={146} alt="mumbai" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-8">Mumbai</h3>
                            <p className="font-semibold text-gray max-w-[195px] mt-2.5 mx-auto dark:text-[#9199B5]">
                                46-A, VN Purav Marg, Borla, Chembur, Mumbai,
                            </p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
                            <div className="w-52 min-h-[200px] mx-auto inline-flex items-end">
                                <Image src="/assets/images/jaipur.png" width={208} height={170} alt="jaipur" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-8">Jaipur</h3>
                            <p className="font-semibold text-gray max-w-[195px] mt-2.5 mx-auto dark:text-[#9199B5]">
                                Agrasen Tower, T-7, Vidyadhar Nagar, Jaipur
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <BlogSlider />
            </section> */}

            {/* <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section> */}
        </>
    );
};

export default page;
