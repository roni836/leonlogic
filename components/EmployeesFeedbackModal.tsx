'use client';

import Image from 'next/image';
import { useRef } from 'react';
import Modal from './Modal';
import GreenVideoPlayIcon from './Icons/GreenVideoPlayIcon';

const EmployeesFeedbackModal = () => {
    const dialog: any = useRef(null);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-8 sm:mt-12 gap-5 sm:gap-8">
            <div className="rounded-2xl overflow-hidden relative group" data-aos="flip-left" data-aos-duration="1000">
                <div className="group-hover:bg-secondary/10 bg-[#9199B5]/[0.12] rounded-2xl duration-500">
                    <Image src="/assets/images/developer-2.png" className="w-full h-full object-cover" alt="developer-2" width={282} height={271} />
                </div>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-white text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex duration-500"
                    onClick={() => dialog.current.open()}
                >
                    <span className="sr-only">Play</span>
                    <GreenVideoPlayIcon />
                </button>
            </div>
            <div className="rounded-2xl overflow-hidden relative group" data-aos="flip-left" data-aos-duration="1000">
                <div className="group-hover:bg-secondary/10 bg-[#9199B5]/[0.12] rounded-2xl duration-500">
                    <Image src="/assets/images/developer-1.png" className="w-full h-full object-cover" alt="developer-1" width={282} height={266} />
                </div>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-white text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex duration-500"
                    onClick={() => dialog.current.open()}
                >
                    <span className="sr-only">Play</span>
                    <GreenVideoPlayIcon />
                </button>
            </div>
            <div className="rounded-2xl overflow-hidden relative group" data-aos="flip-left" data-aos-duration="1000">
                <div className="group-hover:bg-secondary/10 bg-[#9199B5]/[0.12] rounded-2xl duration-500">
                    <Image src="/assets/images/developer-6.png" className="w-full h-full object-cover" alt="developer-6" width={282} height={269} />
                </div>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-white text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex duration-500"
                    onClick={() => dialog.current.open()}
                >
                    <span className="sr-only">Play</span>
                    <GreenVideoPlayIcon />
                </button>
            </div>
            <div className="rounded-2xl overflow-hidden relative group" data-aos="flip-left" data-aos-duration="1000">
                <div className="group-hover:bg-secondary/10 bg-[#9199B5]/[0.12] rounded-2xl duration-500">
                    <Image src="/assets/images/developer-3.png" className="w-full h-full object-cover" alt="developer-3" width={282} height={270} />
                </div>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-white text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex duration-500"
                    onClick={() => dialog.current.open()}
                >
                    <span className="sr-only">Play</span>
                    <GreenVideoPlayIcon />
                </button>
            </div>
            <div className="rounded-2xl overflow-hidden relative group" data-aos="flip-left" data-aos-duration="1000">
                <div className="group-hover:bg-secondary/10 bg-[#9199B5]/[0.12] rounded-2xl duration-500">
                    <Image src="/assets/images/developer-4.png" className="w-full h-full object-cover" alt="developer-4" width={282} height={266} />
                </div>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-white text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex duration-500"
                    onClick={() => dialog.current.open()}
                >
                    <span className="sr-only">Play</span>
                    <GreenVideoPlayIcon />
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
        </div>
    );
};

export default EmployeesFeedbackModal;
