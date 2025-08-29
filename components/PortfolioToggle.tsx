'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

interface PortfolioItem {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    tags: string[];
    client: string;
    duration: string;
    technologies: string[];
    challenges: string;
    solution: string;
    results: string;
    image: string;
    mobileImage: string;
    gallery: string[];
    features: string[];
    testimonial: {
        text: string;
        author: string;
        position: string;
    };
    publishedAt: string;
    status: string;
}

interface PortfolioToggleProps {
    portfolioData: PortfolioItem[];
}

const PortfolioToggle = ({ portfolioData }: PortfolioToggleProps) => {
    const [activeTab, setActiveTab] = useState<string>('all');

    // Get unique categories from portfolio data
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(portfolioData.map(item => item.category)));
        return uniqueCategories;
    }, [portfolioData]);

    // Filter projects based on active tab
    const filteredProjects = useMemo(() => {
        if (activeTab === 'all') {
            return portfolioData;
        }
        return portfolioData.filter(project => project.category === activeTab);
    }, [portfolioData, activeTab]);

    return (
        <div className="container">
            <div className="overflow-x-auto">
                <ul className="pt-20 lg:pt-[100px] border-t-2 border-[#9199B5]/10 filters portfolio-filter flex gap-7 whitespace-nowrap pb-2.5">
                    <li className={`filter ${activeTab === 'all' ? 'active' : ''}`} data-filter="all">
                        <button type="button" onClick={() => setActiveTab('all')} className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]">
                            All projects
                        </button>
                    </li>
                    {categories.map((category) => (
                        <li key={category} className={`filter ${activeTab === category ? 'active' : ''}`} data-filter={category}>
                            <button
                                type="button"
                                onClick={() => setActiveTab(category)}
                                className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="projects grid gap-7 sm:grid-cols-2 pt-12">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project">
                        <Link href={`/portfolio/${project.slug}`} className="overflow-hidden rounded-2xl block" aria-label={project.title}>
                            <Image 
                                src={project.image} 
                                className="h-full w-full object-cover hover:scale-110 duration-300" 
                                alt={project.title} 
                                width={754} 
                                height={521} 
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioToggle;
