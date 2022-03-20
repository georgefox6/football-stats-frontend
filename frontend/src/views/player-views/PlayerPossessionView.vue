<template>
    <div class="flex-container">
        <PassingStats class="stat-box" v-bind:player="player"></PassingStats>
        <PassingStatsPer90 class="stat-box" v-bind:player="player" ></PassingStatsPer90>
        <DribblingStats class="stat-box" v-bind:player="player" ></DribblingStats>
        <DribblingStatsPer90 class="stat-box" v-bind:player="player" ></DribblingStatsPer90>

        <GraphPossessionVsLeague class="graph" v-bind:player="player"></GraphPossessionVsLeague>
        <GraphPassingLengths class="graph" v-bind:player="player" ></GraphPassingLengths>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PassingStats from '@/components/player-stat-tables/possession/PassingStats.vue'
import PassingStatsPer90 from '@/components/player-stat-tables/possession/PassingStatsPer90.vue'
import DribblingStats from '@/components/player-stat-tables/possession/DribblingStats.vue'
import DribblingStatsPer90 from '@/components/player-stat-tables/possession/DribblingStatsPer90.vue'
import GraphPossessionVsLeague from '@/components/player-stat-tables/possession/GraphPossessionVsLeague.vue'
import GraphPassingLengths from '@/components/player-stat-tables/possession/GraphPassingLengths.vue'

export default {
    name: 'PlayerPossessionView',
    components: {
        PassingStats,
        PassingStatsPer90,
        DribblingStats,
        DribblingStatsPer90,
        GraphPossessionVsLeague,
        GraphPassingLengths
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
