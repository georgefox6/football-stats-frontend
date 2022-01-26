<template>
    <div class="pressure-locations">

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
    name: 'GraphPressureLocations',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            options: {
                title: {
                    text: this.player.playerName + ' Pressure Locations',
                },
                labels: ['Defensive Third', 'Middle Third', 'Attacking Third'],
                dataLabels: {
                    enabled: false
                },
            },
            series: [this.player.pressuresDefensiveThird, this.player.pressuresMiddleThird, this.player.pressuresAttackingThird],
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
.pressure-locations {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #c9c9c9;
    padding: 40px;
}

</style>
