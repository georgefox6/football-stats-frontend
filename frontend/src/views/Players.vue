<template>
    <div class="player">
        <div v-show="this.loaded" class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search player or team.." class="input"/>
        </div>

        <div v-show="this.loaded" class="table-wrapper">
            <table id="player-table">
                <thead>
                    <tr>
                        <th @click="sortByPlayerName()">
                            Player Name
                            <i v-bind:class="this.nameSort == 'desc' ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.nameSort == 'asc' ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sortByPlayerNation()">
                            Nationality
                            <i v-bind:class="this.nationSort == 'desc' ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.nationSort == 'asc' ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sortByPlayerClub()">
                            Club
                            <i v-bind:class="this.clubSort == 'desc' ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.clubSort == 'asc' ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sortByPlayerPosition()">
                            Position
                            <i v-bind:class="this.positionSort == 'desc' ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.positionSort == 'asc' ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sortByPlayerAge()">
                            Age
                            <i v-bind:class="this.ageSort == 'desc' ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.ageSort == 'asc' ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                        <th @click="sortByPlayerValue()">
                            Value
                            <VueCustomTooltip
                                label="This value is based on the ability of the player, the league he plays in and the contract length.">&#9432;
                            </VueCustomTooltip>
                            <i v-bind:class="this.valueSort == 'desc' ? 'sort-by-desc' : 'sort-by-desc-deselected'"></i>
                            <i v-bind:class="this.valueSort == 'asc' ? 'sort-by-asc' : 'sort-by-asc-deselected'"></i>
                        </th>
                    </tr>
                </thead>
                
                <tbody v-show="this.loaded">
                    <tr v-for="player in filteredPlayers" :key="player.id">
                        <td class="player-link" @click="playerLink(player.id)">
                            {{ player.playerName }}
                        </td>
                        <td>
                            {{ player.playerNation.split(' ')[1] }}
                            <country-flag :country="player.playerNation.split(' ')[0]" size="normal"/>
                        </td>
                        <td>{{ player.playerTeam }}</td>
                        <td>{{ player.playerPosition }}</td>
                        <td>{{ player.playerAge }}</td>
                        <td>£{{ player.marketValue.toLocaleString('en-GB') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <breeding-rhombus-spinner
            id="loading-spinner"
            v-if="!this.loaded"
            :animation-duration="3000"
            :size="65"
            color="var(--primary)"
        />
    </div>
</template>

<script>
import { BreedingRhombusSpinner } from 'epic-spinners'
import { mapGetters, mapActions } from 'vuex'
import CountryFlag from 'vue-country-flag'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

export default {
    name: 'Players',
    components: {
        CountryFlag,
        VueCustomTooltip,
        BreedingRhombusSpinner
    },
    data() {
        return {
            loaded: false,
            search: '',
            nameSort: 'none',
            nationSort: 'none',
            clubSort: 'none',
            positionSort: 'none',
            ageSort: 'none',
            valueSort: 'none',
        }
    },
    methods: {
        ...mapActions(['fetchPlayers']),
        playerLink(id) {
            this.$router.push({
                name: 'PlayerDefaultView',
                params: { playerId: id },
            })
        },
        sortByPlayerName() {
            switch (this.nameSort) {
                case 'none':
                    this.nameSort = 'desc'
                    break
                case 'desc':
                    this.nameSort = 'asc'
                    break
                case 'asc':
                    this.nameSort = 'none'
                    break
            }
            console.log('New name sort - ' + this.nameSort)
            this.nationSort = 'none'
            this.clubSort = 'none'
            this.positionSort = 'none'
            this.ageSort = 'none'
            this.valueSort = 'none'
        },
        sortByPlayerNation() {
            switch (this.nationSort) {
                case 'none':
                    this.nationSort = 'desc'
                    break
                case 'desc':
                    this.nationSort = 'asc'
                    break
                case 'asc':
                    this.nationSort = 'none'
                    break
            }

            this.nameSort = 'none'
            this.clubSort = 'none'
            this.positionSort = 'none'
            this.ageSort = 'none'
            this.valueSort = 'none'
        },
        sortByPlayerClub() {
            switch (this.clubSort) {
                case 'none':
                    this.clubSort = 'desc'
                    break
                case 'desc':
                    this.clubSort = 'asc'
                    break
                case 'asc':
                    this.clubSort = 'none'
                    break
            }

            this.nationSort = 'none'
            this.nameSort = 'none'
            this.positionSort = 'none'
            this.ageSort = 'none'
            this.valueSort = 'none'
        },
        sortByPlayerPosition() {
            switch (this.positionSort) {
                case 'none':
                    this.positionSort = 'desc'
                    break
                case 'desc':
                    this.positionSort = 'asc'
                    break
                case 'asc':
                    this.positionSort = 'none'
                    break
            }

            this.nationSort = 'none'
            this.nameSort = 'none'
            this.clubSort = 'none'
            this.ageSort = 'none'
            this.valueSort = 'none'
        },
        sortByPlayerAge() {
            switch (this.ageSort) {
                case 'none':
                    this.ageSort = 'desc'
                    break
                case 'desc':
                    this.ageSort = 'asc'
                    break
                case 'asc':
                    this.ageSort = 'none'
                    break
            }

            this.positionSort = 'none'
            this.nationSort = 'none'
            this.nameSort = 'none'
            this.clubSort = 'none'
            this.valueSort = 'none'
        },
        sortByPlayerValue() {
            switch (this.valueSort) {
                case 'none':
                    this.valueSort = 'desc'
                    break
                case 'desc':
                    this.valueSort = 'asc'
                    break
                case 'asc':
                    this.valueSort = 'none'
                    break
            }

            this.nameSort = 'none'
            this.nationSort = 'none'
            this.clubSort = 'none'
            this.positionSort = 'none'
            this.ageSort = 'none'
        },
        returnSortedPlayersByNameAsc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => a.playerName.localeCompare(b.playerName))
        },
        returnSortedPlayersByNameDesc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => b.playerName.localeCompare(a.playerName))
        },
        returnSortedPlayersByValueDesc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => b.marketValue - a.marketValue)
        },
        returnSortedPlayersByValueAsc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => a.marketValue - b.marketValue)
        },
        returnSortedPlayersByNationDesc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => b.playerNation.localeCompare(a.playerNation))
        },
        returnSortedPlayersByNationAsc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => a.playerNation.localeCompare(b.playerNation))
        },
        returnSortedPlayersByClubDesc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => b.playerTeam.localeCompare(a.playerTeam))
        },
        returnSortedPlayersByClubAsc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => a.playerTeam.localeCompare(b.playerTeam))
        },
        returnSortedPlayersByPositionAsc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) =>{
                    var first = 0;
                    var second = 0;
                    switch(a.playerPosition){
                        case "Goalkeeper": first = 0; break;
                        case "Centre-Back": first = 1; break;
                        case "Right-Back": first = 2; break;
                        case "Left-Back": first = 3; break;
                        case "Defensive Midfield": first = 4; break;
                        case "Central Midfield": first = 5; break;
                        case "Right Midfield": first = 6; break;
                        case "Left Midfield": first = 7; break;
                        case "Attacking Midfield": first = 8; break;
                        case "Right Winger": first = 9; break;
                        case "Left Winger": first = 10; break;
                        case "Second Striker": first = 11; break;
                        case "Centre-Forward": first = 12; break;
                    }

                    switch(b.playerPosition){
                        case "Goalkeeper": second = 0; break;
                        case "Centre-Back": second = 1; break;
                        case "Right-Back": second = 2; break;
                        case "Left-Back": second = 3; break;
                        case "Defensive Midfield": second = 4; break;
                        case "Central Midfield": second = 5; break;
                        case "Right Midfield": second = 6; break;
                        case "Left Midfield": second = 7; break;
                        case "Attacking Midfield": second = 8; break;
                        case "Right Winger": second = 9; break;
                        case "Left Winger": second = 10; break;
                        case "Second Striker": second = 11; break;
                        case "Centre-Forward": second = 12; break;
                    }

                    return first - second;
                }
            )
        },
        returnSortedPlayersByPositionDesc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) =>{
                    var first = 0;
                    var second = 0;
                    switch(a.playerPosition){
                        case "Goalkeeper": first = 0; break;
                        case "Centre-Back": first = 1; break;
                        case "Right-Back": first = 2; break;
                        case "Left-Back": first = 3; break;
                        case "Defensive Midfield": first = 4; break;
                        case "Central Midfield": first = 5; break;
                        case "Right Midfield": first = 6; break;
                        case "Left Midfield": first = 7; break;
                        case "Attacking Midfield": first = 8; break;
                        case "Right Winger": first = 9; break;
                        case "Left Winger": first = 10; break;
                        case "Second Striker": first = 11; break;
                        case "Centre-Forward": first = 12; break;
                    }

                    switch(b.playerPosition){
                        case "Goalkeeper": second = 0; break;
                        case "Centre-Back": second = 1; break;
                        case "Right-Back": second = 2; break;
                        case "Left-Back": second = 3; break;
                        case "Defensive Midfield": second = 4; break;
                        case "Central Midfield": second = 5; break;
                        case "Right Midfield": second = 6; break;
                        case "Left Midfield": second = 7; break;
                        case "Attacking Midfield": second = 8; break;
                        case "Right Winger": second = 9; break;
                        case "Left Winger": second = 10; break;
                        case "Second Striker": second = 11; break;
                        case "Centre-Forward": second = 12; break;
                    }
                    return second - first;
                }
            )
        },
        returnSortedPlayersByAgeDesc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => b.playerAge.localeCompare(a.playerAge))
        },
        returnSortedPlayersByAgeAsc() {
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .toLowerCase()
                            .includes(this.search.toLowerCase()) ||
                        player.playerTeam
                            .toLowerCase()
                            .includes(this.search.toLowerCase())
                )
                .slice()
                .sort((a, b) => a.playerAge.localeCompare(b.playerAge))
        },
    },
    computed: {
        ...mapGetters(['allPlayers']),

        filteredPlayers() {
            if (this.nameSort == 'asc') {
                return this.returnSortedPlayersByNameAsc()
            } else if (this.nameSort == 'desc') {
                return this.returnSortedPlayersByNameDesc()
            }

            if (this.valueSort == 'asc') {
                return this.returnSortedPlayersByValueAsc()
            } else if (this.valueSort == 'desc') {
                return this.returnSortedPlayersByValueDesc()
            }

            if (this.nationSort == 'asc') {
                return this.returnSortedPlayersByNationAsc()
            } else if (this.nationSort == 'desc') {
                return this.returnSortedPlayersByNationDesc()
            }

            if (this.clubSort == 'asc') {
                return this.returnSortedPlayersByClubAsc()
            } else if (this.clubSort == 'desc') {
                return this.returnSortedPlayersByClubDesc()
            }

            if (this.positionSort == 'asc') {
                return this.returnSortedPlayersByPositionAsc()
            } else if (this.positionSort == 'desc') {
                return this.returnSortedPlayersByPositionDesc()
            }

            if (this.ageSort == 'asc') {
                return this.returnSortedPlayersByAgeAsc()
            } else if (this.ageSort == 'desc') {
                return this.returnSortedPlayersByAgeDesc()
            }

            return this.allPlayers.filter(
                (player) =>
                    player.playerName
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase()
                        .includes(this.search.toLowerCase()) ||
                    player.playerTeam
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
            )
        },
    },
    created() {
        this.fetchPlayers()
    },
    updated(){
        if(this.filteredPlayers != null){
            this.loaded = true
        }
    }
}
</script>

<style scoped>
#loading-spinner {
    position: fixed;
    left: 45%;
    top: 50%;
}

.player-link {
    cursor: pointer;
}

.table-wrapper {
    overflow-x: auto;
}

.player {
    background: #363636;
    font-family: sans-serif;
    font-weight: 100;
    padding: 10px;
    
}

td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    min-width: 140px;
}

#player-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    max-width: 93rem;
    margin: auto;
}

th {
    padding: 15px;
    color: #fff;
    background-color: var(--primary);

    position: sticky;
    top: 0;
    z-index: 10;
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

/* Styling for search box */
.search-wrapper {
    width: 100%;
    border: none;
    max-width: 93rem;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 10px;
}

.input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--primary);
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
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
</style>
