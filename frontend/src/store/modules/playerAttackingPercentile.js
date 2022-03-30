import axios from 'axios'

const state = {
    playerAttackingPercentile: [],
    playerAttackingPercentiles: [],
}

const getters = {
    playerAttackingPercentile: (state) => state.playerAttackingPercentile,
    playerAttackingPercentiles: (state) => state.playerAttackingPercentiles,
}

const actions = {
    
    async fetchPlayerAttackingPercentile({ commit }, player_id) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/attacking/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerAttackingPercentile', response.data)
    },
    
    async fetchPlayerAttackingPercentiles({ commit }) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/attacking`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerAttackingPercentiles', response.data)
    },

}

const mutations = {
    setPlayerAttackingPercentile: (state, playerAttackingPercentile) => (state.playerAttackingPercentile = playerAttackingPercentile),
    setPlayerAttackingPercentiles: (state, playerAttackingPercentiles) => (state.playerAttackingPercentiles = playerAttackingPercentiles),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
