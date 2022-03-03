import axios from 'axios'

const state = {
    playerPossessionPercentile: [],
}

const getters = {
    playerPossessionPercentile: (state) => state.playerPossessionPercentile,
}

const actions = {
    
    async fetchPlayerPossessionPercentile({ commit }, player_id) {
        console.log(
            `https://football-stats-api.azurewebsites.net/api/Players/percentile/possession/${player_id}`
        )
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/possession/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerPossessionPercentile', response.data)
    },

}

const mutations = {
    setPlayerPossessionPercentile: (state, playerPossessionPercentile) => (state.playerPossessionPercentile = playerPossessionPercentile),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
