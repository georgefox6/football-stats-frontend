<template>
    <div class="flex-container">
        <DefendingStats class="stat-box" v-bind:player="player" ></DefendingStats>
        <DefendingStatsPer90 class="stat-box" v-bind:player="player"></DefendingStatsPer90>

        <GraphDefendingVsLeague class="graph" v-bind:player="player"></GraphDefendingVsLeague>
        <GraphPressureLocations class="graph" v-bind:player="player"></GraphPressureLocations>
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
