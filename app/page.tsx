import helper from '@/libs/helper';
import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
    title: 'LeonLogic – Digitálna agentúra pre SEO, web a marketing',
    description: 'LeonLogic je digitálna agentúra pre moderné firmy. Ponúkame tvorbu webov, SEO optimalizáciu, obsahový marketing, správu sociálnych sietí a e-shop riešenia. Pomáhame vám rásť s merateľnými výsledkami.',
    keywords: [
        'digitálna agentúra, SEO Slovensko, tvorba webov, obsahový marketing, správa sociálnych sietí, e-shop riešenia, online marketing'],
    openGraph: {
        ...helper.openGraphData,
        title: 'LeonLogic – Digitálna agentúra pre SEO, web a marketing',
        description: 'LeonLogic je digitálna agentúra pre moderné firmy. Ponúkame tvorbu webov, SEO optimalizáciu, obsahový marketing, správu sociálnych sietí a e-shop riešenia. Pomáhame vám rásť s merateľnými výsledkami.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'LeonLogic – Digitálna agentúra pre SEO, web a marketing',
        description: 'LeonLogic je digitálna agentúra pre moderné firmy. Ponúkame tvorbu webov, SEO optimalizáciu, obsahový marketing, správu sociálnych sietí a e-shop riešenia. Pomáhame vám rásť s merateľnými výsledkami.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}` },
    },
};

export default function Home() {
    return <HomeClient />;
} 