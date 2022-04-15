<template>
    <div class="passing-lengths">
        <VueApexCharts
            ref="chart"
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
                    enabled: false,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true,
                                },
                            },
                        },
                    },
                },
            },
            series: [
                this.player.shortPassesCompleted,
                this.player.mediumPassesCompleted,
                this.player.longPassesCompleted,
            ],
        }
    },
    props: ['player'],
    methods: {},
    created() {},
    updated() {},
}
</script>

<style scoped>
.passing-lengths {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
}
</style>
