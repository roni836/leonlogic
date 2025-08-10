import { NextRequest, NextResponse } from 'next/server';
import jsPDF from 'jspdf';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { url, company, results } = await request.json();
    console.log('[pdf] Incoming request', { url, company, hasResults: !!results });
    
    if (!url || !company || !results) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    const pdfBuffer = await generatePDF(url, company, results);
    try {
      const size = (pdfBuffer as ArrayBuffer).byteLength;
      console.log('[pdf] Generated PDF size (bytes):', size);
    } catch {}
    
    // Upload PDF to Supabase Storage
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      // process.env.SUPABASE_SERVICE_ROLE_KEY!
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const fileName = `${company}-${Date.now()}.pdf`;
    const { data, error } = await supabase.storage
      .from('audit-pdfs')
      .upload(fileName, pdfBuffer, {
        contentType: 'application/pdf',
        upsert: true,
      });

    if (error) {
      console.error('[pdf] Supabase Storage upload error:', error);
      // Continue with PDF download even if upload fails
    } else {
      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('audit-pdfs')
        .getPublicUrl(fileName);

      // Save the URL to audit_leads table
      await supabase
        .from('audit_leads')
        .update({ pdf_url: urlData.publicUrl })
        .eq('company_name', company);

      console.log('[pdf] PDF uploaded and URL saved to DB:', urlData.publicUrl);

      // Trigger email sending route with the PDF URL
      try {
        const origin = new URL(request.url).origin;
        const res = await fetch(`${origin}/api/audit/send-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url, company, pdfUrl: urlData.publicUrl })
        });
        console.log('[pdf] send-email response status:', res.status);
        if (!res.ok) {
          const text = await res.text();
          console.error('[pdf] send-email error body:', text);
        }
      } catch (e) {
        console.error('[pdf] Failed to call send-email route:', e);
      }
    }
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${company}-website-audit.pdf"`
      }
    });
  } catch (error) {
    console.error('[pdf] PDF Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}

async function generatePDF(url: string, company: string, results: any) {
  const doc = new jsPDF();
  
  // Set up colors
  const primaryColor = [17, 44, 60]; // #112C3C
  const accentColor = [34, 197, 94]; // #22C55E
  const warningColor = [239, 68, 68]; // #EF4444
  const successColor = [34, 197, 94]; // #22C55E
  
  // Header with branding
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 30, 'F');
  
  // Draw LeonLogic Logo using SVG paths
  doc.setFillColor(255, 255, 255);
  
  // Main triangle shape (L)
  doc.rect(20, 8, 12, 15, 'F');
  doc.rect(20, 8, 25, 4, 'F');
  
  // Inner square
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(22, 10, 8, 8, 'F');
  
  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('LEONLOGIC', 50, 18);
  
  // Subtitle
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Professional Website Audit Report', 50, 25);
  
  // Main title
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Website Audit Report', 20, 50);
  
  // Company info section - Fixed layout
  doc.setFillColor(248, 250, 252); // Light gray background
  doc.rect(20, 60, 170, 30, 'F');
  
  // Border for company info
  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.5);
  doc.rect(20, 60, 170, 30, 'S');
  
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Company Information', 25, 72);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Company: ${company}`, 25, 82);
  doc.text(`Website: ${url}`, 25, 90);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 25, 98);
  
  // Executive Summary
  const seoScore = results.seo?.score || 0;
  const performanceScore = results.performance?.score || 0;
  const usabilityScore = results.usability?.score || 0;
  const technicalScore = results.technical?.score || 0;
  
  const overallScore = Math.round((seoScore + performanceScore + usabilityScore + technicalScore) / 4);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Executive Summary', 20, 105);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  const summaryText = `Your website received an overall score of ${overallScore}/100. `;
  const summaryText2 = overallScore >= 80 ? 'Your website is performing excellently with room for minor improvements.' :
                      overallScore >= 60 ? 'Your website has good potential but needs optimization in several areas.' :
                      'Your website requires significant improvements to compete effectively online.';
  
  // Split text to fit properly
  const summaryLines = doc.splitTextToSize(summaryText + summaryText2, 170);
  doc.text(summaryLines, 20, 115);
  
  // Scores Overview with design
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Performance Scores', 20, 135);
  
  // Create styled table
  const tableData = [
    ['Category', 'Score', 'Status'],
    ['SEO Performance', `${seoScore}/100`, getScoreStatus(seoScore)],
    ['Page Speed', `${performanceScore}/100`, getScoreStatus(performanceScore)],
    ['User Experience', `${usabilityScore}/100`, getScoreStatus(usabilityScore)],
    ['Technical Health', `${technicalScore}/100`, getScoreStatus(technicalScore)]
  ];
  
  let yPosition = 145;
  tableData.forEach((row, rowIndex) => {
    let xPosition = 20;
    
    // Header row styling
    if (rowIndex === 0) {
      doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.rect(xPosition - 2, yPosition - 5, 170, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFillColor(rowIndex % 2 === 0 ? 248 : 255, 248, 248);
      doc.rect(xPosition - 2, yPosition - 5, 170, 8, 'F');
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
    }
    
    row.forEach((cell, cellIndex) => {
      let cellX = xPosition;
      let cellWidth = cellIndex === 0 ? 80 : (cellIndex === 1 ? 40 : 50);
      
      // Color code the status
      if (rowIndex > 0 && cellIndex === 2) {
        const score = rowIndex === 1 ? seoScore : rowIndex === 2 ? performanceScore : rowIndex === 3 ? usabilityScore : technicalScore;
        if (score >= 80) {
          doc.setTextColor(successColor[0], successColor[1], successColor[2]);
        } else if (score >= 60) {
          doc.setTextColor(245, 158, 11); // Orange
        } else {
          doc.setTextColor(warningColor[0], warningColor[1], warningColor[2]);
        }
      }
      
      doc.text(cell, cellX, yPosition);
      xPosition += cellWidth;
    });
    
    yPosition += 8;
  });
  
  // Critical Issues Section
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Critical Issues Found', 20, yPosition);
  
  yPosition += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  const issues = [];
  if (usabilityScore < 50) issues.push(`• Poor User Experience (${usabilityScore}/100) - ${100 - usabilityScore}% of visitors likely leave`);
  if (performanceScore < 70) issues.push(`• Slow Loading Speed (${performanceScore}/100) - Page takes ${performanceScore < 50 ? '5+' : '3+'} seconds to load`);
  if (seoScore < 80) issues.push(`• Missing SEO Elements (${seoScore}/100) - Not ranking for key terms`);
  if (technicalScore < 60) issues.push(`• Technical Issues (${technicalScore}/100) - Server and code optimization needed`);
  
  if (issues.length === 0) {
    doc.text('• No critical issues found - your website is performing well!', 20, yPosition);
  } else {
    issues.forEach((issue, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      doc.setTextColor(warningColor[0], warningColor[1], warningColor[2]);
      doc.text(issue, 20, yPosition);
      yPosition += 6;
    });
  }
  
  // Recommendations Section
  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Recommendations', 20, yPosition);
  
  yPosition += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  const recommendations = [
    '• Implement responsive design for better mobile experience',
    '• Optimize images and code for faster loading speeds',
    '• Add proper meta tags and structured data for SEO',
    '• Improve user interface and call-to-action placement',
    '• Regular website maintenance and updates'
  ];
  
  recommendations.forEach((rec, index) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setTextColor(successColor[0], successColor[1], successColor[2]);
    doc.text(rec, 20, yPosition);
    yPosition += 6;
  });
  
  // CTA Section - Improved design
  yPosition += 15;
  
  // Main CTA box with gradient effect
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(20, yPosition - 5, 170, 35, 'F');
  
  // Add border for better definition
  doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.setLineWidth(1);
  doc.rect(20, yPosition - 5, 170, 35, 'S');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Get Your Free Website Quote Now!', 25, yPosition + 8);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Visit our website to get a professional quote:', 25, yPosition + 20);
  
  // Website link with underline effect
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('leonlogic.com', 25, yPosition + 30);
  
  // Add underline
  doc.setLineWidth(0.5);
  doc.line(25, yPosition + 32, 85, yPosition + 32);
  
  // Footer
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 280, 210, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('This audit was generated by LeonLogic Professional Website Analysis Tool', 20, 290);
  doc.text('For professional web development services, contact our team at leonlogic.com', 20, 295);
  
  return doc.output('arraybuffer');
}

function getScoreStatus(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Needs Work';
  return 'Critical';
} 