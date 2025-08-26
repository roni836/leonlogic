/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  images: {
    domains: ["ustjsbjycfrgbgjtyljg.supabase.co"], // Supabase domain
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "alt.leonlogic.com" }],
        destination: "https://www.leonlogic.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
