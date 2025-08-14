// /app/api/generate-pdf/route.ts  (App Router)
// or /pages/api/generate-pdf.ts   (Pages Router — remove the `export const runtime` line)

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

// App Router only; delete this line if using Pages Router
export const runtime = 'nodejs';

// ---------- Types & small helpers ----------
type Num = number | null | undefined;
const toNum = (n: Num, fb = 0) => (typeof n === 'number' && Number.isFinite(n) ? n : fb);

function getScoreFromPath(obj: any, pathArr: string[], fallback: number | null = 0): number | null {
  try {
    let cur = obj;
    for (const p of pathArr) {
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

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
const colorForScore = (s: number) => (s >= 80 ? '#22c55e' : s >= 60 ? '#f59e0b' : '#ef4444');

const todayStr = () => {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}.${mm}.${d.getFullYear()}`;
};

// ---------- jsPDF-only generator ----------
async function generatePDF(url: string, company: string, results: any): Promise<Buffer> {
  // Dynamic import to avoid including in edge bundles
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4', compress: true });

  // Embed a Unicode font (fixes diacritics like "Ř")
  let fontName = 'NotoSans';
  try {
    const fontPath = path.join(process.cwd(), 'public', 'fonts', 'NotoSans-Regular.ttf');
    const fontBuf = await fs.readFile(fontPath);
    (doc as any).addFileToVFS('NotoSans-Regular.ttf', fontBuf.toString('base64'));
    (doc as any).addFont('NotoSans-Regular.ttf', 'NotoSans', 'normal');
    doc.setFont('NotoSans', 'normal');
  } catch (e) {
    console.warn('[pdf] Unicode font not found — falling back to Helvetica.', e);
    fontName = 'helvetica';
    doc.setFont('helvetica', 'normal');
  }

  // Page & theme
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const theme = {
    bg: '#03060a',
    card: '#0b1116',
    muted: '#9aa4af',
    text: '#e6eef5',
    gray: '#1f2937',
  };

  // --- helpers (no setLineDash used anywhere) ---
  const rrect = (x: number, y: number, w: number, h: number, r = 12, fill = theme.card) => {
    doc.setFillColor(fill);
    if ((doc as any).roundedRect) (doc as any).roundedRect(x, y, w, h, r, r, 'F');
    else doc.rect(x, y, w, h, 'F');
  };

  // Draw a dotted horizontal line (replaces setLineDash)
  const dottedH = (
    x1: number,
    y: number,
    x2: number,
    seg = 2,
    gap = 3,
    color = '#1a2630'
  ) => {
    doc.setDrawColor(color);
    doc.setLineWidth(0.5);
    let x = x1;
    while (x < x2) {
      const nx = Math.min(x + seg, x2);
      doc.line(x, y, nx, y);
      x = nx + gap;
    }
  };

  const text = (
    s: string,
    x: number,
    y: number,
    fs = 12,
    color = theme.text,
    bold = false
  ) => {
    doc.setTextColor(color);
    doc.setFontSize(fs);
    doc.setFont(fontName, bold ? 'bold' : 'normal');
    doc.text(s, x, y);
  };

  const wrap = (
    s: string,
    x: number,
    y: number,
    maxW: number,
    lh = 16,
    fs = 12,
    color = theme.text,
    bold = false
  ) => {
    doc.setTextColor(color);
    doc.setFontSize(fs);
    doc.setFont(fontName, bold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(s, maxW);
    let yy = y;
    for (const ln of lines as string[]) {
      doc.text(ln, x, yy);
      yy += lh;
    }
    return yy;
  };

  const progress = (x: number, y: number, w: number, h: number, pct: number, color: string) => {
    // track
    doc.setFillColor('#0f1720');
    rrect(x, y, w, h, h / 2, '#0f1720');
    // bar
    const ww = (clamp(pct, 0, 100) / 100) * w;
    doc.setFillColor(color);
    rrect(x, y, ww, h, h / 2, color);
  };

  const arc = (
    cx: number,
    cy: number,
    r: number,
    startDeg: number,
    endDeg: number,
    lw = 6,
    color = theme.text
  ) => {
    const steps = 64;
    const s = (startDeg * Math.PI) / 180;
    const e = (endDeg * Math.PI) / 180;
    const len = Math.max(4, Math.floor((steps * Math.abs(e - s)) / (2 * Math.PI)));
    doc.setDrawColor(color);
    doc.setLineWidth(lw);
    let px = cx + r * Math.cos(s);
    let py = cy + r * Math.sin(s);
    for (let i = 1; i <= len; i++) {
      const t = s + ((e - s) * i) / len;
      const x = cx + r * Math.cos(t);
      const y = cy + r * Math.sin(t);
      doc.line(px, py, x, y);
      px = x;
      py = y;
    }
  };

  const ring = (
    x: number,
    y: number,
    size: number,
    pct: number,
    color: string,
    label?: string
  ) => {
    const cx = x + size / 2;
    const cy = y + size / 2;
    const rr = size / 2 - 6;

    // background ring
    arc(cx, cy, rr, -90, 270, 6, theme.gray);
    // progress
    const endAngle = -90 + (clamp(pct, 0, 100) / 100) * 360;
    arc(cx, cy, rr, -90, endAngle, 6, color);

    text(`${Math.round(clamp(pct, 0, 100))}${label ? '' : '%'}`, cx, cy + 5, 12, theme.text, true);
    if (label) text(label, cx, cy + 18, 9, theme.muted);
  };

  // ---------- data from results ----------
  const seo = toNum(getScoreFromPath(results, ['seo', 'score'], getScoreFromPath(results, ['seoScore'], 0)));
  const perf = toNum(getScoreFromPath(results, ['performance', 'score'], getScoreFromPath(results, ['performanceScore'], 0)));
  const desktop = getScoreFromPath(results, ['performance', 'desktop', 'score'], null);
  const mobile = getScoreFromPath(results, ['performance', 'mobile', 'score'], null);
  const usab = toNum(getScoreFromPath(results, ['usability', 'score'], getScoreFromPath(results, ['usabilityScore'], 0)));
  const tech = toNum(getScoreFromPath(results, ['technical', 'score'], getScoreFromPath(results, ['technicalScore'], 0)));

  const overall = Math.round((seo + perf + usab + tech) / 4);
  const pcDisplay = desktop ?? Math.round((perf + usab) / 2);
  const mobDisplay = mobile ?? Math.round((perf + usab) / 2);

  const issues: string[] =
    Array.isArray(results?.issues) && results.issues.length ? [...results.issues] : [];
  if (usab < 50) issues.push(`Poor User Experience (${usab}/100)`);
  if (perf < 70) issues.push(`Slow Loading Speed (${perf}/100)`);
  if (seo < 80) issues.push(`Missing SEO Elements (${seo}/100)`);
  if (tech < 60) issues.push(`Technical Issues (${tech}/100)`);

  const recs: string[] =
    Array.isArray(results?.recommendations) && results.recommendations.length
      ? results.recommendations
      : [
          'Implement responsive design for better mobile experience',
          'Optimize images and code for faster loading speeds',
          'Add proper meta tags and structured data for SEO',
          'Improve user interface and call-to-action placement',
          'Set up regular monitoring and maintenance',
        ];

  // ---------- PAGE 1 ----------
  doc.setFillColor(theme.bg);
  doc.rect(0, 0, W, H, 'F');

  // Header
  rrect(36, 36, W - 72, 56, 12, '#0e151c');
  text('LeonLogic', 52, 68, 16, theme.text, true);
  text('KONZULTACE ZDARMA', 52, 86, 10, theme.muted);
  rrect(W - 196, 48, 160, 28, 14, '#111827');
  text(`Audit • ${todayStr()}`, W - 184, 67, 10, theme.muted);

  // Hero
  rrect(36, 106, W - 72, 120, 12, '#0e151c');
  text('VÝSLEDEK ANALÝZY WEBU', 52, 140, 22, theme.text, true);
  rrect(52, 152, Math.min(420, W - 104), 26, 8, '#ffffff');
  text(url, 60, 170, 11, '#0b1220', true);

  // Rings + "Generated for"
  const rightX = W - 36 - 300;
  ring(rightX, 120, 70, pcDisplay, colorForScore(pcDisplay), 'PC');
  ring(rightX + 90, 120, 70, mobDisplay, colorForScore(mobDisplay), 'Mobile');
  ring(rightX + 180, 120, 70, overall, colorForScore(overall), 'Overall');
  text('Generated for', rightX + 180, 212, 9, theme.muted);
  text(company, rightX + 180, 226, 12, theme.text, true);

  // PŘEHLED SKÓRE
  const top = 240;
  rrect(36, top, W - 72, 150);
  text('PŘEHLED SKÓRE', 52, top + 24, 14, theme.text, true);
  rrect(W - 36 - 130, top + 10, 130, 26, 12, '#111827');
  text(`Overall • ${overall}/100`, W - 36 - 118, top + 27, 10, theme.muted);

  const infoItems: [string, string][] = [
    ['Clarity', `${results.clarityScore ?? 80}%`],
    ['Visual Hierarchy', `${results.hierarchyScore ?? 70}%`],
    ['Navigation', `${results.navigationScore ?? 75}%`],
    ['Design Consistency', `${results.consistencyScore ?? 65}%`],
    ['Responsiveness', `${results.responsiveScore ?? 60}%`],
    ['SEO Tags', `${seo}%`],
    ['CTAs', `${results.ctaScore ?? 70}%`],
  ];
  let yy = top + 48;
  const listLeft = 52;
  infoItems.forEach(([k, v]: [string, string]) => {
    text(k, listLeft, yy, 11, theme.text);
    text(v, W - 86, yy, 11, theme.text, true);
    dottedH(listLeft, yy + 4, W - 96);
    yy += 18;
  });

  // Metric cards (2x2)
  const gridTop = top + 170;
  const colW = (W - 72 - 16) / 2;
  const rowH = 84;
  const metrics: { title: string; desc: string; score: number }[] = [
    { title: 'SEO Performance', desc: 'On-page & metadata', score: seo },
    { title: 'Page Speed', desc: 'Load times & asset optimization', score: perf },
    { title: 'User Experience', desc: 'Usability & accessibility', score: usab },
    { title: 'Technical Health', desc: 'Server, security & code', score: tech },
  ];
  metrics.forEach((m: { title: string; desc: string; score: number }, i: number) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 36 + col * (colW + 16);
    const y = gridTop + row * (rowH + 12);
    rrect(x, y, colW, rowH);
    text(m.title, x + 16, y + 22, 12, theme.text, true);
    text(m.desc, x + 16, y + 38, 10, theme.muted);
    text(`${m.score}/100`, x + colW - 16, y + 22, 12, colorForScore(m.score), true);
    progress(x + 16, y + 52, colW - 32, 12, m.score, colorForScore(m.score));
  });

  // Executive Summary
  const afterGridY = gridTop + 2 * (rowH + 12);
  rrect(36, afterGridY, W - 72, 64);
  text('Executive Summary', 52, afterGridY + 22, 12, theme.text, true);
  wrap(
    `Your website received an overall score of ${overall}/100. ` +
      (overall >= 80
        ? 'Performing excellently.'
        : overall >= 60
        ? 'Good, needs targeted improvement.'
        : 'Significant improvements recommended.'),
    52,
    afterGridY + 40,
    W - 104,
    14,
    10,
    theme.muted
  );

  // Critical Issues
  const issuesTop = afterGridY + 80;
  rrect(36, issuesTop, W - 72, 160);
  text('Critical Issues', 52, issuesTop + 22, 12, theme.text, true);
  if (!issues.length) {
    rrect(52, issuesTop + 32, W - 104, 32, 8, '#07320b');
    text('No critical issues found — website looks healthy.', 62, issuesTop + 52, 10, '#c7f6d0');
  } else {
    let iy = issuesTop + 42;
    issues.slice(0, 6).forEach((iTxt: string) => {
      rrect(52, iy, W - 104, 26, 8, '#2b0f0f');
      wrap(`• ${iTxt}`, 62, iy + 18, W - 124, 14, 10, '#ffd7d7');
      iy += 30;
    });
  }

  // Recommendations
  const recTop = issuesTop + 172;
  rrect(36, recTop, W - 72, 160);
  text('Recommendations', 52, recTop + 22, 12, theme.text, true);
  const recW = (W - 104 - 10) / 2;
  let rx = 52;
  let ry = recTop + 36;
  recs.slice(0, 8).forEach((r: string, idx: number) => {
    rrect(rx, ry, recW, 40, 8, '#072812');
    wrap(`• ${r}`, rx + 10, ry + 24, recW - 20, 14, 10, '#d7ffe6');
    if (idx % 2 === 0) rx = 52 + recW + 10;
    else {
      rx = 52;
      ry += 48;
    }
  });

  // ---------- PAGE 2: SEO Deep Dive ----------
  doc.addPage();
  doc.setFillColor(theme.bg);
  doc.rect(0, 0, W, H, 'F');
  rrect(36, 36, W - 72, 40);
  text('SEO Deep Dive', 52, 62, 14, theme.text, true);
  text('On-page factors, metadata, content signals', 52, 80, 10, theme.muted);

  const colW2 = (W - 72 - 16) / 2;
  const c1 = 36;
  const c2 = 36 + colW2 + 16;
  let c1y = 100;
  let c2y = 100;

  text('Critical Issues', c1 + 16, c1y, 12, theme.text, true);
  c1y += 10;
  (results?.seo?.issues?.length ? (results.seo.issues as string[]) : issues).slice(0, 10).forEach((it: string) => {
    rrect(c1 + 12, c1y + 8, colW2 - 24, 26, 8, '#2b0f0f');
    wrap(`• ${it}`, c1 + 20, c1y + 26, colW2 - 40, 14, 10, '#ffd7d7');
    c1y += 32;
  });

  text('Recommendations', c2 + 16, c2y, 12, theme.text, true);
  c2y += 10;
  (results?.seo?.recommendations?.length ? (results.seo.recommendations as string[]) : recs)
    .slice(0, 10)
    .forEach((rt: string) => {
      rrect(c2 + 12, c2y + 8, colW2 - 24, 26, 8, '#072812');
      wrap(`• ${rt}`, c2 + 20, c2y + 26, colW2 - 40, 14, 10, '#d7ffe6');
      c2y += 32;
    });

  // ---------- PAGE 3: Performance Deep Dive ----------
  doc.addPage();
  doc.setFillColor(theme.bg);
  doc.rect(0, 0, W, H, 'F');
  text('Performance Deep Dive', 52, 62, 14, theme.text, true);
  text('Page speed, images, scripts, Core Web Vitals', 52, 80, 10, theme.muted);

  rrect(36, 96, W - 72, 92);
  text('Desktop Score', 52, 118, 12, theme.text, true);
  progress(52, 130, W - 104, 14, pcDisplay, colorForScore(pcDisplay));
  const dNotes: string[] =
    results?.performance?.desktop?.notes ??
    ['Optimize render-blocking resources', 'Use HTTP/2 for asset multiplexing', 'Enable text compression (gzip/brotli)'];
  let dy = 158;
  dNotes.forEach((n: string) => {
    text('•', 52, dy, 10, theme.text);
    dy = wrap(n, 64, dy, W - 116, 14, 10, theme.muted) + 6;
  });

  const mt = dy + 12;
  rrect(36, mt, W - 72, 92);
  text('Mobile Score', 52, mt + 22, 12, theme.text, true);
  progress(52, mt + 34, W - 104, 14, mobDisplay, colorForScore(mobDisplay));
  const mNotes: string[] =
    results?.performance?.mobile?.notes ??
    ['Defer non-critical JS', 'Compress and resize images for mobile', 'Reduce main-thread work'];
  let my = mt + 62;
  mNotes.forEach((n: string) => {
    text('•', 52, my, 10, theme.text);
    my = wrap(n, 64, my, W - 116, 14, 10, theme.muted) + 6;
  });

  // ---------- PAGE 4: UX & Conversion ----------
  doc.addPage();
  doc.setFillColor(theme.bg);
  doc.rect(0, 0, W, H, 'F');
  text('User Experience & Conversion', 52, 62, 14, theme.text, true);

  const ux: string[] =
    results?.uxFindings ?? [
      'Improve visual hierarchy on landing sections',
      'Add above-the-fold primary CTA',
      'Increase contrast for accessibility',
    ];
  const conv: string[] =
    results?.conversionIdeas ?? [
      'Add social proof (testimonials, logos)',
      'Introduce risk reversals (guarantee, free trial)',
      'Create a lead magnet to grow email list',
    ];

  const boxW = (W - 72 - 16) / 2;
  rrect(36, 90, boxW, 200);
  text('UX Findings', 52, 112, 12, theme.text, true);
  let uy = 132;
  ux.forEach((n: string) => {
    text('•', 52, uy, 10, theme.text);
    uy = wrap(n, 64, uy, boxW - 28, 14, 10, theme.muted) + 6;
  });

  const bx2 = 36 + boxW + 16;
  rrect(bx2, 90, boxW, 200);
  text('Conversion Ideas', bx2 + 16, 112, 12, theme.text, true);
  let cy = 132;
  conv.forEach((n: string) => {
    text('•', bx2 + 16, cy, 10, theme.text);
    cy = wrap(n, bx2 + 28, cy, boxW - 28, 14, 10, theme.muted) + 6;
  });

  // ---------- PAGE 5: Technical Health & 90-Day Plan ----------
  doc.addPage();
  doc.setFillColor(theme.bg);
  doc.rect(0, 0, W, H, 'F');
  text('Technical Health', 52, 62, 14, theme.text, true);

  const techNotes: string[] =
    results?.technical?.notes ?? [
      'Ensure SSL and HTTPS redirect',
      'Add/validate robots.txt and sitemap.xml',
      'Implement structured data where applicable',
    ];
  const stackIdeas: string[] =
    results?.stackIdeas ?? [
      'Use a CDN for global delivery',
      'Adopt image CDN with AVIF/WebP',
      'Set up server-side logging and monitoring',
    ];
  const techStack: string[] = Array.isArray(results?.seo?.technologyStack)
    ? (results.seo.technologyStack as string[])
    : [];

  rrect(36, 90, W - 72, 110);
  text('Infrastructure', 52, 112, 12, theme.text, true);
  let ty = 132;
  techNotes.forEach((n: string) => {
    text('•', 52, ty, 10, theme.text);
    ty = wrap(n, 64, ty, W - 116, 14, 10, theme.muted) + 6;
  });

  const t2 = ty + 16;
  rrect(36, t2, W - 72, 120);
  text('Stack & Integrations', 52, t2 + 22, 12, theme.text, true);
  text(`Detected: ${techStack.join(', ') || 'n/a'}`, 52, t2 + 40, 10, theme.muted);
  let sy = t2 + 58;
  stackIdeas.forEach((n: string) => {
    text('•', 52, sy, 10, theme.text);
    sy = wrap(n, 64, sy, W - 116, 14, 10, theme.muted) + 6;
  });

  // 90-Day Action Plan
  text('90-Day Action Plan', 52, sy + 30, 14, theme.text, true);
  const plan1: string[] =
    results?.planPhase1 ?? [
      'Fix critical SEO/meta issues',
      'Compress and lazy-load images',
      'Implement primary CTA and above-the-fold improvements',
    ];
  const plan2: string[] =
    results?.planPhase2 ?? [
      'Improve mobile performance (reduce JS)',
      'Add social proof and case studies',
      'Strengthen internal linking and content depth',
    ];
  const plan3: string[] =
    results?.planPhase3 ?? [
      'Implement schema and advanced tracking',
      'Iterate on UX via A/B testing',
      'Launch content calendar for SEO growth',
    ];

  const p1Top = sy + 50;
  rrect(36, p1Top, W - 72, 100);
  text('Phase 1 (Weeks 1–3)', 52, p1Top + 22, 12, theme.text, true);
  let p1y = p1Top + 42;
  plan1.forEach((n: string) => {
    text('•', 52, p1y, 10, theme.text);
    p1y = wrap(n, 64, p1y, W - 116, 14, 10, theme.muted) + 6;
  });

  const p2Top = p1y + 16;
  rrect(36, p2Top, W - 72, 110);
  text('Phase 2 (Weeks 4–8)', 52, p2Top + 22, 12, theme.text, true);
  let p2y = p2Top + 42;
  plan2.forEach((n: string) => {
    text('•', 52, p2y, 10, theme.text);
    p2y = wrap(n, 64, p2y, W - 116, 14, 10, theme.muted) + 6;
  });

  const p3Top = p2y + 16;
  rrect(36, p3Top, W - 72, 110);
  text('Phase 3 (Weeks 9–12)', 52, p3Top + 22, 12, theme.text, true);
  let p3y = p3Top + 42;
  plan3.forEach((n: string) => {
    text('•', 52, p3y, 10, theme.text);
    p3y = wrap(n, 64, p3y, W - 116, 14, 10, theme.muted) + 6;
  });

  // Footer on each page
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setTextColor('#64748b');
    doc.setFontSize(9);
    doc.text(url, 36, H - 18);
    doc.text(`Page ${i} of ${pages}`, W - 36, H - 18, { align: 'right' as any });
  }

  const arr = doc.output('arraybuffer') as ArrayBuffer;
  return Buffer.from(arr);
}

// ---------- API route ----------
export async function POST(request: NextRequest) {
  try {
    const { url, company, results } = await request.json();
    if (!url || !company || !results) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    // jsPDF-only path
    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await generatePDF(url, company, results);
    } catch (e) {
      console.error('[pdf] jsPDF generation failed:', e);
      return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 });
    }

    // Upload to Supabase Storage
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const safeName = String(company).replace(/[^a-z0-9\-_.]/gi, '_');
    const fileName = `${safeName}-${Date.now()}.pdf`;

    const { error: uploadError } = await supabase.storage
      .from('audit-pdfs')
      .upload(fileName, pdfBuffer, { contentType: 'application/pdf', upsert: true });
    if (uploadError) console.error('[pdf] Supabase upload error:', uploadError);

    const { data: urlData } = supabase.storage.from('audit-pdfs').getPublicUrl(fileName);
    const publicUrl: string | null =
      (urlData as any)?.publicUrl ?? (urlData as any)?.public_url ?? null;

    if (publicUrl) {
      try {
        await supabase.from('audit_leads').update({ pdf_url: publicUrl }).eq('company_name', company);

        // Best-effort email trigger
        try {
          const origin = new URL(request.url).origin;
          fetch(`${origin}/api/audit/send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, company, pdfUrl: publicUrl }),
          }).catch(() => {});
        } catch {}
      } catch (dbErr) {
        console.error('[pdf] audit_leads update failed:', dbErr);
      }
    }

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${company}-website-audit.pdf"`,
      },
    });
  } catch (error) {
    console.error('[pdf] PDF Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
