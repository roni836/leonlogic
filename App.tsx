'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@/store/index';
import { toggleDirection, toggleTheme } from '@/store/themeConfigSlice';
import ScreenLoaderIcon from '@/components/Icons/ScreenLoaderIcon';
import AOS from 'aos';
import WhatsAppButton from './components/WhatsAppButton';

function App({ children }: PropsWithChildren) {
    const [showLoader, setShowLoader] = useState(true);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleTheme(themeConfig.theme));
        dispatch(toggleDirection(themeConfig.direction));
    }, [dispatch, themeConfig.direction, themeConfig.theme]);

    useEffect(() => {
        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            setTimeout(() => {
                setShowLoader(false);
            }, 300);
        }
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        setOnScroll();
        window.onscroll = function () {
            setOnScroll();
        };
    }, []);

    const setOnScroll = () => {
        let scrollpos = window.scrollY;
        if (scrollpos > 0) {
            document.querySelector('header')?.classList.add('sticky-header');
            document.getElementById('scrollToTopBtn')?.classList.remove('hidden');
        } else {
            document.querySelector('header')?.classList.remove('sticky-header');
            document.getElementById('scrollToTopBtn')?.classList.add('hidden');
        }
    };

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {showLoader && (
                <div className="screen_loader fixed inset-0 z-60 grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
                    <ScreenLoaderIcon />
                </div>
            )}

            {children}

            <div id="scrollToTopBtn" className="group fixed bottom-5 z-10 animate-bounce ltr:right-5 rtl:left-5" onClick={scrollToTop}>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-primary dark:bg-secondary text-white transition duration-300 group-hover:bg-secondary dark:group-hover:bg-primary flex"
                >
                    <span className="sr-only">scroll to top</span>
                    <span className="h-6 w-6 transition">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-full w-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                        </svg>
                    </span>
                </button>
            </div>
            <WhatsAppButton />
        </>
    );
}

App.displayName = 'App';
export default App;
