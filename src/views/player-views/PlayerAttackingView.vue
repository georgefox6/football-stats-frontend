<template>
  <div class="stats">
    <ShootingStats id="shooting-stats" v-bind:player="player"></ShootingStats>
    <ShootingStatsPer90 id="shooting-stats-per-90" v-bind:player="player"></ShootingStatsPer90>
    <GraphShootingVsLeague id="graph-shooting-vs-league" v-bind:player="player"></GraphShootingVsLeague>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ShootingStats from "@/components/player-stat-tables/attacking/ShootingStats.vue";
import ShootingStatsPer90 from "@/components/player-stat-tables/attacking/ShootingStatsPer90.vue";
import GraphShootingVsLeague from "@/components/player-stat-tables/attacking/GraphShootingVsLeague.vue";

export default {
  name: "PlayerAttackingView",
  components: {
    ShootingStats,
    ShootingStatsPer90,
    GraphShootingVsLeague
  },
  methods: {
    ...mapActions(["fetchPlayer"]),
  },
  computed: mapGetters(["player"]),
  created() {
      console.log(this.$route.params.playerId)
    this.fetchPlayer(this.$route.params.playerId);
  },
};
</script>

<style scoped>

#shooting-stats {
  width: 35%;
  margin-top: 5%;
  margin-left: 10%;
  float: left;
}

#shooting-stats-per-90 {
  width: 35%;
  margin-top: 5%;
  margin-left: 10%;
  float: left;
}

#graph-shooting-vs-league {
  width: 80%;
  margin-top: 5%;
  margin-left: 10%;
  float: left;
}

</style>
