import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const socialAnalysis = await analyzeSocialMedia(url);
    
    return NextResponse.json(socialAnalysis);
  } catch (error) {
    console.error('Social Media Analysis Error:', error);
    return NextResponse.json({ error: 'Failed to analyze social media presence' }, { status: 500 });
  }
}

async function analyzeSocialMedia(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    const socialData = {
      score: 0,
      platforms: [] as string[],
      links: [] as string[],
      recommendations: [] as string[],
      issues: [] as string[],
      socialPresence: 'None',
      engagementOpportunities: 0
    };

    // Social media platforms to check
    const socialPlatforms = [
      { name: 'Facebook', patterns: ['facebook.com', 'fb.com', 'fb.me'], icon: '📘' },
      { name: 'Instagram', patterns: ['instagram.com', 'ig.com'], icon: '📷' },
      { name: 'Twitter', patterns: ['twitter.com', 'x.com', 't.co'], icon: '🐦' },
      { name: 'LinkedIn', patterns: ['linkedin.com', 'lnkd.in'], icon: '💼' },
      { name: 'YouTube', patterns: ['youtube.com', 'youtu.be'], icon: '📺' },
      { name: 'TikTok', patterns: ['tiktok.com'], icon: '🎵' },
      { name: 'Pinterest', patterns: ['pinterest.com', 'pin.it'], icon: '📌' },
      { name: 'WhatsApp', patterns: ['wa.me', 'whatsapp.com'], icon: '💬' },
      { name: 'Telegram', patterns: ['t.me', 'telegram.me'], icon: '📱' },
      { name: 'Snapchat', patterns: ['snapchat.com'], icon: '👻' }
    ];

    // Check for social media links in HTML
    const foundPlatforms: string[] = [];
    const foundLinks: string[] = [];

    socialPlatforms.forEach(platform => {
      platform.patterns.forEach(pattern => {
        const regex = new RegExp(`https?://[^\\s"']*${pattern}[^\\s"']*`, 'gi');
        const matches = html.match(regex);
        
        if (matches && matches.length > 0) {
          if (!foundPlatforms.includes(platform.name)) {
            foundPlatforms.push(platform.name);
            foundLinks.push(...matches);
          }
        }
      });
    });

    // Check for social media meta tags
    const metaTags = [
      { name: 'facebook', pattern: /<meta[^>]*property="og:url"[^>]*content="[^"]*facebook[^"]*"/gi },
      { name: 'twitter', pattern: /<meta[^>]*name="twitter:site"[^>]*content="[^"]*"/gi },
      { name: 'instagram', pattern: /<meta[^>]*property="og:url"[^>]*content="[^"]*instagram[^"]*"/gi },
      { name: 'linkedin', pattern: /<meta[^>]*property="og:url"[^>]*content="[^"]*linkedin[^"]*"/gi }
    ];

    metaTags.forEach(tag => {
      if (tag.pattern.test(html)) {
        if (!foundPlatforms.includes(tag.name.charAt(0).toUpperCase() + tag.name.slice(1))) {
          foundPlatforms.push(tag.name.charAt(0).toUpperCase() + tag.name.slice(1));
        }
      }
    });

    // Calculate score based on social media presence
    socialData.platforms = foundPlatforms;
    socialData.links = foundLinks;
    socialData.engagementOpportunities = foundPlatforms.length;

    if (foundPlatforms.length === 0) {
      socialData.score = 0;
      socialData.socialPresence = 'None';
      socialData.issues.push('No social media presence detected');
      socialData.recommendations.push('Add social media links to increase brand visibility');
      socialData.recommendations.push('Include social media icons in footer or header');
    } else if (foundPlatforms.length <= 2) {
      socialData.score = 30;
      socialData.socialPresence = 'Limited';
      socialData.issues.push('Limited social media presence');
      socialData.recommendations.push('Expand social media presence to more platforms');
      socialData.recommendations.push('Add social sharing buttons to content');
    } else if (foundPlatforms.length <= 4) {
      socialData.score = 60;
      socialData.socialPresence = 'Good';
      socialData.recommendations.push('Consider adding more niche social platforms');
      socialData.recommendations.push('Implement social media widgets');
    } else if (foundPlatforms.length <= 6) {
      socialData.score = 80;
      socialData.socialPresence = 'Excellent';
      socialData.recommendations.push('Focus on content strategy for existing platforms');
      socialData.recommendations.push('Consider social media automation tools');
    } else {
      socialData.score = 100;
      socialData.socialPresence = 'Outstanding';
      socialData.recommendations.push('Maintain consistent posting schedule');
      socialData.recommendations.push('Analyze engagement metrics regularly');
    }

    // Additional recommendations based on missing platforms
    const missingPlatforms = socialPlatforms.filter(p => !foundPlatforms.includes(p.name));
    if (missingPlatforms.length > 0) {
      const topMissing = missingPlatforms.slice(0, 3);
      socialData.recommendations.push(`Consider adding: ${topMissing.map(p => p.name).join(', ')}`);
    }

    // Check for social sharing buttons
    const hasSharingButtons = /share|social|facebook|twitter|linkedin/i.test(html);
    if (!hasSharingButtons) {
      socialData.issues.push('No social sharing buttons found');
      socialData.recommendations.push('Add social sharing buttons to blog posts and content');
    }

    return socialData;
  } catch (error) {
    console.error('Social Media Analysis Error:', error);
    return {
      score: 0,
      platforms: [],
      links: [],
      recommendations: ['Unable to analyze social media presence'],
      issues: ['Failed to fetch website content'],
      socialPresence: 'Unknown',
      engagementOpportunities: 0
    };
  }
} 