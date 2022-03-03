<template>
    <div class="player">
        <router-link class="back-button" :to="{ name: 'Players' }"
            >&#129044;</router-link
        >
        <PlayerBanner id="player-banner" v-bind:player="player"></PlayerBanner>

        <div id="nav">
            <router-link
                class="stat-link"
                :to="{
                    name: 'PlayerDefaultView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >General</router-link
            >
            <router-link
                class="stat-link"
                :to="{
                    name: 'PlayerAttackingView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >Attacking</router-link
            >
            <router-link
                class="stat-link"
                :to="{
                    name: 'PlayerPossessionView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >Possession</router-link
            >
            <router-link
                class="stat-link"
                :to="{
                    name: 'PlayerDefendingView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >Defending</router-link
            >
        </div>

        <router-view id="player-stats"></router-view>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlayerBanner from '@/components/PlayerBanner.vue'

export default {
    name: 'Player',
    components: {
        PlayerBanner,
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
#player-banner {
    width: 80%;
    margin-left: 10%;
}

.player {
    width: 80%;
    margin-left: 10%;
    background: #363636;
}

#player-stats {
    border: 2px solid black;
    padding: 28px;
    min-height: 300vh;
    width: 80%;
    margin-left: 10%;
    background: #e4e4e4;
}

.stat-link {
    padding: 20px;
    margin: 20px;
    border: 2px solid black;
    background: #363636;
}

#nav {
    padding-top: 45px;
    padding-bottom: 20px;
}

#nav a {
    font-weight: bold;
    color: black;
    background-color: #a8a8a8;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    background-color: white;
}

.back-button {
    float: left;
    color: black;
    background-color: #a8a8a8;
    padding: 12px;
    /* height: 40px; */
    width: 40px;
    border-radius: 100px;
    text-decoration: none;
    text-align: center;
    font-size: 40px;
}
</style>
