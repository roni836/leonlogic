import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const usabilityAnalysis = await analyzeUsability(url);
    
    return NextResponse.json(usabilityAnalysis);
  } catch (error) {
    console.error('Usability Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze usability' }, { status: 500 });
  }
}

async function analyzeUsability(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
      }
    });
    
    const html = await response.text();
    
    const usabilityData = {
      score: 100,
      mobileResponsive: false,
      hasViewport: false,
      hasTouchTargets: false,
      hasReadableFonts: false,
      hasGoodContrast: false,
      hasNavigation: false,
      hasContactInfo: false,
      hasCallToAction: false,
      issues: [] as string[],
      recommendations: [] as string[]
    };

    // Check for viewport meta tag
    const viewportMatch = html.match(/<meta[^>]*name=["']viewport["'][^>]*>/i);
    if (viewportMatch) {
      usabilityData.hasViewport = true;
    } else {
      usabilityData.score -= 20;
      usabilityData.issues.push('Missing viewport meta tag for mobile responsiveness');
      usabilityData.recommendations.push('Add viewport meta tag for proper mobile display');
    }

    // Check for mobile-friendly elements
    const mediaQueryMatch = html.match(/@media[^}]*max-width[^}]*}/gi);
    if (mediaQueryMatch && mediaQueryMatch.length > 0) {
      usabilityData.mobileResponsive = true;
    } else {
      usabilityData.score -= 25;
      usabilityData.issues.push('No responsive design detected');
      usabilityData.recommendations.push('Implement responsive design with CSS media queries');
    }

    // Check for navigation menu
    const navMatches = html.match(/<nav[^>]*>|<ul[^>]*class[^>]*nav|<div[^>]*class[^>]*nav/gi);
    if (navMatches && navMatches.length > 0) {
      usabilityData.hasNavigation = true;
    } else {
      usabilityData.score -= 15;
      usabilityData.issues.push('Missing or unclear navigation menu');
      usabilityData.recommendations.push('Add clear navigation menu for better user experience');
    }

    // Check for contact information
    const contactMatches = html.match(/contact|phone|email|address/gi);
    if (contactMatches && contactMatches.length > 0) {
      usabilityData.hasContactInfo = true;
    } else {
      usabilityData.score -= 10;
      usabilityData.issues.push('Contact information not easily found');
      usabilityData.recommendations.push('Make contact information easily accessible');
    }

    // Check for call-to-action buttons
    const ctaMatches = html.match(/<button[^>]*>|<a[^>]*class[^>]*btn|<input[^>]*type=["']submit["']/gi);
    if (ctaMatches && ctaMatches.length > 0) {
      usabilityData.hasCallToAction = true;
    } else {
      usabilityData.score -= 15;
      usabilityData.issues.push('Missing clear call-to-action buttons');
      usabilityData.recommendations.push('Add prominent call-to-action buttons');
    }

    // Check for touch-friendly elements (buttons/links with sufficient size)
    const touchTargetMatches = html.match(/<button[^>]*>|<a[^>]*>/gi);
    if (touchTargetMatches && touchTargetMatches.length > 0) {
      usabilityData.hasTouchTargets = true;
    }

    // Check for readable fonts
    const fontMatches = html.match(/font-size|font-family/gi);
    if (fontMatches && fontMatches.length > 0) {
      usabilityData.hasReadableFonts = true;
    }

    // Check for good contrast (basic check)
    const colorMatches = html.match(/color|background/gi);
    if (colorMatches && colorMatches.length > 0) {
      usabilityData.hasGoodContrast = true;
    }

    // Additional mobile-specific checks
    const mobileIssues = [];
    
    // Check for Flash usage (not mobile-friendly)
    const flashMatches = html.match(/<object[^>]*flash|<embed[^>]*flash/gi);
    if (flashMatches && flashMatches.length > 0) {
      mobileIssues.push('Flash content detected (not supported on mobile)');
      usabilityData.score -= 20;
    }

    // Check for iframes (can cause mobile issues)
    const iframeMatches = html.match(/<iframe[^>]*>/gi);
    if (iframeMatches && iframeMatches.length > 3) {
      mobileIssues.push('Too many iframes can cause mobile performance issues');
      usabilityData.score -= 10;
    }

    // Check for large images without responsive handling
    const imgMatches = html.match(/<img[^>]*>/gi);
    if (imgMatches) {
      const responsiveImgMatches = html.match(/<img[^>]*style[^>]*max-width|<img[^>]*class[^>]*responsive/gi);
      if (!responsiveImgMatches || responsiveImgMatches.length < imgMatches.length * 0.5) {
        mobileIssues.push('Images may not be properly optimized for mobile');
        usabilityData.score -= 10;
      }
    }

    // Generate recommendations based on findings
    if (!usabilityData.mobileResponsive) {
      usabilityData.recommendations.push('Implement mobile-first responsive design');
    }
    if (!usabilityData.hasViewport) {
      usabilityData.recommendations.push('Add viewport meta tag for mobile optimization');
    }
    if (!usabilityData.hasNavigation) {
      usabilityData.recommendations.push('Create clear, mobile-friendly navigation');
    }
    if (!usabilityData.hasCallToAction) {
      usabilityData.recommendations.push('Add prominent, touch-friendly call-to-action buttons');
    }
    if (mobileIssues.length > 0) {
      usabilityData.recommendations.push('Optimize content for mobile devices');
    }

    // Ensure score doesn't go below 0
    usabilityData.score = Math.max(0, usabilityData.score);

    return usabilityData;
  } catch (error) {
    console.error('Error analyzing usability:', error);
    return {
      score: 0,
      mobileResponsive: false,
      hasViewport: false,
      hasTouchTargets: false,
      hasReadableFonts: false,
      hasGoodContrast: false,
      hasNavigation: false,
      hasContactInfo: false,
      hasCallToAction: false,
      issues: ['Failed to analyze usability'],
      recommendations: ['Please check if the URL is accessible']
    };
  }
} 