/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ustjsbjycfrgbgjtyljg.supabase.co'], // 👈 Add your Supabase domain here
  },
  // Add SEO optimizations
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ]
  },
  // Enable compression
  compress: true
}

module.exports = nextConfig
