'use client';

import { useState } from 'react';

const ContactUsForm = () => {
    const [placeholder, setPlaceholder] = useState('First Name');
    const [placeholder1, setPlaceholder1] = useState('Last Name');
    const [placeholder2, setPlaceholder2] = useState('Email');
    const [placeholder3, setPlaceholder3] = useState('Subject');
    const [placeholder4, setPlaceholder4] = useState('Type your messages');
    return (
        <form
            action=""
            className="bg-white dark:bg-[#112C3C] border-2 border-[#9199B5]/[0.12] shadow-[0px_0px_80px_rgba(119,128,161,0.1)] rounded-2xl pt-5 sm:pt-10 pb-5 sm:pb-8 px-4 sm:px-8"
        >
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-7">
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder={placeholder}
                        onFocus={() => setPlaceholder('')}
                        onBlur={() => setPlaceholder('First Name')}
                        className="border-2 border-[#9199B5]/[0.12] dark:bg-[#112C3C] p-5 rounded-2xl text-base font-semibold focus:border-secondary outline-hidden w-full peer duration-700 leading-5"
                    />
                    <label
                        htmlFor=""
                        className="absolute -top-3 bg-white dark:bg-[#112C3C] dark:text-white px-2 font-semibold ltr:left-6 rtl:right-6 text-success opacity-0 peer-focus:opacity-100 duration-300"
                    >
                        First Name
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder={placeholder1}
                        onFocus={() => setPlaceholder1('')}
                        onBlur={() => setPlaceholder1('Last Name')}
                        className="border-2 border-[#9199B5]/[0.12] dark:bg-[#112C3C] p-5 rounded-2xl text-base font-semibold focus:border-secondary outline-hidden w-full peer duration-700 leading-5"
                    />
                    <label
                        htmlFor=""
                        className="absolute -top-3 bg-white dark:bg-[#112C3C] dark:text-white px-2 font-semibold ltr:left-6 rtl:right-6 text-success opacity-0 peer-focus:opacity-100 duration-300"
                    >
                        Last Name
                    </label>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-7 mt-5 sm:mt-8">
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder={placeholder2}
                        onFocus={() => setPlaceholder2('')}
                        onBlur={() => setPlaceholder2('Email')}
                        className="border-2 border-[#9199B5]/[0.12] dark:bg-[#112C3C] p-5 rounded-2xl text-base font-semibold focus:border-secondary outline-hidden w-full peer duration-700 leading-5"
                    />
                    <label
                        htmlFor=""
                        className="absolute -top-3 bg-white dark:bg-[#112C3C] dark:text-white px-2 font-semibold ltr:left-6 rtl:right-6 text-success opacity-0 peer-focus:opacity-100 duration-300"
                    >
                        Email ID
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder={placeholder3}
                        onFocus={() => setPlaceholder3('')}
                        onBlur={() => setPlaceholder3('Subject')}
                        className="border-2 border-[#9199B5]/[0.12] dark:bg-[#112C3C] p-5 rounded-2xl text-base font-semibold focus:border-secondary outline-hidden w-full peer duration-700 leading-5"
                    />
                    <label
                        htmlFor=""
                        className="absolute -top-3 bg-white dark:bg-[#112C3C] dark:text-white px-2 font-semibold ltr:left-6 rtl:right-6 text-success opacity-0 peer-focus:opacity-100 duration-300"
                    >
                        Subject
                    </label>
                </div>
            </div>
            <div className="mt-5 sm:mt-8">
                <div className="relative">
                    <textarea
                        name="name"
                        placeholder={placeholder4}
                        onFocus={() => setPlaceholder4('')}
                        onBlur={() => setPlaceholder4('Type your messages')}
                        rows={5}
                        className="border-2 border-[#9199B5]/[0.12] dark:bg-[#112C3C] p-5 rounded-2xl text-base font-semibold focus:border-secondary outline-hidden w-full peer duration-700 leading-5"
                    />
                    <label
                        htmlFor=""
                        className="absolute -top-3 bg-white dark:bg-[#112C3C] dark:text-white px-2 font-semibold ltr:left-6 rtl:right-6 text-success opacity-0 peer-focus:opacity-100 duration-300"
                    >
                        Type your messages
                    </label>
                </div>
            </div>
            <button type="button" className="btn mt-5 sm:mt-8 w-full sm:w-auto sm:px-20">
                send message
            </button>
        </form>
    );
};

export default ContactUsForm;
