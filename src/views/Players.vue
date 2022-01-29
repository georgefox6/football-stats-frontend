<template>
    <div class="player">
        <div class="search-wrapper">
            <input
                type="text"
                v-model="search"
                placeholder="Search player or team.."
                class="input"
            />
        </div>
        <table id="player-table">
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Nationality</th>
                    <th>Club</th>
                    <th>Position</th>
                    <th>Age</th>
                    <th>
                        <VueCustomTooltip
                            label="This value is based on the ability of the player, the league he plays in and the contract length."
                            >Value</VueCustomTooltip
                        >
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="player in filteredPlayers" :key="player.id">
                    <td class="player-link" @click="playerLink(player.id)">
                        {{ player.playerName }}
                    </td>
                    <td>
                        {{ player.playerNation.split(' ')[1] }}
                        <country-flag
                            :country="player.playerNation.split(' ')[0]"
                            size="normal"
                        />
                    </td>
                    <td>{{ player.playerTeam }}</td>
                    <td>{{ player.playerPosition }}</td>
                    <td>{{ player.playerAge }}</td>
                    <td>£{{ player.marketValue.toLocaleString('en-GB') }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CountryFlag from 'vue-country-flag'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

export default {
    name: 'Players',
    components: {
        CountryFlag,
        VueCustomTooltip,
    },
    data() {
        return {
            search: ''
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
    },
    computed: {
        ...mapGetters(['allPlayers']),
        filteredPlayers() {
            return this.allPlayers.filter(player => {
                return player.playerName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(this.search.toLowerCase()) || player.playerTeam.toLowerCase().includes(this.search.toLowerCase())
        })
    }
  },
    created() {
        this.fetchPlayers()
    },
}
</script>

<style scoped>
.player-link {
    cursor: pointer;
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
}

#player-table {
    margin-left: 13%;
    width: 1200px;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th {
    padding: 15px;
    color: #fff;
    background-color: #54a1a0;

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
.search-wrapper{
    margin: 20px;
}
.input {
    /* position: relative;
    left: -448px; */
    position: static;
    padding: 10px;
    width: 350px;
    height: 80px;
    background: none;
    border: 4px solid #54a1a0;
    /* border-radius: 50px; */
    box-sizing: border-box;
    /* font-family: Comic Sans MS; */
    font-size: 26px;
    color: #54a1a0;
    outline: none;
    transition: 0.2s;
}
.input:hover {
    width: 350px;
    background: white;
    border-radius: 10px;
}
</style>
