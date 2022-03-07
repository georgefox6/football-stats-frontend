import Vue from 'vue'
import VueRouter from 'vue-router'
import Player from '../views/Player.vue'
import PlayerDefaultView from '../views/player-views/PlayerDefaultView.vue'
import PlayerAttackingtView from '../views/player-views/PlayerAttackingView.vue'
import PlayerPossessionView from '../views/player-views/PlayerPossessionView.vue'
import PlayerDefendingView from '../views/player-views/PlayerDefendingView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Players from '../views/Players.vue'
import PlayerComparison from '../views/PlayerComparison.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/players',
        name: 'Players',
        component: Players,
    },
    {
        path: '/player/comparison/:player1/:player2',
        name: 'PlayerComparison',
        component: PlayerComparison,
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
                component: PlayerDefendingView,
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

    scrollBehavior (to, from) {
        if(from.name == 'Players'){
            return { x: 0, y: 0 };
            
        }
    }
})

export default router
