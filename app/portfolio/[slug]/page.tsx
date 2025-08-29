import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import DownArrowIcon from '@/components/Icons/DownArrowIcon';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import PortfolioToggle from '@/components/PortfolioToggle';
import SpecialistsDevelopers from '@/components/SpecialistsDevelopers';
import Image from 'next/image';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import portfolioData from '@/portfolio.json';
import { notFound } from 'next/navigation';

// Enable ISR for portfolio page
export const revalidate = 7200; // Revalidate every 2 hours

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioData.find(item => item.slug === slug);
    
    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.',
        };
    }

    return {
        title: `${project.title} – LeonLogic Portfolio`,
        description: project.description,
        keywords: [...project.tags, 'portfolio', 'project', 'case study'],
        openGraph: {
            ...helper.openGraphData,
            title: `${project.title} – LeonLogic Portfolio`,
            description: project.description,
            url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${project.slug}`,
            type: 'website',
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            ...helper.twitterData,
            title: `${project.title} – LeonLogic Portfolio`,
            description: project.description,
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${project.slug}`,
            languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${project.slug}` },
        },
    };
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
    return portfolioData.map((project) => ({
        slug: project.slug,
    }));
}

const page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const project = portfolioData.find(item => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <section className="pb-14 pt-32 lg:pb-32 lg:pt-52 xl:pb-52 xl:pt-[300px]">
                <div className="container">
                    <div className="grid lg:grid-cols-3 items-center gap-12">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden relative z-1">
                                <Image src={project.gallery[0] || project.image} width={480} height={473} className="w-full" alt={project.title} />
                            </div>
                            <span className="absolute bg-[#D2FFF7]/50 dark:bg-[#D2FFF7]/20 md:w-[591px] h-[580px] bottom-[70px] start-32 rounded-full blur-[100px]"></span>
                            <span className="absolute -end-10 -top-12 hidden lg:block">
                                <svg className="w-28 h-28" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="56" cy="56" r="56" fill="#BEF3EA" />
                                </svg>
                            </span>
                        </div>
                        <div className="text-center relative z-1">
                            <h1 className="text-3xl sm:text-[70px] font-black sm:leading-[82px] italic uppercase" data-aos="zoom-in" data-aos-duration="1000">
                                {project.title.toUpperCase()}
                            </h1>
                            <h2
                                className="text-3xl sm:text-[70px] font-black sm:leading-[82px] italic uppercase text-secondary"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                {project.subtitle.toUpperCase()}
                            </h2>
                            <p className="text-lg mt-2.5 text-gray dark:text-[#9199B5]">
                               {project.description}
                            </p>
                            <a href="#portfolio-section" aria-label="View project details">
                                <div className="mt-7 max-w-[122px] mx-auto relative">
                                    <Image
                                        src="/assets/images/text-group.png"
                                        className="w-full h-full object-cover block dark:hidden"
                                        alt="text-group"
                                        width={240}
                                        height={240}
                                    />

                                    <Image
                                        src="/assets/images/text-group-dark.png"
                                        className="w-full h-full object-cover hidden dark:block"
                                        alt="text-group-dark"
                                        width={240}
                                        height={240}
                                    />
                                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <span className="animate-bounce block">
                                            <DownArrowIcon />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden relative z-1">
                                <Image src={project.gallery[1] || project.image} width={480} height={473} className="min-w-full" alt={project.title} />
                            </div>
                            <span className="absolute bg-[#FFD4E9]/50 dark:bg-[#FFD4E9]/20 md:w-[591px] h-[580px] top-24 end-12 rounded-full blur-[100px]"></span>
                            <span className="absolute bottom-24 -start-16 hidden lg:block">
                                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="56" cy="56" r="56" fill="#FFDBEC" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio-section">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center bg-[#EAF0FF]! px-8 md:px-[100px] rounded-2xl relative overflow-hidden">
                        <span className="absolute top-0 start-0 rtl:rotate-y-180">
                            <svg width="157" height="130" viewBox="0 0 157 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M157 1.52588e-05C157 71.797 98.797 130 27 130L14.6046 130C6.53866 130 -7.57223e-05 123.461 -7.50172e-05 115.395L-6.4929e-05 1.53341e-06L157 1.52588e-05V1.52588e-05Z"
                                    fill="#D9DFF2"
                                />
                            </svg>
                        </span>
                        <span className="absolute end-0 bottom-0 rtl:rotate-y-180">
                            <svg width="301" height="558" viewBox="0 0 301 558" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 253.5C0 113.496 113.496 0 253.5 0H275C289.359 0 301 11.6406 301 26V559H0V253.5Z" fill="#D9DFF2" />
                            </svg>
                        </span>
                        <div className="lg:max-w-[455px] relative z-1 pt-12 lg:pt-0">
                            <h2 className="text-3xl md:text-4xl font-bold dark:text-primary">{project.title}</h2>
                            <div className="flex mt-5 md:mt-10 items-center gap-5 flex-wrap">
                                {project.tags.slice(0, 2).map((tag, index) => (
                                    <span key={index} className="uppercase px-5 py-4 rounded-2xl text-sm font-bold text-[#4B5576] bg-[#E1E6F5]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="font-semibold text-[#4B5576] mt-5 md:mt-10">
                                {project.description}
                            </p>
                            <div className="mt-5 md:mt-10 space-y-3">
                                <p className="text-sm text-[#4B5576]"><strong>Client:</strong> {project.client}</p>
                                <p className="text-sm text-[#4B5576]"><strong>Duration:</strong> {project.duration}</p>
                                <p className="text-sm text-[#4B5576]"><strong>Results:</strong> {project.results}</p>
                            </div>
                            <a
                                href="#"
                                className="bg-secondary p-5 text-success text-sm font-bold mt-5 md:mt-10 rounded-2xl inline-flex gap-2.5 items-center group hover:bg-black hover:text-white duration-200 uppercase"
                            >
                                read case study
                                <span>
                                    <RightArrowIcon />
                                </span>
                            </a>
                        </div>
                        <div className="pt-16 max-w-[400px] lg:rtl:mr-auto lg:ltr:ml-auto relative z-1" data-aos="fade-up" data-aos-duration="1000">
                            <Image
                                src={project.mobileImage}
                                className="w-full h-full object-cover rtl:rotate-y-180"
                                alt={project.title}
                                width={400}
                                height={498}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            {project.gallery.length > 0 && (
                <section className="py-16">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.gallery.map((image, index) => (
                                <div key={index} className="rounded-2xl overflow-hidden">
                                    <Image
                                        src={image}
                                        className="w-full h-64 object-cover hover:scale-110 duration-300"
                                        alt={`${project.title} - Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Project Features */}
            {project.features.length > 0 && (
                <section className="py-16 bg-gray-50 dark:bg-gray-900">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.features.map((feature, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
                                    <p className="text-lg font-semibold">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonial */}
            {project.testimonial && (
                <section className="py-16">
                    <div className="container">
                        <div className="bg-[#EAF0FF] rounded-2xl p-8 md:p-12 text-center">
                            <blockquote className="text-xl md:text-2xl font-semibold text-[#4B5576] mb-6">
                                `{project.testimonial.text}`
                            </blockquote>
                            <div className="text-[#4B5576]">
                                <p className="font-bold">{project.testimonial.author}</p>
                                <p className="text-sm">{project.testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Related Projects */}
            <section className="py-16">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related Projects</h2>
                    <PortfolioToggle portfolioData={portfolioData.filter(item => item.id !== project.id).slice(0, 4)} />
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
