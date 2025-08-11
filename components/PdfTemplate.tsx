import React from 'react';

interface PdfTemplateProps {
  url: string;
  company: string;
  results: any;
}

export default function PdfTemplate({ url, company, results }: PdfTemplateProps) {
  const seoScore = results.seo?.score || 0;
  const performanceScore = results.performance?.score || 0;
  const usabilityScore = results.usability?.score || 0;
  const technicalScore = results.technical?.score || 0;
  
  const overallScore = Math.round((seoScore + performanceScore + usabilityScore + technicalScore) / 4);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getScoreStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Needs Work';
    return 'Critical';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const issues = [];
  if (usabilityScore < 50) issues.push(`Poor User Experience (${usabilityScore}/100) - ${100 - usabilityScore}% of visitors likely leave`);
  if (performanceScore < 70) issues.push(`Slow Loading Speed (${performanceScore}/100) - Page takes ${performanceScore < 50 ? '5+' : '3+'} seconds to load`);
  if (seoScore < 80) issues.push(`Missing SEO Elements (${seoScore}/100) - Not ranking for key terms`);
  if (technicalScore < 60) issues.push(`Technical Issues (${technicalScore}/100) - Server and code optimization needed`);

  const recommendations = [
    'Implement responsive design for better mobile experience',
    'Optimize images and code for faster loading speeds',
    'Add proper meta tags and structured data for SEO',
    'Improve user interface and call-to-action placement',
    'Regular website maintenance and updates'
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#112C3C] to-[#1a3a4f] text-white p-8">
        <div className="flex items-center mb-4">
          {/* LeonLogic Logo */}
          <div className="relative w-16 h-16 mr-6">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg"></div>
            <div className="absolute top-2 left-2 w-12 h-12 bg-[#112C3C] rounded-lg"></div>
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-wide">LEONLOGIC</h1>
            <p className="text-lg text-gray-300">Professional Website Audit Report</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#112C3C] mb-2">Website Audit Report</h2>
          <p className="text-gray-600 text-lg">Comprehensive Analysis & Recommendations</p>
        </div>

        {/* Overall Score Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-8 text-center">
          <h3 className="text-2xl font-bold text-[#112C3C] mb-4">Overall Performance Score</h3>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke={overallScore >= 80 ? '#22c55e' : overallScore >= 60 ? '#f59e0b' : '#ef4444'}
                  strokeWidth="8"
                  strokeDasharray={`${(overallScore / 100) * 339.292} 339.292`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
                  {overallScore}
                </span>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            {overallScore >= 80 ? 'Excellent Performance' :
             overallScore >= 60 ? 'Good Performance' :
             overallScore >= 40 ? 'Needs Improvement' : 'Critical Issues'}
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-gray-50 border-2 border-[#112C3C] rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-[#112C3C] mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Company Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white p-4 rounded-lg border">
              <span className="font-semibold text-[#112C3C]">Company:</span>
              <p className="text-gray-800 mt-1">{company}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <span className="font-semibold text-[#112C3C]">Website:</span>
              <p className="text-gray-800 mt-1 break-all">{url}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <span className="font-semibold text-[#112C3C]">Audit Date:</span>
              <p className="text-gray-800 mt-1">{new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <span className="font-semibold text-[#112C3C]">Report Generated:</span>
              <p className="text-gray-800 mt-1">{new Date().toLocaleString('en-US')}</p>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#112C3C] mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Executive Summary
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-gray-800 text-lg leading-relaxed">
              Your website received an overall score of <span className="font-bold text-[#112C3C]">{overallScore}/100</span>.{' '}
              {overallScore >= 80 ? 'Your website is performing excellently with room for minor improvements. This strong foundation positions you well for continued online success.' :
               overallScore >= 60 ? 'Your website has good potential but needs optimization in several areas. With targeted improvements, you can significantly enhance your online presence and user experience.' :
               'Your website requires significant improvements to compete effectively online. Our comprehensive recommendations will help you transform your digital presence and achieve better results.'}
            </p>
          </div>
        </div>

        {/* Performance Scores */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#112C3C] mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Detailed Performance Analysis
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SEO Performance */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-[#112C3C]">SEO Performance</h4>
                <span className={`text-2xl font-bold ${getScoreColor(seoScore)}`}>{seoScore}/100</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Score</span>
                  <span>{seoScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(seoScore)}`}
                    style={{ width: `${seoScore}%` }}
                  ></div>
                </div>
              </div>
              <div className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getScoreBgColor(seoScore)} ${getScoreColor(seoScore)}`}>
                {getScoreStatus(seoScore)}
              </div>
            </div>

            {/* Page Speed */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-[#112C3C]">Page Speed</h4>
                <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>{performanceScore}/100</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Score</span>
                  <span>{performanceScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(performanceScore)}`}
                    style={{ width: `${performanceScore}%` }}
                  ></div>
                </div>
              </div>
              <div className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getScoreBgColor(performanceScore)} ${getScoreColor(performanceScore)}`}>
                {getScoreStatus(performanceScore)}
              </div>
            </div>

            {/* User Experience */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-[#112C3C]">User Experience</h4>
                <span className={`text-2xl font-bold ${getScoreColor(usabilityScore)}`}>{usabilityScore}/100</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Score</span>
                  <span>{usabilityScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(usabilityScore)}`}
                    style={{ width: `${usabilityScore}%` }}
                  ></div>
                </div>
              </div>
              <div className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getScoreBgColor(usabilityScore)} ${getScoreColor(usabilityScore)}`}>
                {getScoreStatus(usabilityScore)}
              </div>
            </div>

            {/* Technical Health */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-[#112C3C]">Technical Health</h4>
                <span className={`text-2xl font-bold ${getScoreColor(technicalScore)}`}>{technicalScore}/100</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Score</span>
                  <span>{technicalScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(technicalScore)}`}
                    style={{ width: `${technicalScore}%` }}
                  ></div>
                </div>
              </div>
              <div className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getScoreBgColor(technicalScore)} ${getScoreColor(technicalScore)}`}>
                {getScoreStatus(technicalScore)}
              </div>
            </div>
          </div>
        </div>

        {/* Critical Issues */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#112C3C] mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Critical Issues Found
          </h3>
          {issues.length === 0 ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-800 font-medium text-lg">No critical issues found - your website is performing well!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {issues.map((issue, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-red-800 text-lg">• {issue}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#112C3C] mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Strategic Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-green-800">• {rec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16a34a] text-white p-8 rounded-xl text-center shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Website?</h3>
            <p className="text-xl mb-6">Get a professional quote and start implementing these improvements today!</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
              <p className="text-lg mb-2">Visit our website for a free consultation:</p>
              <div className="inline-block">
                <span className="text-3xl font-bold underline">leonlogic.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-[#112C3C] to-[#1a3a4f] text-white p-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-2">This audit was generated by LeonLogic Professional Website Analysis Tool</p>
          <p className="text-sm text-gray-300">For professional web development services, contact our team at leonlogic.com</p>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} LeonLogic. All rights reserved. | Professional Web Development & Digital Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
