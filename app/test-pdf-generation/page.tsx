'use client';

import { useState } from 'react';

export default function TestPdfGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');

  const testPdfGeneration = async () => {
    setIsGenerating(true);
    setMessage('Generating PDF...');

    try {
      const mockResults = {
        seo: { score: 75 },
        performance: { score: 65 },
        usability: { score: 85 },
        technical: { score: 70 }
      };

      const response = await fetch('/api/audit/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: 'https://example.com',
          company: 'Test Company',
          results: mockResults,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        
        // Trigger download
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'test-website-audit.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
        
        setMessage('PDF generated successfully! Check your downloads.');
      } else {
        const error = await response.text();
        setMessage(`Error: ${error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">PDF Generation Test</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Test HTML-based PDF Generation</h2>
          <p className="text-gray-600 mb-6">
            This page tests the new HTML-based PDF generation system using Puppeteer and Tailwind CSS.
          </p>
          
          <button
            onClick={testPdfGeneration}
            disabled={isGenerating}
            className="bg-[#22C55E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating...' : 'Generate Test PDF'}
          </button>
          
          {message && (
            <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-blue-800">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
