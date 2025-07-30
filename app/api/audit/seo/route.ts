import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // BEAST-level SEO analysis using advanced free methods
    const seoAnalysis = await analyzeSEO(url);
    
    return NextResponse.json(seoAnalysis);
  } catch (error) {
    console.error('SEO Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze SEO' }, { status: 500 });
  }
}

async function analyzeSEO(url: string) {
  try {
    // Fetch the webpage with proper headers
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
      }
    });
    
    const html = await response.text();
    
    // BEAST-level SEO analysis
    const seoData = {
      score: 0,
      onPageScore: 'Good',
      metaScore: 'Good',
      contentScore: 'Good',
      technicalScore: 'Good',
      localScore: 'Good',
      issues: [] as string[],
      recommendations: [] as string[],
      warnings: [] as string[],
      
      // Basic Meta Data
      title: '',
      description: '',
      keywords: '',
      canonical: '',
      
      // Content Analysis
      wordCount: 0,
      contentQuality: 'Good',
      keywordDensity: {} as any,
      readabilityScore: 0,
      contentStructure: 'Good',
      
      // Technical SEO
      h1Count: 0,
      h2Count: 0,
      h3Count: 0,
      h4Count: 0,
      h5Count: 0,
      h6Count: 0,
      headingStructure: 'Good',
      
      // Images and Media
      imageCount: 0,
      imagesWithoutAlt: 0,
      imagesWithAlt: 0,
      imageOptimization: 'Good',
      
      // Links Analysis
      internalLinks: 0,
      externalLinks: 0,
      brokenLinks: 0,
      linkStructure: 'Good',
      
      // Schema Markup
      hasSchema: false,
      schemaTypes: [] as string[],
      schemaQuality: 'None',
      
      // Technical Infrastructure
      hasSSL: url.startsWith('https'),
      hasRobotsTxt: false,
      hasSitemap: false,
      hasOpenGraph: false,
      hasTwitterCards: false,
      hasFavicon: false,
      
      // Local SEO
      hasLocalSchema: false,
      hasContactInfo: false,
      hasAddress: false,
      hasPhone: false,
      hasEmail: false,
      
      // Performance Indicators
      pageSize: 0,
      loadTime: 0,
      compression: false,
      
      // Competitive Analysis
      technologyStack: [] as string[],
      cdnDetected: false,
      serverInfo: '',
      
      // Advanced Metrics
      duplicateContent: false,
      thinContent: false,
      missingMetaTags: [] as string[],
      optimizationOpportunities: [] as string[]
    };

    // 1. BASIC META DATA ANALYSIS
    analyzeMetaData(html, seoData);
    
    // 2. CONTENT ANALYSIS
    analyzeContent(html, seoData);
    
    // 3. TECHNICAL SEO ANALYSIS
    analyzeTechnicalSEO(html, seoData);
    
    // 4. SCHEMA MARKUP ANALYSIS
    analyzeSchemaMarkup(html, seoData);
    
    // 5. LOCAL SEO ANALYSIS
    analyzeLocalSEO(html, seoData);
    
    // 6. PERFORMANCE ANALYSIS
    await analyzePerformance(url, seoData);
    
    // 7. COMPETITIVE ANALYSIS
    analyzeCompetitiveFactors(html, seoData);
    
    // 8. CALCULATE COMPREHENSIVE SCORE
    calculateComprehensiveScore(seoData);
    
    // 9. GENERATE ADVANCED RECOMMENDATIONS
    generateAdvancedRecommendations(seoData);

    return seoData;
  } catch (error) {
    console.error('Error analyzing SEO:', error);
    return {
      score: 0,
      onPageScore: 'Error',
      metaScore: 'Error',
      contentScore: 'Error',
      technicalScore: 'Error',
      localScore: 'Error',
      issues: ['Failed to analyze website'],
      recommendations: ['Please check if the URL is accessible'],
      warnings: ['Analysis incomplete due to technical issues']
    };
  }
}

function analyzeMetaData(html: string, seoData: any) {
  // Title analysis
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    seoData.title = titleMatch[1].trim();
    const titleLength = seoData.title.length;
    
    if (titleLength < 30) {
      seoData.issues.push('Title too short (under 30 characters)');
      seoData.score -= 15;
    } else if (titleLength > 60) {
      seoData.issues.push('Title too long (over 60 characters)');
      seoData.score -= 10;
    }
    
    // Check for keyword stuffing
    const titleWords = seoData.title.toLowerCase().split(/\s+/);
    const uniqueWords = new Set(titleWords);
    if (titleWords.length > uniqueWords.size * 1.5) {
      seoData.warnings.push('Potential keyword stuffing in title');
    }
  } else {
    seoData.issues.push('Missing title tag');
    seoData.score -= 25;
  }

  // Meta description analysis
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (descMatch) {
    seoData.description = descMatch[1].trim();
    const descLength = seoData.description.length;
    
    if (descLength < 120) {
      seoData.issues.push('Meta description too short (under 120 characters)');
      seoData.score -= 15;
    } else if (descLength > 160) {
      seoData.issues.push('Meta description too long (over 160 characters)');
      seoData.score -= 10;
    }
    
    // Check for call-to-action
    const hasCTA = /learn more|get started|contact us|call now|visit|click/i.test(seoData.description);
    if (!hasCTA) {
      seoData.optimizationOpportunities.push('Add call-to-action to meta description');
    }
  } else {
    seoData.issues.push('Missing meta description');
    seoData.score -= 20;
  }

  // Keywords meta tag (legacy but still checked)
  const keywordsMatch = html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["']/i);
  if (keywordsMatch) {
    seoData.keywords = keywordsMatch[1].trim();
    seoData.warnings.push('Keywords meta tag is deprecated and not used by Google');
  }

  // Canonical URL
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (canonicalMatch) {
    seoData.canonical = canonicalMatch[1];
  } else {
    seoData.issues.push('Missing canonical URL');
    seoData.score -= 10;
  }

  // Open Graph tags
  const ogTags = html.match(/<meta[^>]*property=["']og:[^"']+["'][^>]*>/gi);
  if (ogTags && ogTags.length >= 3) {
    seoData.hasOpenGraph = true;
  } else {
    seoData.issues.push('Missing or incomplete Open Graph tags');
    seoData.score -= 5;
  }

  // Twitter Cards
  const twitterTags = html.match(/<meta[^>]*name=["']twitter:[^"']+["'][^>]*>/gi);
  if (twitterTags && twitterTags.length >= 2) {
    seoData.hasTwitterCards = true;
  } else {
    seoData.optimizationOpportunities.push('Add Twitter Card meta tags');
  }

  // Favicon
  const faviconMatch = html.match(/<link[^>]*rel=["'](icon|shortcut icon)["'][^>]*>/i);
  if (faviconMatch) {
    seoData.hasFavicon = true;
  } else {
    seoData.issues.push('Missing favicon');
    seoData.score -= 5;
  }
}

function analyzeContent(html: string, seoData: any) {
  // Extract text content (remove scripts, styles, etc.)
  const textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Word count analysis
  const words = textContent.split(/\s+/).filter(word => word.length > 0);
  seoData.wordCount = words.length;

  if (seoData.wordCount < 300) {
    seoData.issues.push('Content too thin (under 300 words)');
    seoData.score -= 20;
    seoData.thinContent = true;
  } else if (seoData.wordCount < 600) {
    seoData.warnings.push('Content could be more comprehensive (under 600 words)');
  } else if (seoData.wordCount > 2000) {
    seoData.contentQuality = 'Excellent';
  }

  // Keyword density analysis
  const wordFrequency: any = {};
  words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
    if (cleanWord.length > 2) {
      wordFrequency[cleanWord] = (wordFrequency[cleanWord] || 0) + 1;
    }
  });

  // Find most common words (potential keywords)
  const sortedWords = Object.entries(wordFrequency)
    .sort(([,a]: any, [,b]: any) => b - a)
    .slice(0, 10);
  
  seoData.keywordDensity = Object.fromEntries(sortedWords);

  // Readability analysis (simple Flesch-Kincaid approximation)
  const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const avgWordsPerSentence = seoData.wordCount / sentences.length;
  
  if (avgWordsPerSentence > 20) {
    seoData.warnings.push('Sentences are too long (over 20 words average)');
  } else if (avgWordsPerSentence < 10) {
    seoData.contentQuality = 'Good';
  }

  // Content structure analysis
  const paragraphs = html.match(/<p[^>]*>/gi);
  const paragraphCount = paragraphs ? paragraphs.length : 0;
  
  if (paragraphCount < 3) {
    seoData.warnings.push('Content needs more paragraph breaks');
  }

  // Check for duplicate content indicators
  const duplicatePhrases = findDuplicatePhrases(textContent);
  if (duplicatePhrases.length > 0) {
    seoData.warnings.push('Potential duplicate content detected');
    seoData.duplicateContent = true;
  }
}

function analyzeTechnicalSEO(html: string, seoData: any) {
  // Heading structure analysis
  const h1Matches = html.match(/<h1[^>]*>/gi);
  const h2Matches = html.match(/<h2[^>]*>/gi);
  const h3Matches = html.match(/<h3[^>]*>/gi);
  const h4Matches = html.match(/<h4[^>]*>/gi);
  const h5Matches = html.match(/<h5[^>]*>/gi);
  const h6Matches = html.match(/<h6[^>]*>/gi);

  seoData.h1Count = h1Matches ? h1Matches.length : 0;
  seoData.h2Count = h2Matches ? h2Matches.length : 0;
  seoData.h3Count = h3Matches ? h3Matches.length : 0;
  seoData.h4Count = h4Matches ? h4Matches.length : 0;
  seoData.h5Count = h5Matches ? h5Matches.length : 0;
  seoData.h6Count = h6Matches ? h6Matches.length : 0;

  // Heading structure evaluation
  if (seoData.h1Count === 0) {
    seoData.issues.push('Missing H1 tag');
    seoData.score -= 20;
  } else if (seoData.h1Count > 1) {
    seoData.issues.push('Multiple H1 tags found');
    seoData.score -= 15;
  }

  if (seoData.h2Count < 2) {
    seoData.warnings.push('Add more H2 headings for better content structure');
  }

  // Check heading hierarchy
  if (seoData.h3Count > 0 && seoData.h2Count === 0) {
    seoData.issues.push('H3 tags without H2 parent');
    seoData.score -= 10;
  }

  // Image analysis
  const imgMatches = html.match(/<img[^>]*>/gi);
  seoData.imageCount = imgMatches ? imgMatches.length : 0;
  
  const imgWithAltMatches = html.match(/<img[^>]*alt=["'][^"']+["'][^>]*>/gi);
  seoData.imagesWithAlt = imgWithAltMatches ? imgWithAltMatches.length : 0;
  seoData.imagesWithoutAlt = seoData.imageCount - seoData.imagesWithAlt;
  
  if (seoData.imagesWithoutAlt > 0) {
    seoData.issues.push(`${seoData.imagesWithoutAlt} images missing alt attributes`);
    seoData.score -= seoData.imagesWithoutAlt * 2;
  }

  // Link analysis
  const internalLinkMatches = html.match(/<a[^>]*href=["'](?!https?:\/\/)(?!mailto:)(?!tel:)[^"']+["'][^>]*>/gi);
  const externalLinkMatches = html.match(/<a[^>]*href=["']https?:\/\/(?!${new URL(url).hostname})[^"']+["'][^>]*>/gi);
  
  seoData.internalLinks = internalLinkMatches ? internalLinkMatches.length : 0;
  seoData.externalLinks = externalLinkMatches ? externalLinkMatches.length : 0;

  if (seoData.internalLinks < 3) {
    seoData.warnings.push('Add more internal links for better site structure');
  }

  if (seoData.externalLinks === 0) {
    seoData.optimizationOpportunities.push('Consider adding relevant external links');
  }
}

function analyzeSchemaMarkup(html: string, seoData: any) {
  // Check for JSON-LD schema
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  if (jsonLdMatches && jsonLdMatches.length > 0) {
    seoData.hasSchema = true;
    seoData.schemaQuality = 'Good';
    
    // Extract schema types
    jsonLdMatches.forEach(match => {
      const contentMatch = match.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
      if (contentMatch) {
        try {
          const schema = JSON.parse(contentMatch[1]);
          if (schema['@type']) {
            seoData.schemaTypes.push(schema['@type']);
          }
        } catch (e) {
          // Invalid JSON
        }
      }
    });
  }

  // Check for microdata
  const microdataMatches = html.match(/itemtype=["']https?:\/\/schema\.org\/[^"']+["']/gi);
  if (microdataMatches && microdataMatches.length > 0) {
    seoData.hasSchema = true;
    if (seoData.schemaQuality === 'None') {
      seoData.schemaQuality = 'Basic';
    }
  }

  // Check for RDFa
  const rdfaMatches = html.match(/vocab=["']https?:\/\/schema\.org["']/gi);
  if (rdfaMatches && rdfaMatches.length > 0) {
    seoData.hasSchema = true;
    if (seoData.schemaQuality === 'None') {
      seoData.schemaQuality = 'Basic';
    }
  }

  if (!seoData.hasSchema) {
    seoData.issues.push('Missing structured data (schema markup)');
    seoData.score -= 15;
  } else if (seoData.schemaTypes.length === 0) {
    seoData.warnings.push('Schema markup detected but no specific types identified');
  }
}

function analyzeLocalSEO(html: string, seoData: any) {
  // Check for local business schema
  const localSchemaMatches = html.match(/["']@type["']\s*:\s*["'](LocalBusiness|Restaurant|Store|Service)["']/gi);
  if (localSchemaMatches && localSchemaMatches.length > 0) {
    seoData.hasLocalSchema = true;
  }

  // Check for contact information
  const phoneMatches = html.match(/(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g);
  const emailMatches = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  const addressMatches = html.match(/<address[^>]*>[\s\S]*?<\/address>/gi);

  if (phoneMatches && phoneMatches.length > 0) {
    seoData.hasPhone = true;
  }
  if (emailMatches && emailMatches.length > 0) {
    seoData.hasEmail = true;
  }
  if (addressMatches && addressMatches.length > 0) {
    seoData.hasAddress = true;
  }

  seoData.hasContactInfo = seoData.hasPhone || seoData.hasEmail || seoData.hasAddress;

  if (!seoData.hasContactInfo) {
    seoData.optimizationOpportunities.push('Add contact information for local SEO');
  }

  if (!seoData.hasLocalSchema) {
    seoData.optimizationOpportunities.push('Add local business schema markup');
  }
}

async function analyzePerformance(url: string, seoData: any) {
  try {
    // Check robots.txt
    const robotsResponse = await fetch(`${new URL(url).origin}/robots.txt`);
    seoData.hasRobotsTxt = robotsResponse.ok;
    if (!seoData.hasRobotsTxt) {
      seoData.issues.push('Missing robots.txt file');
      seoData.score -= 10;
    }

    // Check sitemap
    const sitemapResponse = await fetch(`${new URL(url).origin}/sitemap.xml`);
    seoData.hasSitemap = sitemapResponse.ok;
    if (!seoData.hasSitemap) {
      seoData.issues.push('Missing XML sitemap');
      seoData.score -= 10;
    }

    // Check compression
    const response = await fetch(url, {
      headers: {
        'Accept-Encoding': 'gzip, deflate'
      }
    });
    seoData.compression = response.headers.get('content-encoding') !== null;
    if (!seoData.compression) {
      seoData.optimizationOpportunities.push('Enable GZIP compression');
    }

    // Estimate page size
    const contentLength = response.headers.get('content-length');
    if (contentLength) {
      seoData.pageSize = parseInt(contentLength);
      if (seoData.pageSize > 500000) { // 500KB
        seoData.warnings.push('Page size is large (over 500KB)');
      }
    }
  } catch (error) {
    // Continue without performance data
  }
}

function analyzeCompetitiveFactors(html: string, seoData: any) {
  // Technology stack detection
  const technologies = [];
  
  if (html.includes('wp-content') || html.includes('wp-includes')) {
    technologies.push('WordPress');
  }
  if (html.includes('shopify')) {
    technologies.push('Shopify');
  }
  if (html.includes('woocommerce')) {
    technologies.push('WooCommerce');
  }
  if (html.includes('react') || html.includes('React')) {
    technologies.push('React');
  }
  if (html.includes('vue') || html.includes('Vue')) {
    technologies.push('Vue.js');
  }
  if (html.includes('angular') || html.includes('Angular')) {
    technologies.push('Angular');
  }
  if (html.includes('bootstrap')) {
    technologies.push('Bootstrap');
  }
  if (html.includes('jquery')) {
    technologies.push('jQuery');
  }

  seoData.technologyStack = technologies;

  // CDN detection
  const cdnPatterns = [
    'cloudflare',
    'cloudfront',
    'akamai',
    'fastly',
    'cdn.jsdelivr.net',
    'unpkg.com',
    'cdnjs.cloudflare.com'
  ];
  
  seoData.cdnDetected = cdnPatterns.some(pattern => html.includes(pattern));
  if (seoData.cdnDetected) {
    seoData.technicalScore = 'Excellent';
  }

  // Server information
  const serverMatch = html.match(/<meta[^>]*name=["']generator["'][^>]*content=["']([^"']+)["']/i);
  if (serverMatch) {
    seoData.serverInfo = serverMatch[1];
  }
}

function calculateComprehensiveScore(seoData: any) {
  let score = 100;
  
  // Deduct points for issues
  score -= seoData.issues.length * 5;
  
  // Deduct points for warnings
  score -= seoData.warnings.length * 2;
  
  // Bonus points for good practices
  if (seoData.hasSchema) score += 10;
  if (seoData.hasOpenGraph) score += 5;
  if (seoData.hasTwitterCards) score += 5;
  if (seoData.hasFavicon) score += 5;
  if (seoData.cdnDetected) score += 5;
  if (seoData.compression) score += 5;
  if (seoData.wordCount > 1000) score += 10;
  if (seoData.internalLinks > 5) score += 5;
  if (seoData.hasContactInfo) score += 5;
  
  seoData.score = Math.max(0, Math.min(100, score));

  // Set score categories
  if (seoData.score >= 85) {
    seoData.onPageScore = 'Excellent';
    seoData.metaScore = 'Excellent';
    seoData.contentScore = 'Excellent';
    seoData.technicalScore = 'Excellent';
    seoData.localScore = 'Excellent';
  } else if (seoData.score >= 70) {
    seoData.onPageScore = 'Good';
    seoData.metaScore = 'Good';
    seoData.contentScore = 'Good';
    seoData.technicalScore = 'Good';
    seoData.localScore = 'Good';
  } else if (seoData.score >= 50) {
    seoData.onPageScore = 'Needs Work';
    seoData.metaScore = 'Needs Work';
    seoData.contentScore = 'Needs Work';
    seoData.technicalScore = 'Needs Work';
    seoData.localScore = 'Needs Work';
  } else {
    seoData.onPageScore = 'Poor';
    seoData.metaScore = 'Poor';
    seoData.contentScore = 'Poor';
    seoData.technicalScore = 'Poor';
    seoData.localScore = 'Poor';
  }
}

function generateAdvancedRecommendations(seoData: any) {
  // Add optimization opportunities to recommendations
  seoData.recommendations.push(...seoData.optimizationOpportunities);
  
  // Content recommendations
  if (seoData.wordCount < 600) {
    seoData.recommendations.push('Expand content to at least 600 words for better SEO');
  }
  
  if (seoData.h2Count < 3) {
    seoData.recommendations.push('Add more H2 headings to improve content structure');
  }
  
  if (seoData.internalLinks < 5) {
    seoData.recommendations.push('Increase internal linking for better site architecture');
  }
  
  // Technical recommendations
  if (!seoData.hasSSL) {
    seoData.recommendations.push('Implement SSL certificate for security and SEO benefits');
  }
  
  if (!seoData.hasRobotsTxt) {
    seoData.recommendations.push('Create a robots.txt file to guide search engine crawlers');
  }
  
  if (!seoData.hasSitemap) {
    seoData.recommendations.push('Create an XML sitemap to help search engines discover your pages');
  }
  
  // Schema recommendations
  if (!seoData.hasSchema) {
    seoData.recommendations.push('Implement structured data (schema markup) for rich snippets');
  }
  
  // Local SEO recommendations
  if (!seoData.hasLocalSchema) {
    seoData.recommendations.push('Add local business schema markup for local SEO');
  }
  
  if (!seoData.hasContactInfo) {
    seoData.recommendations.push('Add contact information for local search visibility');
  }
  
  // Performance recommendations
  if (!seoData.compression) {
    seoData.recommendations.push('Enable GZIP compression to improve page load speed');
  }
  
  if (seoData.pageSize > 500000) {
    seoData.recommendations.push('Optimize page size for faster loading');
  }
  
  // Social media recommendations
  if (!seoData.hasOpenGraph) {
    seoData.recommendations.push('Add Open Graph tags for better social media sharing');
  }
  
  if (!seoData.hasTwitterCards) {
    seoData.recommendations.push('Add Twitter Card meta tags for Twitter sharing');
  }
}

function findDuplicatePhrases(text: string): string[] {
  const words = text.toLowerCase().split(/\s+/);
  const phrases: any = {};
  const duplicates: string[] = [];
  
  // Check for 3-word phrases
  for (let i = 0; i < words.length - 2; i++) {
    const phrase = words.slice(i, i + 3).join(' ');
    if (phrase.length > 10) {
      phrases[phrase] = (phrases[phrase] || 0) + 1;
      if (phrases[phrase] > 2) {
        duplicates.push(phrase);
      }
    }
  }
  
  return duplicates.slice(0, 5); // Return top 5 duplicates
} 