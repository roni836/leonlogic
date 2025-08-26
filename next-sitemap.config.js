/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.leonlogic.com", // 👈 your production domain here
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin", "/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
    ],
  },
};
