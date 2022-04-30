<template>
    <div class="player-traits">
        <h3>Player Traits:</h3>
        <img v-if="playerTrait.longShotTaker" src="../../../assets/player-trait-shields/LongShotTaker.png" alt="">
        <img v-if="playerTrait.sneakyFouler" src="../../../assets/player-trait-shields/SneakyFouler.png" alt="">
        <img v-if="playerTrait.pressingForward" src="../../../assets/player-trait-shields/PressingForward.png" alt="">
        <img v-if="playerTrait.prolificDribbler" src="../../../assets/player-trait-shields/ProlificDribbler.png" alt="">
        <img v-if="playerTrait.goodInTheAir" src="../../../assets/player-trait-shields/GoodInTheAir.png" alt="">
        <img v-if="playerTrait.dirtyPlayer" src="../../../assets/player-trait-shields/DirtyPlayer.png" alt="">
        <img v-if="playerTrait.safeOnTheBall" src="../../../assets/player-trait-shields/SafeOnTheBall.png" alt="">
        <img v-if="playerTrait.stamina" src="../../../assets/player-trait-shields/Stamina.png" alt="">
        <img v-if="playerTrait.clinicalFinisher" src="../../../assets/player-trait-shields/ClinicalFinisher.png" alt="">
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PlayerTraits',
    methods: {
        ...mapActions(['fetchPlayerTrait']),
    },
    computed: mapGetters(['playerTrait']),
    created() {
        this.fetchPlayerTrait(this.$route.params.playerId)
    },
}
</script>

<style scoped>

.player-traits {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
}

</style>