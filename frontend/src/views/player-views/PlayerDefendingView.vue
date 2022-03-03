<template>
    <div class="stats">
        <DefendingStats
            id="defending-stats"
            v-bind:player="player"
        ></DefendingStats>
        <DefendingStatsPer90
            id="defending-stats-per-90"
            v-bind:player="player"
        ></DefendingStatsPer90>
        <GraphDefendingVsLeague
            id="graph-defending-vs-league"
            v-bind:player="player"
        ></GraphDefendingVsLeague>
        <GraphPressureLocations
            id="graph-defending-vs-league"
            v-bind:player="player"
        ></GraphPressureLocations>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DefendingStats from '@/components/player-stat-tables/defending/DefendingStats.vue'
import DefendingStatsPer90 from '@/components/player-stat-tables/defending/DefendingStatsPer90.vue'
import GraphDefendingVsLeague from "@/components/player-stat-tables/defending/GraphDefendingVsLeague.vue";
import GraphPressureLocations from "@/components/player-stat-tables/defending/GraphPressureLocations.vue";

export default {
    name: 'PlayerDefendingView',
    components: {
        DefendingStats,
        DefendingStatsPer90,
        GraphDefendingVsLeague,
        GraphPressureLocations
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
#defending-stats {
    width: 35%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}

#defending-stats-per-90 {
    width: 35%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}

#graph-defending-vs-league {
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}
</style>
