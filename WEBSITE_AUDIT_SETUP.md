# Website Audit Tool Setup Guide

## Overview
This website audit tool is a comprehensive lead generation system that analyzes websites for SEO, performance, usability, and growth opportunities. It provides professional PDF reports and captures leads for web development services.

## Features
- **Multi-step Audit Process**: SEO, Performance, Mobile, UX, Technical, and Growth analysis
- **Live Analysis**: Real-time website scanning using free APIs
- **Professional PDF Reports**: Detailed reports similar to SEOptimer
- **Lead Capture**: Integrated with Supabase for lead management
- **Psychology-focused**: Emphasizes improvements and business opportunities
- **Modern UI**: Matches your existing design system

## Setup Instructions

### 1. Install Dependencies
```bash
npm install @supabase/supabase-js jspdf jspdf-autotable html2canvas
```

### 2. Supabase Setup
1. Create a free Supabase account at https://supabase.com
2. Create a new project
3. Create a table called `audit_leads` with the following structure:

```sql
CREATE TABLE audit_leads (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  website_url TEXT NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'audit_started',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Environment Variables
Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Google PageSpeed Insights API (optional - for better performance analysis)
GOOGLE_PAGESPEED_API_KEY=your_google_api_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. How It Works

#### User Flow:
1. User enters email in hero section
2. Audit modal opens automatically
3. User enters website URL and company name
4. System runs 6-step analysis:
   - SEO Analysis (meta tags, content, structure)
   - Performance Check (speed, Core Web Vitals)
   - Mobile Optimization (responsiveness, usability)
   - User Experience (navigation, CTAs, trust signals)
   - Technical Health (SSL, security, infrastructure)
   - Growth Opportunities (business improvements)

#### Lead Generation:
- Email and website data saved to Supabase
- Professional PDF report generated
- "Get Custom Quote" button for conversion
- Lead status tracking (audit_started → interested → converted)

### 5. API Endpoints Created

- `/api/audit/seo` - SEO analysis
- `/api/audit/performance` - Performance analysis
- `/api/audit/usability` - Mobile and usability analysis
- `/api/audit/ux` - User experience analysis
- `/api/audit/technical` - Technical infrastructure analysis
- `/api/audit/growth` - Growth opportunities analysis
- `/api/audit/pdf` - PDF report generation

### 6. Psychology-Based Approach

The tool is designed to:
- **Create Awareness**: Show users what they're missing
- **Build Trust**: Professional analysis and recommendations
- **Drive Action**: Clear next steps and business impact
- **Generate Leads**: Seamless transition to sales conversation

### 7. Free APIs Used

- **Google DNS API**: For domain resolution
- **Google PageSpeed Insights**: For performance analysis (optional)
- **Basic HTTP requests**: For SEO and technical analysis
- **Client-side analysis**: For UX and content analysis

### 8. Customization

You can customize:
- **Audit criteria**: Modify analysis parameters in API routes
- **PDF styling**: Update PDF generation in `/api/audit/pdf`
- **Lead flow**: Modify lead capture and follow-up process
- **UI/UX**: Update modal design and user experience

### 9. Testing

1. Start the development server: `npm run dev`
2. Enter an email in the hero section
3. Test with various websites (good and bad examples)
4. Check PDF generation
5. Verify lead capture in Supabase

### 10. Production Deployment

1. Set up environment variables in your hosting platform
2. Configure Supabase production database
3. Test all API endpoints
4. Monitor lead generation and conversion rates

## Benefits

- **No Monthly Fees**: Uses free APIs and your own infrastructure
- **Professional Quality**: Comparable to paid tools like SEOptimer
- **Lead Generation**: Captures qualified leads automatically
- **Brand Building**: Positions you as an expert
- **Scalable**: Can handle multiple concurrent audits

## Support

For questions or customization requests, refer to the code comments and API documentation in each file. 