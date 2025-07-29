/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://leonlogic-pzjs.vercel.app/',
  generateRobotsTxt: true,
  // optional
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
