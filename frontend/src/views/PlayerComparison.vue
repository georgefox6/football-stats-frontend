<template>
    <div>
        <PlayerComparisonColumn class="comparisonColumn" v-bind:player="this.player1"></PlayerComparisonColumn>
        <PlayerComparisonColumn class="comparisonColumn" v-bind:player="this.player2"></PlayerComparisonColumn>
    </div>
</template>

<script>
import PlayerComparisonColumn from '@/components/PlayerComparisonColumn.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'PlayerComparison',
    components: {
        PlayerComparisonColumn,
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['fetchPlayers']),
    },
    created() {
        this.fetchPlayers()
    },
    computed: { 
        ...mapGetters(['allPlayers']),
        player1: function() {
            return this.allPlayers.filter( player => player.id == this.$route.params.player1)[0]
        },
        player2: function() {
            return this.allPlayers.filter( player => player.id == this.$route.params.player2)[0]
        }
    }
}
</script>

<style scoped>

.comparisonColumn {
    width: 40%;
    float: left;
    margin: 4%;
}

</style>