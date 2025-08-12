import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { createClient } from '@supabase/supabase-js';

// Fallback PDF generation using jsPDF
async function generatePDFFallback(url: string, company: string, results: any): Promise<Buffer> {
  try {
    // Dynamic import to avoid bundling issues
    const { jsPDF } = await import('jspdf');
    
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.text('Website Audit Report', 20, 20);
    
    // Add company and URL
    doc.setFontSize(12);
    doc.text(`Company: ${company}`, 20, 35);
    doc.text(`URL: ${url}`, 20, 45);
    
    // Add scores
    const seoScore = results?.seo?.score || 0;
    const performanceScore = results?.performance?.score || 0;
    const usabilityScore = results?.usability?.score || 0;
    const technicalScore = results?.technical?.score || 0;
    const overallScore = Math.round((seoScore + performanceScore + usabilityScore + technicalScore) / 4);
    
    doc.setFontSize(14);
    doc.text('Scores:', 20, 65);
    doc.setFontSize(10);
    doc.text(`SEO: ${seoScore}/100`, 20, 75);
    doc.text(`Performance: ${performanceScore}/100`, 20, 85);
    doc.text(`Usability: ${usabilityScore}/100`, 20, 95);
    doc.text(`Technical: ${technicalScore}/100`, 20, 105);
    doc.text(`Overall: ${overallScore}/100`, 20, 115);
    
    // Add recommendations
    doc.setFontSize(14);
    doc.text('Recommendations:', 20, 135);
    doc.setFontSize(10);
    
    const recommendations = [
      'Implement responsive design for better mobile experience',
      'Optimize images and code for faster loading speeds',
      'Add proper meta tags and structured data for SEO',
      'Improve user interface and call-to-action placement',
      'Set up regular monitoring and maintenance'
    ];
    
    let yPos = 145;
    recommendations.forEach((rec, index) => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(`${index + 1}. ${rec}`, 20, yPos);
      yPos += 10;
    });
    
    const pdfArrayBuffer = doc.output('arraybuffer');
    return Buffer.from(pdfArrayBuffer);
  } catch (error) {
    console.error('[pdf] Fallback PDF generation failed:', error);
    throw new Error('PDF generation failed');
  }
}

// NOTE: This file is a drop-in improved version of your API route.
// Save it to /pages/api/generate-pdf.ts or /app/api/generate-pdf/route.ts depending on your Next.js setup.

export async function POST(request: NextRequest) {
  try {
    const { url, company, results } = await request.json();
    console.log('[pdf] Incoming request', { url, company, hasResults: !!results });

    if (!url || !company || !results) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    let pdfBuffer: Buffer;
    
    try {
      // Try Puppeteer first
      const puppeteerResult = await generatePDF(url, company, results);
      pdfBuffer = Buffer.from(puppeteerResult);
      console.log('[pdf] Puppeteer PDF generation successful');
    } catch (puppeteerError) {
      console.error('[pdf] Puppeteer failed, trying fallback:', puppeteerError);
      
      try {
        // Fallback to jsPDF
        pdfBuffer = await generatePDFFallback(url, company, results);
        console.log('[pdf] Fallback PDF generation successful');
      } catch (fallbackError) {
        console.error('[pdf] Both PDF generation methods failed:', fallbackError);
        return NextResponse.json({ 
          error: 'PDF generation failed in production environment',
          details: 'Both Puppeteer and fallback methods failed'
        }, { status: 500 });
      }
    }

    // Log size for debugging
    try {
      const size = Buffer.from(pdfBuffer).byteLength;
      console.log('[pdf] Generated PDF size (bytes):', size);
    } catch { }

    // Upload PDF to Supabase Storage
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const fileName = `${company.replace(/[^a-z0-9\-_.]/gi, '_')}-${Date.now()}.pdf`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('audit-pdfs')
      .upload(fileName, pdfBuffer, {
        contentType: 'application/pdf',
        upsert: true,
      });

    if (uploadError) {
      console.error('[pdf] Supabase Storage upload error:', uploadError);
    } else {
      const { data: urlData } = supabase.storage.from('audit-pdfs').getPublicUrl(fileName);
      const publicUrl = (urlData as any)?.publicUrl ?? (urlData as any)?.public_url ?? null;

      if (publicUrl) {
        // Save the URL to audit_leads table (update if exists)
        try {
          await supabase
            .from('audit_leads')
            .update({ pdf_url: publicUrl })
            .eq('company_name', company);

          console.log('[pdf] PDF uploaded and URL saved to DB:', publicUrl);

          // Trigger email sending route with the PDF URL (best-effort)
          try {
            const origin = new URL(request.url).origin;
            const res = await fetch(`${origin}/api/audit/send-email`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ url, company, pdfUrl: publicUrl })
            });
            console.log('[pdf] send-email response status:', res.status);
          } catch (e) {
            console.error('[pdf] Failed to call send-email route:', e);
          }
        } catch (dbErr) {
          console.error('[pdf] Failed to update audit_leads:', dbErr);
        }
      }
    }

    return new NextResponse(Buffer.from(pdfBuffer), {
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

// Helper - safely read nested numeric score
function getScoreFromPath(obj: any, path: string[], fallback: number | null = 0): number | null {
  try {
    let cur = obj;
    for (const p of path) {
      if (cur == null) return fallback;
      cur = cur[p];
    }
    if (cur == null) return fallback;
    const asNum = Number(cur);
    return Number.isFinite(asNum) ? asNum : (fallback ?? 0);
  } catch {
    return fallback ?? 0;
  }
}

async function generatePDF(url: string, company: string, results: any) {
  // derive scores (flexible paths)
  const seoScoreRaw = getScoreFromPath(results, ['seo', 'score'], getScoreFromPath(results, ['seoScore'], 0));
  const performanceScoreRaw = getScoreFromPath(results, ['performance', 'score'], getScoreFromPath(results, ['performanceScore'], 0));
  const desktopScoreRaw = getScoreFromPath(results, ['performance', 'desktop', 'score'], null);
  const mobileScoreRaw = getScoreFromPath(results, ['performance', 'mobile', 'score'], null);
  const usabilityScoreRaw = getScoreFromPath(results, ['usability', 'score'], getScoreFromPath(results, ['usabilityScore'], 0));
  const technicalScoreRaw = getScoreFromPath(results, ['technical', 'score'], getScoreFromPath(results, ['technicalScore'], 0));

  const toNum = (n: number | null | undefined, fb = 0) => (typeof n === 'number' && Number.isFinite(n) ? n : fb);
  const seoScore = toNum(seoScoreRaw);
  const performanceScore = toNum(performanceScoreRaw);
  const desktopScore = desktopScoreRaw;
  const mobileScore = mobileScoreRaw;
  const usabilityScore = toNum(usabilityScoreRaw);
  const technicalScore = toNum(technicalScoreRaw);

  const overallScore = Math.round((seoScore + performanceScore + usabilityScore + technicalScore) / 4);

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#22c55e'; // green
    if (score >= 60) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  const getScoreStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Needs Work';
    return 'Critical';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return '#052e14';
    if (score >= 60) return '#341c03';
    return '#3b0202';
  };

  // Build issues and recommendations from input if provided, else create defaults
  const issues: string[] = Array.isArray(results.issues) && results.issues.length ? results.issues : [];
  if (usabilityScore < 50) issues.push(`Poor User Experience (${usabilityScore}/100)`);
  if (performanceScore < 70) issues.push(`Slow Loading Speed (${performanceScore}/100)`);
  if (seoScore < 80) issues.push(`Missing SEO Elements (${seoScore}/100)`);
  if (technicalScore < 60) issues.push(`Technical Issues (${technicalScore}/100)`);

  const recommendations: string[] = Array.isArray(results.recommendations) && results.recommendations.length
    ? results.recommendations
    : [
      'Implement responsive design for better mobile experience',
      'Optimize images and code for faster loading speeds',
      'Add proper meta tags and structured data for SEO',
      'Improve user interface and call-to-action placement',
      'Set up regular monitoring and maintenance'
    ];

  // SVG circle math
  const r = 16; // radius used in SVG
  const circumference = 2 * Math.PI * r; // ~100.53
  const dashArray = circumference.toFixed(3);
  const scoreToOffset = (score: number) => ((1 - (score / 100)) * circumference).toFixed(3);

  // Fallbacks for desktop/mobile display
  const pcDisplay = desktopScore !== null && desktopScore !== undefined ? desktopScore : Math.round((performanceScore + (usabilityScore || 0)) / 2);
  const phoneDisplay = mobileScore !== null && mobileScore !== undefined ? mobileScore : Math.round((performanceScore + (usabilityScore || 0)) / 2);

  // Sanitize company and url for HTML
  const esc = (s: any) => {
    const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(s ?? '').replace(/[&<>"']/g, (c) => map[c] || c);
  };

  // Build a compact dark CSS (keeps Tailwind optional but relies mostly on our CSS so PDF is consistent)
  const fullHtml = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Website Audit - ${esc(company)}</title>
      <style>
        :root{
          --bg:#03060a; --card:#0b1116; --muted:#9aa4af; --accent:#22c55e; --primary:#112C3C; --text:#e6eef5;
        }
        html,body{height:100%;margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;}
        .wrap{max-width:920px;margin:18px auto;padding:20px}
        .header{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);border-radius:12px}
        .brand{font-weight:700;color:var(--text);letter-spacing:0.6px}
        .tag{color:var(--muted);font-size:12px}
        .hero{display:flex;gap:22px;align-items:center;padding:28px;background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:12px;margin-top:14px}
        .hero-left{flex:1}
        .headline{font-size:34px;line-height:1;letter-spacing:0.6px;margin:0 0 8px}
        .url-card{background:#fff;padding:8px 12px;border-radius:8px;color:#0b1220;display:inline-block;font-weight:600}
        .cta{border:1px solid rgba(255,255,255,0.08);padding:10px 16px;border-radius:8px;color:var(--text);display:inline-block}
        .scores{display:flex;gap:24px;align-items:center}
        .circle{width:84px;height:84px;position:relative}
        .circle svg{display:block}
        .circle .center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:700}
        .section{margin-top:18px;padding:18px;background:var(--card);border-radius:12px}
        .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        .progress{height:12px;background:#0f1720;border-radius:999px;overflow:hidden}
        .progress > i{display:block;height:100%;border-radius:999px}
        .list li{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,0.03)}
        .muted{color:var(--muted)}
        .small{font-size:12px}
        .tag-pill{padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.02);color:var(--muted);font-weight:600}
        .issue{background:#2b0f0f;padding:12px;border-radius:8px;color:#ffd7d7}
        .rec{background:#072812;padding:12px;border-radius:8px;color:#d7ffe6}
        .page-break{page-break-after: always}
        @media print{ .wrap{margin:8px} }
      </style>
    </head>
    <body>
      <div class="wrap">
        <div class="header">
          <div>
            <div class="brand">LeonLogic</div>
            <div class="muted small">KONZULTACE ZDARMA</div>
          </div>
          <div class="tag-pill small">Audit • ${new Date().toLocaleDateString()}</div>
        </div>

        <div class="hero">
          <div class="hero-left">
            <h1 class="headline">VÝSLEDEK ANALÝZY WEBU</h1>
            <div class="url-card">${esc(url)}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-end">
            <div class="scores">
              <div class="circle" title="PC">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="${r}" stroke="#1f2937" stroke-width="4" fill="transparent"></circle>
                  <circle cx="18" cy="18" r="${r}" stroke="${getScoreColor(pcDisplay)}" stroke-width="4" stroke-linecap="round" fill="transparent"
                    stroke-dasharray="${dashArray}" stroke-dashoffset="${scoreToOffset(pcDisplay)}" transform="rotate(-90 18 18)" />
                </svg>
                <div class="center">${pcDisplay}%</div>
              </div>

              <div class="circle" title="Mobile">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="${r}" stroke="#1f2937" stroke-width="4" fill="transparent"></circle>
                  <circle cx="18" cy="18" r="${r}" stroke="${getScoreColor(phoneDisplay)}" stroke-width="4" stroke-linecap="round" fill="transparent"
                    stroke-dasharray="${dashArray}" stroke-dashoffset="${scoreToOffset(phoneDisplay)}" transform="rotate(-90 18 18)" />
                </svg>
                <div class="center">${phoneDisplay}%</div>
              </div>

              <div class="circle" title="Overall">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="${r}" stroke="#1f2937" stroke-width="4" fill="transparent"></circle>
                  <circle cx="18" cy="18" r="${r}" stroke="${getScoreColor(overallScore)}" stroke-width="4" stroke-linecap="round" fill="transparent"
                    stroke-dasharray="${dashArray}" stroke-dashoffset="${scoreToOffset(overallScore)}" transform="rotate(-90 18 18)" />
                </svg>
                <div class="center" style="color:${getScoreColor(overallScore)}">${overallScore}</div>
              </div>
            </div>

            <div style="text-align:right">
              <div class="muted small">Generated for</div>
              <div style="font-weight:700">${esc(company)}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <h3 style="margin:0">PŘEHLED SKÓRE</h3>
            <div class="tag-pill small">Overall • ${overallScore}/100</div>
          </div>

          <ul class="list">
            <li><span>Clarity</span><strong>${results.clarityScore ?? 80}%</strong></li>
            <li><span>Visual Hierarchy</span><strong>${results.hierarchyScore ?? 70}%</strong></li>
            <li><span>Navigation</span><strong>${results.navigationScore ?? 75}%</strong></li>
            <li><span>Design Consistency</span><strong>${results.consistencyScore ?? 65}%</strong></li>
            <li><span>Responsiveness</span><strong>${results.responsiveScore ?? 60}%</strong></li>
            <li><span>SEO Tags</span><strong>${seoScore}%</strong></li>
            <li><span>CTAs</span><strong>${results.ctaScore ?? 70}%</strong></li>
          </ul>
        </div>

        <div class="grid" style="margin-top:18px">
          <div class="section">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <div><strong>SEO Performance</strong><div class="muted small">On-page & metadata</div></div>
              <div style="font-weight:700;color:${getScoreColor(seoScore)}">${seoScore}/100</div>
            </div>
            <div class="progress"><i style="width:${seoScore}%;background:${getScoreColor(seoScore)}"></i></div>
          </div>

          <div class="section">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <div><strong>Page Speed</strong><div class="muted small">Load times & asset optimization</div></div>
              <div style="font-weight:700;color:${getScoreColor(performanceScore)}">${performanceScore}/100</div>
            </div>
            <div class="progress"><i style="width:${performanceScore}%;background:${getScoreColor(performanceScore)}"></i></div>
          </div>

          <div class="section">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <div><strong>User Experience</strong><div class="muted small">Usability & accessibility</div></div>
              <div style="font-weight:700;color:${getScoreColor(usabilityScore)}">${usabilityScore}/100</div>
            </div>
            <div class="progress"><i style="width:${usabilityScore}%;background:${getScoreColor(usabilityScore)}"></i></div>
          </div>

          <div class="section">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <div><strong>Technical Health</strong><div class="muted small">Server, security & code</div></div>
              <div style="font-weight:700;color:${getScoreColor(technicalScore)}">${technicalScore}/100</div>
            </div>
            <div class="progress"><i style="width:${technicalScore}%;background:${getScoreColor(technicalScore)}"></i></div>
          </div>
        </div>

        <div class="section" style="margin-top:18px">
          <h3 style="margin:0 0 10px">Executive Summary</h3>
          <p class="muted small">Your website received an overall score of <strong style="color:${getScoreColor(overallScore)}">${overallScore}/100</strong>. ${overallScore >= 80 ? 'Performing excellently.' : overallScore >= 60 ? 'Good, needs targeted improvement.' : 'Significant improvements recommended.'}</p>
        </div>

        <div class="section" style="margin-top:18px">
          <h3 style="margin:0 0 10px">Critical Issues</h3>
          ${issues.length === 0 ? `<div class="issue" style="background:#07320b;color:#c7f6d0">No critical issues found — website looks healthy.</div>` : issues.map(i => `<div style="margin-bottom:8px" class="issue">• ${esc(i)}</div>`).join('')}
        </div>

        <div class="section" style="margin-top:18px">
          <h3 style="margin:0 0 10px">Recommendations</h3>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
            ${recommendations.map(r => `<div class="rec">• ${esc(r)}</div>`).join('')}
          </div>
        </div>

        <!-- New Page: SEO Deep Dive -->
        <div class="page-break"></div>
        <div class="section">
          <h3 style="margin:0 0 12px">SEO Deep Dive</h3>
          <div class="muted small" style="margin-bottom:8px">On-page factors, metadata, content signals</div>
          <div class="grid">
            <div>
              <div style="font-weight:700;margin-bottom:6px">Critical Issues</div>
              ${(results?.seo?.issues || issues).slice(0, 10).map((i: any) => `<div class="issue" style="margin-bottom:8px">• ${esc(i)}</div>`).join('') || '<div class="muted">No critical SEO issues detected.</div>'}
            </div>
            <div>
              <div style="font-weight:700;margin-bottom:6px">Recommendations</div>
              ${(results?.seo?.recommendations || recommendations).slice(0, 10).map((r: any) => `<div class="rec" style="margin-bottom:8px">• ${esc(r)}</div>`).join('')}
            </div>
          </div>
        </div>

        <!-- New Page: Performance Deep Dive -->
        <div class="page-break"></div>
        <div class="section">
          <h3 style="margin:0 0 12px">Performance Deep Dive</h3>
          <div class="muted small" style="margin-bottom:8px">Page speed, images, scripts, Core Web Vitals</div>
          <div class="grid">
            <div>
              <div style="font-weight:700;margin-bottom:6px">Desktop Score</div>
              <div class="progress" style="margin-bottom:10px"><i style="width:${pcDisplay}%;background:${getScoreColor(pcDisplay)}"></i></div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.performance?.desktop?.notes || [
      'Optimize render-blocking resources',
      'Use HTTP/2 for asset multiplexing',
      'Enable text compression (gzip/brotli)'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Actionable</span></li>`).join('')}
              </ul>
            </div>
            <div>
              <div style="font-weight:700;margin-bottom:6px">Mobile Score</div>
              <div class="progress" style="margin-bottom:10px"><i style="width:${phoneDisplay}%;background:${getScoreColor(phoneDisplay)}"></i></div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.performance?.mobile?.notes || [
      'Defer non-critical JS',
      'Compress and resize images for mobile',
      'Reduce main-thread work'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Actionable</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- New Page: UX & Conversion -->
        <div class="page-break"></div>
        <div class="section">
          <h3 style="margin:0 0 12px">User Experience & Conversion</h3>
          <div class="grid">
            <div>
              <div style="font-weight:700;margin-bottom:6px">UX Findings</div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.uxFindings || [
      'Improve visual hierarchy on landing sections',
      'Add above-the-fold primary CTA',
      'Increase contrast for accessibility'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Priority</span></li>`).join('')}
              </ul>
            </div>
            <div>
              <div style="font-weight:700;margin-bottom:6px">Conversion Ideas</div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.conversionIdeas || [
      'Add social proof (testimonials, logos)',
      'Introduce risk reversals (guarantee, free trial)',
      'Create a lead magnet to grow email list'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">High Impact</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- New Page: Technical Health -->
        <div class="page-break"></div>
        <div class="section">
          <h3 style="margin:0 0 12px">Technical Health</h3>
          <div class="grid">
            <div>
              <div style="font-weight:700;margin-bottom:6px">Infrastructure</div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.technical?.notes || [
      'Ensure SSL and HTTPS redirect',
      'Add/validate robots.txt and sitemap.xml',
      'Implement structured data where applicable'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Check</span></li>`).join('')}
              </ul>
            </div>
            <div>
              <div style="font-weight:700;margin-bottom:6px">Stack & Integrations</div>
              <div class="muted small" style="margin-bottom:8px">Detected: ${(Array.isArray(results?.seo?.technologyStack) ? results.seo.technologyStack : []).join(', ') || 'n/a'}</div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.stackIdeas || [
      'Use a CDN for global delivery',
      'Adopt image CDN with AVIF/WebP',
      'Set up server-side logging and monitoring'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Suggestion</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- New Page: 90-Day Action Plan -->
        <div class="page-break"></div>
        <div class="section">
          <h3 style="margin:0 0 12px">90-Day Action Plan</h3>
          <div class="grid">
            <div>
              <div style="font-weight:700;margin-bottom:6px">Phase 1 (Weeks 1-3)</div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.planPhase1 || [
      'Fix critical SEO/meta issues',
      'Compress and lazy-load images',
      'Implement primary CTA and above-the-fold improvements'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Do Now</span></li>`).join('')}
              </ul>
            </div>
            <div>
              <div style="font-weight:700;margin-bottom:6px">Phase 2 (Weeks 4-8)</div>
              <ul class="list" style="list-style:none;padding:0;margin:0">
                ${(results?.planPhase2 || [
      'Improve mobile performance (reduce JS)',
      'Add social proof and case studies',
      'Strengthen internal linking and content depth'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Next</span></li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="section" style="margin-top:12px">
            <div style="font-weight:700;margin-bottom:6px">Phase 3 (Weeks 9-12)</div>
            <ul class="list" style="list-style:none;padding:0;margin:0">
              ${(results?.planPhase3 || [
      'Implement schema and advanced tracking',
      'Iterate on UX via A/B testing',
      'Launch content calendar for SEO growth'
    ]).map((n: any) => `<li><span>${esc(n)}</span><span class="muted small">Then</span></li>`).join('')}
            </ul>
          </div>
        </div>

        <div style="margin-top:18px;text-align:center">
          <div style="display:inline-block;padding:14px 18px;border-radius:12px;background:linear-gradient(90deg,var(--accent),#16a34a);color:#04140a;font-weight:700">Ready to transform your website? Visit leonlogic.com</div>
        </div>

        <div style="margin-top:18px;text-align:center;color:var(--muted);font-size:12px">This audit was generated by LeonLogic • © ${new Date().getFullYear()} LeonLogic</div>
      </div>
    </body>
    </html>
  `;

  // Launch puppeteer with production-optimized settings
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport and user agent for consistent rendering
    await page.setViewport({ width: 1200, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    
    // Wait for fonts and rendering to complete
    await new Promise(r => setTimeout(r, 1000));

    const contactUrl = 'https://leonlogic.com/contact-us';
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '28mm', right: '12mm', bottom: '20mm', left: '12mm' },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size:10px;width:100%;padding:6px 12px;display:flex;align-items:center;justify-content:space-between;">
          <div style="color:#64748b;">Website Audit • ${esc(company)}</div>
          <a href="${contactUrl}" style="background:#22c55e;color:#04140a;text-decoration:none;padding:6px 10px;border-radius:999px;font-weight:700;">I need advise</a>
        </div>
      `,
      footerTemplate: `
        <div style="font-size:10px;width:100%;padding:6px 12px;display:flex;align-items:center;justify-content:space-between;color:#64748b;">
          <div>${esc(url)}</div>
          <div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>
        </div>
      `,
      preferCSSPageSize: true
    });

    return pdfBuffer;
  } finally {
    await browser.close();
  }
}
