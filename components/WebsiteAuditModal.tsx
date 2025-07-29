'use client';

import { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import Modal from './Modal';
import EmailIcon from './Icons/EmailIcon';
import RightArrowIcon from './Icons/RightArrowIcon';
import CloseIcon from './Icons/CloseIcon';
import ThunderIcon from './Icons/ThunderIcon';
import ComputerIcon from './Icons/ComputerIcon';
import SearchIcon from './Icons/SearchIcon';
import MobileAppIcon from './Icons/MobileAppIcon';
import UiUxIcon from './Icons/UiUxIcon';
import GrowthIcon from './Icons/GrowthIcon';
import QualityIcon from './Icons/QualityIcon';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Radar } from 'react-chartjs-2';
import Image from 'next/image';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import CalculatorModal from './CalculatorModal';
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
}) : null;

interface AuditStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'pending' | 'running' | 'completed' | 'error';
}

interface AuditResult {
  seo: any;
  performance: any;
  usability: any;
  social: any;
  security: any;
  technical: any;
  growth?: any;
}

export default function WebsiteAuditModal({ 
  isOpen, 
  onClose, 
  userEmail 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  userEmail: string;
}) {
  console.log('WebsiteAuditModal props:', { isOpen, userEmail });
  const [step, setStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditResult | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const dialogRef = useRef<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  // Helper function to validate and format URL
  const formatUrl = (url: string): string => {
    let formattedUrl = url.trim();
    
    // Remove any whitespace
    formattedUrl = formattedUrl.replace(/\s/g, '');
    
    // If URL doesn't start with http:// or https://, add https://
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }
    
    return formattedUrl;
  };

  // Helper function to validate URL format
  const isValidUrl = (url: string): boolean => {
    try {
      const formattedUrl = formatUrl(url);
      new URL(formattedUrl);
      return true;
    } catch {
      return false;
    }
  };

  const auditSteps: AuditStep[] = [
    {
      id: 1,
      title: 'SEO Analysis',
      description: 'Checking on-page SEO, meta tags, and search visibility',
      icon: <SearchIcon className="w-6 h-6" />,
      status: 'pending'
    },
    {
      id: 2,
      title: 'Performance Check',
      description: 'Analyzing page speed and Core Web Vitals',
      icon: <ThunderIcon className="w-6 h-6" />,
      status: 'pending'
    },
    {
      id: 3,
      title: 'Mobile Optimization',
      description: 'Testing mobile responsiveness and usability',
      icon: <MobileAppIcon className="w-6 h-6" />,
      status: 'pending'
    },
    {
      id: 4,
      title: 'User Experience',
      description: 'Evaluating design, navigation, and conversion elements',
      icon: <UiUxIcon className="w-6 h-6" />,
      status: 'pending'
    },
    {
      id: 5,
      title: 'Technical Health',
      description: 'Checking security, SSL, and technical infrastructure',
      icon: <ComputerIcon className="w-6 h-6" />,
      status: 'pending'
    },
    {
      id: 6,
      title: 'Growth Opportunities',
      description: 'Identifying areas for improvement and expansion',
      icon: <GrowthIcon className="w-6 h-6" />,
      status: 'pending'
    }
  ];

  const handleStartAudit = async () => {
    if (!websiteUrl || !companyName) return;
    
    // Validate and format URL
    if (!isValidUrl(websiteUrl)) {
      alert('Please enter a valid website URL (e.g., example.com or https://example.com)');
      return;
    }
    
    const formattedUrl = formatUrl(websiteUrl);
    console.log('Original URL:', websiteUrl);
    console.log('Formatted URL:', formattedUrl);
    
    setIsAnalyzing(true);
    setStep(2);
    
    // Save lead to Supabase
    if (supabase) {
      try {
        console.log('Attempting to save lead to Supabase...');
        console.log('Data to save:', {
          email: userEmail,
          website_url: formattedUrl,
          company_name: companyName,
          status: 'audit_started'
        });
        
        const { data, error } = await supabase
          .from('audit_leads')
          .insert([
            {
              email: userEmail,
              website_url: formattedUrl,
              company_name: companyName,
              status: 'audit_started'
            }
          ])
          .select();
        
        if (error) {
          console.error('Supabase error:', error);
        } else {
          console.log('Lead saved successfully:', data);
        }
      } catch (error) {
        console.error('Error saving lead:', error);
      }
    } else {
      console.log('Supabase client not initialized');
    }

    // Start audit process with formatted URL
    await runAudit(formattedUrl);
  };

  const runAudit = async (formattedUrl: string) => {
    console.log('Starting audit process for URL:', formattedUrl);
    const results: AuditResult = {
      seo: {},
      performance: {},
      usability: {},
      social: {},
      security: {},
      technical: {}
    };

    // Helper function to add realistic delays
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Step 1: SEO Analysis
    console.log('Step 1: SEO Analysis');
    setCurrentStep(0);
    auditSteps[0].status = 'running';
    await delay(800); // Realistic delay
    try {
      results.seo = await analyzeSEO(formattedUrl);
      console.log('SEO results:', results.seo);
      auditSteps[0].status = 'completed';
      await delay(300); // Brief pause between steps
    } catch (error) {
      console.error('SEO analysis error:', error);
      auditSteps[0].status = 'error';
    }

    // Step 2: Performance Analysis
    setCurrentStep(1);
    auditSteps[1].status = 'running';
    await delay(600);
    try {
      results.performance = await analyzePerformance(formattedUrl);
      auditSteps[1].status = 'completed';
      await delay(300);
    } catch (error) {
      auditSteps[1].status = 'error';
    }

    // Step 3: Mobile Optimization
    setCurrentStep(2);
    auditSteps[2].status = 'running';
    await delay(700);
    try {
      results.usability = await analyzeUsability(formattedUrl);
      auditSteps[2].status = 'completed';
      await delay(300);
    } catch (error) {
      auditSteps[2].status = 'error';
    }

    // Step 4: UX Analysis
    setCurrentStep(3);
    auditSteps[3].status = 'running';
    await delay(900);
    try {
      results.social = await analyzeUX(formattedUrl);
      auditSteps[3].status = 'completed';
      await delay(300);
    } catch (error) {
      auditSteps[3].status = 'error';
    }

    // Step 5: Technical Analysis
    setCurrentStep(4);
    auditSteps[4].status = 'running';
    await delay(750);
    try {
      results.security = await analyzeTechnical(formattedUrl);
      auditSteps[4].status = 'completed';
      await delay(300);
    } catch (error) {
      auditSteps[4].status = 'error';
    }

    // Step 6: Growth Opportunities
    setCurrentStep(5);
    auditSteps[5].status = 'running';
    await delay(1000);
    try {
      results.technical = await analyzeGrowthOpportunities(formattedUrl, results);
      auditSteps[5].status = 'completed';
      await delay(500); // Longer pause before showing results
    } catch (error) {
      auditSteps[5].status = 'error';
    }

    console.log('Audit completed, final results:', results);
    setAuditResults(results);
    setStep(3);
    setIsAnalyzing(false);

    // After audit is complete
    if (supabase) {
      try {
        const { error: updateError } = await supabase
          .from('audit_leads')
          .update({
            audit_results: results
          })
          .eq('email', userEmail);

        if (updateError) {
          console.error('Supabase update error:', updateError);
        } else {
          console.log('Lead updated successfully with audit results.');
        }
      } catch (error) {
        console.error('Error updating lead with audit results:', error);
      }
    }
  };

  const analyzeSEO = async (url: string) => {
    console.log('Calling SEO API for:', url);
    try {
      const response = await fetch('/api/audit/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      console.log('SEO API response status:', response.status);
      const data = await response.json();
      console.log('SEO API response data:', data);
      return data;
    } catch (error) {
      console.error('SEO API error:', error);
      throw error;
    }
  };

  const analyzePerformance = async (url: string) => {
    const response = await fetch('/api/audit/performance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    return response.json();
  };

  const analyzeUsability = async (url: string) => {
    const response = await fetch('/api/audit/usability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    return response.json();
  };

  const analyzeUX = async (url: string) => {
    const response = await fetch('/api/audit/ux', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    return response.json();
  };

  const analyzeTechnical = async (url: string) => {
    const response = await fetch('/api/audit/technical', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    return response.json();
  };

  const analyzeGrowthOpportunities = async (url: string, results: AuditResult) => {
    const response = await fetch('/api/audit/growth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, results })
    });
    return response.json();
  };

  const generatePDF = async () => {
    // Generate PDF report
    const response = await fetch('/api/audit/pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        url: websiteUrl, 
        company: companyName, 
        results: auditResults 
      })
    });
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${companyName}-website-audit.pdf`;
    a.click();
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">
          Free Website Audit
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Get a comprehensive analysis of your website's performance, SEO, and growth opportunities
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-primary dark:text-white mb-2">
            Website URL *
          </label>
          <input
            type="text"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="example.com or https://example.com"
            className="w-full form-input border-2 border-[#E1E6F5] dark:border-[#9199B5] rounded-xl px-4 py-3 dark:bg-[#112C3C] dark:text-white"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter your domain (e.g., example.com) - we'll add https:// automatically
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-primary dark:text-white mb-2">
            Company Name *
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Your Company Name"
            className="w-full form-input border-2 border-[#E1E6F5] dark:border-[#9199B5] rounded-xl px-4 py-3 dark:bg-[#112C3C] dark:text-white"
            required
          />
        </div>
      </div>
      
      <button
        onClick={handleStartAudit}
        disabled={!websiteUrl || !companyName}
        className="w-full btn bg-secondary hover:bg-secondary/80 text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Start Free Audit
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      {/* Header with animated progress */}
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full mb-4 animate-pulse">
            <ThunderIcon className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">
          Analyzing Your Website
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We're running a comprehensive analysis of your website...
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-secondary to-secondary/80 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / auditSteps.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {currentStep + 1} of {auditSteps.length} steps completed
        </p>
      </div>
      
      {/* Interactive Analysis Steps */}
      <div className="space-y-4">
        {auditSteps.map((auditStep, index) => (
          <div 
            key={auditStep.id} 
            className={`relative overflow-hidden transition-all duration-500 ease-out transform ${
              index <= currentStep ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'
            }`}
          >
            {/* Animated background for running step */}
            {auditStep.status === 'running' && (
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl animate-pulse"></div>
            )}
            
            <div className={`relative flex items-center space-x-4 p-6 border-2 rounded-xl transition-all duration-300 ${
              auditStep.status === 'completed' ? 'border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800' :
              auditStep.status === 'running' ? 'border-secondary bg-secondary/5 dark:bg-secondary/10 dark:border-secondary/50' :
              auditStep.status === 'error' ? 'border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800' :
              'border-[#E1E6F5] dark:border-[#9199B5] bg-white dark:bg-[#112C3C]'
            }`}>
              
              {/* Animated Icon Container */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                auditStep.status === 'completed' ? 'bg-green-500 text-white scale-110' :
                auditStep.status === 'running' ? 'bg-secondary text-white animate-pulse scale-110' :
                auditStep.status === 'error' ? 'bg-red-500 text-white' :
                'bg-gray-100 dark:bg-gray-700 text-gray-400'
              }`}>
                {auditStep.status === 'completed' ? (
                  <svg className="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : auditStep.status === 'running' ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-current border-t-transparent"></div>
                ) : (
                  <div className="w-6 h-6">{auditStep.icon}</div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    auditStep.status === 'completed' ? 'text-green-700 dark:text-green-400' :
                    auditStep.status === 'running' ? 'text-secondary dark:text-secondary' :
                    auditStep.status === 'error' ? 'text-red-700 dark:text-red-400' :
                    'text-primary dark:text-white'
                  }`}>
                    {auditStep.title}
                  </h3>
                  {auditStep.status === 'running' && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {auditStep.description}
                </p>
                
                {/* Status indicator */}
                {auditStep.status === 'running' && (
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-xs text-secondary font-medium animate-pulse">
                      Analyzing...
                    </span>
                  </div>
                )}
                
                {auditStep.status === 'completed' && (
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Completed
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Success animation overlay */}
            {auditStep.status === 'completed' && index === currentStep && (
              <div className="absolute inset-0 bg-green-500/10 rounded-xl animate-ping"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Bottom status */}
      <div className="text-center pt-4">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <span>Processing your website data...</span>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    // Guard: show loading if auditResults is missing or incomplete
    if (!auditResults || !auditResults.seo || !auditResults.performance || !auditResults.usability || !auditResults.technical) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-12 h-12 mb-4 animate-spin border-4 border-secondary border-t-transparent rounded-full"></div>
          <div className="text-secondary font-semibold">Preparing your results...</div>
        </div>
      );
    }

    const seoScore = auditResults.seo.score || 0;
    const performanceScore = auditResults.performance.score || 0;
    const usabilityScore = auditResults.usability.score || 0;
    const growthScore = auditResults.growth?.score || 0;
    const overallScore = Math.round((seoScore + performanceScore + usabilityScore) / 3);

    const chartData = {
      labels: ['SEO', 'Performance', 'Usability'],
      datasets: [{
        label: 'Website Score',
        data: [seoScore, performanceScore, usabilityScore],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4
      }]
    };

    const chartOptions = {
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    };

    return (
      <div className="min-h-[600px]">
        {/* Header Section - Using service page styling */}
        <div className="bg-[#112C3C] text-white p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#22C55E]/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Website Audit Results</h2>
                <p className="text-white/90 mt-1">Comprehensive analysis of {websiteUrl}</p>
              </div>
            </div>
            {/* Overall Score Circle - Top Right */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20">
                <CircularProgressbar
                  value={overallScore}
                  text={`${overallScore}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#22C55E',
                    textColor: '#FFFFFF',
                    trailColor: '#FFFFFF20',
                  })}
                />
              </div>
              <div className="text-white mt-2">
                <div className="text-sm font-medium">Overall Score</div>
              </div>
            </div>
          </div>
          
          {/* Urgency Banner - Service page styling */}
          <div className="bg-[#22C55E]/10 rounded-xl p-4 border border-[#22C55E]/20">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-[#FBBF24] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <p className="font-semibold">Critical Issues Found - Action Required</p>
                <p className="text-white/80 text-sm">Your competitors are likely outperforming you. Don't lose potential customers!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* CTA Section - Service page button styling */}
          <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">🚨 Your Website is Costing You Money!</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Based on our analysis, your current website is likely costing you <span className="font-bold text-[#FBBF24]">$2,000-$5,000+ per month</span> in lost revenue. 
              A professional website could increase your conversions by <span className="font-bold text-[#FBBF24]">300-500%</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCalculator(true)}
                className="bg-white text-[#22C55E] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Get New Website Quote
              </button>
              <button
                onClick={generatePDF}
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#22C55E] transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Report
              </button>
            </div>
          </div>

          {/* Score Overview Grid - Service page card styling */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-3">
                <CircularProgressbar
                  value={seoScore}
                  text={`${seoScore}`}
                  styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#22C55E',
                    textColor: '#112C3C',
                    trailColor: '#F3F4F6',
                  })}
                />
              </div>
              <h3 className="font-semibold text-[#112C3C] text-base">SEO Score</h3>
              <p className="text-gray-500 text-xs mt-1">
                {seoScore >= 80 ? 'Excellent' : seoScore >= 60 ? 'Good' : seoScore >= 40 ? 'Needs Work' : 'Critical'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-3">
                <CircularProgressbar
                  value={performanceScore}
                  text={`${performanceScore}`}
                  styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#FBBF24',
                    textColor: '#112C3C',
                    trailColor: '#F3F4F6',
                  })}
                />
              </div>
              <h3 className="font-semibold text-[#112C3C] text-base">Performance</h3>
              <p className="text-gray-500 text-xs mt-1">
                {performanceScore >= 80 ? 'Fast' : performanceScore >= 60 ? 'Good' : performanceScore >= 40 ? 'Slow' : 'Very Slow'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-3">
                <CircularProgressbar
                  value={usabilityScore}
                  text={`${usabilityScore}`}
                  styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#EF4444',
                    textColor: '#112C3C',
                    trailColor: '#F3F4F6',
                  })}
                />
              </div>
              <h3 className="font-semibold text-[#112C3C] text-base">Usability</h3>
              <p className="text-gray-500 text-xs mt-1">
                {usabilityScore >= 80 ? 'Great UX' : usabilityScore >= 60 ? 'Good' : usabilityScore >= 40 ? 'Poor' : 'Critical'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-3">
                <CircularProgressbar
                  value={growthScore}
                  text={`${growthScore}`}
                  styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#112C3C',
                    textColor: '#112C3C',
                    trailColor: '#F3F4F6',
                  })}
                />
              </div>
              <h3 className="font-semibold text-[#112C3C] text-base">Growth</h3>
              <p className="text-gray-500 text-xs mt-1">
                {growthScore >= 80 ? 'High Potential' : growthScore >= 60 ? 'Good' : growthScore >= 40 ? 'Limited' : 'Critical'}
              </p>
            </div>
          </div>

          {/* Analysis Section - Service page styling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Radar Chart */}
            <div className="bg-white rounded-xl p-6 border border-gray-50 hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#112C3C] mb-4">Performance Overview</h3>
              <div className="flex justify-center">
                <div className="w-[500px] h-[500px]">
                  <Radar data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>

            {/* Key Issues */}
            <div className="bg-white rounded-xl p-6 border border-gray-50 hover:border-[#22C55E] transition-all duration-300 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#112C3C] mb-4">🚨 Critical Issues Found</h3>
              <div className="space-y-3">
                {usabilityScore < 50 && (
                  <div className="flex items-start p-4 bg-red-100 rounded-lg border-l-4 border-red-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-sm">🚨 CRITICAL: Poor User Experience</p>
                      <p className="text-red-700 text-xs mt-1">{100 - usabilityScore}% of visitors likely leave due to poor UX - You're losing customers!</p>
                    </div>
                  </div>
                )}
                
                {performanceScore < 70 && (
                  <div className="flex items-start p-4 bg-orange-100 rounded-lg border-l-4 border-orange-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-orange-800 text-sm">⚠️ WARNING: Slow Loading Speed</p>
                      <p className="text-orange-700 text-xs mt-1">Page takes {performanceScore < 50 ? '5+ seconds' : '3+ seconds'} to load - Customers are leaving!</p>
                    </div>
                  </div>
                )}

                {seoScore < 80 && (
                  <div className="flex items-start p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-yellow-800 text-sm">🔍 ALERT: Missing SEO Elements</p>
                      <p className="text-yellow-700 text-xs mt-1">Not ranking for key terms - Missing organic traffic and leads!</p>
                    </div>
                  </div>
                )}

                {usabilityScore < 60 && (
                  <div className="flex items-start p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-purple-800 text-sm">📱 URGENT: Poor Mobile Experience</p>
                      <p className="text-purple-700 text-xs mt-1">60%+ of your traffic is mobile - Site not optimized for mobile users!</p>
                    </div>
                  </div>
                )}

                {usabilityScore < 65 && (
                  <div className="flex items-start p-4 bg-indigo-100 rounded-lg border-l-4 border-indigo-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-indigo-800 text-sm">💥 CRISIS: Weak Call-to-Actions</p>
                      <p className="text-indigo-700 text-xs mt-1">Visitors don't know what to do next - Low conversions killing your business!</p>
                    </div>
                  </div>
                )}

                {overallScore < 70 && (
                  <div className="flex items-start p-4 bg-pink-100 rounded-lg border-l-4 border-pink-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-pink-800 text-sm">💀 DISASTER: Outdated Design</p>
                      <p className="text-pink-700 text-xs mt-1">Website looks {new Date().getFullYear() - 3}+ years old - Trust issues destroying credibility!</p>
                    </div>
                  </div>
                )}

                {growthScore < 50 && (
                  <div className="flex items-start p-4 bg-teal-100 rounded-lg border-l-4 border-teal-500 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-teal-800 text-sm">📉 CRASH: Low Conversion Rate</p>
                      <p className="text-teal-700 text-xs mt-1">Poor user journey and conversion optimization - Revenue bleeding!</p>
                    </div>
                  </div>
                )}

                {(usabilityScore < 50 || performanceScore < 70 || seoScore < 80 || overallScore < 70) && (
                  <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-600 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-sm">💸 EMERGENCY: Revenue Impact</p>
                      <p className="text-red-700 text-xs mt-1">These issues are costing you customers and revenue DAILY - Action required NOW!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        ref={dialogRef}
        opened={isOpen}
        onClose={onClose}
        contentClass="p-0 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
        width="95vw"
        maxWidth={1400}
      >
        <div className="relative">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>
      </Modal>
      
      <CalculatorModal 
        open={showCalculator} 
        onClose={() => setShowCalculator(false)} 
      />
    </>
  );
} 