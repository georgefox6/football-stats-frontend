<template>
    <div class="flex-container">
        <TransferStats class="stat-box" v-bind:player="player" ></TransferStats>
        <PlayingStats class="stat-box" v-bind:player="player"></PlayingStats>
        <GeneralStats class="stat-box" v-bind:player="player"></GeneralStats>

        <StrikerGraph class="graph" v-bind:player="player" v-if="this.player.playerPosition == 'Centre-Forward' || this.player.playerPosition == 'Second Striker'"></StrikerGraph>
        <MidfieldGraph class="graph" v-bind:player="player" v-if="this.player.playerPosition == 'Central Midfield' || this.player.playerPosition == 'Defensive Midfield'"></MidfieldGraph>
        <FullBackGraph class="graph" v-bind:player="player" v-if="this.player.playerPosition == 'Left-Back' || this.player.playerPosition == 'Right-Back'"></FullBackGraph>
        <CentreBackGraph class="graph" v-bind:player="player" v-if="this.player.playerPosition == 'Centre-Back'"></CentreBackGraph>
        <WingerGraph class="graph" v-bind:player="player" v-if="this.player.playerPosition == 'Left Winger' || this.player.playerPosition == 'Right Winger' || this.player.playerPosition == 'Left Midfield' || this.player.playerPosition == 'Right Midfield'"></WingerGraph>
        <AttackingMidfieldGraph class="graph" v-bind:player="player" v-if="this.player.playerPosition == 'Attacking Midfield'"></AttackingMidfieldGraph>
        
        <GraphSuccessRates class="graph" id="graph-success-rates" v-bind:player="player" ></GraphSuccessRates>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GeneralStats from '@/components/player-stat-tables/default/GeneralStats.vue'
import TransferStats from '@/components/player-stat-tables/default/TransferStats.vue'
import PlayingStats from '@/components/player-stat-tables/default/PlayingStats.vue'
import GraphSuccessRates from '@/components/player-stat-tables/default/GraphSuccessRates.vue'
import StrikerGraph from '@/components/position-graphs/StrikerGraph.vue'
import MidfieldGraph from '@/components/position-graphs/MidfieldGraph.vue'
import FullBackGraph from '@/components/position-graphs/FullBackGraph.vue'
import CentreBackGraph from '@/components/position-graphs/CentreBackGraph.vue'
import WingerGraph from '@/components/position-graphs/WingerGraph.vue'
import AttackingMidfieldGraph from '@/components/position-graphs/AttackingMidfieldGraph.vue'

export default {
    name: 'PlayerDefaultView',
    components: {
        GeneralStats,
        PlayingStats,
        TransferStats,
        GraphSuccessRates,
        StrikerGraph,
        MidfieldGraph,
        FullBackGraph,
        CentreBackGraph,
        WingerGraph,
        AttackingMidfieldGraph,
    },
    methods: {
        ...mapActions(['fetchPlayer']),
    },
    computed: mapGetters(['player']),
    created() {
        this.fetchPlayer(this.$route.params.playerId)
    },
}
</script>

<style scoped>

.stat-box {
    margin: 30px;
    flex: 30%;
}

.graph {
    flex: 80%;
    margin: 30px;
}

@media screen and (min-width: 720px){
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 75rem;
        margin: auto;
    }    
}

</style>
