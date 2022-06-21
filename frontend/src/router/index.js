import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import 'vue-select/dist/vue-select.css';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: 'Football Stats - Home',
            
            metaTags: [
                {
                    name: 'description',
                    content:
                        'Home page for football stats. The place to come for data on goals, expected goals, leagues, premier league football.',
                },
                {
                    property: 'og:description',
                    content:
                        'Home page for football stats. The place to come for data on goals, expected goals, leagues, premier league football.',
                },
            ],
        },
    },
    {
        path: '/player',
        name: 'Players',
        component: () => import('../views/Players.vue'),
        meta: {
            title: 'Football Stats - Players',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'A summary of all football players in the database. Transfer, goals, team data.',
                },
                {
                    property: 'og:description',
                    content:
                        'A summary of all football players in the database. Transfer, goals, team data.',
                },
            ],
        },
    },
    {
        path: '/player/comparison/:player1?/:player2?',
        name: 'PlayerComparison',
        component: () => import('../views/PlayerComparison.vue'),
        meta: {
            title: 'Football Stats - Comparison',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'Compare the stats of 2 football players. Goals, assists, expected goals.',
                },
                {
                    property: 'og:description',
                    content:
                        'Compare the stats of 2 football players. Goals, assists, expected goals.',
                },
            ],
        },
    },
    {
        path: '/player/:playerId',
        component: () => import('../views/Player.vue'),
        children: [
            {
                name: 'PlayerDefaultView',
                path: '',
                component: () => import('../views/player-views/PlayerDefaultView.vue'),
                metaTags: [
                    {
                        name: 'description',
                        content:
                            'Detailed statistics and information on a specific player including graphs and percentile charts.',
                    },
                    {
                        property: 'og:description',
                        content:
                            'Detailed statistics and information on a specific player including graphs and percentile charts.',
                    },
                ],
            },
            {
                name: 'PlayerAttackingView',
                path: 'attacking',
                component: () => import('../views/player-views/PlayerAttackingView.vue'),
                metaTags: [
                    {
                        name: 'description',
                        content:
                            'Detailed attacking statistics with percentile charts. Expected goals, shots, goals scored for players in the top 5 football leagues',
                    },
                    {
                        property: 'og:description',
                        content:
                            'Detailed attacking statistics with percentile charts. Expected goals, shots, goals scored for players in the top 5 football leagues',
                    },
                ],
            },
            {
                name: 'PlayerPossessionView',
                path: 'possession',
                component: () => import('../views/player-views/PlayerPossessionView.vue'),
                metaTags: [
                    {
                        name: 'description',
                        content:
                            'Detailed possession statistics with percentile charts. Passes complete, assists, expected assists for players in the top 5 football leagues',
                    },
                    {
                        property: 'og:description',
                        content:
                            'Detailed possession statistics with percentile charts. Passes complete, assists, expected assists for players in the top 5 football leagues',
                    },
                ],
            },
            {
                name: 'PlayerDefendingView',
                path: 'defending',
                component: () => import('../views/player-views/PlayerDefendingView.vue'),
                metaTags: [
                    {
                        name: 'description',
                        content:
                            'Detailed defending statistics with percentile charts. Tackles made, headers won, interceptions and blocks for players in the top 5 football leagues',
                    },
                    {
                        property: 'og:description',
                        content:
                            'Detailed defending statistics with percentile charts. Tackles made, headers won, interceptions and blocks for players in the top 5 football leagues',
                    },
                ],
            },
        ],
        meta: {
            title: 'Football Stats - Player Details',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'Detailed statistics and information on a specific player including graphs and percentile charts.',
                },
                {
                    property: 'og:description',
                    content:
                        'Detailed statistics and information on a specific player including graphs and percentile charts.',
                },
            ],
        },
    },
    {
        path: '/:catchAll(.*)*',
        name: 'PageNotFound',
        component: PageNotFound,
        meta: {
            title: 'Football Stats - Home',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'Football stats is a website dedicatd to bringing you football statistics, games and insights into football players and clubs.',
                },
                {
                    property: 'og:description',
                    content:
                        'Football stats is a website dedicatd to bringing you football statistics, games and insights into football players and clubs.',
                },
            ],
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,

    scrollBehavior(to, from) {
        if (from.name == 'Players') {
            return { x: 0, y: 0 }
        }
    },
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title)

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags)

    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags)

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
        (el) => el.parentNode.removeChild(el)
    )

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next()

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement('meta')

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key])
            })

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '')

            return tag
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag))

    next()
})

export default router
