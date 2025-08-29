import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Zásady používania súborov cookie | Leonlogic',
    description: 'Informácie o používaní súborov cookie na webe Leonlogic: typy cookie (nevyhnutné, analytické, marketingové), doby uloženia, súhlasy a správa nastavení.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Zásady používania súborov cookie | Leonlogic',
        description: 'Informácie o používaní súborov cookie na webe Leonlogic: typy cookie (nevyhnutné, analytické, marketingové), doby uloženia, súhlasy a správa nastavení.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/zasady-ochrany-osobnych-udajov',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Zásady používania súborov cookie | Leonlogic',
        description: 'Informácie o používaní súborov cookie na webe Leonlogic: typy cookie (nevyhnutné, analytické, marketingové), doby uloženia, súhlasy a správa nastavení.',
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
                        <h1 className="text-[28px] font-bold leading-8">Zásady používania súborov cookie</h1>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            Tieto Zásady používania súborov cookie boli naposledy aktualizované 29. august 2025 a vzťahujú sa na občanov a právnické osoby
                            s trvalým pobytom v Európskom hospodárskom priestore a Švajčiarsku.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">1. Úvod</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Naša webová stránka <a href="https://leonlogic.com" className="underline">https://leonlogic.com</a> (ďalej len „webová stránka") používa súbory cookie a ďalšie
                            súvisiace technológie. Súbory cookie umiestňujú aj tretie strany, ktoré sme zapojili.
                            V tomto dokumente vás informujeme o používaní súborov cookie na našich webových stránkach.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Prevádzkovateľom je OREM VENTURES s.r.o., pôsobiaca pod obchodnou značkou Leonlogic, so sídlom Kostolná 299/27, 991 26 Nenince, IČO: 52514901.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">2. Čo sú súbory cookie</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Súbor cookie je malý textový súbor, ktorý je odoslaný spolu so stránkami tohto webu a uložený vašim prehliadačom
                            na pevnom disku vášho počítača alebo iného zariadenia. Informácie v nich uložené môžu byť vrátené na naše servery
                            alebo na servery príslušných tretích strán počas nasledujúcej návštevy.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">3. Typy súborov cookie</h2>
                        <h3 className="font-semibold mt-5">3.1 Nevyhnutné súbory cookie</h3>
                        <p className="text-gray dark:text-[#9199B5] mt-2.5">
                            Tieto súbory cookie sú nevyhnutné pre správne fungovanie webových stránok a nemožno ich zakázať.
                            Právnym základom je oprávnený záujem podľa článku 6 ods. 1 písm. f) GDPR.
                            Doba uloženia je do 1 roka a súhlas sa nevyžaduje.
                        </p>

                        <h3 className="font-semibold mt-5">3.2 Analytické súbory cookie</h3>
                        <p className="text-gray dark:text-[#9199B5] mt-2.5">
                            Tieto súbory cookie nám umožňujú merať a zlepšovať výkon našich stránok.
                            Právnym základom je súhlas podľa článku 6 ods. 1 písm. a) GDPR.
                            Doba uloženia je do 2 rokov a vyžaduje sa súhlas.
                        </p>

                        <h3 className="font-semibold mt-5">3.3 Marketingové súbory cookie</h3>
                        <p className="text-gray dark:text-[#9199B5] mt-2.5">
                            Tieto súbory cookie sa používajú na zobrazovanie relevantných reklám.
                            Právnym základom je súhlas podľa článku 6 ods. 1 písm. a) GDPR.
                            Doba uloženia je do 2 rokov a vyžaduje sa súhlas.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">4. Používané súbory cookie</h2>
                        <ul className="list-disc list-inside text-gray dark:text-[#9199B5] mt-5 space-y-1">
                            <li>Facebook Pixel – marketingové súbory cookie pre reklamné účely, doba uloženia 2 roky</li>
                            <li>Google Analytics 4 – analytické súbory cookie pre analýzu návštevnosti, doba uloženia 2 roky</li>
                            <li>Vercel – technické súbory cookie pre zabezpečenie hostingu webovej stránky, doba uloženia 1 rok</li>
                            <li>Supabase – funkčné súbory cookie pre správu databázy a ukladanie údajov, doba uloženia 1 rok</li>
                        </ul>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">5. Súhlas so súbormi cookie</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Keď navštívite našu webovú stránku prvýkrát, zobrazí sa vám banner so súbormi cookie.
                            Môžete prijať všetky, nastaviť individuálne kategórie alebo odmietnuť všetky okrem nevyhnutných.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Svoje nastavenia môžete kedykoľvek zmeniť prostredníctvom cookie banneru na webovej stránke alebo
                            kontaktovaním nás priamo na <span className="underline">leonlogic@leonlogic.com</span>.
                            Súhlas môžete kedykoľvek odvolať bez toho, aby to ovplyvnilo zákonnosť predchádzajúceho spracovania.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">6. Správa súborov cookie v prehliadači</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Súbory cookie môžete spravovať priamo vo vašom internetovom prehliadači:
                        </p>
                        <ul className="list-disc list-inside text-gray dark:text-[#9199B5] mt-2.5 space-y-1">
                            <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                            <li>Firefox: Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                            <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
                            <li>Edge: Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                        </ul>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Zakázanie súborov cookie môže ovplyvniť funkčnosť webovej stránky.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">7. Vaše práva</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            V súlade s GDPR máte právo na informácie o spracovaní, právo na prístup k údajom,
                            právo na opravu nepresných údajov, právo na výmaz údajov, právo na obmedzenie spracovania,
                            právo na prenosnosť údajov a právo namietať proti spracovaniu.
                            Máte tiež právo podať sťažnosť na Úrad pre ochranu osobných údajov SR,
                            ak sa domnievate, že spracovanie vašich osobných údajov porušuje GDPR.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">8. Bezpečnosť údajov</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Implementujeme primerané technické a organizačné opatrenia na zabezpečenie vašich osobných údajov pred neoprávneným prístupom, stratou alebo zneužitím.
                            Osobné údaje získané prostredníctvom súborov cookie uchovávame iba po dobu nevyhnutnú na dosiahnutie účelov, pre ktoré boli zhromaždené.
                            Niektorí naši partneri môžu prenášať vaše údaje do tretích krajín v súlade s príslušnými zásadami ochrany údajov.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">9. Zmeny týchto zásad</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Tieto zásady môžeme aktualizovať. O významných zmenách vás budeme informovať prostredníctvom oznámenia na našej webovej stránke alebo
                            aktualizácie cookie banneru.
                        </p>

                        <h2 className="text-[22px] font-bold leading-8 mt-12">10. Kontaktné údaje</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            <strong>OREM VENTURES s.r.o.</strong><br />
                            Obchodná značka: Leonlogic<br />
                            Sídlo: Kostolná 299/27, 991 26 Nenince<br />
                            IČO: 52514901, DIČ: 2121045058<br />
                            E-mail: <span className="underline">leonlogic@leonlogic.com</span><br />
                            Web: <a href="https://leonlogic.com" className="underline">https://leonlogic.com</a>
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            <strong>Úrad pre ochranu osobných údajov SR</strong><br />
                            Hraničná 12, 820 07 Bratislava<br />
                            Web: <a href="https://dataprotection.gov.sk" className="underline">https://dataprotection.gov.sk</a>
                        </p>

                        <p className="text-gray dark:text-[#9199B5] mt-12">
                            Tieto zásady používania súborov cookie nadobúdajú účinnosť dňom <strong>29.8.2025</strong>.
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
