'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import WhiteVideoPlayIcon from './Icons/WhiteVideoPlayIcon';

const AboutUsModal = () => {
    const dialog: any = useRef(null);

    return (
        <div className="rounded-2xl overflow-hidden max-w-[700px] w-full relative">
            <Image src="/assets/images/our-mission.jpg" className="w-full h-full object-cover" alt="ourmission" width={681} height={486} />
            <span className="bg-primary/30 absolute inset-0"></span>
            <span
                className="bg-white/10 rounded-full p-5 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 sm:w-[120px] sm:h-[120px]"
                onClick={() => dialog.current.open()}
            >
                <button className="flex items-center justify-center bg-white/20 w-20 sm:w-[100px] h-20 sm:h-[100px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full">
                    <span className="sr-only">button</span>
                    <WhiteVideoPlayIcon />
                </button>
            </span>
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
        </div>
    );
};

export default AboutUsModal;
