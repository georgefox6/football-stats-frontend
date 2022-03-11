<template>
    <div class="player">

        <PlayerNav></PlayerNav>

        <PlayerBanner id="player-banner" v-bind:player="player"></PlayerBanner>

        <router-view id="player-stats"></router-view>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlayerBanner from '@/components/PlayerBanner.vue'
import PlayerNav from '@/components/PlayerNav.vue'

export default {
    name: 'Player',
    components: {
        PlayerBanner,
        PlayerNav,
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
.player {
    background: #f5f5f5;
}

#player-stats {
    background: #f5f5f5;
}
</style>
