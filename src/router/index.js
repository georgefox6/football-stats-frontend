import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player from '../views/Player.vue'
import PlayerDefaultView from '../views/player-views/PlayerDefaultView.vue'
import PlayerAttackingtView from '../views/player-views/PlayerAttackingView.vue'
import PlayerPossessionView from '../views/player-views/PlayerPossessionView.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/player/:playerId',
        component: Player,
        children: [
            {
                name: 'PlayerDefaultView',
                path: '',
                component: PlayerDefaultView,
            },
            {
                name: 'PlayerAttackingView',
                path: 'attacking',
                component: PlayerAttackingtView,
            },
            {
                name: 'PlayerPossessionView',
                path: 'possession',
                component: PlayerPossessionView,
            },
            {
                name: 'PlayerDefendingView',
                path: 'defending',
                component: PlayerPossessionView,
            },
        ],
    },
    {
        path: '/:catchAll(.*)*',
        name: 'PageNotFound',
        component: PageNotFound,
    },
]

const router = new VueRouter({
    routes,
})

export default router
