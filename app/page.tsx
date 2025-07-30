import helper from '@/libs/helper';
import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
    title: 'Home | Leonlogic',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Home | Leonlogic',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Home | Leonlogic',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}` },
    },
};

export default function Home() {
    return <HomeClient />;
} 