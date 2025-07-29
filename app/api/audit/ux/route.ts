import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const uxAnalysis = await analyzeUX(url);
    
    return NextResponse.json(uxAnalysis);
  } catch (error) {
    console.error('UX Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze UX' }, { status: 500 });
  }
}

async function analyzeUX(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
      }
    });
    
    const html = await response.text();
    
    const uxData = {
      score: 100,
      hasHeroSection: false,
      hasClearValue: false,
      hasSocialProof: false,
      hasTrustSignals: false,
      hasEasyNavigation: false,
      hasFastLoading: false,
      hasClearCTAs: false,
      hasGoodTypography: false,
      hasConsistentDesign: false,
      issues: [] as string[],
      recommendations: [] as string[]
    };

    // Check for hero section
    const heroMatches = html.match(/hero|banner|main-banner|hero-section/gi);
    if (heroMatches && heroMatches.length > 0) {
      uxData.hasHeroSection = true;
    } else {
      uxData.score -= 15;
      uxData.issues.push('No clear hero section found');
      uxData.recommendations.push('Add a compelling hero section with clear value proposition');
    }

    // Check for clear value proposition
    const valueMatches = html.match(/benefit|advantage|solution|value|why|what|how/gi);
    if (valueMatches && valueMatches.length > 2) {
      uxData.hasClearValue = true;
    } else {
      uxData.score -= 20;
      uxData.issues.push('Value proposition not clearly communicated');
      uxData.recommendations.push('Clearly communicate your value proposition and benefits');
    }

    // Check for social proof elements
    const socialProofMatches = html.match(/testimonial|review|rating|client|customer|trusted|award/gi);
    if (socialProofMatches && socialProofMatches.length > 0) {
      uxData.hasSocialProof = true;
    } else {
      uxData.score -= 15;
      uxData.issues.push('Missing social proof elements');
      uxData.recommendations.push('Add testimonials, reviews, or client logos for credibility');
    }

    // Check for trust signals
    const trustMatches = html.match(/secure|ssl|certified|guarantee|warranty|money-back/gi);
    if (trustMatches && trustMatches.length > 0) {
      uxData.hasTrustSignals = true;
    } else {
      uxData.score -= 10;
      uxData.issues.push('Limited trust signals');
      uxData.recommendations.push('Add security badges, guarantees, or certifications');
    }

    // Check for easy navigation
    const navMatches = html.match(/<nav[^>]*>|<ul[^>]*class[^>]*nav|<div[^>]*class[^>]*nav/gi);
    if (navMatches && navMatches.length > 0) {
      uxData.hasEasyNavigation = true;
    } else {
      uxData.score -= 15;
      uxData.issues.push('Navigation not clearly defined');
      uxData.recommendations.push('Implement clear, intuitive navigation');
    }

    // Check for clear call-to-action buttons
    const ctaMatches = html.match(/<button[^>]*>|<a[^>]*class[^>]*btn|<input[^>]*type=["']submit["']/gi);
    if (ctaMatches && ctaMatches.length > 0) {
      uxData.hasClearCTAs = true;
      
      // Check for multiple CTAs
      if (ctaMatches.length >= 2) {
        uxData.score += 5; // Bonus for multiple CTAs
      }
    } else {
      uxData.score -= 20;
      uxData.issues.push('Missing call-to-action buttons');
      uxData.recommendations.push('Add prominent, action-oriented buttons');
    }

    // Check for good typography (basic check)
    const typographyMatches = html.match(/font-family|font-size|line-height|letter-spacing/gi);
    if (typographyMatches && typographyMatches.length > 0) {
      uxData.hasGoodTypography = true;
    } else {
      uxData.score -= 10;
      uxData.issues.push('Typography may need improvement');
      uxData.recommendations.push('Use clear, readable typography with proper hierarchy');
    }

    // Check for consistent design elements
    const designMatches = html.match(/class[^>]*container|class[^>]*section|class[^>]*card/gi);
    if (designMatches && designMatches.length > 2) {
      uxData.hasConsistentDesign = true;
    } else {
      uxData.score -= 10;
      uxData.issues.push('Design consistency may be lacking');
      uxData.recommendations.push('Maintain consistent design patterns throughout');
    }

    // Check for fast loading indicators
    const loadingMatches = html.match(/lazy|preload|async|defer/gi);
    if (loadingMatches && loadingMatches.length > 0) {
      uxData.hasFastLoading = true;
    }

    // Additional UX checks
    const additionalIssues = [];

    // Check for form optimization
    const formMatches = html.match(/<form[^>]*>/gi);
    if (formMatches && formMatches.length > 0) {
      const fieldMatches = html.match(/<input[^>]*>|<textarea[^>]*>/gi);
      if (fieldMatches && fieldMatches.length > 5) {
        additionalIssues.push('Forms may be too long');
        uxData.score -= 5;
        uxData.recommendations.push('Simplify forms to reduce friction');
      }
    }

    // Check for content readability
    const paragraphMatches = html.match(/<p[^>]*>/gi);
    if (paragraphMatches && paragraphMatches.length > 0) {
      const longTextMatches = html.match(/<p[^>]*>[^<]{200,}/gi);
      if (longTextMatches && longTextMatches.length > 2) {
        additionalIssues.push('Some text blocks may be too long');
        uxData.score -= 5;
        uxData.recommendations.push('Break up long text into digestible chunks');
      }
    }

    // Check for accessibility basics
    const accessibilityMatches = html.match(/alt=|aria-|role=/gi);
    if (!accessibilityMatches || accessibilityMatches.length < 5) {
      additionalIssues.push('Limited accessibility features');
      uxData.score -= 5;
      uxData.recommendations.push('Improve accessibility with alt tags and ARIA labels');
    }

    // Check for mobile optimization
    const mobileMatches = html.match(/viewport|@media|responsive/gi);
    if (!mobileMatches || mobileMatches.length < 2) {
      additionalIssues.push('Mobile optimization may be insufficient');
      uxData.score -= 10;
      uxData.recommendations.push('Ensure mobile-first responsive design');
    }

    // Generate psychology-based recommendations
    if (!uxData.hasHeroSection) {
      uxData.recommendations.push('Create an emotional connection with compelling visuals and messaging');
    }
    if (!uxData.hasSocialProof) {
      uxData.recommendations.push('Leverage social proof to reduce decision anxiety');
    }
    if (!uxData.hasClearCTAs) {
      uxData.recommendations.push('Use action-oriented language that creates urgency');
    }
    if (!uxData.hasTrustSignals) {
      uxData.recommendations.push('Build trust through security indicators and guarantees');
    }

    // Ensure score doesn't go below 0
    uxData.score = Math.max(0, uxData.score);

    return uxData;
  } catch (error) {
    console.error('Error analyzing UX:', error);
    return {
      score: 0,
      hasHeroSection: false,
      hasClearValue: false,
      hasSocialProof: false,
      hasTrustSignals: false,
      hasEasyNavigation: false,
      hasFastLoading: false,
      hasClearCTAs: false,
      hasGoodTypography: false,
      hasConsistentDesign: false,
      issues: ['Failed to analyze UX'],
      recommendations: ['Please check if the URL is accessible']
    };
  }
} 