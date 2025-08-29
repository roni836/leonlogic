import BlogToggle from '@/components/BlogToggle';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import data from '@/blog.json';

// Enable ISR for blog listing page
export const revalidate = 1800; // Revalidate every 30 minutes


export const metadata: Metadata = {
    title: 'Blog – LeonLogic: tipy pre SEO, marketing a webové riešenia',
    description: 'Čítajte náš blog o SEO, digitálnom marketingu, tvorbe webov a e-shop riešení. LeonLogic prináša aktuálne tipy, stratégie a návody pre rast vášho biznisu.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog – LeonLogic: tipy pre SEO, marketing a webové riešenia',
        description: 'Čítajte náš blog o SEO, digitálnom marketingu, tvorbe webov a e-shop riešení. LeonLogic prináša aktuálne tipy, stratégie a návody pre rast vášho biznisu.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Blog – LeonLogic: tipy pre SEO, marketing a webové riešenia',
        description: 'Čítajte náš blog o SEO, digitálnom marketingu, tvorbe webov a e-shop riešení. LeonLogic prináša aktuálne tipy, stratégie a návody pre rast vášho biznisu.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/blog` },
    },
};



const page = () => {
    const posts = (data as any).posts;
    return (
        <>
            <section className="pt-32 pb-16 md:pt-52">
                <div className="container">
                    <h1
                        className="text-3xl md:text-[50px] font-black uppercase text-center italic md:leading-[59px]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Správy a poznatky od <span className="text-secondary">našich odborníkov</span>
                    </h1>
                    <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5 max-w-[582px] mx-auto text-center">
                        Od nových technológií po bežné najlepšie praktiky, poskytujeme odborné znalosti, praktické tipy a zamyslené komentáre prispôsobené pre váš rast a úspech.
                    </p>
                </div>
            </section>

            <section id="maindiv">
                <BlogToggle posts={posts} />
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
