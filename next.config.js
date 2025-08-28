/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static generation for better SEO
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['ustjsbjycfrgbgjtyljg.supabase.co'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // SEO and performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      // Specific headers for static assets
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Headers for API routes
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          }
        ]
      }
    ]
  },

  // Enable compression
  compress: true,

  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['@next/font', 'lucide-react'],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true },
            optipng: { enabled: false },
            pngquant: { quality: [0.65, 0.90], speed: 4 },
            gifsicle: { interlaced: false },
            webp: { quality: 75 }
          }
        }
      ]
    });

    return config;
  },

  // Generate static pages for better SEO
  trailingSlash: false,
  
  // Enable static exports for better performance
  distDir: '.next',
  
  // Optimize for search engines
  poweredByHeader: false,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize for production
}

module.exports = nextConfig
