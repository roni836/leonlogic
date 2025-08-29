// "use client"
import Image from 'next/image';
import Link from 'next/link';
import EmailIcon from '../Icons/EmailIcon';
import TelePhoneIcon from '../Icons/TelePhoneIcon';
import LocationIcon from '../Icons/LocationIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathName = usePathname();
    return (
        <footer className="mt-auto bg-primary dark:bg-[#9199B5]/[0.12] pt-12">
            <div className="container">
                <div className="mb-12 flex flex-col items-center gap-4 md:flex-row">
                    <div className="text-center md:text-left md:rtl:text-right">
                        <Link href="/" className="mb-4 inline-flex">
                            <Image src="/Leonlogic-light.svg" width={180} height={44} alt="Logo" />
                        </Link>
                        <p className="text-xl text-white">
                            Buďte kreatívni, <span className="text-secondary"> buďte globálni</span>
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-[350px] md:me-0">
                        <form>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary rtl:right-4">
                                    <EmailIcon className="h-6 w-6" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Zadajte váš email"
                                    className="form-input border-white/10 py-3.5 pe-28 ps-12 text-sm text-white placeholder:text-white"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 rounded-e-full bg-secondary px-[30px] font-bold uppercase text-success hover:bg-secondary/80 ltr:right-0 rtl:left-0"
                                >
                                    odoslať
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="pb-6">
                    <ul className="lg:mb-4 flex flex-col justify-center divide-y divide-white/10 font-semibold uppercase text-white lg:flex-row lg:justify-start lg:gap-6 lg:divide-y-0 lg:text-lg">
                        <li>
                            <Link
                                href="/"
                                className={`inline-flex p-2 md:p-1.5 ${pathName === '/' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                    }`}
                            >
                                Domov
                            </Link>
                        </li>
                        <li>
                            <Link href="/sluzby" className={`inline-flex p-2 md:p-1.5 ${pathName === '/sluzby' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}>
                                Služby
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className={`inline-flex p-2 md:p-1.5 ${pathName === '/portfolio' || pathName === '/portfolio-detail' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}>
                                Portfólio
                            </Link>
                        </li>
                        <li>
                            <Link href="/o-nas" className={`inline-flex p-2 md:p-1.5 ${pathName === '/o-nas' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}>
                                O nás
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt" className={`inline-flex p-2 md:p-1.5 ${pathName === '/kontakt' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}>
                                Kontakt
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={`inline-flex p-2 md:p-1.5 ${pathName === '/blog' || pathName === '/blog-details' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}>
                                Blog
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/faq" className={`inline-flex p-2 md:p-1.5 ${pathName === '/faq' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}>
                                faq
                            </Link>
                        </li> */}
                    </ul>
                    <div className="flex flex-col items-center justify-center gap-4 border-t-2 border-white/10 pt-6 lg:flex-row lg:justify-between">
                        <ul className="flex flex-col items-center gap-4 font-semibold text-white md:flex-row lg:gap-7">
                            <li className="inline-flex items-center gap-2">
                                <span className="text-secondary">
                                    <TelePhoneIcon className="h-6 w-6" />
                                </span>
                                <a href="tel:+421915376588" className="hover:text-success-light">
                                    +(421) 915 376 588
                                </a>
                            </li>
                            <li className="inline-flex items-center gap-2">
                                <span className="text-secondary">
                                    <EmailIcon className="h-6 w-6" />
                                </span>
                                <a href="mailto:appstore@gmail.com" className="hover:text-success-light">
                                    leonlogic@leonlogic.com
                                </a>
                            </li>
                            <li className="inline-flex items-center gap-2">
                                <span className="text-secondary">
                                    <LocationIcon className="h-6 w-6" />
                                </span>
                               Kostolná 299, 991 26 Nenince
                            </li>
                        </ul>
                        <ul className="flex items-center gap-5 text-white lg:ms-auto">
                            <li>
                                <a href="#" className="inline-flex hover:text-secondary">
                                    <span className="sr-only">instagram</span>
                                    <InstagramIcon className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-flex hover:text-secondary">
                                    <span className="sr-only">twitter</span>
                                    <TwitterIcon className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-flex hover:text-secondary">
                                    <span className="sr-only">facebook</span>
                                    <FacebookIcon className="h-6 w-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-primary py-3">
                <div className="container">
                    <div className="flex flex-col items-center gap-4 text-center font-semibold text-gray dark:text-[#9199B5] md:flex-row md:text-left">
                        <a href="#" className="hover:text-secondary md:order-2 md:ms-auto">
                            Zásady používania súborov cookies
                        </a>
                        <p>
                            <Link href="/terms-and-conditions" className="hover:text-secondary">
                                Podmienky
                            </Link>
                            <span className="px-2 text-gray-dark dark:text-[#9199B5]/[0.12]">|</span>
                            <Link href="/privacy-policy" className="hover:text-secondary">
                                Ochrana súkromia
                            </Link>
                            <span className="px-2 text-gray-dark dark:text-[#9199B5]/[0.12]">|</span>©{new Date().getFullYear()} - OREM VENTURES s.r.o., ©2025 - Leonlogic, Všetky práva vyhradené.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
