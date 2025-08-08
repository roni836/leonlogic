'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface Option {
  label: string;
  description: string;
  price?: number;
}

interface Step {
  title: string;
  options: Option[];
}

const steps: Step[] = [
  {
    title: 'What kind of website do you need?',
    options: [
      { label: 'Portfolio Website', description: 'Showcase your business.', price: 2500 },
      { label: 'E-Commerce', description: 'Product management and online ordering', price: 1500 },
      { label: 'E-Learning', description: 'Sell your knowledge with video courses.', price: 1200 },
      { label: 'Online Booking', description: 'Ideal for accommodations, transportation or restaurants.', price: 1500 },
    ],
  },
  {
    title: 'How many pages do you need?',
    options: [
      { label: 'Landing Page', description: 'All content on one page.', price: 1200 },
      { label: '0-5 Pages', description: 'Home page with up to 4 additional subpages.', price: 1500 },
      { label: '0-10 Pages', description: 'Home page with up to 9 additional subpages.', price: 2000 },
    ],
  },
  {
    title: 'Select the features to be added',
    options: [
      { label: 'Google Analytics', description: 'Track website traffic and performance.', price: 300 },
      { label: 'Multi-language', description: 'Switch between languages. (translations not included)', price: 500 },
      { label: 'Online Chat Box', description: 'Allow visitors to chat directly from your website.', price: 400 },
      { label: 'Search Field', description: 'Quickly find pages, posts or products.' },
      { label: 'Contact Form', description: 'Simple name, phone, email and message entry form.', price: 200 },
      { label: 'Advanced Form', description: 'Form with special fields or features.', price: 400 },
    ],
  },
  {
    title: 'Get better Google search results',
    options: [
      { label: 'Homepage SEO', description: 'Improves search rankings for homepage.', price: 300 },
      { label: 'I don\'t need this service', description: 'Your website will not be easily searchable in Google.', price: 1500 },
    ],
  },
  {
    title: 'You will probably need these...',
    options: [
      { label: 'Privacy Policy', description: 'Ensures that user data is protected.', price: 200 },
      { label: 'Cookie Policy', description: 'Tracks user preferences and browsing behavior.', price: 200 },
    ],
  },
  {
    title: 'When would you like to launch?',
    options: [
      { label: 'Delivery in 4-8 weeks', description: 'Standard delivery.', price: 100 },
      { label: 'Delivery in 3-4 weeks', description: 'Expedited delivery.', price: 300 },
      { label: 'Delivery in 1-2 weeks', description: 'Express delivery.', price: 500 },
    ],
  },
];

const ecommerceAddons = [
  { label: 'Card Pay', description: 'Secure, fast and easy way to pay online.', price: 300 },
  { label: 'PDF Invoices', description: 'Automatically generate invoices for purchase orders.', price: 200 },
  { label: 'Multicurrency Switcher', description: 'Change currency for global transactions.', price: 250 },
  { label: 'Stock Manager', description: 'Easily manage product inventory.', price: 400 },
  { label: 'Shipping', description: 'Customers can choose between DPD, Packeta or GLS.', price: 300 },
];

export default function CalculatorModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<number>(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [addons, setAddons] = useState<number[]>([]);

  if (!open) return null;

  const handleSelect = (optionIdx: number) => {
    setSelected({ ...selected, [step]: optionIdx });
  };

  const handleAddonToggle = (idx: number) => {
    setAddons((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  // Actual price calculation based on selections
  const price = Object.entries(selected).reduce((total, [stepIndex, optionIndex]) => {
    const stepIdx = parseInt(stepIndex, 10);
    const option = steps[stepIdx].options[optionIndex];
    if (option && option.price) {
      total += option.price;
    }
    return total;
  }, 0) + addons.reduce((total, addonIdx) => {
    const addon = ecommerceAddons[addonIdx];
    if (addon && addon.price) {
      total += addon.price;
    }
    return total;
  }, 0);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-lg">
      <div className="relative w-full max-w-2xl mx-auto bg-white/90 dark:bg-primary/80 backdrop-blur-lg rounded-3xl shadow-2xl p-0 sm:p-10 mt-8 border border-white/30 dark:border-[#9199B5]/30 flex flex-col"
        style={{ maxHeight: '90vh' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-2xl text-primary dark:text-white hover:text-secondary">×</button>
        <div className="overflow-y-auto max-h-[80vh] pt-2 hide-scrollbar px-4 pb-32">
          {/* Modal content starts here */}
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
                {/* Show add-ons if E-Commerce, E-Learning, or Online Booking is selected */}
                {step === 0 && [1, 2, 3].includes(selected[0]) && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4 text-primary dark:text-white">Choose add-ons for your online store</h3>
                    <div className="flex flex-col gap-4">
                      {ecommerceAddons.map((addon, idx) => (
                        <label
                          key={addon.label}
                          className={`w-full flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 text-left shadow-sm text-primary dark:text-white font-semibold text-lg bg-white dark:bg-[#112C3C] relative cursor-pointer
                          ${addons.includes(idx)
                              ? 'border-[3px] border-secondary shadow-lg'
                              : 'border-[3px] border-[#9199B5]/10 hover:border-secondary/60'}
                        `}
                          style={{ boxShadow: addons.includes(idx) ? '0 4px 32px 0 rgba(7,214,115,0.10)' : undefined }}
                        >
                          <input
                            type="checkbox"
                            checked={addons.includes(idx)}
                            onChange={() => handleAddonToggle(idx)}
                            className="accent-secondary w-6 h-6 rounded-[8px] border-2 border-[#9199B5]/30 mr-4"
                          />
                          <div className="flex flex-col">
                            <span className="font-bold text-lg mb-1">{addon.label}</span>
                            <span className="text-sm opacity-80 font-normal">{addon.description}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Sticky price and button area */}
              <div className="absolute left-0 bottom-0 w-full bg-white dark:bg-primary/80 rounded-b-3xl px-8 py-8 flex items-center justify-between shadow-[0_-2px_16px_0_rgba(0,0,0,0.04)] border-t border-[#e5e7eb] dark:border-[#9199B5]/20 z-20">
                {step > 0 ? (
                  <button onClick={prevStep} disabled={step === 0} className="btn bg-gray-200 dark:bg-primary/30 text-primary dark:text-white font-semibold disabled:opacity-50">
                    Back
                  </button>
                ) : <div />}
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
                Yes, I agree to the <Link href="/privacy-policy" className="underline text-secondary">Privacy Policy</Link>.
              </label>
              <button type="submit" className="btn w-full sm:w-auto sm:px-20 mt-5">Send Now</button>
            </form>
          )}
          {/* Modal content ends here */}
        </div>
      </div>
    </div>
  );
} 