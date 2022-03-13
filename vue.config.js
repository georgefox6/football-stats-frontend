const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0,10),
        priority: '0.8',
        changefreq: 'hourly'
    },
    {
        path: '/players',
        lastmod: new Date().toISOString().slice(0,10),
        priority: '0.8',
        changefreq: 'hourly'
    },
    {
        path: '/player/',
        lastmod: new Date().toISOString().slice(0,10),
        priority: '0.8',
        changefreq: 'hourly'
    },
];

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin('https://delightful-ocean-01cb0e303.1.azurestaticapps.net/', paths, {
            // new SitemapPlugin('http://localhost:8080', paths, {
                filename: 'sitemap.xml',
                lastmod: true,
                changefreq: 'hourly',
                priority: '0.8'
            })
        ]
    }
}