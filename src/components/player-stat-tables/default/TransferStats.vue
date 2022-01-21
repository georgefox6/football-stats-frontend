<template>
  <div class="transfer-stats">
    <h1 class="title">Transfer stats</h1>
    <table class="table">
      <tr>
        <td class="label">Value</td>
        <td class="data">£{{ player.marketValue.toLocaleString("en-GB") }}</td>
      </tr>
      <tr>
        <td class="label">Wage</td>
        <td class="data">£{{ player.wage.toLocaleString("en-GB") }}</td>
      </tr>
      <tr>
        <td class="label">Contract End</td>
        <td class="data">{{ player.contractEndDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TransferStats",
  data() {
    return {};
  },
  props: ["player"],
  methods: {},
  created() {},
};
</script>

<style scoped>
.transfer-stats {
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
