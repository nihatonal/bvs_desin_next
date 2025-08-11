/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.bravixcreative.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/404'],
  transform: async (cfg, path) => {
    const langs = ['tr', 'en', 'ru'];
    const segments = path.split('/').filter(Boolean);

    const alternateRefs = langs.map((lang) => ({
      href: `${cfg.siteUrl}/${lang}${segments.length ? '/' + segments.slice(1).join('/') : ''}`,
      hreflang: lang,
    }));

    return {
      loc: path,
      changefreq: cfg.changefreq,
      priority: cfg.priority,
      lastmod: new Date().toISOString(),
      alternateRefs,
    };
  },
};

module.exports = config;
