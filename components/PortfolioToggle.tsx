'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PortfolioToggle = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    return (
        <div className="container">
            <div className="overflow-x-auto">
                <ul className="pt-20 lg:pt-[100px] border-t-2 border-[#9199B5]/10 filters portfolio-filter flex gap-7 whitespace-nowrap pb-2.5">
                    <li className={`filter ${activeTab === 'all' ? 'active' : ''}`} data-filter="all">
                        <button type="button" onClick={() => setActiveTab('all')} className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]">
                            All projects
                        </button>
                    </li>
                    <li className={`filter ${activeTab === 'ui/ux design' ? 'active' : ''}`} data-filter="ui/ux design">
                        <button
                            type="button"
                            onClick={() => setActiveTab('ui/ux design')}
                            className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                        >
                            ui/ux design
                        </button>
                    </li>
                    <li className={`filter ${activeTab === 'branding' ? 'active' : ''}`} data-filter="branding">
                        <button
                            type="button"
                            onClick={() => setActiveTab('branding')}
                            className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                        >
                            branding
                        </button>
                    </li>
                    <li className={`filter ${activeTab === 'website' ? 'active' : ''}`} data-filter="website">
                        <button type="button" onClick={() => setActiveTab('website')} className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]">
                            website
                        </button>
                    </li>
                    <li className={`filter ${activeTab === 'mobile app' ? 'active' : ''}`} data-filter="mobile app">
                        <button
                            type="button"
                            onClick={() => setActiveTab('mobile app')}
                            className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                        >
                            mobile app
                        </button>
                    </li>
                </ul>
            </div>
            <div className="projects grid gap-7 sm:grid-cols-2 pt-12">
                <div className={`project ${activeTab === 'all' || activeTab === 'ui/ux design' ? 'block' : 'hidden'}`}>
                    <div className="project">
                        <Link href="/portfolio-detail" className="overflow-hidden rounded-2xl block" aria-label="Email">
                            <Image src="/assets/images/project1.jpg" className="h-full w-full object-cover hover:scale-110 duration-300" alt="project1" width={754} height={521} />
                        </Link>
                    </div>
                </div>
                <div className={`project ${activeTab === 'all' || activeTab === 'branding' ? 'block' : 'hidden'}`}>
                    <div className="project">
                        <Link href="/portfolio-detail" className="overflow-hidden rounded-2xl block" aria-label="Email">
                            <Image src="/assets/images/project2.jpg" className="h-full w-full object-cover hover:scale-110 duration-300" alt="project2" width={754} height={521} />
                        </Link>
                    </div>
                </div>
                <div className={`project ${activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'}`}>
                    <div className="project">
                        <Link href="/portfolio-detail" className="overflow-hidden rounded-2xl block" aria-label="Email">
                            <Image src="/assets/images/project3.jpg" className="h-full w-full object-cover hover:scale-110 duration-300" alt="project3" width={754} height={401} />
                        </Link>
                    </div>
                </div>
                <div className={`project ${activeTab === 'all' || activeTab === 'mobile app' ? 'block' : 'hidden'}`}>
                    <div className="project">
                        <Link href="/portfolio-detail" className="overflow-hidden rounded-2xl block" aria-label="Email">
                            <Image src="/assets/images/project4.jpg" className="h-full w-full object-cover hover:scale-110 duration-300" alt="project4" width={754} height={401} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioToggle;
