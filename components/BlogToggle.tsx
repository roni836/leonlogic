'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const BlogToggle = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

    return (
        <div className="container">
            <div className="border-t border-[#9199B5]/10">
                <div className="overflow-x-auto">
                    <ul className="pt-12 border-t-2 border-[#9199B5]/10 filters portfolio-filter flex gap-7 whitespace-nowrap pb-2.5">
                        <li className={`filter ${activeTab === 'all' ? 'active' : ''}`} data-filter="all">
                            <button type="button" onClick={() => setActiveTab('all')} className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]">
                                All Blogs
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'design' ? 'active' : ''}`} data-filter="design">
                            <button
                                type="button"
                                onClick={() => setActiveTab('design')}
                                className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                            >
                                design
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'developer' ? 'active' : ''}`} data-filter="developer">
                            <button
                                type="button"
                                onClick={() => setActiveTab('developer')}
                                className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                            >
                                Developer
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'marketing' ? 'active' : ''}`} data-filter="marketing">
                            <button
                                type="button"
                                onClick={() => setActiveTab('marketing')}
                                className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                            >
                                Marketing
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'Social Media' ? 'active' : ''}`} data-filter="Social Media">
                            <button
                                type="button"
                                onClick={() => setActiveTab('Social Media')}
                                className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                            >
                                Social Media
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="projects grid gap-7 sm:grid-cols-2 pt-12">
                    <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">10 Reasons to invest in SEO copywriting services</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                    aria-label="Read more about this blog post"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-1.jpg" className="w-full h-full object-cover" alt="blog-1" width={339} height={346} />
                            </div>
                        </div>
                    </div>
                    <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">How to get hired at a top Digital Marketing Agency</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                    aria-label="Read more about this blog post"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-2.jpg" className="w-full h-full object-cover" alt="blog-2" width={339} height={346} />
                            </div>
                        </div>
                    </div>
                    <div className={`project ${activeTab === 'all' || activeTab === 'developer' ? 'block' : 'hidden'}`}>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">10 Reasons to invest in SEO copywriting services</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                    aria-label="Read more about this blog post"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-1.jpg" className="w-full h-full object-cover" alt="blog-1" width={339} height={346} />
                            </div>
                        </div>
                    </div>
                    <div className={`project ${activeTab === 'all' || activeTab === 'marketing' ? 'block' : 'hidden'}`}>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">How to get hired at a top Digital Marketing Agency</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                    aria-label="Read more about this blog post"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-2.jpg" className="w-full h-full object-cover" alt="blog-2" width={339} height={346} />
                            </div>
                        </div>
                    </div>
                    <div className={`project ${activeTab === 'all' || activeTab === 'marketing' ? 'block' : 'hidden'}`}>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">10 Reasons to invest in SEO copywriting services</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                    aria-label="Read more about this blog post"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-1.jpg" className="w-full h-full object-cover" alt="blog-1" width={339} height={346} />
                            </div>
                        </div>
                    </div>
                    <div className={`project ${activeTab === 'all' || activeTab === 'Social Media' ? 'block' : 'hidden'}`}>
                        <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                            <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">Design</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        January 01, 2023
                                    </span>
                                </div>
                                <h3 className="text-[22px] leading-9 font-semibold mt-5">How to get hired at a top Digital Marketing Agency</h3>
                                <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">
                                    Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                    aria-label="Read more about this blog post"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="sm:max-w-[375px] w-full">
                                <Image src="/assets/images/blog-2.jpg" className="w-full h-full object-cover" alt="blog-2" width={339} height={346} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogToggle;
