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
                        <div>Vývoj webstránok na mieru</div>
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
                            Vytvárame responzívne webstránky šité na mieru vašich obchodných potrieb. Od firemných prezentácií po komplexné webové aplikácie - moderné technológie a čistý kód garantovaný.
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
                        <div>E-commerce riešenia</div>
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
                           Vytvoríme e-shop, kde ľudia radi nakupujú. S integráciu platobnej brány, doručovaním a všetkým, čo k tomu patrí.
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
                        <div>Údržba a podpora</div>
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
                           Vaša webstránka zostáva rýchla, bezpečná a aktuálna. Pravidelné zálohy, bezpečnostné aktualizácie, správa obsahu a technická podpora zahrnuté v našich servisných balíkoch.
                        </p>
                    </AnimateHeight>
                </div>
            </div>
        </div>
    );
};

export default NoteManagementAccodian;
