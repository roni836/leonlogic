import { NextRequest, NextResponse } from 'next/server';
import { generateText } from '@/libs/gemini';

type GeminiRecommendation = {
  strategicAnalysis?: string;
  competitiveIntelligence?: {
    topCompetitors: string[];
    marketGaps: string[];
    biggestOpportunity: string;
  };
  localOpportunities?: {
    untappedKeywords: string[];
    seasonalTrends: string[];
    partnershipOpportunities: string[];
  };
  businessGrowthStrategy?: {
    trafficPotential: string;
    priorityActions: string[];
    implementationTimeline: string;
  };
  personalizedActionPlan?: {
    priority1: { action: string; expectedResult: string; timeline: string };
    priority2: { action: string; whyNow: string };
    priority3: { action: string; investment: string; roi: string };
  };
  measurableGoals?: string[];
  implementationSupport?: string;
};

export async function POST(request: NextRequest) {
  try {
    const { url, company, results } = await request.json();

    if (!url || !company) {
      return NextResponse.json({ error: 'Both url and company are required' }, { status: 400 });
    }

    const condensedResults = buildResultsSummary(results);

    const prompt = buildPrompt({ url, company, condensedResults });

    const rawText = await generateText(prompt);

    const parsed = safeParseJsonFromText(rawText) as GeminiRecommendation | null;

    if (!parsed) {
      return NextResponse.json({
        error: 'Failed to parse Gemini response',
        raw: rawText,
      }, { status: 502 });
    }

    // Ensure all properties exist to simplify client merging
    parsed.strategicAnalysis = parsed.strategicAnalysis || '';
    parsed.competitiveIntelligence = parsed.competitiveIntelligence || {
      topCompetitors: [],
      marketGaps: [],
      biggestOpportunity: ''
    };
    parsed.localOpportunities = parsed.localOpportunities || {
      untappedKeywords: [],
      seasonalTrends: [],
      partnershipOpportunities: []
    };
    parsed.businessGrowthStrategy = parsed.businessGrowthStrategy || {
      trafficPotential: '',
      priorityActions: [],
      implementationTimeline: ''
    };
    parsed.personalizedActionPlan = parsed.personalizedActionPlan || {
      priority1: { action: '', expectedResult: '', timeline: '' },
      priority2: { action: '', whyNow: '' },
      priority3: { action: '', investment: '', roi: '' }
    };
    parsed.measurableGoals = parsed.measurableGoals || [];
    parsed.implementationSupport = parsed.implementationSupport || '';

    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Recommendations API error:', error);
    return NextResponse.json({ error: 'Failed to generate recommendations' }, { status: 500 });
  }
}

function buildResultsSummary(results: any) {
  if (!results) return '';
  try {
    const pick = (obj: any, keys: string[]) => keys.reduce((acc: any, k) => {
      if (obj && typeof obj[k] !== 'undefined') acc[k] = obj[k];
      return acc;
    }, {});
    const summary = {
      seo: pick(results.seo || {}, ['score', 'issues', 'recommendations', 'wordCount', 'hasSSL', 'hasSchema', 'hasRobotsTxt', 'hasSitemap', 'technologyStack']),
      performance: pick(results.performance || {}, ['score']),
      usability: pick(results.usability || {}, ['score']),
      social: pick(results.social || {}, ['score']),
      technical: pick(results.technical || {}, ['score'])
    };
    return JSON.stringify(summary);
  } catch {
    return '';
  }
}

function buildPrompt({ url, company, condensedResults }: { url: string; company: string; condensedResults: string }) {
  return [
    'You are a senior Slovak digital strategist who adds BUSINESS INTELLIGENCE and MARKET CONTEXT to technical SEO audit data. DO NOT repeat technical scores or issues already shown in the system.',
    '',
    'INPUT: You receive business info (name, location, services) + their technical audit results',
    'OUTPUT: Strategic business insights they cannot get anywhere else',
    '',
    'PROVIDE ONLY NEW VALUE:',
    '1. COMPETITIVE INTELLIGENCE',
    '- Research actual competitors in their exact location',
    '- Find who ranks #1 for their main keywords',
    '- Identify specific competitor advantages they lack',
    '- Reveal market gaps they can exploit',
    '2. LOCAL MARKET OPPORTUNITIES',
    '- Identify untapped local search terms for their area',
    '- Find seasonal trends in their industry',
    '- Discover location-specific customer behaviors',
    '- Reveal local partnership opportunities',
    '3. BUSINESS GROWTH STRATEGY',
    '- Calculate realistic traffic/lead potential',
    '- Prioritize fixes by business impact (not technical severity)',
    '- Create implementation timeline for maximum ROI',
    '- Suggest content strategy for their specific audience',
    '4. PERSONALIZED ACTION PLAN',
    '- Industry-specific recommendations',
    '- Budget-conscious prioritization',
    '- Quick wins vs long-term strategy',
    '- Measurable goals and KPIs',
    '',
    `Website URL: ${url}`,
    `Company Name: ${company}`,
    condensedResults ? `Existing signals (JSON): ${condensedResults}` : 'Existing signals: none',
    '',
    'SLOVAK OUTPUT FORMAT:',
    'Strategická analýza trhu a príležitostí pre [COMPANY NAME]',
    'na základe analýzy vašej pozície na trhu a konkurenčného prostredia v [location] sme identifikovali kľúčové príležitosti pre rast vášho biznisu.',
    '',
    'KONKURENČNÉ PROSTREDIE V [LOCATION]',
    'Dominantní hráči vo vašej oblasti:',
    '• [Competitor 1]: [Specific advantage they have over client]',
    '• [Competitor 2]: [Market position and weakness to exploit]',
    '• [Market gap]: [Opportunity no one is addressing]',
    'Vaša pozícia: [Where they stand vs competition]',
    'Najväčšia príležitosť: [Specific way to outrank #1 competitor]',
    '',
    'NEVYUŽITÉ TRHOVÉ PRÍLEŽITOSTI',
    'Lokálne vyhľadávania s potenciálom:',
    '• "[Local keyword]" - [search volume] mesačne, žiadna konkurencia',
    '• "[Seasonal opportunity]" - [timing and potential]',
    '• "[Service gap]" - zákazníci hľadajú, ale nikto neponúka',
    '',
    'STRATEGICKÝ AKČNÝ PLÁN PRE VÁŠ BIZNIS',
    'Priorita #1 (Najväčší impact):',
    '[Specific action based on their audit + market research]',
    'Očakávaný výsledok: [Realistic traffic/lead increase]',
    'Časový rámec: [Implementation timeline]',
    '',
    'Priorita #2 (Rýchly win):',
    '[Quick opportunity they can capture immediately]',
    'Prečo teraz: [Market timing or competitive advantage]',
    '',
    'Priorita #3 (Dlhodobý rast):',
    '[Strategic initiative for sustained growth]',
    'Investícia: [Time/resource requirement]',
    'ROI: [Expected business return]',
    '',
    'ODPORÚČANIA ŠITÉ NA MIERU',
    'Pre váš typ biznisu v [location] odporúčame:',
    '[Industry-specific strategies they won\'t find in generic SEO advice]',
    '',
    'Merateľné ciele na 6 mesiacov:',
    '• [Specific, achievable metric]',
    '• [Another measurable outcome]',
    '• [Third concrete goal]',
    '',
    'IMPLEMENTAČNÁ PODPORA',
    'Ako môžeme pomôcť realizovať tieto príležitosti:',
    '[Specific services mapped to their identified opportunities]',
    '',
    'CRITICAL: Focus on what they DON\'T already know. No technical score repetition. Only strategic market intelligence and actionable business opportunities.',
    '',
    'STRICT OUTPUT FORMAT INSTRUCTIONS:',
    '- Respond with ONLY a raw JSON object. Do not include markdown, backticks, or commentary.',
    '- JSON schema:',
    '{',
    '  "strategicAnalysis": string,',
    '  "competitiveIntelligence": {',
    '    "topCompetitors": string[],',
    '    "marketGaps": string[],',
    '    "biggestOpportunity": string',
    '  },',
    '  "localOpportunities": {',
    '    "untappedKeywords": string[],',
    '    "seasonalTrends": string[],',
    '    "partnershipOpportunities": string[]',
    '  },',
    '  "businessGrowthStrategy": {',
    '    "trafficPotential": string,',
    '    "priorityActions": string[],',
    '    "implementationTimeline": string',
    '  },',
    '  "personalizedActionPlan": {',
    '    "priority1": { "action": string, "expectedResult": string, "timeline": string },',
    '    "priority2": { "action": string, "whyNow": string },',
    '    "priority3": { "action": string, "investment": string, "roi": string }',
    '  },',
    '  "measurableGoals": string[],',
    '  "implementationSupport": string',
    '}',
    '',
    'Author guidance:',
    '- Focus on business impact, not technical severity',
    '- Provide specific, actionable market intelligence',
    '- Include realistic ROI projections',
    '- Make recommendations industry-specific and location-aware',
    '- Avoid generic SEO advice they can find anywhere',
  ].join('\n');
}

function safeParseJsonFromText(text: string) {
  // Try straight JSON first
  try {
    return JSON.parse(text);
  } catch {}

  // Extract JSON from code blocks if present
  const codeBlockMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/i);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1]);
    } catch {}
  }

  // Fallback: try to find the first balanced JSON object in the text
  const firstBrace = text.indexOf('{');
  if (firstBrace !== -1) {
    // Heuristic: find last closing brace
    const lastBrace = text.lastIndexOf('}');
    if (lastBrace > firstBrace) {
      const candidate = text.slice(firstBrace, lastBrace + 1);
      try {
        return JSON.parse(candidate);
      } catch {}
    }
  }

  return null;
}


