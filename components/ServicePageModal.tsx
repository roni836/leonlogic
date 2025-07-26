'use client';

import { useRef } from 'react';

import PlayVideoIcon from './Icons/PlayVideoIcon';
import Modal from './Modal';

const ServicePageModal = () => {
    const dialog: any = useRef(null);
    return (
        <>
            <div className="mt-[50px] flex items-center gap-5">
                <button type="button" className="btn">
                    see review on playstore
                </button>
                <button
                    type="button"
                    aria-label="Email"
                    className="group flex h-12 w-12 items-center justify-center rounded-full border-2 hover:border-secondary dark:hover:border-secondary duration-200 border-[#9199B5]/10 dark:border-[#9199B5]/[0.12]"
                    onClick={() => dialog.current.open()}
                >
                    <span className="sr-only">Play</span>
                    <PlayVideoIcon className="text-success group-hover:text-secondary duration-200 dark:text-white w-6 h-6" />
                </button>
            </div>

            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 bg-transparent!"
                closeBtnClass="top-0! ltr:right-0! rtl:right-auto! rtl:left-0! text-white! text-3xl!"
                modal={false}
            >
                <div className="bg-black p-4! dark:bg-gray-dark">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/D0UnqGm_miA"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ServicePageModal;
