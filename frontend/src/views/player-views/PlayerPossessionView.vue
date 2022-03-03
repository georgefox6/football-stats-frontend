<template>
    <div class="stats">
        <PassingStats id="passing-stats" v-bind:player="player"></PassingStats>
        <PassingStatsPer90
            id="passing-stats"
            v-bind:player="player"
        ></PassingStatsPer90>
        <DribblingStats
            id="passing-stats"
            v-bind:player="player"
        ></DribblingStats>
        <DribblingStatsPer90
            id="passing-stats"
            v-bind:player="player"
        ></DribblingStatsPer90>
        <GraphPossessionVsLeague
            id="graph-possession-vs-league"
            v-bind:player="player"
        ></GraphPossessionVsLeague>
        <GraphPassingLengths
            id="graph-passing-positions"
            v-bind:player="player"
        ></GraphPassingLengths>
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
        console.log(this.$route.params.playerId)
        this.fetchPlayer(this.$route.params.playerId)
    },
}
</script>

<style scoped>
#passing-stats {
    width: 35%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}

#graph-possession-vs-league {
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}

#graph-passing-positions {
    width: 80%;
    margin-top: 5%;
    margin-left: 10%;
    float: left;
}
</style>
