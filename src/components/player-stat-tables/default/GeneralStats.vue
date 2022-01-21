<template>
  <div class="general-stats">
    <h1 class="title">General stats</h1>
    <table class="table">
      <tr>
        <td class="label">Position</td>
        <td class="data">{{ player.playerPosition }}</td>
      </tr>
      <tr>
        <td class="label">Age</td>
        <td class="data">{{ player.playerAge }}</td>
      </tr>
      <tr>
        <td class="label">Team</td>
        <td class="data">{{ player.playerTeam }}</td>
      </tr>
      <tr>
        <td class="label">Nationality</td>
        <td class="data">{{ player.playerNation }}</td>
      </tr>
      <tr>
        <td class="label">Height</td>
        <td class="data">{{ player.height }}cm</td>
      </tr>
      <tr>
        <td class="label">Foot</td>
        <td class="data">{{ player.preferredFoot }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GeneralStats",
  data() {
    return {};
  },
  props: ["player"],
  methods: {},
  created() {},
};
</script>

<style scoped>
.general-stats {
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 5px 10px #c9c9c9;
  padding: 20px;
}

.title {
  margin: 0 auto;
}

.table {
  margin: 0 auto;
}

.label {
  text-align: left;
}

.data {
  text-align: right;
}

td {
  padding: 15px;
}
</style>
