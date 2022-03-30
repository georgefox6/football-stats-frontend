import axios from 'axios'

const state = {
    playerPossessionPercentile: [],
    playerPossessionPercentiles: [],
}

const getters = {
    playerPossessionPercentile: (state) => state.playerPossessionPercentile,
    playerPossessionPercentiles: (state) => state.playerPossessionPercentiles,
}

const actions = {
    
    async fetchPlayerPossessionPercentile({ commit }, player_id) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/possession/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerPossessionPercentile', response.data)
    },
    
    async fetchPlayerPossessionPercentiles({ commit }) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/possession`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerPossessionPercentiles', response.data)
    },

}

const mutations = {
    setPlayerPossessionPercentile: (state, playerPossessionPercentile) => (state.playerPossessionPercentile = playerPossessionPercentile),
    setPlayerPossessionPercentiles: (state, playerPossessionPercentiles) => (state.playerPossessionPercentiles = playerPossessionPercentiles),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
