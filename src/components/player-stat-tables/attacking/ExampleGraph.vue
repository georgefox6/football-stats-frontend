<template>
    <div class="shooting-stats">
        <VueApexCharts
            width="500"
            type="bar"
            :options="options"
            :series="series"
        ></VueApexCharts>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    name: 'GraphShootingVsLeague',
    components: {
        VueApexCharts
    },
    data: function () {
        return {
            options: {
                chart: {
                    id: 'vuechart-example',
                },
                xaxis: {
                    categories: [
                        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                    ],
                },
            },
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
            ],
        }
    },
    props: ['player'],
    methods: {},
    created() {},
}
</script>

<style scoped>
.shooting-stats {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #c9c9c9;
    padding: 20px;
}
</style>
