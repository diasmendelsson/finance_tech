/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.financetech.online', // ← substitua com seu domínio
  generateRobotsTxt: true, // Gera também o robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'], // se quiser excluir páginas específicas
};
