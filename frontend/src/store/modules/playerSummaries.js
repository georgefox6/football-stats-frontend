import axios from 'axios'

const state = {
    playerSummaries: []
}

const getters = {
    playerSummaries: (state) => state.playerSummaries
}

const actions = {
    async fetchPlayerSummaries({ commit }) {
        const response = await axios
            .get(`https://football-stats-api.azurewebsites.net/api/players/summary`)
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerSummaries', response.data)
    },
}

const mutations = {
    setPlayerSummaries: (state, playerSummaries) => (state.playerSummaries = playerSummaries)
}

export default {
    state,
    getters,
    actions,
    mutations,
}
