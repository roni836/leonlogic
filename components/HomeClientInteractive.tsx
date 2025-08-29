'use client';

import { useState } from 'react';
import EmailIcon from '@/components/Icons/EmailIcon';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import WebsiteAuditModal from '@/components/WebsiteAuditModal';
import HeroReviewCarousel from '@/components/HeroReviewCarousel';

export default function HomeClientInteractive() {
    const [showAuditModal, setShowAuditModal] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted!');
        const form = e.target as HTMLFormElement;
        const emailInput = form.querySelector('input[type="text"]') as HTMLInputElement;
        const email = emailInput.value.trim();

        console.log('Email:', email);

        if (email && email.includes('@')) {
            console.log('Valid email, opening modal...');
            setUserEmail(email);
            setShowAuditModal(true);
            emailInput.value = '';
        } else {
            console.log('Invalid email');
        }
    };

    console.log('Modal state:', showAuditModal);

    return (
        <>
            <WebsiteAuditModal
                isOpen={showAuditModal}
                onClose={() => { setShowAuditModal(false); setUserEmail(''); }}
                userEmail={userEmail}
            />

            <div>
                <div className="mb-2.5 w-full max-w-[350px]">
                    <form onSubmit={handleEmailSubmit}>
                        <div className="relative">
                            <span className="absolute top-1/2 -translate-y-1/2 text-secondary ltr:left-4 rtl:right-4">
                                <EmailIcon className="h-6 w-6" />
                            </span>
                            <input
                                type="text"
                                placeholder="Zadajte váš email a začnite rásť"
                                className="form-input border-2 border-[#E1E6F5] dark:text-white dark:border-[#9199B5] pe-14 ps-12 placeholder:text-primary dark:placeholder:text-white peer"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute inset-y-0 my-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary peer-focus:opacity-100 opacity-0 duration-300 dark:bg-secondary font-bold uppercase text-white hover:bg-secondary/80 ltr:right-1.5 rtl:left-1.5"
                            >
                                <span className="sr-only">Submit</span>
                                <RightArrowIcon />
                            </button>
                        </div>
                    </form>
                </div>
                <HeroReviewCarousel />
            </div>
        </>
    );
}
