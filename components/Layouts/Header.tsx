'use client';

import { usePathname } from 'next/navigation';
import { IRootState } from '@/store';
import { toggleDirection, toggleTheme } from '@/store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';
import CloseIcon from '../Icons/CloseIcon';
import ToggleDirectionIcon from '../Icons/ToggleDirectionIcon';
import SubMenuIcon from '../Icons/SubMenuIcon';
import SearchIcon from '../Icons/SearchIcon';
import Link from 'next/link';
import ServiceCard from '../ServiceCard';
import { useEffect, useRef, useState } from 'react';
import CalculatorModal from '../CalculatorModal';
import LeonlogicIcon from './LeonlogicIcon';
import { supabase } from '@/libs/supabase';


interface ServiceCategory {
    id: string;
    title: string;
    created_at: string;
    updated_at: string;
}

interface Service {
    id: string;
    title: string;
    description: string;
    service_category_id: string;
    service_categories?: ServiceCategory;
    icon_path?: string;
    icon_alt?: string;
    slug?: string;
    link_url?: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface ServiceColumn {
    id: string;
    title: string;
    services: Service[];
}

const Header = () => {
    const dispatch = useDispatch();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const toggleMenu = () => {
        const menus = document.querySelector('.menus');
        const overlay = document.querySelector('.overlay');
        menus?.classList.toggle('open-menus');
        overlay?.classList.toggle('hidden');
    };

    const pathName = usePathname();
    const [showServices, setShowServices] = useState(false);
    const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const serviceMenuRef = useRef<HTMLLIElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [showCalculator, setShowCalculator] = useState(false);
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

    const [serviceColumns, setServiceColumns] = useState<ServiceColumn[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const { data, error } = await supabase
                    .from('services')
                    .select(
                        `*,
                        service_categories (
                            id,
                            title,
                            created_at,
                            updated_at
                        )`
                    )
                    .eq('is_active', true)
                    .order('sort_order', { ascending: true });

                if (error) {
                    console.log('Error fetching services:', error);
                    return;
                }

                // Group services by category
                const servicesByCategory = new Map<string, ServiceColumn>();
                
                data?.forEach((service: Service) => {
                    const categoryId = service.service_category_id;
                    const categoryTitle = service.service_categories?.title || 'Other';
                    
                    if (!servicesByCategory.has(categoryId)) {
                        servicesByCategory.set(categoryId, {
                            id: categoryId,
                            title: categoryTitle,
                            services: []
                        });
                    }
                    
                    servicesByCategory.get(categoryId)?.services.push(service);
                });

                // Convert to array and sort by category title
                const columns = Array.from(servicesByCategory.values())
                    .sort((a, b) => a.title.localeCompare(b.title));

                setServiceColumns(columns);
            } catch (err) {
                console.log('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const handleServicesEnter = () => {
        if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
        setShowServices(true);
    };
    const handleServicesLeave = () => {
        servicesTimeout.current = setTimeout(() => setShowServices(false), 120);
    };
    const handleServicesClick = () => setShowServices((v) => !v);
    useEffect(() => {
        return () => { if (servicesTimeout.current) clearTimeout(servicesTimeout.current); };
    }, []);

    return (
        <header ref={headerRef} className="fixed inset-x-0 top-4 z-20 duration-500 md:top-[30px]">
            <div ref={containerRef} className="container duration-300 relative">
                <div className="flex items-center gap-10 rounded-full bg-primary dark:bg-white p-4 lg:py-0 2xl:gap-24 2xl:px-7">
                    <Link href="/" className="relative top-1">
                        <Image src="/Leonlogic-light.svg" alt="Logo" width={160} height={54} className="w-40 md:max-w-none" />
                    </Link>
                    <div onClick={toggleMenu} className="overlay fixed inset-0  hidden bg-black/60 lg:hidden"></div>
                    <div className="menus shrink-0 lg:block fixed h-screen lg:h-auto inset-y-0 rtl:-left-full ltr:-right-full lg:static bg-primary lg:bg-transparent w-80 lg:w-auto z-30 lg:z-auto duration-300 rtl:px-5 lg:rtl:px-0 ltr:px-5 lg:ltr:px-0 pt-24 lg:pt-0 overflow-y-auto">
                        <ul className="lg:flex gap-6 text-lg font-semibold text-white dark:text-white dark:lg:text-black relative">
                            <li onClick={toggleMenu}>
                                <Link
                                    href="/"
                                    className={`inline-flex px-1.5 py-4 lg:py-8 w-full  ${pathName === '/' ? 'text-secondary font-bold' : 'hover:text-secondary'}`}
                                >
                                    Domov
                                </Link>
                            </li>
                            <li
                                className="relative"
                                ref={serviceMenuRef}
                                onMouseEnter={handleServicesEnter}
                                onMouseLeave={handleServicesLeave}
                            >
                                <button
                                    type="button"
                                    className={`inline-flex px-1.5 py-4 lg:py-8 w-full items-center gap-1 ${pathName === '/service' || pathName === '/services-detail' ? 'text-secondary font-bold' : 'hover:text-secondary'}`}
                                    onClick={() => setMobileServiceOpen((v) => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={mobileServiceOpen}
                                >
                                    Služby
                                    <svg className={`ml-1 w-4 h-4 transition-transform duration-200 lg:hidden ${mobileServiceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                {/* Mobile dropdown for services */}
                                {mobileServiceOpen && (
                                  <ul className="lg:hidden pl-6 pb-2 space-y-2 text-base">
                                    {serviceColumns.map((category) => (
                                      <li key={category.id}>
                                        <Link href={`/service?category=${category.id}`} className="block py-1 font-semibold text-secondary">
                                          {category.title}
                                        </Link>
                                        <ul className="pl-4 space-y-1 mt-1">
                                          {category.services.map((service) => (
                                            <li key={service.id}>
                                              <Link href={`/services-detail/${service.id}`} className="block py-1 text-sm">
                                                {service.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                            <li onClick={toggleMenu}>
                                <Link
                                    href="/portfolio"
                                    className={`inline-flex px-1.5 py-4 lg:py-8 w-full ${pathName === '/portfolio' || pathName === '/portfolio-detail' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                        }`}
                                >
                                    Portfólio
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link
                                    href="/about-us"
                                    className={`inline-flex px-1.5 py-4 lg:py-8 w-full ${pathName === '/about-us' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                        }`}
                                >
                                    O nás
                                </Link>
                            </li>
                            {/* <li onClick={toggleMenu}>
                                <Link
                                    href="/career"
                                    className={`inline-flex px-1.5 py-4 lg:py-8 w-full ${pathName === '/career' ? 'text-secondary font-bold' : 'hover:text-secondary'
                                        }`}
                                >
                                    Career
                                </Link>
                            </li> */}

                            <li>
                                <button onClick={toggleMenu} type="button" className="lg:hidden absolute -top-20 rtl:left-5 ltr:right-5">
                                    <span className="sr-only">Your Company</span>
                                    <CloseIcon className="h-6 w-6 text-white" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="ms-auto flex gap-2.5">
                        {/* <button
                            type="button"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/10 dark:border-[#9199B5]/[0.12] ltr:text-white dark:text-black duration-500 hover:bg-white/10 md:h-12 md:w-12 rtl:text-secondary rtl:border-secondary dark:rtl:text-white dark:rtl:bg-primary dark:hover:bg-black/10"
                            onClick={() => dispatch(toggleDirection(`${themeConfig.direction === 'rtl' ? 'ltr' : 'rtl'}`))}
                        >
                            <span className="sr-only">Switch direction</span>
                            <ToggleDirectionIcon className="h-6 w-4" />
                        </button>
                        <button
                            type="button"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/10 dark:border-[#9199B5]/[0.12] text-white dark:text-black duration-500 hover:bg-white/10 dark:hover:bg-black/10 md:h-12 md:w-12"
                            onClick={() => dispatch(toggleTheme(`${themeConfig.theme === 'light' ? 'dark' : 'light'}`))}
                        >
                            <span className="sr-only">Theme mode</span>
                            <MoonIcon className="dark-mode-btn dark:hidden h-5 w-5" />
                            <SunIcon className="light-mode-btn hidden dark:block h-5 w-5" />
                        </button> */}
                        <button
                            type="button"
                            onClick={() => setShowCalculator(true)}
                            className="btn hidden lg:inline-flex"
                        >
                            Získať bezplatnú cenovú ponuku
                        </button>
                        <button
                            type="button"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/10 bg-secondary text-white duration-500 md:h-12 md:w-12 lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <span className="sr-only">Menu</span>
                            <SubMenuIcon className="h-4 w-6 text-white" />
                        </button>
                        {/* <form className="hidden md:block">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search what you like..."
                                    className="form-input border-white/10 dark:border-[#9199B5]/[0.12] py-3 pl-12 text-sm text-white dark:text-primary placeholder:text-white dark:placeholder:text-black"
                                />
                                <button type="button" className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary hover:opacity-70">
                                    <SearchIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </form> */}
                    </div>
                </div>
                {showServices && (
                    <div
                        className="absolute z-50 bg-white/90 dark:bg-primary/70 shadow-2xl border border-white/30 dark:border-[#9199B5]/30 backdrop-blur-lg pt-10 pb-10 px-2 sm:px-6 flex flex-wrap gap-6 justify-center rounded-3xl transition-all duration-200 w-full hidden lg:block"
                        style={{
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            maxWidth: '72rem',
                            overflowY: 'auto',
                            maxHeight: '80vh',
                        }}
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                    >
                        <div className="flex flex-col w-full gap-8 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-0 max-w-7xl mx-auto">
                            {loading ? (
                                <div className="col-span-full text-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary mx-auto"></div>
                                    <p className="mt-2 text-primary dark:text-white">Načítavam služby...</p>
                                </div>
                            ) : serviceColumns.length === 0 ? (
                                <div className="col-span-full text-center py-8">
                                    <p className="text-primary dark:text-white">Žiadne služby nie sú dostupné</p>
                                </div>
                            ) : (
                                serviceColumns.map((col, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-start w-full px-4 py-4 sm:px-8 sm:py-2 ${idx !== 0 ? 'sm:border-l border-gray-100 dark:border-[#9199B5]/20' : ''}`}
                                >
                                    <div className="mb-3">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-success-light/[0.08] dark:bg-secondary/[0.08] px-5 py-2 text-lg font-extrabold uppercase text-success dark:text-secondary mb-2">
                                            <LeonlogicIcon className="w-6 h-6 text-success dark:text-secondary" />
                                            {col.title}
                                        </span>
                                    </div>
                                    <hr className="w-full border-t border-gray-100 dark:border-[#9199B5]/20 mb-5 hidden sm:block" />
                                    <ul className="space-y-2 w-full">
                                        {col.services.map((service, i) => (
                                            <li
                                                key={service.id}
                                                className="text-lg font-normal text-primary dark:text-white hover:text-secondary hover:underline cursor-pointer transition-colors duration-150 px-1 py-1 rounded"
                                            >
                                                <Link href={`/services-detail/${service.slug}`}>
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                            )}
                        </div>
                    </div>
                )}
                <CalculatorModal open={showCalculator} onClose={() => setShowCalculator(false)} />
            </div>
        </header>
    );
};

export default Header;
