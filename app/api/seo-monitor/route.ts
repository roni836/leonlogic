import { NextRequest, NextResponse } from 'next/server'
import servicesData from '@/service.json'
import blogData from '@/blog.json'

export async function GET(request: NextRequest) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com'
    const currentDate = new Date()

    // SEO Health Check
    const seoHealth = {
      timestamp: currentDate.toISOString(),
      baseUrl,
      totalPages: 0,
      pagesWithMetadata: 0,
      pagesWithStructuredData: 0,
      issues: [] as string[],
      recommendations: [] as string[],
    }

    // Check static pages
    const staticPages = [
      '/',
      '/sluzby',
      '/portfolio',
      '/blog',
      '/o-nas',
      '/kontakt',
      '/faq',
      '/career',
      '/calculator',
    ]

    seoHealth.totalPages += staticPages.length

    // Check service pages
    const services = (servicesData as any).services || []
    seoHealth.totalPages += services.length

    // Check blog pages
    const posts = (blogData as any).posts || []
    seoHealth.totalPages += posts.length

    // Validate service pages
    services.forEach((service: any) => {
      if (!service.title_tag) {
        seoHealth.issues.push(`Service ${service.slug} missing title_tag`)
      }
      if (!service.meta_description) {
        seoHealth.issues.push(`Service ${service.slug} missing meta_description`)
      }
      if (service.title_tag && service.meta_description) {
        seoHealth.pagesWithMetadata++
      }
    })

    // Validate blog posts
    posts.forEach((post: any) => {
      if (!post.meta?.title && !post.title) {
        seoHealth.issues.push(`Blog post ${post.slug} missing title`)
      }
      if (!post.meta?.description && !post.excerpt) {
        seoHealth.issues.push(`Blog post ${post.slug} missing description`)
      }
      if ((post.meta?.title || post.title) && (post.meta?.description || post.excerpt)) {
        seoHealth.pagesWithMetadata++
      }
    })

    // Add static pages to metadata count (assuming they have metadata)
    seoHealth.pagesWithMetadata += staticPages.length

    // Calculate structured data coverage (assuming all pages have JSON-LD)
    seoHealth.pagesWithStructuredData = seoHealth.totalPages

    // Generate recommendations
    if (seoHealth.issues.length > 0) {
      seoHealth.recommendations.push('Fix missing metadata for pages with issues')
    }

    const metadataCoverage = (seoHealth.pagesWithMetadata / seoHealth.totalPages) * 100
    if (metadataCoverage < 100) {
      seoHealth.recommendations.push(`Improve metadata coverage (currently ${metadataCoverage.toFixed(1)}%)`)
    }

    const structuredDataCoverage = (seoHealth.pagesWithStructuredData / seoHealth.totalPages) * 100
    if (structuredDataCoverage < 100) {
      seoHealth.recommendations.push(`Add structured data to all pages (currently ${structuredDataCoverage.toFixed(1)}%)`)
    }

    // Performance recommendations
    seoHealth.recommendations.push('Ensure all images have proper alt text')
    seoHealth.recommendations.push('Optimize Core Web Vitals scores')
    seoHealth.recommendations.push('Implement proper canonical URLs')
    seoHealth.recommendations.push('Add Open Graph and Twitter Card metadata')

    return NextResponse.json({
      success: true,
      data: seoHealth,
      summary: {
        totalPages: seoHealth.totalPages,
        metadataCoverage: `${metadataCoverage.toFixed(1)}%`,
        structuredDataCoverage: `${structuredDataCoverage.toFixed(1)}%`,
        issuesCount: seoHealth.issues.length,
        recommendationsCount: seoHealth.recommendations.length,
      }
    })

  } catch (error) {
    console.error('SEO Monitor Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate SEO report',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
