import { NextRequest, NextResponse } from 'next/server';
import { generateText } from '@/libs/gemini';

type GeminiRecommendation = {
  criticalIssues?: { title: string; description: string; severity: 'high' | 'medium' | 'low' }[];
  seoRecommendations?: string[];
  uxRecommendations?: string[];
  quickWins?: string[];
  indirectSuggestion?: string;
  summary?: string;
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

    // Ensure arrays exist to simplify client merging
    parsed.criticalIssues = parsed.criticalIssues || [];
    parsed.seoRecommendations = parsed.seoRecommendations || [];
    parsed.uxRecommendations = parsed.uxRecommendations || [];
    parsed.quickWins = parsed.quickWins || [];
    parsed.indirectSuggestion = parsed.indirectSuggestion || '';
    parsed.summary = parsed.summary || '';

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
    'You are an expert website strategist and technical SEO specialist.',
    'Analyze the following website and produce highly actionable, business-focused recommendations.',
    '',
    `Website URL: ${url}`,
    `Company Name: ${company}`,
    condensedResults ? `Existing signals (JSON): ${condensedResults}` : 'Existing signals: none',
    '',
    'STRICT OUTPUT FORMAT INSTRUCTIONS:',
    '- Respond with ONLY a raw JSON object. Do not include markdown, backticks, or commentary.',
    '- JSON schema:',
    '{',
    '  "criticalIssues": [{ "title": string, "description": string, "severity": "high"|"medium"|"low" }],',
    '  "seoRecommendations": string[],',
    '  "uxRecommendations": string[],',
    '  "quickWins": string[],',
    '  "indirectSuggestion": string,',
    '  "summary": string',
    '}',
    '',
    'Author guidance:',
    '- Keep each item concise and implementation-ready.',
    '- "criticalIssues" should list only items that materially harm rankings, conversions, or trust.',
    '- "indirectSuggestion" should gently invite the user to connect with our team for help, without a hard sell.',
    '- Avoid repeating the company name in every bullet.',
    '- Focus on changes with the highest impact within 30–60 days.',
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


