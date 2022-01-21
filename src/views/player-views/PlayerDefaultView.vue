<template>
  <div class="stats">
    <GeneralStats id="general-stats" v-bind:player="player"></GeneralStats>
    <TransferStats id="transfer-stats" v-bind:player="player"></TransferStats>
    <PlayingStats id="playing-stats" v-bind:player="player"></PlayingStats>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GeneralStats from "@/components/player-stat-tables/default/GeneralStats.vue";
import TransferStats from "@/components/player-stat-tables/default/TransferStats.vue";
import PlayingStats from "@/components/player-stat-tables/default/PlayingStats.vue";

export default {
  name: "PlayerDefaultView",
  components: {
    GeneralStats,
    PlayingStats,
    TransferStats
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

#general-stats {
  width: 35%;
  margin-top: 5%;
  margin-left: 10%;
  float: left;
}

#transfer-stats {
  width: 35%;
  margin-top: 5%;
  margin-left: 7%;
  float: left;
}

#playing-stats {
  width: 35%;
  margin-top: 5%;
  margin-left: 7%;
  float: left;
}

</style>
