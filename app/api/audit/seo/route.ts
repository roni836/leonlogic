import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Basic SEO analysis using free methods
    const seoAnalysis = await analyzeSEO(url);
    
    return NextResponse.json(seoAnalysis);
  } catch (error) {
    console.error('SEO Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze SEO' }, { status: 500 });
  }
}

async function analyzeSEO(url: string) {
  try {
    // Fetch the webpage
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
      }
    });
    
    const html = await response.text();
    
    // Basic SEO checks
    const seoData = {
      score: 0,
      onPageScore: 'Good',
      metaScore: 'Good',
      issues: [] as string[],
      recommendations: [] as string[],
      title: '',
      description: '',
      h1Count: 0,
      h2Count: 0,
      imageCount: 0,
      imagesWithoutAlt: 0,
      hasSSL: url.startsWith('https'),
      hasRobotsTxt: false,
      hasSitemap: false
    };

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      seoData.title = titleMatch[1].trim();
      if (seoData.title.length < 30 || seoData.title.length > 60) {
        seoData.issues.push('Title length should be between 30-60 characters');
        seoData.score -= 10;
      }
    } else {
      seoData.issues.push('Missing title tag');
      seoData.score -= 20;
    }

    // Extract meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    if (descMatch) {
      seoData.description = descMatch[1].trim();
      if (seoData.description.length < 120 || seoData.description.length > 160) {
        seoData.issues.push('Meta description should be between 120-160 characters');
        seoData.score -= 10;
      }
    } else {
      seoData.issues.push('Missing meta description');
      seoData.score -= 15;
    }

    // Count headings
    const h1Matches = html.match(/<h1[^>]*>/gi);
    const h2Matches = html.match(/<h2[^>]*>/gi);
    seoData.h1Count = h1Matches ? h1Matches.length : 0;
    seoData.h2Count = h2Matches ? h2Matches.length : 0;

    if (seoData.h1Count === 0) {
      seoData.issues.push('Missing H1 tag');
      seoData.score -= 15;
    } else if (seoData.h1Count > 1) {
      seoData.issues.push('Multiple H1 tags found');
      seoData.score -= 10;
    }

    // Check images
    const imgMatches = html.match(/<img[^>]*>/gi);
    seoData.imageCount = imgMatches ? imgMatches.length : 0;
    
    const imgWithoutAltMatches = html.match(/<img[^>]*>(?!.*alt=)/gi);
    seoData.imagesWithoutAlt = imgWithoutAltMatches ? imgWithoutAltMatches.length : 0;
    
    if (seoData.imagesWithoutAlt > 0) {
      seoData.issues.push(`${seoData.imagesWithoutAlt} images missing alt attributes`);
      seoData.score -= 5;
    }

    // Check for robots.txt
    try {
      const robotsResponse = await fetch(`${new URL(url).origin}/robots.txt`);
      seoData.hasRobotsTxt = robotsResponse.ok;
    } catch (error) {
      seoData.hasRobotsTxt = false;
    }

    // Check for sitemap
    try {
      const sitemapResponse = await fetch(`${new URL(url).origin}/sitemap.xml`);
      seoData.hasSitemap = sitemapResponse.ok;
    } catch (error) {
      seoData.hasSitemap = false;
    }

    // Calculate score
    seoData.score = Math.max(0, 100 + seoData.score);

    // Generate recommendations
    if (!seoData.hasSSL) {
      seoData.recommendations.push('Implement SSL certificate for better security and SEO');
    }
    if (!seoData.hasRobotsTxt) {
      seoData.recommendations.push('Create a robots.txt file to guide search engine crawlers');
    }
    if (!seoData.hasSitemap) {
      seoData.recommendations.push('Create an XML sitemap to help search engines discover your pages');
    }
    if (seoData.imagesWithoutAlt > 0) {
      seoData.recommendations.push('Add alt attributes to all images for better accessibility and SEO');
    }
    if (seoData.h2Count < 2) {
      seoData.recommendations.push('Add more H2 headings to improve content structure');
    }

    // Set score categories
    if (seoData.score >= 80) {
      seoData.onPageScore = 'Excellent';
      seoData.metaScore = 'Excellent';
    } else if (seoData.score >= 60) {
      seoData.onPageScore = 'Good';
      seoData.metaScore = 'Good';
    } else if (seoData.score >= 40) {
      seoData.onPageScore = 'Needs Work';
      seoData.metaScore = 'Needs Work';
    } else {
      seoData.onPageScore = 'Poor';
      seoData.metaScore = 'Poor';
    }

    return seoData;
  } catch (error) {
    console.error('Error analyzing SEO:', error);
    return {
      score: 0,
      onPageScore: 'Error',
      metaScore: 'Error',
      issues: ['Failed to analyze website'],
      recommendations: ['Please check if the URL is accessible']
    };
  }
} 