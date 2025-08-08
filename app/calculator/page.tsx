'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';
import Link from 'next/link';

interface Option {
  label: string;
  description: string;
  price?: number; // Optional price for options
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

export default function CalculatorPage() {
  const [step, setStep] = useState<number>(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    privacyConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [leadInfo, setLeadInfo] = useState({
    ipAddress: '',
    userAgent: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: ''
  });

  useEffect(() => {
    // Capture user agent
    setLeadInfo(prev => ({
      ...prev,
      userAgent: navigator.userAgent
    }));

    // Capture UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    setLeadInfo(prev => ({
      ...prev,
      utmSource: urlParams.get('utm_source') || '',
      utmMedium: urlParams.get('utm_medium') || '',
      utmCampaign: urlParams.get('utm_campaign') || ''
    }));

    // Get IP address (we'll get this from the server)
    getIPAddress();
  }, []);

  const getIPAddress = async () => {
    try {
      // Use a public IP service to get the client's IP
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setLeadInfo(prev => ({
        ...prev,
        ipAddress: data.ip
      }));
    } catch (error) {
      console.log('Could not fetch IP address:', error);
      // Fallback: try another service
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        setLeadInfo(prev => ({
          ...prev,
          ipAddress: data.ip
        }));
      } catch (fallbackError) {
        console.log('Could not fetch IP address from fallback service:', fallbackError);
      }
    }
  };

  const handleSelect = (optionIdx: number) => {
    setSelected({ ...selected, [step]: optionIdx });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  // Calculate price dynamically from steps data
  const calculatePrice = () => {
    let totalPrice = 0; // Start from zero or any base price if needed

    Object.keys(selected).forEach(stepKey => {
      const stepIndex = parseInt(stepKey);
      const optionIndex = selected[stepIndex];
      const selectedOption = steps[stepIndex]?.options[optionIndex];

      if (selectedOption && selectedOption.price) {
        totalPrice += selectedOption.price;
      }
    });

    return totalPrice;
  };


  const price = calculatePrice();

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getSelectionsData = () => {
    const selections: Record<string, any> = {};

    Object.keys(selected).forEach(stepKey => {
      const stepIndex = parseInt(stepKey);
      const optionIndex = selected[stepIndex];
      const selectedOption = steps[stepIndex].options[optionIndex];

      switch (stepIndex) {
        case 0:
          selections.website_type = selectedOption.label;
          break;
        case 1:
          if (!selections.addons) selections.addons = [];
          selections.addons.push(selectedOption.label);
          break;
        case 2:
          selections.pages = selectedOption.label;
          break;
        case 3:
          if (!selections.features) selections.features = [];
          selections.features.push(selectedOption.label);
          break;
        case 4:
          selections.seo = selectedOption.label;
          break;
        case 5:
          if (!selections.legal) selections.legal = [];
          selections.legal.push(selectedOption.label);
          break;
        case 6:
          selections.delivery = selectedOption.label;
          break;
      }
    });

    return selections;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      alert('Please agree to the Privacy Policy');
      return;
    }

    // Validate required fields
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const selections = getSelectionsData();

      // Create the submission data with contact information and selections
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        phone: formData.phone.trim() || null,
        message: formData.message.trim() || null,
        selections: selections,
        estimated_price: price,
        privacy_consent: formData.privacyConsent,
        status: 'new',
        // Lead tracking information
        ip_address: leadInfo.ipAddress || null,
        user_agent: leadInfo.userAgent || null,
        utm_source: leadInfo.utmSource || null,
        utm_medium: leadInfo.utmMedium || null,
        utm_campaign: leadInfo.utmCampaign || null,
        source: 'calculator'
      };

      console.log('Submitting calculator result with contact data:', submissionData);

      const { error } = await supabase
        .from('calculator_results')
        .insert(submissionData);

      if (error) {
        console.error('Error saving calculator result:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          privacyConsent: false
        });
        setSelected({});
        setStep(0);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#f6f8fa] dark:bg-primary/10 pt-8 pb-16">
      <div className="container max-w-2xl mx-auto">
        <div className="w-full bg-white dark:bg-[#112C3C] border-2 border-[#9199B5]/[0.12] shadow-[0px_0px_80px_rgba(119,128,161,0.1)] rounded-2xl p-0 sm:p-10 mt-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-4 text-primary dark:text-white">Thank You!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your quote request has been submitted successfully. We`ll get back to you within 24 hours with a detailed proposal.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">Your Quote Summary:</h3>
                <p className="text-green-700">
                  <strong>Estimated Price:</strong> €{price.toLocaleString()}<br />
                  <strong>Website Type:</strong> {selected[0] !== undefined ? steps[0].options[selected[0]].label : 'Not selected'}<br />
                  <strong>Pages:</strong> {selected[2] !== undefined ? steps[2].options[selected[2]].label : 'Not selected'}<br />
                  <strong>Delivery:</strong> {selected[6] !== undefined ? steps[6].options[selected[6]].label : 'Not selected'}
                </p>
              </div>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="btn"
              >
                Calculate Another Quote
              </button>
            </div>
          ) : step < steps.length ? (
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <h2 className="text-2xl font-bold mb-2 text-primary dark:text-white">Get your free quote</h2>

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  There was an error submitting your request. Please try again.
                </div>
              )}

              <input
                className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
              />
              <input
                className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => handleFormChange('company', e.target.value)}
              />
              <input
                className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5"
                placeholder="Email *"
                required
                type="email"
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
              />
              <input
                className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleFormChange('phone', e.target.value)}
              />
              <textarea
                className="form-input rounded-2xl border-2 border-[#9199B5]/[0.12] p-5 min-h-[100px]"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleFormChange('message', e.target.value)}
              />
              <label className="flex items-center gap-2 text-sm mt-2">
                <input
                  type="checkbox"
                  required
                  className="accent-secondary"
                  checked={formData.privacyConsent}
                  onChange={(e) => handleFormChange('privacyConsent', e.target.checked)}
                />
                Yes, I agree to the <Link href="/privacy-policy" className="underline text-secondary">Privacy Policy</Link>.
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-full sm:w-auto sm:px-20 mt-5 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 