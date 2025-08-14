import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import ClientsFeedbackSlider from "@/components/ClientsFeedbackSlider";
import GetInTouch from "@/components/GetInTouch";
import Image from "next/image";

// --- Types ---
type Service = {
    slug: string;
    title: string;
    description: string;
    features: string[];
    pricing: { name: string; price: string; details?: string[] }[];
    faqs?: { question: string; answer: string }[];
    cta?: { title: string; description: string; button: string };
};

type ServicesJson =
    | Service[]
    | { services: Service[] }
    | Record<string, Service>
    | unknown;

// --- IO helpers ---
function loadServicesJson(): ServicesJson {
    const filePath = path.join(process.cwd(), "service.json");
    const rawStr = fs.readFileSync(filePath, "utf8");
    let parsed: any = JSON.parse(rawStr);

    // If someone stored a JSON string inside the JSON (double-encoded), parse again
    if (typeof parsed === "string") {
        try { parsed = JSON.parse(parsed); } catch { /* ignore */ }
    }
    return parsed;
}

/** Safely returns ALL services as an array, no matter how the JSON is shaped. */
function listServices(): Service[] {
    const data = loadServicesJson();

    if (Array.isArray(data)) {
        return data as Service[];
    }

    if (data && typeof data === "object") {
        // { services: [...] }
        if (Array.isArray((data as any).services)) {
            return (data as any).services as Service[];
        }

        // Object map keyed by slug: { "ai-automatizacie": { ... }, "seo": { ... } }
        const values = Object.values(data as Record<string, Service>);
        return values.map((s, idx) => {
            // Ensure slug exists — if not, inject the key via a second pass in getServiceBySlug
            return s as Service;
        });
    }

    return [];
}

/** Gets one service by slug, handling array, { services }, or object map. */
function getServiceBySlug(slug: string): Service | null {
    const data = loadServicesJson();

    // Array case
    if (Array.isArray(data)) {
        const svc = (data as Service[]).find((s) => s?.slug === slug);
        return svc ?? null;
    }

    // { services: [...] } case
    if (data && typeof data === "object" && Array.isArray((data as any).services)) {
        const svc = ((data as any).services as Service[]).find((s) => s?.slug === slug);
        return svc ?? null;
    }

    // Object map keyed by slug case
    if (data && typeof data === "object") {
        const obj = data as Record<string, Service>;
        if (obj[slug]) {
            // If the stored object is missing a slug, synthesize it from the key
            const base = obj[slug] as Partial<Service>;
            return {
                slug,
                title: base.title ?? slug,
                description: base.description ?? "",
                features: Array.isArray(base.features) ? base.features : [],
                pricing: Array.isArray(base.pricing) ? base.pricing : [],
                faqs: Array.isArray(base.faqs) ? base.faqs : [],
                cta: base.cta ?? undefined,
            } as Service;
        }
        // If no direct key, try searching values
        const values = Object.values(obj);
        const svc = values.find((s) => (s as any)?.slug === slug) as Service | undefined;
        return svc ?? null;
    }

    return null;
}

// --- Page (Server Component) ---
export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug);
    if (!service) return notFound();

    const features = Array.isArray(service.features) ? service.features : [];
    const pricing = Array.isArray(service.pricing) ? service.pricing : [];
    const faqs = Array.isArray(service.faqs) ? service.faqs : [];

    return (
        <main className="max-w-4xl mx-auto py-12">
            {/* Title & Description */}
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="mb-8 text-gray-700">{service.description}</p>

            {/* Features */}
            {features.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Funkcie</h2>
                    <ul className="mb-8 list-disc ml-6">
                        {features.map((f: string, i: number) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </>
            )}

            {/* Pricing */}
            {pricing.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Cenník</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {pricing.map(
                            (
                                p: { name: string; price: string; details?: string[] },
                                i: number
                            ) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {p.name}
                                    </h3>
                                    <div className="text-2xl font-bold text-blue-600 mb-2">
                                        {p.price}
                                    </div>
                                    {Array.isArray(p.details) && p.details.length > 0 && (
                                        <ul className="list-disc ml-4 text-gray-700">
                                            {p.details.map((d: string, j: number) => (
                                                <li key={j}>{d}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Často kladené otázky</h2>
                    <div className="space-y-6 mb-8">
                        {faqs.map(
                            (faq: { question: string; answer: string }, i: number) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )
                        )}
                    </div>
                </>
            )}

            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="mb-6 text-center md:mb-12">
                        <p className="mb-7 inline-flex rounded-full bg-success-light/10 dark:bg-secondary/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
                            REALIZOVANÉ PROJEKTY
                        </p>
                        <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
                            Z NAŠEJ <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat">DIELNE</span>
                        </h2>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/1.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 1"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/2.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 2"
                                width={754}
                                height={521}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/3.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 3"
                                width={754}
                                height={401}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/assets/images/4.png"
                                className="h-full w-full object-cover hover:scale-110 duration-300"
                                alt="E-commerce riešenie 4"
                                width={754}
                                height={401}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[url('/assets/images/newsletter.png')] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative">
                <GetInTouch />
            </section>
        </main>
    );
}
// In the same file:
export async function generateStaticParams() {
    const data = loadServicesJson();
    let slugs: string[] = [];

    if (Array.isArray(data)) {
        slugs = (data as Service[]).map((s) => s.slug);
    } else if (data && typeof data === "object" && Array.isArray((data as any).services)) {
        slugs = ((data as any).services as Service[]).map((s) => s.slug);
    } else if (data && typeof data === "object") {
        slugs = Object.keys(data as Record<string, Service>);
    }

    return slugs.filter(Boolean).map((slug) => ({ slug }));
}
