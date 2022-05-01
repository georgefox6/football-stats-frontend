import axios from 'axios'

const state = {
    similarPlayers: [],
}

const getters = {
    similarPlayers: (state) => state.similarPlayers,
}

const actions = {

    async fetchSimilarPlayers({ commit }, player_id) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/players/similar/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setSimilarPlayers', response.data)
    },
}

const mutations = {
    setSimilarPlayers: (state, similarPlayers) => (state.similarPlayers = similarPlayers),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
