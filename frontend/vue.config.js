const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/players',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
]

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({
                base: 'https://www.football-stats.uk',
                paths,
                options: {
                    filename: 'sitemap.xml',
                    lastmod: true,
                    changefreq: 'monthly',
                },
            }),
        ],
    },
}
