<template>
    <div class="pressure-locations">
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
    name: 'GraphPressureLocations',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            options: {
                responsive: [
                    {
                        breakpoint: 500,
                        options: {
                            legend: {
                                show: false,
                            }
                        },
                    },
                ],
                title: {
                    text: this.player.playerName + ' Pressure Locations',
                },
                labels: ['Defensive Third', 'Middle Third', 'Attacking Third'],
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
                this.player.pressuresDefensiveThird,
                this.player.pressuresMiddleThird,
                this.player.pressuresAttackingThird,
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
.pressure-locations {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
}
</style>
