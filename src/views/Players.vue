<template>
    <div class="player">
        <country-flag country='it' size='big'/>
        <table id="player-table">
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Nationality</th>
                    <th>Club</th>
                    <th>Position</th>
                    <th>Age</th>
                    <th>Value</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="player in allPlayers" :key="player.id">
                    <td class="player-link" @click="playerLink(player.id)">
                        {{ player.playerName }}
                    </td>
                    <td>{{ player.playerNation.split(' ')[1] }} <country-flag :country="player.playerNation.split(' ')[0]" size='normal'/> </td>
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

export default {
    name: 'Players',
    components: {
        CountryFlag
    },
    data() {
        return {}
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
    computed: mapGetters(['allPlayers']),
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
    /* background-color: green; */
    background-color:  #54a1a0;

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
    background: #FFFFFF80;
    /* background: #54a1a0; */
}

/* #player-table tbody tr td:hover {
    color: black;
} */

/* #player-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


#player-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
} */

tr:hover {
    /* background-color: rgba(255, 255, 255, 0.3); */
    background-color: white;
}
</style>