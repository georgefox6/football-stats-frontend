import axios from 'axios'

const state = {
    paginatedPlayers: [],
}

const getters = {
    allPaginatedPlayers: (state) => state.paginatedPlayers,
}

const actions = {
    async fetchPaginatedPlayers({ commit }, request) {
        var query = generateQuery(request);
        const response = await axios
            .get(`https://football-stats-api.azurewebsites.net/api/players/list?${query}`)
            .catch((errors) => {
                console.log(errors)
            })
        commit('setPaginatedPlayers', response.data)
    },
}

const mutations = {
    setPaginatedPlayers: (state, paginatedPlayers) => (state.paginatedPlayers = paginatedPlayers),
}

export default {
    state,
    getters,
    actions,
    mutations,
}

function generateQuery( request ) {
    let output = ""
    for (var i = 0; i < request.PositionFilter.length; i++){
        output += ("PositionFilter=" + request.PositionFilter[i] + "&")
    }

    for (i = 0; i < request.ClubFilter.length; i++){
        output += ("ClubFilter=" + request.ClubFilter[i] + "&")
    }

    for (i = 0; i < request.NationFilter.length; i++){
        output += ("NationFilter=" + request.NationFilter[i] + "&")
    }

    for (i = 0; i < request.ContractEndDateFilter.length; i++){
        output += ("ContractEndDateFilter=" + request.ContractEndDateFilter[i] + "&")
    }

    request.MinMarketValueFilter ? output += ("MinMarketValueFilter=" + (request.MinMarketValueFilter * 1000000) + "&") : output
    request.MaxMarketValueFilter ? output += ("MaxMarketValueFilter=" + (request.MaxMarketValueFilter * 1000000) + "&") : output
    request.MinWageFilter ? output += ("MinWageFilter=" + (request.MinWageFilter * 1000) + "&") : output
    request.MaxWageFilter ? output += ("MaxWageFilter=" + (request.MaxWageFilter * 1000) + "&") : output
    request.MinAgeFilter ? output += ("MinAgeFilter=" + (request.MinAgeFilter) + "&") : output
    request.MaxAgeFilter ? output += ("MaxAgeFilter=" + (request.MaxAgeFilter) + "&") : output
    request.SearchTerm ? output += ("SearchTerm=" + request.SearchTerm + "&") : output
    request.SearchTerm ? output += ("SearchTerm=" + request.SearchTerm + "&") : output
    request.Page ? output += ("Page=" + request.Page + "&") : output
    request.PageSize ? output += ("PageSize=" + request.PageSize + "&") : output
    request.Sort ? output += ("Sort=" + request.Sort + "&") : output
    request.SortDesc ? output += ("SortDesc=" + request.SortDesc + "&") : output
    return output
}