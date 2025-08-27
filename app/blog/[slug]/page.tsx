import Image from 'next/image';
import data from '@/blog.json';
import type { Metadata, ResolvingMetadata } from 'next';
import helper from '@/libs/helper';

type Post = typeof data.posts[number];

function getPost(slug: string): Post | undefined {
    return (data as any).posts.find((p: Post) => p.slug === slug);
}
function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}

export async function generateStaticParams() {
    return (data as any).posts.map((p: Post) => ({ slug: p.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    _parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const site = (data as any).site;
    const post = getPost(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Blog | Greco',
            description: 'Tailwind CSS Multipurpose Landing Templates'
        };
    }

    const url = (site.baseUrl?.replace(/\/$/, '') || '') + (post.meta?.canonicalPath || `/blog/${post.slug}`);
    const title = post.meta?.title || post.title;
    const description = post.meta?.description || post.excerpt;
    const ogImage = post.meta?.ogImage || site.defaultOgImage;

    return {
        title,
        description,
        openGraph: {
            ...helper.openGraphData,
            title,
            description,
            url,
            type: (post.meta?.type as any) || 'article',
            images: ogImage ? [{ url: ogImage }] : undefined
        },
        twitter: {
            ...helper.twitterData,
            title,
            description
        },
        alternates: {
            canonical: url,
            languages: { 'x-default': url }
        }
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getPost(resolvedParams.slug);
    const site = (data as any).site;

    if (!post) {
        // optional: your styled 404
        return (
            <section className="pt-32 pb-16 md:pt-52">
                <div className="container"><h1 className="text-2xl font-bold">Post not found</h1></div>
            </section>
        );
    }

    // related: 4 others (same category first)
    const related = (data as any).posts
        .filter((p: Post) => p.slug !== post.slug && (p.category === post.category))
        .slice(0, 4);

    return (
        <>
            <section className="pt-32 pb-16 md:pt-52">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-8 justify-between">
                        <div className="lg:w-3/4">
                            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                <div className="flex gap-2.5">
                                    <span className="rounded-full bg-secondary px-5 py-3 text-sm font-bold uppercase leading-4 text-success">{post.category}</span>
                                    <span className="rounded-full bg-[#9199B5]/[0.12] px-5 py-3 text-sm font-bold uppercase leading-4 text-gray dark:text-[#9199B5]">
                                        {formatDate(post.dateISO)}
                                    </span>
                                </div>
                                {/* share icons block kept exactly — wire up real links later if you like */}
                                <div className="flex gap-5">
                                    <span className="bg-[#9199B5] w-0.5"></span>
                                    <a href="#"><span className="sr-only">pinterest</span></a>
                                    <a href="#"><span className="sr-only">facebook</span></a>
                                    <a href="#"><span className="sr-only">twitter</span></a>
                                    <a href="#"><span className="sr-only">linkedin</span></a>
                                    <a href="#"><span className="sr-only">link</span></a>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-[50px] font-bold md:leading-[70px] mt-5" data-aos="zoom-in" data-aos-duration="1000">
                                {post.title}
                            </h1>

                            {/* Render paragraphs/blocks from JSON while preserving your styling */}
                            {post.contentHtml.map((html, idx) => (
                                <div key={idx} className={idx === 0 ? 'text-lg text-[#4B5576] dark:text-[#9199B5] mt-5' : 'text-lg text-[#4B5576] dark:text-[#9199B5] mt-10'}
                                    dangerouslySetInnerHTML={{ __html: html }} />
                            ))}
                        </div>

                        <div className="lg:w-2/5">
                            <div className="rounded-[20px] overflow-hidden" data-aos="flip-left" data-aos-duration="1000">
                                <Image src={post.coverImage} width={523} height={432} alt={post.title} />
                            </div>

                            <div className="bg-primary rounded-[20px] mt-8 p-5 sm:p-8 text-white">
                                <h2 className="text-lg font-semibold">Related Posts</h2>

                                {related.map((r: Post) => (
                                    <div key={r.id} className="flex items-center gap-2.5 mt-5" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="rounded-[10px] overflow-hidden max-w-[150px]">
                                            <Image src={r.listImage} width={150} height={85} alt={r.title} />
                                        </div>
                                        <div>
                                            <a href={`/blog/${r.slug}`} className="text-base font-semibold hover:text-secondary duration-200">
                                                {r.title}
                                            </a>
                                            <p className="text-sm font-semibold text-gray dark:text-[#9199B5] mt-2">
                                                {new Date(r.dateISO).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div className="border-t-2 border-white/10 mt-8"></div>
                                <h2 className="text-lg font-semibold mt-8">Category</h2>
                                <div className="flex flex-wrap gap-5 mt-5" data-aos="zoom-in" data-aos-duration="1000">
                                    {Array.from(new Set((data as any).posts.map((p: Post) => p.category))).map((c: unknown) => (
                                        <span key={c as string} className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">{c as string}</span>
                                    ))}
                                </div>

                                <div className="border-t-2 border-white/10 mt-8"></div>
                                <h2 className="text-lg font-semibold mt-8">Tags</h2>
                                <div className="flex flex-wrap gap-5 mt-5" data-aos="zoom-in" data-aos-duration="1000">
                                    {Array.from(new Set(post.tags)).map((tag: string) => (
                                        <span key={tag} className="font-semibold bg-[#9199B5]/[0.12] py-2.5 px-[14px] text-center rounded-md">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Keep your existing sliders/sections as-is */}
            {/* <section className="py-12 md:py-16"><BlogSlider /></section>
      <section className="py-10 md:py-16"><ClientsFeedbackSlider /></section>
      <section className="bg-[url('/assets/images/newsletter.png')] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative">
        <GetInTouch />
      </section> */}
        </>
    );
}
