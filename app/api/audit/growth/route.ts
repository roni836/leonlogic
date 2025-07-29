import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url, results } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const growthAnalysis = await analyzeGrowthOpportunities(url, results);
    
    return NextResponse.json(growthAnalysis);
  } catch (error) {
    console.error('Growth Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze growth opportunities' }, { status: 500 });
  }
}

async function analyzeGrowthOpportunities(url: string, results: any) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
      }
    });
    
    const html = await response.text();
    
    const growthData = {
      score: 100,
      opportunities: [] as string[],
      priorityActions: [] as string[],
      estimatedImpact: [] as string[],
      competitiveAdvantages: [] as string[],
      revenueOpportunities: [] as string[]
    };

    // Analyze SEO opportunities
    if (results?.seo) {
      if (results.seo.score < 80) {
        growthData.opportunities.push('Improve SEO score to increase organic traffic');
        growthData.priorityActions.push('Optimize meta tags and content structure');
        growthData.estimatedImpact.push('Potential 30-50% increase in organic traffic');
      }
      
      if (results.seo.issues?.includes('Missing title tag')) {
        growthData.opportunities.push('Add compelling title tags for better click-through rates');
        growthData.revenueOpportunities.push('Better titles can improve CTR by 15-25%');
      }
      
      if (results.seo.imagesWithoutAlt > 0) {
        growthData.opportunities.push('Add alt text to images for better accessibility and SEO');
      }
    }

    // Analyze performance opportunities
    if (results?.performance) {
      if (results.performance.score < 80) {
        growthData.opportunities.push('Improve page speed to reduce bounce rate');
        growthData.priorityActions.push('Optimize images and implement lazy loading');
        growthData.estimatedImpact.push('Faster loading can reduce bounce rate by 20-40%');
      }
      
      if (results.performance.mobileSpeed === 'Slow' || results.performance.mobileSpeed === 'Very Slow') {
        growthData.opportunities.push('Optimize for mobile users (60% of web traffic)');
        growthData.revenueOpportunities.push('Mobile optimization can increase conversions by 25-35%');
      }
    }

    // Analyze UX opportunities
    if (results?.social) { // UX data is stored in social field
      if (results.social.score < 80) {
        growthData.opportunities.push('Improve user experience to increase engagement');
        growthData.priorityActions.push('Add clear call-to-action buttons and improve navigation');
        growthData.estimatedImpact.push('Better UX can increase time on site by 40-60%');
      }
      
      if (!results.social.hasSocialProof) {
        growthData.opportunities.push('Add testimonials and social proof to build trust');
        growthData.revenueOpportunities.push('Social proof can increase conversions by 15-30%');
      }
      
      if (!results.social.hasClearCTAs) {
        growthData.opportunities.push('Add prominent call-to-action buttons');
        growthData.priorityActions.push('Implement clear, action-oriented CTAs');
        growthData.estimatedImpact.push('Clear CTAs can increase conversion rates by 20-40%');
      }
    }

    // Analyze technical opportunities
    if (results?.security) { // Technical data is stored in security field
      if (!results.security.hasSSL) {
        growthData.opportunities.push('Implement SSL certificate for security and trust');
        growthData.priorityActions.push('Install SSL certificate immediately');
        growthData.estimatedImpact.push('SSL can improve conversion rates by 10-20%');
      }
      
      if (!results.security.hasCDN) {
        growthData.opportunities.push('Implement CDN for global performance');
        growthData.revenueOpportunities.push('CDN can improve international user experience');
      }
    }

    // Content analysis
    const contentAnalysis = analyzeContent(html);
    growthData.opportunities.push(...contentAnalysis.opportunities);
    growthData.priorityActions.push(...contentAnalysis.priorityActions);
    growthData.estimatedImpact.push(...contentAnalysis.estimatedImpact);

    // Conversion optimization opportunities
    const conversionOpportunities = analyzeConversions(html);
    growthData.opportunities.push(...conversionOpportunities.opportunities);
    growthData.revenueOpportunities.push(...conversionOpportunities.revenueOpportunities);

    // Competitive analysis opportunities
    const competitiveOpportunities = analyzeCompetitiveAdvantages(html);
    growthData.competitiveAdvantages.push(...competitiveOpportunities);

    // Calculate overall growth score
    let growthScore = 100;
    const totalOpportunities = growthData.opportunities.length;
    
    if (totalOpportunities > 10) {
      growthScore = 30;
    } else if (totalOpportunities > 7) {
      growthScore = 50;
    } else if (totalOpportunities > 4) {
      growthScore = 70;
    } else if (totalOpportunities > 1) {
      growthScore = 85;
    }

    growthData.score = growthScore;

    // Add psychology-based recommendations
    growthData.opportunities.push('Implement urgency and scarcity elements to drive action');
    growthData.opportunities.push('Use social proof and testimonials to reduce decision anxiety');
    growthData.opportunities.push('Create emotional connections through storytelling and visuals');
    growthData.opportunities.push('Simplify the decision-making process with clear value propositions');

    return growthData;
  } catch (error) {
    console.error('Error analyzing growth opportunities:', error);
    return {
      score: 0,
      opportunities: ['Failed to analyze growth opportunities'],
      priorityActions: ['Please check if the URL is accessible'],
      estimatedImpact: [],
      competitiveAdvantages: [],
      revenueOpportunities: []
    };
  }
}

function analyzeContent(html: string) {
  const analysis = {
    opportunities: [] as string[],
    priorityActions: [] as string[],
    estimatedImpact: [] as string[]
  };

  // Check content length
  const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = textContent.split(' ').length;

  if (wordCount < 300) {
    analysis.opportunities.push('Add more valuable content to improve SEO and user engagement');
    analysis.priorityActions.push('Create comprehensive, helpful content');
    analysis.estimatedImpact.push('Longer content can improve search rankings by 15-25%');
  }

  // Check for blog or content section
  const blogMatches = html.match(/blog|article|post|news/gi);
  if (!blogMatches || blogMatches.length < 2) {
    analysis.opportunities.push('Start a blog to attract organic traffic and establish authority');
    analysis.priorityActions.push('Create regular, valuable blog content');
    analysis.estimatedImpact.push('Blogging can increase organic traffic by 50-80%');
  }

  // Check for FAQ section
  const faqMatches = html.match(/faq|frequently asked|question/gi);
  if (!faqMatches) {
    analysis.opportunities.push('Add FAQ section to address common customer questions');
    analysis.priorityActions.push('Create FAQ page with common questions');
    analysis.estimatedImpact.push('FAQ pages can improve SEO and reduce support inquiries');
  }

  return analysis;
}

function analyzeConversions(html: string) {
  const analysis = {
    opportunities: [] as string[],
    revenueOpportunities: [] as string[]
  };

  // Check for multiple CTAs
  const ctaMatches = html.match(/<button[^>]*>|<a[^>]*class[^>]*btn|<input[^>]*type=["']submit["']/gi);
  if (!ctaMatches || ctaMatches.length < 2) {
    analysis.opportunities.push('Add multiple call-to-action buttons throughout the page');
    analysis.revenueOpportunities.push('Multiple CTAs can increase conversions by 20-30%');
  }

  // Check for lead magnets
  const leadMagnetMatches = html.match(/download|free|ebook|guide|whitepaper|checklist/gi);
  if (!leadMagnetMatches) {
    analysis.opportunities.push('Create lead magnets to capture email addresses');
    analysis.revenueOpportunities.push('Lead magnets can increase email list by 40-60%');
  }

  // Check for urgency elements
  const urgencyMatches = html.match(/limited|offer|sale|discount|expires|today/gi);
  if (!urgencyMatches) {
    analysis.opportunities.push('Add urgency and scarcity elements to drive action');
    analysis.revenueOpportunities.push('Urgency can increase conversions by 15-25%');
  }

  return analysis;
}

function analyzeCompetitiveAdvantages(html: string) {
  const advantages = [];

  // Check for unique value propositions
  const uniqueMatches = html.match(/unique|only|exclusive|first|best|leading/gi);
  if (uniqueMatches && uniqueMatches.length > 0) {
    advantages.push('Highlight unique selling propositions more prominently');
  } else {
    advantages.push('Define and communicate unique value propositions');
  }

  // Check for industry expertise
  const expertiseMatches = html.match(/expert|specialist|certified|award|years|experience/gi);
  if (expertiseMatches && expertiseMatches.length > 0) {
    advantages.push('Leverage expertise and credentials for credibility');
  } else {
    advantages.push('Showcase expertise and industry experience');
  }

  // Check for customer focus
  const customerMatches = html.match(/customer|client|satisfaction|support|help/gi);
  if (customerMatches && customerMatches.length > 0) {
    advantages.push('Emphasize customer-centric approach');
  } else {
    advantages.push('Highlight customer service and support capabilities');
  }

  return advantages;
} 