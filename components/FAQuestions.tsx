'use client';

import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import MinusIcon from './Icons/MinusIcon';
import PlusIcon from './Icons/PlusIcon';

const FAQuestions = () => {
    const [active, setActive] = useState<any>(1);

    const queries = [
        {
            id: 1,
            question: 'Why do I need free Instagram followers?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 2,
            question: 'How long does it take to receive my free Instagram followers?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 3,
            question: 'Are these free Instagram followers real?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 4,
            question: 'How do I keep my free Instagram followers?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 5,
            question: 'Is it safe to use your free service?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 6,
            question: 'Why is this service free?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 7,
            question: 'How do I make money on my Instagram?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: 8,
            question: 'What if I need to contact you about my account?',
            answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
    ];

    const handleAccordionClick = (id: number) => {
        setActive((prevActive: number) => (prevActive === id ? null : id));
    };
    return (
        <div className="accordion-container grid gap-7 md:grid-cols-2" itemScope itemType="https://schema.org/FAQPage">
            <div className="space-y-5">
                {queries.map((faq: any, i: number) => {
                    return (
                        i % 2 == 0 && (
                            <div
                                className="ac mt-0 rounded-2xl bg-white dark:bg-[#9199B5]/[0.12] border-none"
                                key={faq.id}
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >
                                <h3 className="ac-header p-0!" itemProp="name">
                                    <button
                                        type="button"
                                        className="ac-trigger after:hidden rtl:text-right! dark:text-white! p-5! text-left"
                                        onClick={() => handleAccordionClick(faq.id)}
                                    >
                                        {faq.question}
                                        <div className="trigger-icon ms-auto grid h-6 w-6 shrink-0 place-content-center">
                                            {active === faq.id ? (
                                                <MinusIcon className="minus-icon h-3 w-3 text-[#FB5D70]" />
                                            ) : (
                                                <PlusIcon className="plus-icon h-3 w-3" />
                                            )}
                                        </div>
                                    </button>
                                </h3>
                                <AnimateHeight duration={600} height={active === faq.id ? 'auto' : 0}>
                                    <div className="ac-panel" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="px-5 pb-6 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]!" itemProp="text">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        )
                    );
                })}
            </div>
            <div className="space-y-5">
                {queries.map((faq: any, i: number) => {
                    return (
                        i % 2 !== 0 && (
                            <div
                                className="ac mt-0 rounded-2xl bg-white dark:bg-[#9199B5]/[0.12] border-none"
                                key={faq.id}
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >
                                <h3 className="ac-header p-0!" itemProp="name">
                                    <button
                                        type="button"
                                        className="ac-trigger after:hidden rtl:text-right dark:text-white! p-5! text-left"
                                        onClick={() => handleAccordionClick(faq.id)}
                                    >
                                        {faq.question}
                                        <div className="trigger-icon ms-auto grid h-6 w-6 shrink-0 place-content-center">
                                            {active === faq.id ? (
                                                <MinusIcon className="minus-icon h-3 w-3 text-[#FB5D70]" />
                                            ) : (
                                                <PlusIcon className="plus-icon h-3 w-3" />
                                            )}
                                        </div>
                                    </button>
                                </h3>
                                <AnimateHeight duration={600} height={active === faq.id ? 'auto' : 0}>
                                    <div className="ac-panel" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="px-5 pb-6 text-sm font-semibold leading-6 text-gray dark:text-[#9199B5]!" itemProp="text">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default FAQuestions;
