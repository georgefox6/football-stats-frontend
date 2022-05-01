<template>
    <div class="similar-players">
        <h1>Similar Players</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Age</th>
                <th>Value</th>
                <th>Compare</th>
            </tr>
            <tr v-for="player in similarPlayers" :key="player.id">
                <!-- <td>{{player.playerName}}</td> -->
                <td><span class="player-link" @click="playerLink(player.id)">{{player.playerName}}</span></td>
                <td>{{player.playerPosition}}</td>
                <td>{{player.playerAge}}</td>
                <td>{{'£' + player.marketValue.toLocaleString('en-GB')}}</td>
                <td><button @click="comparePlayer(player.id)">Compare</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SimilarPlayers',
    methods: {
        ...mapActions(['fetchSimilarPlayers']),
        playerLink(id) {
            this.$router.push({
                name: 'PlayerDefaultView',
                params: { playerId: id },
            })
            this.$router.go()
        },
        comparePlayer(id){
            this.$router.push({
                name: 'PlayerComparison',
                params: { 
                    player1: this.$route.params.playerId,
                    player2: id
                }
            })
        }
    },
    computed: {
        ...mapGetters(['similarPlayers']),
    },
    created() {
        this.fetchSimilarPlayers(this.$route.params.playerId)
    },
}
</script>

<style scoped>
.similar-players {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
}

.player-link {
    cursor: pointer;
    transition: transform .2s; 
    transition: color .2s; 
}

.player-link:hover {
    transform: scale(1.2);
    color: var(--primary);
    transition: color 0.2s; 
}

.table{
    width: 80%;
    margin: auto;
}

.table > tr > td {
    padding: 10px;
    padding-top: 20px;
}
</style>