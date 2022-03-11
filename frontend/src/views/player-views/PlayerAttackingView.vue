<template>
    <div class="flex-container">
        <ShootingStats class="stat-box" v-bind:player="player"></ShootingStats>
        <ShootingStatsPer90 class="stat-box" v-bind:player="player"></ShootingStatsPer90>
        
        <GraphShootingVsLeague class="graph" v-bind:player="player"></GraphShootingVsLeague>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShootingStats from '@/components/player-stat-tables/attacking/ShootingStats.vue'
import ShootingStatsPer90 from '@/components/player-stat-tables/attacking/ShootingStatsPer90.vue'
import GraphShootingVsLeague from '@/components/player-stat-tables/attacking/GraphShootingVsLeague.vue'

export default {
    name: 'PlayerAttackingView',
    components: {
        ShootingStats,
        ShootingStatsPer90,
        GraphShootingVsLeague,
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
