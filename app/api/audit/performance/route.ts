import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const performanceAnalysis = await analyzePerformance(url);
    
    return NextResponse.json(performanceAnalysis);
  } catch (error) {
    console.error('Performance Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze performance' }, { status: 500 });
  }
}

async function analyzePerformance(url: string) {
  try {
    // Use Google PageSpeed Insights API (free tier)
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY || '';
    
    let mobileData = null;
    let desktopData = null;

    if (apiKey) {
      // Mobile analysis
      const mobileResponse = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${apiKey}`
      );
      mobileData = await mobileResponse.json();

      // Desktop analysis
      const desktopResponse = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=desktop&key=${apiKey}`
      );
      desktopData = await desktopResponse.json();
    }

    // Fallback analysis without API key
    const fallbackAnalysis = await performFallbackAnalysis(url);

    const performanceData = {
      score: 0,
      mobileSpeed: 'Unknown',
      desktopSpeed: 'Unknown',
      coreVitals: 'Unknown',
      loadTime: 0,
      pageSize: 0,
      recommendations: [] as string[],
      issues: [] as string[],
      mobileScore: 0,
      desktopScore: 0,
      lcp: 0,
      fid: 0,
      cls: 0
    };

    if (mobileData && desktopData) {
      // Process Google PageSpeed data
      performanceData.mobileScore = Math.round(mobileData.lighthouseResult?.categories?.performance?.score * 100) || 0;
      performanceData.desktopScore = Math.round(desktopData.lighthouseResult?.categories?.performance?.score * 100) || 0;
      performanceData.score = Math.round((performanceData.mobileScore + performanceData.desktopScore) / 2);

      // Core Web Vitals
      const mobileMetrics = mobileData.lighthouseResult?.audits;
      if (mobileMetrics) {
        performanceData.lcp = mobileMetrics['largest-contentful-paint']?.numericValue / 1000 || 0;
        performanceData.fid = mobileMetrics['max-potential-fid']?.numericValue || 0;
        performanceData.cls = mobileMetrics['cumulative-layout-shift']?.numericValue || 0;
      }

      // Set speed categories
      performanceData.mobileSpeed = getSpeedCategory(performanceData.mobileScore);
      performanceData.desktopSpeed = getSpeedCategory(performanceData.desktopScore);
      performanceData.coreVitals = getCoreVitalsCategory(performanceData.lcp, performanceData.fid, performanceData.cls);

      // Generate recommendations based on scores
      if (performanceData.mobileScore < 50) {
        performanceData.recommendations.push('Optimize images and reduce JavaScript bundle size for mobile');
      }
      if (performanceData.desktopScore < 50) {
        performanceData.recommendations.push('Implement lazy loading and optimize server response time');
      }
      if (performanceData.lcp > 2.5) {
        performanceData.recommendations.push('Improve Largest Contentful Paint by optimizing images and server response');
      }
      if (performanceData.fid > 100) {
        performanceData.recommendations.push('Reduce First Input Delay by minimizing JavaScript execution time');
      }
      if (performanceData.cls > 0.1) {
        performanceData.recommendations.push('Fix Cumulative Layout Shift by setting proper image dimensions');
      }
    } else {
      // Use fallback analysis
      performanceData.score = fallbackAnalysis.score;
      performanceData.mobileSpeed = fallbackAnalysis.mobileSpeed;
      performanceData.desktopSpeed = fallbackAnalysis.desktopSpeed;
      performanceData.coreVitals = fallbackAnalysis.coreVitals;
      performanceData.recommendations = fallbackAnalysis.recommendations;
      performanceData.issues = fallbackAnalysis.issues;
    }

    return performanceData;
  } catch (error) {
    console.error('Error analyzing performance:', error);
    return {
      score: 0,
      mobileSpeed: 'Error',
      desktopSpeed: 'Error',
      coreVitals: 'Error',
      recommendations: ['Failed to analyze performance'],
      issues: ['Please check if the URL is accessible']
    };
  }
}

async function performFallbackAnalysis(url: string) {
  try {
    const startTime = Date.now();
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
      }
    });
    const endTime = Date.now();
    const loadTime = endTime - startTime;

    const html = await response.text();
    const pageSize = new Blob([html]).size;

    let score = 100;
    const recommendations: string[] = [];
    const issues: string[] = [];

    // Basic performance checks
    if (loadTime > 3000) {
      score -= 30;
      issues.push('Page load time is slow (>3 seconds)');
      recommendations.push('Optimize server response time and implement caching');
    } else if (loadTime > 2000) {
      score -= 15;
      recommendations.push('Consider implementing CDN and image optimization');
    }

    if (pageSize > 2000000) { // 2MB
      score -= 25;
      issues.push('Page size is very large (>2MB)');
      recommendations.push('Compress images and minify CSS/JavaScript');
    } else if (pageSize > 1000000) { // 1MB
      score -= 10;
      recommendations.push('Optimize images and remove unused resources');
    }

    // Check for common performance issues
    const imgMatches = html.match(/<img[^>]*>/gi);
    const imgCount = imgMatches ? imgMatches.length : 0;
    
    if (imgCount > 20) {
      score -= 10;
      recommendations.push('Consider lazy loading for images');
    }

    const scriptMatches = html.match(/<script[^>]*>/gi);
    const scriptCount = scriptMatches ? scriptMatches.length : 0;
    
    if (scriptCount > 10) {
      score -= 10;
      recommendations.push('Minimize and combine JavaScript files');
    }

    return {
      score: Math.max(0, score),
      mobileSpeed: score >= 80 ? 'Fast' : score >= 60 ? 'Moderate' : 'Slow',
      desktopSpeed: score >= 80 ? 'Fast' : score >= 60 ? 'Moderate' : 'Slow',
      coreVitals: score >= 80 ? 'Good' : score >= 60 ? 'Needs Improvement' : 'Poor',
      recommendations,
      issues
    };
  } catch (error) {
    return {
      score: 0,
      mobileSpeed: 'Error',
      desktopSpeed: 'Error',
      coreVitals: 'Error',
      recommendations: ['Failed to analyze performance'],
      issues: ['Please check if the URL is accessible']
    };
  }
}

function getSpeedCategory(score: number): string {
  if (score >= 90) return 'Excellent';
  if (score >= 80) return 'Fast';
  if (score >= 60) return 'Moderate';
  if (score >= 40) return 'Slow';
  return 'Very Slow';
}

function getCoreVitalsCategory(lcp: number, fid: number, cls: number): string {
  const lcpGood = lcp <= 2.5;
  const fidGood = fid <= 100;
  const clsGood = cls <= 0.1;

  if (lcpGood && fidGood && clsGood) return 'Good';
  if (lcpGood || fidGood || clsGood) return 'Needs Improvement';
  return 'Poor';
} 