'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const pathname = usePathname();
    
    // Generate breadcrumbs from pathname if no items provided
    const breadcrumbItems = items || generateBreadcrumbs(pathname);
    
    return (
        <>
            {/* Visual breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Link href="/" className="hover:text-secondary transition-colors">
                    Domov
                </Link>
                {breadcrumbItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span>/</span>
                        {index === breadcrumbItems.length - 1 ? (
                            <span className="text-secondary font-medium">{item.name}</span>
                        ) : (
                            <Link href={item.url} className="hover:text-secondary transition-colors">
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
            
            {/* Schema markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: breadcrumbItems.map((item, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: item.name,
                            item: item.url
                        }))
                    })
                }}
            />
        </>
    );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    segments.forEach((segment) => {
        currentPath += `/${segment}`;
        const name = getBreadcrumbName(segment);
        breadcrumbs.push({ name, url: currentPath });
    });
    
    return breadcrumbs;
}

function getBreadcrumbName(segment: string): string {
    const nameMap: { [key: string]: string } = {
        'service': 'Služby',
        'portfolio': 'Portfólio',
        'about-us': 'O nás',
        'contact-us': 'Kontakt',
        'faq': 'FAQ',
        'blog': 'Blog',
        'team': 'Tím',
        'career': 'Kariéra'
    };
    
    return nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
}

export default Breadcrumbs;


