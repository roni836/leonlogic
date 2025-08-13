import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import Link from 'next/link';
import GetInTouch from '@/components/GetInTouch';
import PricebulletPointIcon from '@/components/Icons/PricebulletPointIcon';
import Image from 'next/image';
import helper from '@/libs/helper';
import FAQuestions from '@/components/FAQuestions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Podnikové riešenia | Digitálna transformácia veľkých firiem',
    description: 'Komplexné podnikové riešenia pre veľké firmy. ERP systémy, digitálna transformácia, integrácie. Zvýšte produktivitu o 25-50%.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Podnikové riešenia | Digitálna transformácia veľkých firiem',
        description: 'Komplexné podnikové riešenia pre veľké firmy. ERP systémy, digitálna transformácia, integrácie. Zvýšte produktivitu o 25-50%.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/sluzby/enterprise-riesenia',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Podnikové riešenia | Digitálna transformácia veľkých firiem',
        description: 'Komplexné podnikové riešenia pre veľké firmy. ERP systémy, digitálna transformácia, integrácie. Zvýšte produktivitu o 25-50%.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/enterprise-riesenia`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/sluzby/enterprise-riesenia` },
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
                            Podnikové riešenia pre veľké firmy | Digitálna transformácia
                        </h1>
                        <p className="text-lg mt-5 text-[#4B5576] dark:text-[#9199B5] max-w-[582px]">
                            Podnikové riešenia sú komplexné technologické systémy navrhnuté pre veľké organizácie s tisíckami zamestnancov a komplexnými procesmi. Zahŕňajú ERP systémy, CRM platformy, business intelligence analytiku, automatizáciu pracovného toku a cloudové infraštruktúry.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-12 md:pb-[60px]">
                <div className="container">
                    <div className="max-w-[500px]">
                        <h2 className="text-3xl md:text-[40px] md:leading-[54px] font-extrabold mt-5">
                            Prečo investovať do podnikových riešení?
                        </h2>
                        <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                            Nájdite tím podnikových expertov, na ktorých sa môžete spoľahnúť. Každý deň pomáhame veľkým firmám transformovať svoje procesy.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 mt-12">
                        
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">01</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Digitálne hodnotenie</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Komplexná analýza existujúcich systémov a podnikových procesov
                            </p>
                        </div>
                        
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">02</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Návrh architektúry</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Návrh škálovateľnej architektúry a integračnej stratégie
                            </p>
                        </div>
                        
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">03</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Postupná implementácia</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Postupné nasadenie po moduloch s minimalizáciou rizík
                            </p>
                        </div>
                        
                        <div className="py-5 px-[17px] dark:bg-[#9199B5]/[0.12] rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <div className="flex items-center gap-5">
                                <p className="text-[28px] font-bold leading-8 text-secondary">04</p>
                                <span className="bg-[#9199B5]/20 pt-0.5 w-full"></span>
                            </div>
                            <h3 className="text-[22px]/6 font-bold left-6 mt-5">Riadenie zmien</h3>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                                Školenie používateľov a riadenie zmien v organizácii
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
                                    Pomáhame veľkým firmám s digitálnou transformáciou
                                </h2>
                                <p className="font-semibold text-gray dark:text-[#9199B5] mt-5">
                                    Nájdite tím podnikových expertov, na ktorých sa môžete spoľahnúť. Každý deň pomáhame veľkým firmám transformovať svoje procesy.
                                </p>
                                <ul className="mt-7 md:mt-12 space-y-3 text-lg text-primary dark:text-white font-semibold">
                                    
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Centralizácia všetkých podnikových procesov</p>
                                    </li>
                                    
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Prehľady a analýzy v reálnom čase</p>
                                    </li>
                                    
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Škálovateľnosť pre rast firmy</p>
                                    </li>
                                    
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Integrácia s existujúcimi systémami</p>
                                    </li>
                                    
                                    <li className="flex items-center gap-2.5">
                                        <span>
                                            <PricebulletPointIcon className="text-[#07D673]" />
                                        </span>
                                        <p>Zvýšenie produktivity o 25-50%</p>
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
                    <div className="mb-6 text-center md:mb-12">
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Často kladené otázky
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <FAQuestions />
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
                                className="h-full h-full object-cover hover:scale-110 duration-300"
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
