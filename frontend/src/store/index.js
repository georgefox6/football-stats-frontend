import Vue from 'vue'
import Vuex from 'vuex'
import players from './modules/players'
import playerAttacking from './modules/playerAttackingPercentile'
import playerPossession from './modules/playerPossessionPercentile'
import playerDefending from './modules/playerDefendingPercentile'
import playerTrait from './modules/playerTraits'
import similarPlayers from './modules/similarPlayers'
import paginatedPlayers from './modules/paginatedPlayers'
import playerSummaries from './modules/playerSummaries'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        players,
        playerAttacking,
        playerPossession,
        playerDefending,
        playerTrait,
        similarPlayers,
        paginatedPlayers,
        playerSummaries
    },
})
