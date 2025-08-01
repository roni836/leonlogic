"use client";
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
import { useEffect, useState } from 'react';
import { supabase } from '@/libs/supabase';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import { useParams } from 'next/navigation';

// export const metadata: Metadata = {
//     title: 'Blog-Details | Leonlogic',
//     description: 'Tailwind CSS Multipurpose Landing Templates',
//     openGraph: {
//         ...helper.openGraphData,
//         title: 'Blog-Details | Leonlogic',
//         description: 'Tailwind CSS Multipurpose Landing Templates',
//         url: process.env.NEXT_PUBLIC_APP_URL + '/blog-details',
//         type: 'article',
//     },
//     twitter: {
//         ...helper.twitterData,
//         title: 'Blog-Details | Leonlogic',
//         description: 'Tailwind CSS Multipurpose Landing Templates',
//     },
//     alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog-details`,
//         languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/blog-details` },
//     },
// };

interface BlogCategory {
    id: string;
    title: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image?: string;
    blog_category_id?: string;
    blog_categories?: BlogCategory;
    tags?: string[];
    status: 'draft' | 'published' | 'archived';
    published_at?: string;
    seo_title?: string;
    seo_description?: string;
    seo_keywords?: string[];
    view_count: number;
    created_at: string;
    updated_at: string;
}


const Page = () => {
    const params = useParams();
    const slug = params?.slug as string;

    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) fetchBlogPost();
    }, [slug]);

    const fetchBlogPost = async () => {
        try {
            const { data, error } = await supabase
                .from('blog_posts')
                .select(
                    `*,
                    blog_categories (
                        id,
                        title,
                        slug,
                        created_at,
                        updated_at
                    )`
                )
                .eq('slug', slug)
                .single();

            if (error) {
                console.log('Error fetching post:', error);
                return;
            }

            setBlogPost(data);
        } catch (err) {
            console.log('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
            </div>
        );
    }

    if (!blogPost) {
        return (
            <div className="text-center py-20 text-xl text-red-500">Blog post not found</div>
        );
    }

    return (
        <>
            <section className="pt-32 pb-16 md:pt-52">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-8 justify-between">
                        <div className="lg:w-3/4">
                            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">
                                        {blogPost.blog_categories?.title || 'General'}
                                    </span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        {new Date(blogPost.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-[50px] font-bold md:leading-[70px] mt-5">
                                {blogPost.title}
                            </h1>

                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5">
                                {blogPost.excerpt}
                            </p>

                            <p className="text-lg text-[#4B5576] dark:text-[#9199B5] mt-5">
                                {blogPost.content}
                            </p>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:w-2/5">
                            <div className="rounded-[20px] overflow-hidden">
                                <Image
                                    src={blogPost.featured_image || '/logo.svg'}
                                    alt={blogPost.title}
                                    width={523}
                                    height={432}
                                />
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

export default Page;