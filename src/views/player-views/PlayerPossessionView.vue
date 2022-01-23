<template>
  <div class="stats">
    <PassingStats id="passing-stats" v-bind:player="player"></PassingStats>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PassingStats from "@/components/player-stat-tables/possession/PassingStats.vue";
export default {
  name: "PlayerPossessionView",
  components: {
    PassingStats
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

#passing-stats {
  width: 35%;
  margin-top: 5%;
  margin-left: 10%;
  float: left;
}

</style>
