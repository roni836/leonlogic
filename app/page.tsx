import helper from '@/libs/helper';
import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
    title: 'Digitálne Riešenia pre Váš Rast - LeonLogic',
    description: 'Profesionálna tvorba webstránok a e-shopov. Automatizácie s AI, programovanie na mieru a komplexné digitálne riešenia pre firmy.',
    keywords: [
        'digitálna agentúra, SEO Slovensko, tvorba webov, obsahový marketing, správa sociálnych sietí, e-shop riešenia, online marketing'],
    openGraph: {
        ...helper.openGraphData,
        title: 'Digitálne Riešenia pre Váš Rast - LeonLogic',
        description: 'Profesionálna tvorba webstránok a e-shopov. Automatizácie s AI, programovanie na mieru a komplexné digitálne riešenia pre firmy.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Digitálne Riešenia pre Váš Rast - LeonLogic',
        description: 'Profesionálna tvorba webstránok a e-shopov. Automatizácie s AI, programovanie na mieru a komplexné digitálne riešenia pre firmy.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}` },
    },
};

export default function Home() {
    return <HomeClient />;
} 