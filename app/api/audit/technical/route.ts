import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const technicalAnalysis = await analyzeTechnical(url);
    
    return NextResponse.json(technicalAnalysis);
  } catch (error) {
    console.error('Technical Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze technical aspects' }, { status: 500 });
  }
}

async function analyzeTechnical(url: string) {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    
    const technicalData = {
      score: 100,
      hasSSL: false,
      hasHttpsRedirect: false,
      hasSecurityHeaders: false,
      hasCompression: false,
      hasCaching: false,
      hasCDN: false,
      serverInfo: '',
      dnsInfo: '',
      issues: [] as string[],
      recommendations: [] as string[]
    };

    // Check SSL/HTTPS
    if (url.startsWith('https://')) {
      technicalData.hasSSL = true;
      technicalData.hasHttpsRedirect = true;
    } else {
      technicalData.score -= 30;
      technicalData.issues.push('Website not using HTTPS');
      technicalData.recommendations.push('Implement SSL certificate for security and SEO');
      
      // Check if HTTPS redirect exists
      try {
        const httpsResponse = await fetch(`https://${domain}`, {
          method: 'HEAD',
          redirect: 'manual'
        });
        if (httpsResponse.status === 301 || httpsResponse.status === 302) {
          technicalData.hasHttpsRedirect = true;
          technicalData.score += 10;
        }
      } catch (error) {
        // HTTPS not available
      }
    }

    // Check security headers
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
        }
      });
      
      const headers = response.headers;
      
      // Check for security headers
      const securityHeaders = [
        'X-Frame-Options',
        'X-Content-Type-Options',
        'X-XSS-Protection',
        'Strict-Transport-Security',
        'Content-Security-Policy'
      ];
      
      let securityHeaderCount = 0;
      securityHeaders.forEach(header => {
        if (headers.get(header)) {
          securityHeaderCount++;
        }
      });
      
      if (securityHeaderCount >= 3) {
        technicalData.hasSecurityHeaders = true;
        technicalData.score += 10;
      } else {
        technicalData.score -= 15;
        technicalData.issues.push('Missing important security headers');
        technicalData.recommendations.push('Implement security headers (HSTS, CSP, X-Frame-Options)');
      }

      // Check for compression
      const contentEncoding = headers.get('content-encoding');
      if (contentEncoding && (contentEncoding.includes('gzip') || contentEncoding.includes('br'))) {
        technicalData.hasCompression = true;
        technicalData.score += 10;
      } else {
        technicalData.score -= 10;
        technicalData.issues.push('No compression detected');
        technicalData.recommendations.push('Enable Gzip or Brotli compression');
      }

      // Check for caching headers
      const cacheControl = headers.get('cache-control');
      const expires = headers.get('expires');
      if (cacheControl || expires) {
        technicalData.hasCaching = true;
        technicalData.score += 5;
      } else {
        technicalData.score -= 5;
        technicalData.issues.push('No caching headers found');
        technicalData.recommendations.push('Implement proper caching headers');
      }

      // Check for CDN
      const server = headers.get('server');
      const cfRay = headers.get('cf-ray'); // Cloudflare
      const xCache = headers.get('x-cache'); // Various CDNs
      
      if (cfRay || xCache || (server && server.toLowerCase().includes('cloudflare'))) {
        technicalData.hasCDN = true;
        technicalData.score += 10;
      } else {
        technicalData.score -= 10;
        technicalData.issues.push('No CDN detected');
        technicalData.recommendations.push('Consider implementing a CDN for better performance');
      }

      // Get server information
      if (server) {
        technicalData.serverInfo = server;
      }

    } catch (error) {
      technicalData.issues.push('Could not analyze server headers');
    }

    // DNS Analysis
    try {
      const dnsResponse = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
      const dnsData = await dnsResponse.json();
      
      if (dnsData.Answer && dnsData.Answer.length > 0) {
        technicalData.dnsInfo = `DNS resolved successfully (${dnsData.Answer.length} records)`;
      } else {
        technicalData.score -= 5;
        technicalData.issues.push('DNS resolution issues');
      }
    } catch (error) {
      technicalData.issues.push('Could not analyze DNS');
    }

    // Check for common technical issues
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)'
        }
      });
      
      const html = await response.text();
      
      // Check for deprecated HTML
      const deprecatedElements = ['<center>', '<font>', '<marquee>', '<blink>'];
      deprecatedElements.forEach(element => {
        if (html.includes(element)) {
          technicalData.score -= 5;
          technicalData.issues.push(`Deprecated HTML element found: ${element}`);
        }
      });

      // Check for inline styles (not recommended for maintainability)
      const inlineStyleMatches = html.match(/style=["'][^"']*["']/gi);
      if (inlineStyleMatches && inlineStyleMatches.length > 10) {
        technicalData.score -= 5;
        technicalData.issues.push('Too many inline styles detected');
        technicalData.recommendations.push('Move styles to external CSS files');
      }

      // Check for JavaScript errors (basic check)
      const scriptMatches = html.match(/<script[^>]*>/gi);
      if (scriptMatches && scriptMatches.length > 5) {
        technicalData.recommendations.push('Consider bundling and minifying JavaScript files');
      }

    } catch (error) {
      technicalData.issues.push('Could not analyze HTML content');
    }

    // Additional recommendations based on findings
    if (!technicalData.hasSSL) {
      technicalData.recommendations.push('SSL certificate is essential for security and user trust');
    }
    if (!technicalData.hasSecurityHeaders) {
      technicalData.recommendations.push('Security headers protect against common web vulnerabilities');
    }
    if (!technicalData.hasCompression) {
      technicalData.recommendations.push('Compression can reduce page load times by 50-70%');
    }
    if (!technicalData.hasCDN) {
      technicalData.recommendations.push('CDN can improve global performance and reduce server load');
    }

    // Ensure score doesn't go below 0
    technicalData.score = Math.max(0, technicalData.score);

    return technicalData;
  } catch (error) {
    console.error('Error analyzing technical aspects:', error);
    return {
      score: 0,
      hasSSL: false,
      hasHttpsRedirect: false,
      hasSecurityHeaders: false,
      hasCompression: false,
      hasCaching: false,
      hasCDN: false,
      serverInfo: '',
      dnsInfo: '',
      issues: ['Failed to analyze technical aspects'],
      recommendations: ['Please check if the URL is accessible']
    };
  }
} 