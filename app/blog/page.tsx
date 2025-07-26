import BlogToggle from '@/components/BlogToggle';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import axios from 'axios';


export const metadata: Metadata = {
    title: 'Blog | Greco',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/blog',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Blog | Greco',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/blog` },
    },
};

const page = async() => {
     // ✅ Fetch blog posts from Strapi
    const res = await axios.get('https://complete-fellowship-e31d61b8bd.strapiapp.com/api/articles');
    const posts = res.data.data;
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
                <BlogToggle />
            </section>

             <section id="maindiv">
                <BlogToggle />

                <div className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <div
                            key={post.id}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                {post.description}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
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
