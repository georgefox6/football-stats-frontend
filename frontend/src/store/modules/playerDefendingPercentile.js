import axios from 'axios'

const state = {
    playerDefendingPercentile: [],
    playerDefendingPercentiles: [],
}

const getters = {
    playerDefendingPercentile: (state) => state.playerDefendingPercentile,
    playerDefendingPercentiles: (state) => state.playerDefendingPercentiles,
}

const actions = {
    
    async fetchPlayerDefendingPercentile({ commit }, player_id) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/defending/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerDefendingPercentile', response.data)
    },
    
    async fetchPlayerDefendingPercentiles({ commit }) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/defending`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerDefendingPercentiles', response.data)
    },

}

const mutations = {
    setPlayerDefendingPercentile: (state, playerDefendingPercentile) => (state.playerDefendingPercentile = playerDefendingPercentile),
    setPlayerDefendingPercentiles: (state, playerDefendingPercentiles) => (state.playerDefendingPercentiles = playerDefendingPercentiles),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
