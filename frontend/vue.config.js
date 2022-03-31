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
    {
        path: '/player/11',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/12',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/13',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/14',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/15',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/16',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/17',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/comparison/44/45',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/player/comparison/40/45',
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
