import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Všeobecné obchodné podmienky | Leonlogic',
    description: 'Oficiálne Všeobecné obchodné podmienky spoločnosti OREM VENTURES s.r.o. – Leonlogic. Prečítajte si podmienky poskytovania digitálnych služieb, platobné podmienky, práva a povinnosti, duševné vlastníctvo a ochranu osobných údajov.',
    keywords: [
        "Všeobecné obchodné podmienky",
        "Leonlogic",
        "OREM VENTURES",
        "digitálne služby",
        "podmienky používania",
        "ochrana osobných údajov",
        "platobné podmienky",
        "práva a povinnosti",
    ],
    openGraph: {
        ...helper.openGraphData,
        title: 'Všeobecné obchodné podmienky | Leonlogic',
        description: 'Oficiálne Všeobecné obchodné podmienky spoločnosti OREM VENTURES s.r.o. – Leonlogic. Prečítajte si podmienky poskytovania digitálnych služieb, platobné podmienky, práva a povinnosti, duševné vlastníctvo a ochranu osobných údajov.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/vseobecne-obchodne-podmienky',
        type: 'article',
        locale: "sk_SK",
    },
    twitter: {
        ...helper.twitterData,
        title: 'Všeobecné obchodné podmienky | Leonlogic',
        description: 'Oficiálne Všeobecné obchodné podmienky spoločnosti OREM VENTURES s.r.o. – Leonlogic. Prečítajte si podmienky poskytovania digitálnych služieb, platobné podmienky, práva a povinnosti, duševné vlastníctvo a ochranu osobných údajov.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/vseobecne-obchodne-podmienky`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/vseobecne-obchodne-podmienky` },
    },
};
const page = () => {
    return (
        <>
            <section className="pb-12 pt-32 md:pt-52">
                <div className="container">
                    <div>
                        <h1 className="text-[28px] font-bold leading-8">Všeobecné obchodné podmienky</h1>

                        {/* Článok 1 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-8">Článok 1: Úvodné ustanovenia</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            1.1 Spoločnosť OREM VENTURES s.r.o. so sídlom Kostolná 299/27, 991 26 Nenince,
                            IČO: 52514901, DIČ: 2121045058, zapísaná v Obchodnom registri Okresného súdu
                            Banská Bystrica, oddiel Sro, vložka č. 36898/S, pôsobiaca pod obchodným názvom
                            Leonlogic (ďalej len „Spoločnosť") vydáva tieto Všeobecné obchodné podmienky pri
                            poskytovaní služieb (ďalej len „VOP" alebo „Podmienky"). Leonlogic je obchodná
                            značka pod ktorou Spoločnosť poskytuje digitálne služby.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            1.2 VOP upravujú právne vzťahy medzi Spoločnosťou a tretími osobami ako jej
                            klientmi týkajúce sa poskytovania digitálnych služieb. VOP sú neoddeliteľnou
                            súčasťou zmluvného vzťahu medzi Spoločnosťou a jej klientom resp. klientom jej
                            oprávneného zmluvného partnera.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            1.3 VOP sú záväzné pre všetky zmluvné strany, t.j. účastníkov záväzkového vzťahu
                            a vychádzajú zo všeobecne záväzných právnych predpisov platných v Slovenskej
                            republike, ako napríklad Obchodný zákonník, Občiansky zákonník a medzinárodných
                            zmlúv resp. dohôd a zvyklostí.
                        </p>

                        {/* Článok 2 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 2: Definície pojmov</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.1 Služby znamenajú najmä nasledovné služby a práce poskytované alebo vykonávané
                            Spoločnosťou pre Objednávateľa na základe jeho objednávky:
                        </p>
                        <ul className="list-disc list-inside mt-2.5 text-gray dark:text-[#9199B5] space-y-1">
                            <li>vytvorenie návrhov, realizácia, údržba, upgrade a update webových stránok a e-commerce riešení</li>
                            <li>webhostingové služby s poskytovaním doplnkových služieb</li>
                            <li>digitálne marketingové služby (SEO, SEM, social media marketing, content marketing)</li>
                            <li>programátorské služby a vývoj aplikácií</li>
                            <li>grafické dizajnové služby a tvorba brandingu</li>
                            <li>konzultačné služby v oblasti digitálnej transformácie</li>
                            <li>podporné služby a technická podpora</li>
                            <li>automatizácie s umelou inteligenciou</li>
                        </ul>
                        <p className="text-gray dark:text-[#9199B5] mt-2.5">
                            Rozsah a druh Služieb je presne definovaný v Zmluve a/alebo Objednávke.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.2 Produkt znamená konkrétny výsledok poskytnutej Služby vo vzťahu ku konkrétnemu
                            Objednávateľovi, je to najmä webová stránka, e-shop, mobilná aplikácia, grafický
                            dizajn, marketingová kampaň alebo iné digitálne riešenie. Špecifikácia Produktu je
                            uvedená v Zmluve.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.3 Objednávateľ znamená klient Spoločnosti resp. klient jej oprávneného zmluvného
                            partnera, ktorému sa na základe Zmluvy zaviazala Spoločnosť poskytnúť Služby.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.4 Objednávka znamená písomnú objednávku Služieb spísanú Objednávateľom a
                            akceptovanú Spoločnosťou, ktorá má formu a obsahové náležitosti stanovené
                            Spoločnosťou.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.5 Zmluva je zmluva o poskytnutí prác a služieb alebo akýkoľvek obdobný zmluvný
                            vzťah medzi Spoločnosťou a Objednávateľom, uzatvorený v písomnej forme alebo
                            elektronicky, na základe ktorého Spoločnosť poskytuje Objednávateľovi Služby;
                            neoddeliteľnou súčasťou Zmluvy, ak Zmluva neurčuje niečo iné, sú VOP.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.6 Zmluvné strany znamenajú Spoločnosť a Objednávateľa spoločne, Zmluvná strana
                            znamená ktorúkoľvek z nich.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.7 Obchodný zákonník znamená zákon č. 513/1991 Zb. Obchodný zákonník v platnom
                            znení.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.8 Občiansky zákonník znamená zákon č. 40/1964 Zb. Občiansky zákonník v platnom
                            znení.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            2.9 Cenník znamená cenník Produktov a Služieb Spoločnosti zverejnený na webovej
                            stránke.
                        </p>

                        {/* Článok 3 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 3: Práva a povinnosti zmluvných strán</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            3.1 Ak v Zmluve nie je uvedené inak, Spoločnosť nie je oprávnená poskytovať a
                            ďalej šíriť Produkt a ani podklady, ktoré dostala od Objednávateľa pri
                            poskytovaní Služieb alebo na vytvorenie Produktu, s výnimkou použitia pre účely
                            portfólia a marketingu po predchádzajúcom písomnom súhlase Objednávateľa.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            3.2 Spoločnosť sa zaväzuje poskytovať Služby a vykonávať práce na Produkte podľa
                            dohodnutého časového harmonogramu riadne a v požadovanej kvalite, v súlade s
                            najlepšími praktikami v oblasti digitálnych technológií.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            3.3 Objednávateľ sa zaväzuje dodávať Spoločnosti podklady pre poskytovanie
                            Služieb a vykonávanie prác na Produkte vo formáte a podľa časového harmonogramu
                            dohodnutého v Zmluve a/alebo Objednávke a poskytovať Spoločnosti nevyhnutnú
                            súčinnosť vrátane včasného poskytovania spätnej väzby.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            3.4 Objednávateľ sa zaväzuje uhradiť Spoločnosti dohodnutú cenu za poskytnuté
                            Služby a/alebo vytvorený Produkt v lehote stanovenej v týchto VOP alebo v Zmluve.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            3.5 Objednávateľ je zodpovedný za zabezpečenie všetkých potrebných licencií,
                            povolení a práv k použitiu obsahu, ktorý poskytuje Spoločnosti na spracovanie.
                        </p>

                        {/* Článok 4 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 4: Trvanie Zmluvy, ukončenie Zmluvy</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            4.1 Zmluva sa uzatvára na dobu neurčitú s účinnosťou odo dňa jej podpisu
                            oprávnenými zástupcami oboch Zmluvných strán alebo odo dňa elektronického
                            potvrdenia objednávky, ak v Zmluve nie je uvedené inak.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">4.2 Zmluvu je možné ukončiť:</p>
                        <ul className="list-disc list-inside mt-2.5 text-gray dark:text-[#9199B5] space-y-1">
                            <li>4.2.1 Písomnou dohodou Zmluvných strán;</li>
                            <li>
                                4.2.2 Písomnou výpoveďou ktorejkoľvek zo Zmluvných strán s trojmesačnou
                                výpovednou lehotou, ktorá začína plynúť od prvého dňa nasledujúceho
                                kalendárneho mesiaca po doručení písomnej výpovede. Počas plynutia výpovednej
                                lehoty sa Zmluvné strany zaväzujú zabezpečiť plynulé plnenie podľa Zmluvy, ak
                                nebude dohodnuté inak;
                            </li>
                            <li>
                                4.2.3 Odstúpením od zmluvy ktoroukoľvek zo Zmluvných strán, ak druhá Zmluvná
                                strana poruší svoje povinnosti podľa Zmluvy podstatným spôsobom;
                            </li>
                            <li>
                                4.2.4 Odstúpením Spoločnosti v prípade neúčasti Objednávateľa na projekte,
                                najmä pri nedodaní potrebných podkladov, spätných väzieb alebo iných vstupov
                                potrebných na plnohodnotné naplnenie a dokončenie záväzkov, aspoň 1 mesiac po
                                upozornení na nedostatočnú účasť zo strany Objednávateľa. V takomto prípade je
                                Objednávateľ povinný uhradiť 70% z dohodnutej sumy a projekt sa ukončí bez
                                dodania finálneho produktu;
                            </li>
                            <li>
                                4.2.5 Neuhradením záväzkov zo strany Objednávateľa po dobu viac ako 2 mesiace
                                (faktúra alebo predfaktúra po splatnosti viac ako 60 dní) je Spoločnosť
                                oprávnená od zmluvy odstúpiť a požadovať 100% splatenie všetkých záväzkov a
                                fakturovanie 100% dohodnutej sumy za celé (aj neuplynuté) obdobie. Projekt sa
                                ukončí predčasne pokiaľ ide napríklad o ročný kontrakt s okamžitým fakturovaním
                                zvyšných mesiacov.
                            </li>
                        </ul>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            4.3 Písomná výpoveď resp. písomné oznámenie o odstúpení od Zmluvy musí byť
                            doručené druhej Zmluvnej strane na jej adresu uvedenú v Zmluve, resp. na inú
                            adresu tejto Zmluvnej strany, ktorú táto Zmluvná strana písomne oznámi druhej
                            Zmluvnej strane, alebo elektronicky na email <span className="underline">leonlogic@leonlogic.com</span> pre Spoločnosť.
                        </p>

                        {/* Článok 5 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 5: Cena za Služby a Produkt</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            5.1 Cena za Služby a/alebo Produkt je určená dohodou v súlade so zákonom č.
                            18/1996 Z.z. o cenách v platnom znení. Presná výška ceny je uvedená v Zmluve. Pri
                            opakujúcom sa plnení a pri hodinovej cene uvedenej v Zmluve bude prílohou faktúry
                            prehľad vykonaných prác v priebehu daného fakturačného obdobia.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            5.2 Pokiaľ výslovne nie je uvedené inak, všetky ceny v Zmluve, Objednávke,
                            prílohách a Cenníku sú uvádzané bez DPH.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            5.3 Zmena Cenníka nemá žiaden vplyv na skôr prijaté Objednávky, pokiaľ v nich nie
                            je uvedené inak. O zmene cenníka bude Objednávateľ informovaný minimálne 30 dní
                            vopred.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            5.4 Pri projektoch presahujúcich 6 mesiacov si Spoločnosť vyhradzuje právo na
                            úpravu ceny o mieru inflácie podľa oficiálnych údajov Štatistického úradu SR.
                        </p>

                        {/* Článok 6 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 6: Platobné podmienky</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            6.1 Objednávateľ sa zaväzuje uhrádzať Spoločnosti dohodnuté ceny na základe
                            faktúr vystavených Spoločnosťou najneskôr do 14 dní odo dňa ich doručenia, pokiaľ
                            nie je v zmluve dohodnuté inak.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            6.2 V prípade omeškania Objednávateľa s úhradou fakturovanej sumy je Spoločnosť
                            oprávnená požadovať od Objednávateľa zaplatenie úroku z omeškania vo výške 0,05%
                            z dlžnej sumy za každý deň omeškania, a pri omeškaní presahujúcom 30 dní je
                            Spoločnosť oprávnená dočasne, až do zaplatenia fakturovanej sumy, pozastaviť
                            ďalšie poskytovanie Služieb resp. vykonávanie prác, pričom sa v takom prípade
                            primerane posúvajú všetky dohodnuté termíny ukončenia a odovzdania prác.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            6.3 Ak v Zmluve nie je uvedené inak a časový harmonogram poskytnutia Služieb resp.
                            vykonania prác na Produkte nepresahuje jeden mesiac, Spoločnosť vystaví faktúru
                            na dohodnutú cenu po poskytnutí Služieb resp. po prevzatí vytvoreného Produktu
                            Objednávateľom.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            6.4 Ak v Zmluve nie je uvedené inak a časový harmonogram poskytnutia Služieb resp.
                            vykonania prác na Produkte presahuje jeden mesiac, celková suma podľa Zmluvy sa
                            rozdelí na dve časti v pomere 50% a 50%. Prvá časť vo veľkosti 50% z celkovej
                            sumy sa rozdelí pomerne na celú dobu poskytovania Služieb resp. vykonania prác na
                            Produkte podľa časového harmonogramu a Spoločnosť mesačne vystavuje faktúry s
                            čiastkami zodpovedajúcimi podielu vykonanej práce za daný mesiac na celkovej
                            práci. Spoločnosť vystaví faktúru na zostávajúcu časť vo veľkosti 50% z celkovej
                            sumy po prevzatí Produktu Objednávateľom. V prípade, že Objednávateľ nedodá do 10
                            pracovných dní pripomienky k odovzdanému predmetu zmluvy, Spoločnosť môže
                            fakturovať zvyšnú sumu.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            6.5 Pri väčších projektoch nad 10&nbsp;000 EUR si Spoločnosť vyhradzuje právo
                            požadovať preddavok vo výške 30% z celkovej sumy pred začatím prác.
                        </p>

                        {/* Článok 7 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 7: Odovzdanie, reklamácie</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            7.1 Spoločnosť poskytne Služby resp. odovzdá Produkt Objednávateľovi v čase,
                            mieste a forme uvedenej v Zmluve.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            7.2 Objednávateľ odovzdá Spoločnosti potrebné podklady pre poskytnutie Služieb
                            resp. vykonanie prác na Produkte v čase, mieste a forme uvedenej v Zmluve a/alebo
                            Objednávke. Ak podklady nezodpovedajú špecifikácii alebo sú dodané po termíne
                            uvedenom v Zmluve a/alebo Objednávke, Spoločnosť je oprávnená primerane posunúť
                            termín poskytnutia Služieb resp. odovzdania Produktu.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            7.3 Objednávateľ a Spoločnosť spíšu o odovzdaní Produktu osobitný preberací
                            protokol, ktorý tvorí prílohu k poslednej faktúre vystavenej na základe predmetnej
                            Objednávky, alebo potvrdia prevzatie elektronicky.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            7.4 Spoločnosť sa zaväzuje odovzdávaný Produkt upraviť resp. opraviť podľa
                            požiadaviek Objednávateľa stanovených v špecifikácii prác a služieb. Ak Produkt
                            nezodpovedá špecifikácii Objednávateľa ani po úprave, či oprave, alebo nie je
                            odovzdaný v dohodnutom termíne z dôvodov na strane Spoločnosti, s výnimkou
                            prípadov vyššej moci, má Objednávateľ právo jednotlivú Objednávku zrušiť, alebo
                            Produkt prevziať a uplatniť si nárok na zľavu z ceny primeranú oneskoreniu
                            dodania Produktu.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            7.5 V prípade technickej poruchy, ktorá Spoločnosti znemožní poskytnutie Služieb
                            resp. dodanie Produktu Objednávateľovi v dohodnutom čase, budú Služby resp.
                            Produkt po vzájomnej dohode odovzdané náhradným spôsobom na náklady tej Zmluvnej
                            strany, u ktorej technická porucha vznikla.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            7.6 Objednávateľ má právo požiadať o revízie a úpravy Produktu počas vývojového
                            procesu podľa podmienok špecifikovaných v Zmluve. Rozsiahlejšie zmeny nad rámec
                            pôvodnej špecifikácie môžu byť spoplatnené dodatočne.
                        </p>

                        {/* Článok 8 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 8: Zodpovednosť za škodu, záruky</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            8.1 Zodpovednosť za škodu sa spravuje príslušnými ustanoveniami Obchodného
                            zákonníka.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            8.2 Spoločnosť poskytuje na Produkt záruku na jeho funkčnosť. Chyby Produktu,
                            ktoré nezodpovedajú Špecifikácii uvedenej v Zmluve a/alebo Objednávke, zistené do
                            12 mesiacov po jeho odovzdaní, Spoločnosť odstráni bezodkladne na vlastné náklady.
                            Ak nie je uvedené v Zmluve inak, na Produkt sa neposkytuje žiadna ďalšia záruka.
                            Riziko vyplývajúce z používania Produktu znáša Objednávateľ, ktorý je tiež
                            zodpovedný za prípadné porušenie autorských práv, práv priemyselného vlastníctva
                            a iných práv tretích osôb, ak k tomuto porušeniu práv došlo v dôsledku použitia
                            podkladov poskytnutých Spoločnosti Objednávateľom.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            8.3 Spoločnosť nebude v žiadnom prípade niesť zodpovednosť za žiadne špeciálne,
                            náhodné alebo následné škody akéhokoľvek druhu (vrátane, okrem iného, škody zo
                            straty obchodných ziskov, prerušenia podnikania, straty obchodných informácií
                            alebo akejkoľvek finančnej škody), ktoré vyplynú z používania či z nemožnosti
                            použiť Produkt, a to aj vtedy, keď bola Spoločnosť upozornená na možnosť takejto
                            škody.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            8.4 Maximálna výška náhrady škody, za ktorú zodpovedá Spoločnosť, nepresahuje
                            celkovú hodnotu faktúr za služby poskytnuté v rámci konkrétneho projektu.
                        </p>

                        {/* Článok 9 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 9: Ochrana osobných údajov</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            9.1 Spoločnosť spracúva osobné údaje v súlade s Nariadením Európskeho parlamentu
                            a Rady (EÚ) 2016/679 (GDPR) a príslušnými národnými právnymi predpismi.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            9.2 Podrobné informácie o spracúvaní osobných údajov sú uvedené v samostatných
                            Zásadách ochrany osobných údajov zverejnených na webovej stránke.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            9.3 Objednávateľ sa zaväzuje informovať Spoločnosť o všetkých požiadavkách
                            súvisiacich so spracúvaním osobných údajov v rámci poskytovaných služieb.
                        </p>

                        {/* Článok 10 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 10: Duševné vlastníctvo</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            10.1 Všetky práva duševného vlastníctva k Produktu vytvorenému Spoločnosťou
                            prechádzajú na Objednávateľa po úplnom uhradení všetkých záväzkov, pokiaľ nie je
                            v Zmluve dohodnuté inak.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            10.2 Spoločnosť si vyhradzuje právo použiť všeobecné know-how, postupy a techniky
                            získané pri poskytovaní Služieb aj pre iných klientov.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            10.3 Objednávateľ udeľuje Spoločnosti právo použiť realizovaný Produkt ako
                            referenciu vo svojom portfóliu a marketingových materiáloch, pokiaľ nie je
                            písomne dohodnuté inak.
                        </p>

                        {/* Článok 11 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 11: Spoločné ustanovenia</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            11.1 Akékoľvek spory, ktoré vzniknú medzi Zmluvnými stranami, sa Zmluvné strany
                            zaväzujú riešiť prednostne vzájomným rokovaním s cieľom vyriešiť spor dohodou. V
                            prípade, ak sa Zmluvným stranám nepodarí dosiahnuť v predmete sporu dohodu, je
                            ktorákoľvek zo Zmluvných strán oprávnená obrátiť sa s návrhom na riešenie sporu
                            na vecne a miestne príslušný súd v Slovenskej republike.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            11.2 Všetky oznámenia a ďalšie úkony vrátane právnych úkonov, ktoré majú byť
                            podľa Zmluvy alebo príslušných právnych predpisov urobené písomne alebo budú
                            urobené písomne, sa budú doručovať druhej Zmluvnej strane osobne, doporučenou
                            poštou na poslednú známu adresu tejto Zmluvnej strany alebo elektronicky na
                            dohodnutú e-mailovú adresu (<span className="underline">leonlogic@leonlogic.com</span> pre Spoločnosť). Zmluvné strany sa
                            dohodli, že ak adresát odmietne prevziať zásielku alebo ak sa zásielka vráti
                            odosielateľovi ako nedoručená, platí, že zásielka bola doručená na druhý deň po
                            dni jej odoslania.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            11.3 Ak nie je v Zmluve výslovne uvedené inak, komunikácia medzi Zmluvnými
                            stranami prebieha v slovenskom jazyku.
                        </p>

                        {/* Článok 12 */}
                        <h2 className="text-[22px] font-bold leading-8 mt-12">Článok 12: Záverečné ustanovenia</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            12.1 V prípade, ak sa niektoré ustanovenia týchto Podmienok stanú celkom alebo
                            sčasti neplatné, neúčinné alebo nevykonateľné, nie je tým dotknutá platnosť a
                            účinnosť ostatných ustanovení. Namiesto neplatných, neúčinných a nevykonateľných
                            ustanovení sa použijú ustanovenia príslušných právnych predpisov.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            12.2 Spoločnosť si vyhradzuje právo na zmenu a dopĺňanie týchto Podmienok, pričom
                            o zmenách bezodkladne informuje klientov formou zverejnenia zmien na internetovej
                            stránke <span className="underline">www.leonlogic.com</span> s uvedením dátumu, od ktorého tieto zmeny nadobúdajú
                            účinnosť.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            12.3 Podmienky nadobúdajú účinnosť najskôr po 5 dňoch odo dňa ich zverejnenia
                            podľa bodu 12.2 týchto Podmienok.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            12.4 Odchýlne ustanovenia Zmluvy majú prednosť pred týmito Podmienkami. Pôsobnosť
                            týchto Podmienok alebo ich časti možno vylúčiť iba písomnou dohodou účastníkov
                            Zmluvy.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            12.5 Tieto Podmienky sa riadia právnym poriadkom Slovenskej republiky.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            Tieto Podmienky nadobúdajú účinnosť dňom 29.8.2025.
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
