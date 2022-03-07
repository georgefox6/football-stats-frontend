<template>
    <div class="stats">
        <GeneralStats id="general-stats" v-bind:player="player"></GeneralStats>
        <TransferStats
            id="transfer-stats"
            v-bind:player="player"
        ></TransferStats>
        <PlayingStats id="playing-stats" v-bind:player="player"></PlayingStats>
        <StrikerGraph class="position-graph" v-bind:player="player" v-if="this.player.playerPosition == 'Centre-Forward' || this.player.playerPosition == 'Second Striker'"></StrikerGraph>
        <MidfieldGraph class="position-graph" v-bind:player="player" v-if="this.player.playerPosition == 'Central Midfield' || this.player.playerPosition == 'Defensive Midfield'"></MidfieldGraph>
        <FullBackGraph class="position-graph" v-bind:player="player" v-if="this.player.playerPosition == 'Left-Back' || this.player.playerPosition == 'Right-Back'"></FullBackGraph>
        <CentreBackGraph class="position-graph" v-bind:player="player" v-if="this.player.playerPosition == 'Centre-Back'"></CentreBackGraph>
        <WingerGraph class="position-graph" v-bind:player="player" v-if="this.player.playerPosition == 'Left Winger' || this.player.playerPosition == 'Right Winger' || this.player.playerPosition == 'Left Midfield' || this.player.playerPosition == 'Right Midfield'"></WingerGraph>
        <AttackingMidfieldGraph class="position-graph" v-bind:player="player" v-if="this.player.playerPosition == 'Attacking Midfield'"></AttackingMidfieldGraph>
        <GraphSuccessRates
            id="graph-success-rates"
            v-bind:player="player"
        ></GraphSuccessRates>
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
        console.log(this.$route.params.playerId)
        this.fetchPlayer(this.$route.params.playerId)
    },
}
</script>

<style scoped>
#general-stats {
    width: 35%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}

#transfer-stats {
    width: 35%;
    margin-top: 5%;
    margin-left: 7%;
    float: left;
}

#playing-stats {
    width: 35%;
    margin-top: 5%;
    margin-left: 7%;
    float: left;
}

#graph-success-rates {
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}

.position-graph {
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}
</style>
