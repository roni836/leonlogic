import BlogToggle from '@/components/BlogToggle';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Blog | Leonlogic',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog | Leonlogic',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Blog | Leonlogic',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/blog` },
    },
};

const page = () => {
    return (
        <>
            <section className="pt-32 pb-16 md:pt-52">
                <div className="container">
                    <h1
                        className="text-3xl md:text-[50px] font-black uppercase text-center italic md:leading-[59px]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        News and insights <span className="text-secondary">from our exert</span>
                    </h1>
                    <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5 max-w-[582px] mx-auto text-center">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </p>
                </div>
            </section>

            <section id="maindiv">
                <BlogToggle/>
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
