const fetchArticles = async () => {
  return [
    { slug: '/posts/publicacoes/como-acelerar-um-pc-lento-10-solucoes-eficazes', updatedAt: '2025-07-01' },
    { slug: '/posts/publicacoes/como-dinheiro-evoluiu-ao-longo-da-historia-a-jornada-do-valor', updatedAt: '2025-07-04' },
    { slug: '/posts/publicacoes/playstation-6-o-futuro-dos-jogos-esta-chegando', updatedAt: '2025-07-05' },
    { slug: '/posts/publicacoes/quanto-rende-r1000-em-bitcoin-por-mes-entenda-com-exemplos-praticos', updatedAt: '2025-07-05' },
    { slug: '/posts/publicacoes/quanto-custa-um-robo-humanoide-no-brasil-em-2025-descubra-os-modelos-precos-e-onde-comprar', updatedAt: '2025-07-05' },
    { slug: '/posts/publicacoes/o-futuro-das-criptomoedas-tendencias-e-oportunidades-em-2025', updatedAt: '2025-07-05' },
    { slug: '/posts/publicacoes/por-que-o-aumento-de-deputados-federais-no-brasil-prejudica-a-economia-e-como-voce-pode-impedir', updatedAt: '2025-07-05' },
    { slug: '/posts/publicacoes/a-relacao-economica-entre-eua-e-china-conflitos-dependencia-e-futuro', updatedAt: '2025-07-05' },
  ]
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.financetech.online',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'],
  additionalPaths: async (config) => {
    const articles = await fetchArticles()
    return articles.map((article) => ({
      loc: article.slug,
      lastmod: article.updatedAt,
    }))
  },
}
