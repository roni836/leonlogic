import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;          // "Design" | "Developer" | "Marketing" | "Social Media"
    dateISO: string;           // ISO date
    listImage: string;
};

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: '2-digit'
    });
}

const tabs = ['all', 'design', 'developer', 'marketing', 'Social Media'] as const;
type Tab = typeof tabs[number];

export default function BlogToggle({ posts }: { posts: Post[] }) {
    // Server-side filtering - show all posts by default
    // The filtering will be handled by JavaScript on the client side
    const allPosts = posts;

    return (
        <div className="container">
            <div className="border-t border-[#9199B5]/10">
                <div className="overflow-x-auto">
                    <ul className="pt-12 border-t-2 border-[#9199B5]/10 filters portfolio-filter flex gap-7 whitespace-nowrap pb-2.5">
                        {tabs.map(t => (
                            <li key={t} className={`filter ${t === 'all' ? 'active' : ''}`} data-filter={t}>
                                <button
                                    type="button"
                                    data-category={t}
                                    className="btn text-gray rounded-2xl bg-[#9199B5]/10 dark:text-[#9199B5]"
                                >
                                    {t === 'all' ? 'All Blogs' : t.charAt(0).toUpperCase() + t.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="projects grid gap-7 sm:grid-cols-2 pt-12">
                    {allPosts.map(post => (
                        <div key={post.id} className="project block" data-category={post.category.toLowerCase()}>
                            <div className="sm:flex border border-[#9199B5]/[0.12] rounded-2xl overflow-hidden">
                                <div className="p-5 sm:p-10 dark:bg-[#9199B5]/[0.12]">
                                    <div className="flex gap-2.5">
                                        <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">
                                            {post.category}
                                        </span>
                                        <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                            {formatDate(post.dateISO)}
                                        </span>
                                    </div>
                                    <h3 className="text-[22px] leading-9 font-semibold mt-5">{post.title}</h3>
                                    <p className="text-gray mt-2.5 mb-5 dark:text-[#9199B5]">{post.excerpt}</p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="font-bold text-success hover:text-success-light dark:text-secondary dark:hover:text-success-light duration-200"
                                        aria-label={`Prečítať viac: ${post.title}`}
                                    >
                                        Prečítať viac
                                    </Link>
                                </div>
                                <div className="sm:max-w-[375px] w-full">
                                    <Image src={post.listImage} className="w-full h-full object-cover" alt={post.title} width={339} height={346} />
                                </div>
                            </div>
                        </div>
                    ))}
                    {allPosts.length === 0 && (
                        <p className="text-gray dark:text-[#9199B5]">No posts in this category yet.</p>
                    )}
                </div>
            </div>

            {/* Client-side JavaScript for filtering functionality */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    (function() {
                        function initFilter() {
                            const filterButtons = document.querySelectorAll('.portfolio-filter .filter button');
                            const projects = document.querySelectorAll('.project');
                            
                            if (filterButtons.length === 0 || projects.length === 0) {
                                return;
                            }
                            
                            filterButtons.forEach(button => {
                                button.addEventListener('click', function(e) {
                                    e.preventDefault();
                                    const category = this.getAttribute('data-category');
                                            
                                    // Update active state
                                    filterButtons.forEach(btn => {
                                        btn.parentElement.classList.remove('active');
                                        btn.classList.remove('active');
                                    });
                                    this.parentElement.classList.add('active');
                                    this.classList.add('active');
                                            
                                    // Filter projects
                                    projects.forEach(project => {
                                        if (category === 'all') {
                                            project.style.display = 'block';
                                        } else {
                                            const projectCategory = project.getAttribute('data-category');
                                            if (projectCategory === category) {
                                                project.style.display = 'block';
                                            } else {
                                                project.style.display = 'none';
                                            }
                                        }
                                    });
                                });
                            });
                        }
                        
                        // Try to initialize immediately
                        if (document.readyState === 'loading') {
                            document.addEventListener('DOMContentLoaded', initFilter);
                        } else {
                            initFilter();
                        }
                        
                        // Also try on window load as fallback
                        window.addEventListener('load', initFilter);
                    })();
                `
            }} />
        </div>
    );
}
