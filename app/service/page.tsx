"use client";
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import FAQuestions from '@/components/FAQuestions';
import NoteManagementAccodian from '@/components/NoteManagementAccodian';
import PricingPlansChart from '@/components/PricingPlansChart';
import ServiceCard from '@/components/ServiceCard';
import ServicePageModal from '@/components/ServicePageModal';
import Image from 'next/image';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { supabase } from '@/libs/supabase';


// export const metadata: Metadata = {
//     title: 'Service | Leonlogic',
//     description: 'Tailwind CSS Multipurpose Landing Templates',
//     openGraph: {
//         ...helper.openGraphData,
//         title: 'Service | Leonlogic',
//         description: 'Tailwind CSS Multipurpose Landing Templates',
//         url: process.env.NEXT_PUBLIC_APP_URL + '/service',
//         type: 'website',
//     },
//     twitter: {
//         ...helper.twitterData,
//         title: 'Service | Leonlogic',
//         description: 'Tailwind CSS Multipurpose Landing Templates',
//     },
//     alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_APP_URL}/service`,
//         languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/service` },
//     },
// };
interface ServiceCategory {
    id: string;
    title: string;
    created_at: string;
    updated_at: string;
}

interface Service {
    id: string;
    title: string;
    description: string;
    service_category_id: string;
    service_categories?: ServiceCategory;
    icon_path?: string;
    icon_alt?: string;
    link_url?: string;
    slug?: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

const Page = () => {

    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const { data, error } = await supabase
                .from('services')
                .select(
                    `*,
                        service_categories (
                            id,
                            title,
                            created_at,
                            updated_at
                        )`
                )
                .order('sort_order', { ascending: true });

            if (error) {
                console.error('Error fetching services:', error);
                return;
            }

            setServices(data || []);
        } catch (err) {
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    // const services = [
    //     {
    //         src: '/assets/images/icon-mail.svg',
    //         title: 'Email Marketing',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-instagram.svg',
    //         title: 'Social Media',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-fb-ads.svg',
    //         title: 'Google/FB Ads',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-content.svg',
    //         title: 'Content Strategy',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-mail.svg',
    //         title: 'Email Marketing',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-instagram.svg',
    //         title: 'Social Media',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-fb-ads.svg',
    //         title: 'Google/FB Ads',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    //     {
    //         src: '/assets/images/icon-content.svg',
    //         title: 'Content Strategy',
    //         descrption: 'Our design services starts and ends best in class experience.',
    //     },
    // ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
            </div>
        );
    }


    return (
        <>
            <section className="mb-16 relative pb-20 pt-32 md:mb-32 md:pb-24 md:pt-52 dark:bg-primary">
                <div className="bg-[#9199B5]/[0.12] absolute w-[calc(100vw-0px)] lg:w-[calc(100vw-30px)] h-[calc(100%+50px)] bottom-0 end-0 rtl:rounded-br-[50px] ltr:rounded-bl-[50px] rtl:-skew-y-2 ltr:skew-y-2"></div>
                <div className="container relative">
                    <div className="flex items-center justify-between">
                        <span className="">
                            <svg width="52" height="65" viewBox="0 0 52 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 13L21.5013 0.586207L51.5013 52.5477L30 64.9615L0 13Z" fill="#FFC010" />
                            </svg>
                        </span>
                        <h1
                            className="mx-auto max-w-[708px] text-center text-3xl font-black italic md:text-[50px] md:leading-[59px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            WE PROVIDE WIDE RANGE OF <span className="text-secondary">DIGITAL SERVICES</span>
                        </h1>
                        <span className="">
                            <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.7514 1.19667C26.7514 0.0419683 29.2514 1.48535 29.2514 3.79475L29.2514 29.9052C29.2514 32.2146 26.7514 33.658 24.7514 32.5033L2.13906 19.448C0.139058 18.2933 0.139062 15.4066 2.13906 14.2519L24.7514 1.19667Z"
                                    fill="#07D673"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>

            <section className="-mt-32 pb-12 md:-mt-44 lg:pb-24 relative">
                <div className="container">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {services.map((service, index) => {
                            return <ServiceCard key={index} icon_path={service.icon_path} title={service.title} description={service.description} slug={service.slug} />;
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex flex-col items-center gap-12 border-y-2 border-[#9199B5]/10 py-12 md:py-[126px] lg:flex-row 2xl:gap-[175px]">
                        <div>
                            <span className="rounded-[50px] bg-success-light/[0.08] dark:bg-secondary/[0.08] px-5 py-3 text-base font-bold text-success-light dark:text-secondary uppercase">
                                Better Note Management
                            </span>
                            <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                Your <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> Notes Security</span>
                            </h2>
                            <p className="mt-5 max-w-[505px] text-base font-semibold text-gray dark:text-[#9199B5]">
                                Automatically syncs across all your devices. You can also access and write notes without internet connection.
                            </p>
                            <NoteManagementAccodian />
                            <button type="button" className="mt-8 btn md:mt-[50px]">
                                FREE REGISTER
                            </button>
                        </div>
                        <div className="w-full max-w-[654px]" data-aos="flip-left" data-aos-duration="1000">
                            <Image src="/assets/images/management.png" className="h-full w-full object-cover" alt="management" width={654} height={701} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 lg:py-[167px] overflow-hidden">
                <div className="container">
                    <div className="flex flex-col items-center gap-20 lg:flex-row lg:gap-[176px]">
                        <div className="w-full max-w-[650px] flex-1" data-aos="fade-right" data-aos-duration="1000">
                            <Image
                                src="/assets/images/beautiful-themes.png"
                                className="h-full w-full object-cover"
                                alt="beautiful-themes"
                                width={650}
                                height={485}
                            />
                        </div>
                        <div className="flex-none">
                            <span className="rounded-[50px] bg-success-light/[0.08] dark:bg-secondary/[0.08] px-5 py-3 text-base font-bold text-success-light dark:text-secondary uppercase">
                                Beautiful Themes
                            </span>
                            <h2 className="mt-[30px] text-3xl font-extrabold md:text-[40px] md:leading-[54px]">
                                Loved From <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Customers</span>
                            </h2>
                            <p className="mt-5 max-w-[505px] text-base font-semibold text-gray dark:text-[#9199B5]">
                                Notero loved from thoudsands customer worldwide and get trusted from big companies.
                            </p>
                            <div className="mt-8 flex items-center gap-4 sm:mt-[50px] sm:gap-[30px]">
                                <div>
                                    <h3 className="text-3xl font-extrabold text-success dark:text-white sm:text-[40px] sm:leading-[47px]">2.5M+</h3>
                                    <p className="mt-2 text-base font-semibold text-gray dark:text-[#9199B5] sm:mt-5">Downloaded and Installation</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-extrabold text-success dark:text-white sm:text-[40px] sm:leading-[47px]">4.8/5</h3>
                                    <p className="mt-2 text-base font-semibold text-gray dark:text-[#9199B5] sm:mt-5">Based on 1,258 reviews</p>
                                </div>
                            </div>
                            <ServicePageModal />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[#9199B5]/10 py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            FAq
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Frequently Asked <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">Questions</span>
                        </h2>
                    </div>
                    <FAQuestions />
                </div>
            </section>

            <section className="py-12 md:py-16">
                <PricingPlansChart />
            </section>
        </>
    );
};

export default Page;
