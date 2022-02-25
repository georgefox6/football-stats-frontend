import axios from 'axios'

const state = {
    playerAttackingPercentile: [],
}

const getters = {
    playerAttackingPercentile: (state) => state.playerAttackingPercentile,
}

const actions = {
    
    async fetchPlayerAttackingPercentile({ commit }, player_id) {
        console.log(
            `https://football-stats-api.azurewebsites.net/api/Players/percentile/attacking/${player_id}`
        )
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/percentile/attacking/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerAttackingPercentile', response.data)
    },

}

const mutations = {
    setPlayerAttackingPercentile: (state, playerAttackingPercentile) => (state.playerAttackingPercentile = playerAttackingPercentile),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
