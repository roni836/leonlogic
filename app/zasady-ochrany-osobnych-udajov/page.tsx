import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Zásady ochrany osobných údajov | Leonlogic',
    description: 'Oficiálne zásady ochrany osobných údajov spoločnosti OREM VENTURES s.r.o. (Leonlogic). Informácie o právnych základoch, poskytovaní údajov, výmaze a kontaktoch.',
    keywords: [
        "zásady ochrany osobných údajov",
        "GDPR",
        "Leonlogic",
        "OREM VENTURES",
        "súkromie",
        "spracovanie osobných údajov",
    ],
    openGraph: {
        ...helper.openGraphData,
        title: 'Zásady ochrany osobných údajov | Leonlogic',
        description: 'Oficiálne zásady ochrany osobných údajov spoločnosti OREM VENTURES s.r.o. (Leonlogic). Informácie o právnych základoch, poskytovaní údajov, výmaze a kontaktoch.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/zasady-ochrany-osobnych-udajov',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Zásady ochrany osobných údajov | Leonlogic',
        description: 'Oficiálne zásady ochrany osobných údajov spoločnosti OREM VENTURES s.r.o. (Leonlogic). Informácie o právnych základoch, poskytovaní údajov, výmaze a kontaktoch.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/zasady-ochrany-osobnych-udajov`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/zasady-ochrany-osobnych-udajov` },
    },
};

const page = () => {
    return (
        <>
            <section className="pb-12 pt-32 md:pt-52">
                <div className="container">
                    <div>
                        <h1 className="text-[28px] font-bold leading-8">Zásady ochrany osobných údajov</h1>

                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            Spoločnosť <strong>OREM VENTURES s.r.o.</strong> so sídlom Kostolná 299/27, 991 26 Nenince,
                            IČO: 52514901, DIČ: 2121045058, zapísaná v Obchodnom registri Okresného súdu
                            Banská Bystrica, oddiel Sro, vložka č. 36898/S, pôsobiaca pod obchodným názvom
                            <strong> Leonlogic </strong> (ďalej aj „Prevádzkovateľ") je prevádzkovateľom informačných systémov,
                            v ktorých táto spoločnosť spracúva Vaše osobné údaje ako osobné údaje dotknutej osoby.
                            Prevádzkovateľ postupuje pri spracovaní osobných údajov v súlade s právnym poriadkom
                            Slovenskej republiky, pričom v maximálnej miere dbá na súkromie dotknutých osôb a na ochranu osobných údajov, ktoré spracúva.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">Dôvody spracovania osobných údajov</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Spracúvanie získaných a poskytnutých osobných údajov je nevyhnutnou súčasťou činnosti Prevádzkovateľa.
                            Bez spracúvania osobných údajov by svojim klientom, potenciálnym klientom, obchodným partnerom, ani ostatným dotknutým osobám
                            nemohol poskytnúť svoje služby v požadovanom rozsahu a kvalite.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">Základ pre spracovanie osobných údajov</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Súčasná právna úprava umožňuje spracúvať osobné údaje na základe viacerých právnych základov,
                            pričom k spracúvaniu osobných údajov môže dochádzať aj bez súhlasu dotknutej osoby.
                            Ak neexistuje iný právny základ spracúvania osobných údajov, osobné údaje budú spracúvané iba na základe
                            a v rozsahu súhlasu dotknutej osoby.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">Poskytovanie údajov</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Osobné údaje spracúvané Prevádzkovateľom môžu byť spracúvané aj tretími osobami, za predpokladu,
                            že tak rozhodne Prevádzkovateľ, alebo mu povinnosť poskytnúť osobné údaje vyplýva z právneho poriadku
                            Slovenskej republiky. V prípadoch keď je voľba príjemcu osobných údajov na Prevádzkovateľovi,
                            ten pri výbere týchto partnerov vždy dbá na to, aby bol zaručený vysoký štandard ochrany osobných údajov dotknutej osoby.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Osobné údaje dotknutej osoby môžu byť spracúvané v krajinách Európskej únie a krajinách, ktoré sú zmluvnou stranou
                            Dohody o Európskom hospodárskom priestore. Prenos osobných údajov môže nastať len do tretích krajín,
                            ktorých právny režim považuje Európska komisia za zabezpečujúci adekvátnu úroveň ochrany osobných údajov.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">Výmaz</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Môžete žiadať, aby sme údaje o vás vymazali (vymazanie sa však nedotkne údajov na dokumentoch,
                            ktoré musíme podľa zákona uchovávať, napr. faktúry či dobropisy).
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Ak vaše osobné údaje budeme potrebovať pre určenie, výkon alebo obranu našich právnych nárokov,
                            môže byť vaša žiadosť odmietnutá (napr. keď za vami evidujeme neuhradenú pohľadávku
                            či v prípade prebiehajúceho reklamačného konania).
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Vždy nás môžete ľahko kontaktovať prostredníctvom nášho kontaktného mailu
                            <span className="underline"> leonlogic@leonlogic.com</span> alebo na telefónnom čísle [telefónne číslo].
                        </p>

                        <p className="text-gray dark:text-[#9199B5] mt-12">
                            Tieto Zásady ochrany osobných údajov nadobúdajú účinnosť dňom <strong>29.8.2025</strong>.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-16">
                <BlogSlider />
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
