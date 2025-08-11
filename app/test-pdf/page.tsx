'use client';

import PdfTemplate from '@/components/PdfTemplate';

export default function TestPdfPage() {
  const mockResults = {
    seo: { score: 75 },
    performance: { score: 65 },
    usability: { score: 85 },
    technical: { score: 70 }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">PDF Template Preview</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <PdfTemplate 
            url="https://example.com" 
            company="Example Company" 
            results={mockResults} 
          />
        </div>
      </div>
    </div>
  );
}
