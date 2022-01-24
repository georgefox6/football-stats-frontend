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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DefendingStats from '@/components/player-stat-tables/defending/DefendingStats.vue'
import DefendingStatsPer90 from '@/components/player-stat-tables/defending/DefendingStatsPer90.vue'
// import GraphShootingVsLeague from "@/components/player-stat-tables/attacking/GraphShootingVsLeague.vue";

export default {
    name: 'PlayerDefendingView',
    components: {
        DefendingStats,
        DefendingStatsPer90,
        // GraphShootingVsLeague
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
</style>
