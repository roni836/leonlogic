'use client';

import React, { useState } from 'react';

interface Option {
  label: string;
  description: string;
}

interface Step {
  title: string;
  options: Option[];
}

const steps: Step[] = [
  {
    title: 'What kind of website do you need?',
    options: [
      { label: 'Portfolio Website', description: 'Showcase your business.' },
      { label: 'E-Commerce', description: 'Product management and online ordering' },
      { label: 'E-Learning', description: 'Sell your knowledge with video courses.' },
      { label: 'Online Booking', description: 'Ideal for accommodations, transportation or restaurants.' },
    ],
  },
  {
    title: 'Choose add-ons for your online store',
    options: [
      { label: 'Card Pay', description: 'Secure, fast and easy way to pay online.' },
      { label: 'PDF Invoices', description: 'Automatically generate invoices for purchase orders.' },
      { label: 'Multicurrency Switcher', description: 'Change currency for global transactions.' },
      { label: 'Stock Manager', description: 'Easily manage product inventory.' },
      { label: 'Shipping', description: 'Customers can choose between DPD, Packeta or GLS.' },
    ],
  },
  {
    title: 'How many pages do you need?',
    options: [
      { label: 'Landing Page', description: 'All content on one page.' },
      { label: '0-5 Pages', description: 'Home page with up to 4 additional subpages.' },
      { label: '0-10 Pages', description: 'Home page with up to 9 additional subpages.' },
    ],
  },
  {
    title: 'Select the features to be added',
    options: [
      { label: 'Google Analytics', description: 'Track website traffic and performance.' },
      { label: 'Multi-language', description: 'Switch between languages. (translations not included)' },
      { label: 'Online Chat Box', description: 'Allow visitors to chat directly from your website.' },
      { label: 'Search Field', description: 'Quickly find pages, posts or products.' },
      { label: 'Contact Form', description: 'Simple name, phone, email and message entry form.' },
      { label: 'Advanced Form', description: 'Form with special fields or features.' },
    ],
  },
  {
    title: 'Get better Google search results',
    options: [
      { label: 'Homepage SEO', description: 'Improves search rankings for homepage.' },
      { label: 'I don\'t need this service', description: 'Your website will not be easily searchable in Google.' },
    ],
  },
  {
    title: 'You will probably need these...',
    options: [
      { label: 'Privacy Policy', description: 'Ensures that user data is protected.' },
      { label: 'Cookie Policy', description: 'Tracks user preferences and browsing behavior.' },
    ],
  },
  {
    title: 'When would you like to launch?',
    options: [
      { label: 'Delivery in 4-8 weeks', description: 'Standard delivery.' },
      { label: 'Delivery in 3-4 weeks', description: 'Expedited delivery.' },
      { label: 'Delivery in 1-2 weeks', description: 'Express delivery.' },
    ],
  },
];

export default function CalculatorPage() {
  const [step, setStep] = useState<number>(0);
  const [selected, setSelected] = useState<Record<number, number>>({});

  const handleSelect = (optionIdx: number) => {
    setSelected({ ...selected, [step]: optionIdx });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  // Placeholder price calculation
  const price = 1000 + Object.keys(selected).length * 900;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#f6f8fa] dark:bg-primary/10 pt-8 pb-16">
      <div className="container max-w-2xl mx-auto">
        <div className="w-full bg-white dark:bg-[#112C3C] border-2 border-[#9199B5]/[0.12] shadow-[0px_0px_80px_rgba(119,128,161,0.1)] rounded-2xl p-0 sm:p-10 mt-8">
          {step < steps.length ? (
            <>
              <h2 className="text-2xl font-extrabold mb-8 text-primary dark:text-white">{steps[step].title}</h2>
              <div className="flex flex-col gap-5 mb-8">
                {steps[step].options.map((opt, idx) => (
                  <button
                    key={opt.label}
                    className={`w-full flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 text-left shadow-sm text-primary dark:text-white font-semibold text-lg bg-white dark:bg-[#112C3C] relative
      ${selected[step] === idx
        ? 'border-[3px] border-secondary shadow-lg'
        : 'border-[3px] border-[#9199B5]/10 hover:border-secondary/60'}
    `}
                    style={{ boxShadow: selected[step] === idx ? '0 4px 32px 0 rgba(7,214,115,0.10)' : undefined }}
                    onClick={() => handleSelect(idx)}
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-lg mb-1">{opt.label}</span>
                      <span className="text-sm opacity-80 font-normal">{opt.description}</span>
                    </div>
                    <span className={`ml-auto w-7 h-7 rounded-[8px] border-2 flex items-center justify-center transition-all duration-300
      ${selected[step] === idx ? 'bg-secondary border-secondary' : 'border-[#9199B5]/30'}`}>{selected[step] === idx && <span className="w-4 h-4 bg-white rounded" />}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mt-8">
                <button onClick={prevStep} disabled={step === 0} className="btn bg-gray-200 dark:bg-primary/30 text-primary dark:text-white font-semibold disabled:opacity-50">
                  Back
                </button>
                <div className="text-right">
                  <div className="text-gray-500 text-sm mb-1">Estimated price (excl. VAT)</div>
                  <div className="text-3xl font-bold text-primary dark:text-white">{price.toLocaleString('en-US')} €</div>
                </div>
                <button onClick={nextStep} className="btn">
                  {step === steps.length - 1 ? 'Last Step' : 'Continue'}
                </button>
              </div>
            </>
          ) : (
            <form className="flex flex-col gap-4 mt-4">
              <h2 className="text-2xl font-bold mb-2 text-primary dark:text-white">Get your free quote</h2>
              <input className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5" placeholder="Name *" required />
              <input className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5" placeholder="Company" />
              <input className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5" placeholder="Email *" required type="email" />
              <input className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5" placeholder="Phone" />
              <textarea className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5 min-h-[100px]" placeholder="Message" />
              <label className="flex items-center gap-2 text-sm mt-2">
                <input type="checkbox" required className="accent-secondary" />
                Yes, I agree to the <a href="/privacy-policy" className="underline text-secondary">Privacy Policy</a>.
              </label>
              <button type="submit" className="btn w-full sm:w-auto sm:px-20 mt-5">Send Now</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 