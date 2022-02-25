import axios from 'axios'

const state = {
    playerDefendingPercentile: [],
}

const getters = {
    playerDefendingPercentile: (state) => state.playerDefendingPercentile,
}

const actions = {
    
    async fetchPlayerDefendingPercentile({ commit }, player_id) {
        console.log(
            `https://football-stats-api.azurewebsites.net/api/Players/percentile/defending/${player_id}`
        )
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/defending/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerDefendingPercentile', response.data)
    },

}

const mutations = {
    setPlayerDefendingPercentile: (state, playerDefendingPercentile) => (state.playerDefendingPercentile = playerDefendingPercentile),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
