import axios from 'axios'

const state = {
    playerTrait: [],
    playerTraits: [],
}

const getters = {
    playerTrait: (state) => state.playerTrait,
    playerTraits: (state) => state.playerTraits,
}

const actions = {
    
    async fetchPlayerTrait({ commit }, player_id) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/traits/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerTrait', response.data)
    },
    
    async fetchPlayerTraits({ commit }) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/Players/traits`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayerTraits', response.data)
    },

}

const mutations = {
    setPlayerTrait: (state, playerTrait) => (state.playerTrait = playerTrait),
    setPlayerTraits: (state, playerTraits) => (state.playerTraits = playerTraits),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
