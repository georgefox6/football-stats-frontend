<template>
    <div>
    
        <button class="filter" @click="showFilterMethod()">Filter</button>
        
        <div class="wrapper">
        <div class="player">
            <h1>Players</h1>
            <filters :showFilter="showFilter" @filter="filterResults" />
            <div class="search-wrapper">
                <input type="text" v-model="request.SearchTerm" @change="search()" placeholder="Search player or team.." class="input"/>
            </div>           

            <table id="player-table">
                <thead>
                    <tr class="table-header">
                        <th @click="sort('PlayerName')">
                            Player Name
                            <i v-bind:class="this.request.Sort == 'PlayerName' && this.request.SortDesc ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.request.Sort == 'PlayerName' && !this.request.SortDesc ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sort('Nationality')">
                            Nationality
                            <i v-bind:class="this.request.Sort == 'Nationality' && this.request.SortDesc ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.request.Sort == 'Nationality' && !this.request.SortDesc ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sort('Club')">
                            Club
                            <i v-bind:class="this.request.Sort == 'Club' && this.request.SortDesc ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.request.Sort == 'Club' && !this.request.SortDesc ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th class="hide-column" @click="sort('Position')">
                            Position
                            <i v-bind:class="this.request.Sort == 'Position' && this.request.SortDesc ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.request.Sort == 'Position' && !this.request.SortDesc ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th class="hide-column" @click="sort('Age')">
                            Age
                            <i v-bind:class="this.request.Sort == 'Age' && this.request.SortDesc ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.request.Sort == 'Age' && !this.request.SortDesc ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th class="hide-column" @click="sort('Value')">
                            Value
                            <i v-bind:class="this.request.Sort == 'Value' && this.request.SortDesc ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.request.Sort == 'Value' && !this.request.SortDesc ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                    </tr>
                </thead>
                
                <tbody class="table-body">
                    <tr v-for="player in allPaginatedPlayers.items" :key="player.id">
                        <td class="player-link" @click="playerLink(player.id)">
                            {{ player.playerName }}
                        </td>
                        <td v-if="player.playerNation">
                            {{ player.playerNation.split(' ')[1] }}
                            <country-flag :country="player.playerNation.split(' ')[0]" size="normal"/>
                        </td>
                        <td v-if="!player.playerNation"></td>
                        <td>{{ player.playerTeam }} <ClubBadge class="club-image" :clubName="player.playerTeam" /></td>
                        <td class="hide-column">{{ player.playerPosition }}</td>
                        <td class="hide-column">{{ player.playerAge }}</td>
                        <td class="hide-column">£{{ player.marketValue.toLocaleString('en-GB') }}</td>
                    </tr>
                </tbody>
            </table>

            <breeding-rhombus-spinner
                id="loading-spinner"
                v-if="!this.allPaginatedPlayers"
                :animation-duration="3000"
                :size="65"
                color="var(--primary)"
            />
            
        </div>
    </div>
    <pagination
      :totalPages="allPaginatedPlayers.totalPages"
      :perPage="request.PageSize"
      :currentPage="request.Page"
      @pagechanged="onPageChange"
    /> 

    <p class="page-size">Page {{allPaginatedPlayers.page}} of {{allPaginatedPlayers.totalPages}}</p>
    <select class="page-size" v-model="request.PageSize" @change="search()" name="page-size">
        <option :value=10>10</option>
        <option :value=25>25</option>
        <option :value=50>50</option>
        <option :value=100>100</option>
    </select>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Pagination from "@/components/Pagination.vue"
import ClubBadge from '@/components/ClubBadge.vue'
import Filters from '@/components/Filters.vue'

export default {
  name: "Players",

  data() {
      return {
          showFilter: false,
          request: {
              Page: 1,
              PageSize: 25,
              ClubFilter: [],
              PositionFilter: [],
              NationFilter: [],
              ContractEndDateFilter: [],
              MinMarketValueFilter: 0,
              MaxMarketValueFilter: 200,
              MinWageFilter: 0,
              MaxWageFilter: 500,
              MinAgeFilter: 1,
              MaxAgeFilter: 45,
              SearchTerm: null,
              Sort: null,
              SortDesc: true,
          },
      };
  },
  components: {
      Pagination,
      ClubBadge,
      Filters
  },
  methods: {
    ...mapActions(["fetchPaginatedPlayers"]),
    onPageChange(page) {
        this.request.Page = page;
        this.fetchPaginatedPlayers(this.request);
    },
    playerLink(id) {
        this.$router.push({
            name: 'PlayerDefaultView',
            params: { playerId: id },
        })
    },
    sort(sortBy){
        if(this.request.Sort == sortBy && this.request.SortDesc == false) {
            this.request.SortDesc = true
        } else if(this.request.Sort == sortBy && this.request.SortDesc == true){
            this.request.Sort = null
            this.request.SortDesc = null
        }
        else {
            this.request.Sort = sortBy 
            this.request.SortDesc = false
        }
        this.request.Page = 1
        console.log(this.request)
        this.fetchPaginatedPlayers(this.request)
    },
    search(){
        this.request.Page = 1
        this.fetchPaginatedPlayers(this.request)
    },
    filterResults(filters){
        console.log(filters.checkedClubs)
        this.request.PositionFilter = filters.checkedPositions
        this.request.ClubFilter = filters.checkedClubs
        this.request.NationFilter = this.convertNations(filters.checkedNations)
        this.request.ContractEndDateFilter = filters.checkedContracts
        this.request.MinMarketValueFilter = filters.minValue
        this.request.MaxMarketValueFilter = filters.maxValue
        this.request.MinWageFilter = filters.minWage
        this.request.MaxWageFilter = filters.maxWage
        this.request.MinAgeFilter = parseInt(filters.minAge)
        this.request.MaxAgeFilter = parseInt(filters.maxAge)
        this.request.Page = 1
        this.showFilter = false
        this.fetchPaginatedPlayers(this.request)
    },
    convertNations(nations){
        var output = []
        for (var i = 0; i < nations.length; i++){
            switch (nations[i]) {
                case "England":
                    output.push("gb-eng ENG")
                    break;
                case "Spain":
                    output.push("es ESP")
                    break;
                case "France":
                    output.push("fr FRA")
                    break;
                case "Germany":
                    output.push("de GER")
                    break;
                case "Netherlands":
                    output.push("nl NED")
                    break;
                case "Brazil":
                    output.push("br BRA")
                    break;
                case "Argentina":
                    output.push("ar ARG")
                    break;
            
                default:
                    break;
            }
        }
        return output
    },
    showFilterMethod(){
        this.showFilter = !this.showFilter
    }
  },
  computed: {
      ...mapGetters(["allPaginatedPlayers"]),
  },
  created() {
      this.fetchPaginatedPlayers(this.request)
  },
}
</script>

<style scoped>

.wrapper {
    max-width: 75rem;
    margin-top: 0;
    margin: auto;
}

.player {
    background: #f5f5f5;
    font-family: sans-serif;
    font-weight: 100;
    margin: auto;
    padding: 10px;
}

#player-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    max-width: 75rem;
    margin: auto;
}

th {
    padding: 15px;
    color: #fff;
    background-color: var(--primary);
    position: sticky;
    top: 2.5rem;
    z-index: 10;
    cursor: pointer;
}

td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    min-width: 10px;
}

.club-image {
    display: inline-block;
    width: 25px;
}

.player-link {
    cursor: pointer;
}

#player-table tbody tr {
    background: #2c3845;
}

#player-table tbody tr:nth-child(odd) {
    background: #202932;
}

#player-table tbody tr:hover {
    background: #ffffff80;
}

tr:hover {
    background-color: white;
}

tr:hover > td {
    color: black;
}

.filter {
    padding: 10px;
    float: left;
    margin-left: 10px;
    font-size: 25px;
}

.page-size {
    display: inline-block;
    margin: 10px;
}

/* Styling for search box */
.search-wrapper {
    width: 100%;
    border: none;
    max-width: 75rem;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    z-index: 11;
    background-color: white;
}

.input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--primary);
    outline: 0;
    font-size: 1.3rem;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

input:focus::placeholder {
    color: transparent;
    transition: color 0.5s;
}

.sort-by-asc {
    left: 3px;
    display: inline-block;
    width: 0;
    height: 0;
    border: solid 5px transparent;
    margin: 4px 4px 0 3px;
    background: transparent;
    border-bottom: solid 7px rgb(255, 255, 255);
    border-top-width: 0;
}

.sort-by-desc {
    left: 3px;
    display: inline-block;
    width: 0;
    height: 0;
    border: solid 5px transparent;
    margin: 4px 4px 0 3px;
    background: transparent;
    border-top: solid 7px rgb(255, 255, 255);
    border-bottom-width: 0;
}

.sort-by-asc-deselected {
    left: 3px;
    display: inline-block;
    width: 0;
    height: 0;
    border: solid 5px transparent;
    margin: 4px 4px 0 3px;
    background: transparent;
    border-bottom: solid 7px rgb(114, 114, 114);
    border-top-width: 0;
}

.sort-by-desc-deselected {
    left: 3px;
    display: inline-block;
    width: 0;
    height: 0;
    border: solid 5px transparent;
    margin: 4px 4px 0 3px;
    background: transparent;
    border-top: solid 7px rgb(114, 114, 114);
    border-bottom-width: 0;
}

#loading-spinner {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 1000px){
    .table-body > tr > td {
        font-size: 15px;
    }

    td {
        padding: 10px;
    }
}

@media screen and (max-width: 800px){
    .player {
        margin-left: 0px;
        margin-right: 0px;
        padding: 0px;
    }   
}

@media only screen and (max-width: 600px) {
    .search-wrapper {
        position: sticky;
        top: 6rem;
        z-index: 11;
        background-color: white;
    }

    .table-header {
        position: sticky;
        top: 8.5rem;
        z-index: 12;
    }
}

@media screen and (max-width: 500px){
    td {
        padding: 5px;
    }

    .hide-column {
        display: none;
    } 
}

</style>