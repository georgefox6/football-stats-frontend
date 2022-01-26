<template>
    <div class="passing-lengths">

        <VueApexCharts
            ref="chart"
            width="800"
            type="donut"
            :options="options"
            :series="series"
        ></VueApexCharts>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    name: 'GraphPassingLengths',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            options: {
                title: {
                    text: this.player.playerName + ' Passing Lengths',
                },
                labels: ['Short Passes', 'Medium Passes', 'Long Passes'],
                dataLabels: {
                    enabled: false
                },
            },
            series: [this.player.shortPassesCompleted, this.player.mediumPassesCompleted, this.player.longPassesCompleted],
        }
    },
    props: ['player'],
    methods: {
    },
    created() {
    },
    updated() {
    },
}
</script>

<style scoped>
.passing-lengths {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #c9c9c9;
    padding: 40px;
}

</style>
