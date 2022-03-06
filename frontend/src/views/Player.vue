<template>
    <div class="player">
        <!-- <router-link class="back-button" :to="{ name: 'Players' }"
            >&#129044;</router-link
        > -->

        <div id="nav">
            <router-link
                class="nav-button"
                :to="{
                    name: 'PlayerDefaultView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >General</router-link
            > 
            <div class="divider">|</div> 
            <router-link
                class="nav-button"
                :to="{
                    name: 'PlayerAttackingView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >Attacking</router-link
            >
            <div class="divider">|</div>
            <router-link
                class="nav-button"
                :to="{
                    name: 'PlayerPossessionView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >Possession</router-link
            >
            <div class="divider">|</div>
            <router-link
                class="nav-button"
                :to="{
                    name: 'PlayerDefendingView',
                    params: { playerId: this.$route.params.playerId },
                }"
                >Defending</router-link
            >
        </div>

        <PlayerBanner id="player-banner" v-bind:player="player"></PlayerBanner>

        

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
    /* width: 80%;
    margin-left: 10%; */
    background: #363636;
}

#player-stats {
    border: 2px solid black;
    padding: 28px;
    min-height: 300vh;
    width: 80%;
    margin-left: 10%;
    /* background: #e4e4e4; */
    background: #f5f5f5;
}

.nav-button {
    /* padding: 80px; */
    padding: 30px;
    padding-left: 80px;
    padding-right: 80px;
    /* margin-top: 130px; */
    background-color: #363636;
    color: white;
    text-decoration: none;
}

.divider {
    color: white;
    display: inline;
}

#nav a:hover {
    color: var(--primary);
}

#nav {
    /* padding-top: 45px;
    padding-bottom: 20px; */
    padding-top: 30px;
    padding-bottom: 30px;

    /* margin-top: 30px; */
    /* margin-bottom: 30px; */
    background-color: #363636;

}

/* #nav a {
    font-weight: bold;
    color: white;
    background-color: #363636;
    text-decoration: none;
} */

#nav a.router-link-exact-active {
    color: var(--primary);
}

/* .back-button {
    float: left;
    color: black;
    background-color: #a8a8a8;
    padding: 12px;
    width: 40px;
    border-radius: 100px;
    text-decoration: none;
    text-align: center;
    font-size: 40px;
} */
</style>
