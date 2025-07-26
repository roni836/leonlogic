'use client';

import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import UpDownArrowIcon from './Icons/UpDownArrowIcon';

const NoteManagementAccodian = () => {
    const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue: any) => {
            return oldValue === value ? '' : value;
        });
    };

    return (
        <div className="accordion-container sm:w-[563px]">
            <div className="ac mt-12 rounded-[15px] border-2 border-gray/20 bg-transparent dark:bg-[#9199B5]/[0.12] sm:px-5">
                <h3 className="ac-header p-0!">
                    <button
                        type="button"
                        className="ac-trigger relative flex! items-center justify-between gap-2 font-semibold! text-black dark:text-white! after:hidden! focus:text-current! py-5! rtl:text-right ltr:text-left"
                        onClick={() => togglePara('1')}
                    >
                        <div>Create And Save Your Notes With Multi-Media</div>
                        <div
                            className={`trigger-icon grid h-6 w-6 place-content-center text-black! dark:text-white! transition ${
                                active === '1' ? 'rotate-180' : ''
                            }`}
                        >
                            <UpDownArrowIcon />
                        </div>
                    </button>
                </h3>
                <div className="ac-panel">
                    <AnimateHeight duration={600} height={active === '1' ? 'auto' : 0}>
                        <p className="ac-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                        </p>
                    </AnimateHeight>
                </div>
            </div>
            <div className="ac mt-5 rounded-[15px] border-2 border-gray/20 bg-transparent dark:bg-[#9199B5]/[0.12] sm:px-5">
                <h3 className="ac-header p-0!">
                    <button
                        type="button"
                        className="ac-trigger relative flex! items-center justify-between gap-2 font-semibold! text-black dark:text-white! after:hidden! focus:text-current! py-5!"
                        onClick={() => togglePara('2')}
                    >
                        <div>Web Clipper Extension</div>
                        <div
                            className={`trigger-icon grid h-6 w-6 place-content-center text-black! dark:text-white! transition ${
                                active === '2' ? 'rotate-180' : ''
                            }`}
                        >
                            <UpDownArrowIcon />
                        </div>
                    </button>
                </h3>
                <div className="ac-panel">
                    <AnimateHeight duration={600} height={active === '2' ? 'auto' : 0}>
                        <p className="ac-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </AnimateHeight>
                </div>
            </div>
            <div className="ac mt-5 rounded-[15px] border-2 border-gray/20 bg-transparent dark:bg-[#9199B5]/[0.12] sm:px-5">
                <h3 className="ac-header p-0!">
                    <button
                        type="button"
                        className="ac-trigger relative flex! items-center justify-between gap-2 font-semibold! text-black dark:text-white! after:hidden! focus:text-current! py-5!"
                        onClick={() => togglePara('3')}
                    >
                        <div>Protect Your Note With Lock</div>
                        <div
                            className={`trigger-icon grid h-6 w-6 place-content-center text-black! dark:text-white! transition ${
                                active === '3' ? 'rotate-180' : ''
                            }`}
                        >
                            <UpDownArrowIcon />
                        </div>
                    </button>
                </h3>
                <div className="ac-panel">
                    <AnimateHeight duration={600} height={active === '3' ? 'auto' : 0}>
                        <p className="ac-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </AnimateHeight>
                </div>
            </div>
        </div>
    );
};

export default NoteManagementAccodian;
