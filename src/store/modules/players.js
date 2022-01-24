import axios from 'axios'

const state = {
    players: [],
    player: [],
}

const getters = {
    allPlayers: (state) => state.players,
    player: (state) => state.player,
}

const actions = {
    async fetchPlayers({ commit }) {
        const response = await axios
            .get(`https://football-stats-api.azurewebsites.net/api/players`)
            .catch((errors) => {
                console.log(errors)
            })

        commit('setPlayers', response.data)
    },

    async fetchPlayer({ commit }, player_id) {
        console.log(
            `https://football-stats-api.azurewebsites.net/api/players/${player_id}`
        )
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/players/${player_id}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayer', response.data)
    },

    async fetchPlayerByName({ commit }, player_name) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/players/name/${player_name}`
            )
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPlayers', response.data)
    },

    async fetchPlayersByTeam({ commit }, player_team) {
        const response = await axios
            .get(
                `https://football-stats-api.azurewebsites.net/api/players/team/${player_team}`
            )
            .catch((errors) => {
                console.log(errors)
            })

        commit('setPlayers', response.data)
    },

    //     async addPlayer({ commit }, player) {
    //         commit;
    //         axios.post(
    //             `/api/players`,
    //             {
    //                 player
    //             }
    //         )
    //         .catch(errors => {
    //             console.log(errors);
    //         })
    //     },

    //     async updatePlayer({ commit }, player) {
    //         commit;
    //         axios.put(
    //             `/api/players/${player.player_id}`,
    //             {
    //                 player
    //             }
    //         )
    //         .catch(errors => {
    //             console.log(errors);
    //         })
    //     },

    //     async deletePlayer({ commit }, player_id) {
    //         commit;
    //         const response = await axios.delete(
    //             `/api/players/${player_id}`
    //         )
    //         .catch(errors => {
    //             console.log(errors);
    //         })
    //         response;
    //     }
}

const mutations = {
    setPlayers: (state, players) => (state.players = players),
    setPlayer: (state, player) => (state.player = player),
}

export default {
    state,
    getters,
    actions,
    mutations,
}
