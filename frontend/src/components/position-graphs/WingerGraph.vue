<template>
    <div class="winger-graph">
        <div v-if="!this.mini">
            <div class="option">
                <label class="switch">
                    <input v-model="per90" type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <p>Stats per 90</p>
            </div>

            <div class="option">
                <label class="switch">
                    <input v-model="position" type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <p>Compared to other {{ player.playerPosition }}s</p>
            </div>
        </div>

        <VueApexCharts
            ref="chart"
            type="radar"
            :options="options"
            :series="series"
        ></VueApexCharts>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueApexCharts from 'vue-apexcharts'
export default {
    name: 'WingerGraph',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            per90: true,
            position: true,
            options: {
                responsive: [
                    {
                        breakpoint: 950,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 200
                                }
                            }
                        },
                    },
                    {
                        breakpoint: 820,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 150
                                }
                            }
                        },
                    },
                    {
                        breakpoint: 650,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 100
                                }
                            }
                        },
                    },
                    {
                        breakpoint: 500,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 50
                                }
                            }
                        },
                    },
                ],
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColor: '#e8e8e8',
                            fill: {
                                colors: ['#f8f8f8', '#fff'],
                            },
                        },
                        size: '250',
                    },
                },
                title: {
                    text: '',
                },
                xaxis: {
                    categories: [
                        'Dribbles',
                        'Progressive Dribble Distance',
                        'Progressive Passing Distance',
                        'Passes',
                        'Crosses',
                        'Expected Assists',
                        'Assists',
                        'Goals',
                        'Expected Goals',
                        'Shots',
                        'Shots on Target',
                    ],
                },
                yaxis: {
                    show: false,
                    labels: {
                        formatter: function (value) {
                            return value + 'th percentile'
                        },
                    },
                    min: 0,
                    max: 100,
                    tickAmount: 5,
                },
            },
            series: [
                {
                    name: this.player.playerName,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
        }
    },
    props: ['player', 'mini'],
    methods: {
        ...mapActions(['fetchPlayerDefendingPercentile']),
        ...mapActions(['fetchPlayerPossessionPercentile']),
        ...mapActions(['fetchPlayerAttackingPercentile']),
        setTotal() {
            if(this.$refs.chart){
                this.$refs.chart.updateSeries(
                    [
                        {
                            data: [ 
                                this.playerPossessionPercentile.dribblesPercentile,
                                this.playerPossessionPercentile.progressiveDribbleDistancePercentile,
                                this.playerPossessionPercentile.progressivePassingDistancePercentile,
                                this.playerPossessionPercentile.passesCompletedPercentile,
                                this.playerPossessionPercentile.crossesPercentile,
                                this.playerPossessionPercentile.expectedAssistsPercentile,
                                this.playerPossessionPercentile.assistsPercentile,

                                this.playerAttackingPercentile.goalsPercentile,
                                this.playerAttackingPercentile.expectedGoalsPercentile,
                                this.playerAttackingPercentile.shotsPercentile,
                                this.playerAttackingPercentile.shotsOnTargetPercentile,
                            ],
                        },
                    ],
                    true
                )
            }
        },
        setTotalPosition() {
            if(this.$refs.chart){
                this.$refs.chart.updateSeries(
                    [
                        {
                            data: [ 
                                this.playerPossessionPercentile.dribblesPerPositionPercentile,
                                this.playerPossessionPercentile.progressiveDribbleDistancePerPositionPercentile,
                                this.playerPossessionPercentile.progressivePassingDistancePerPositionPercentile,
                                this.playerPossessionPercentile.passesCompletedPerPositionPercentile,
                                this.playerPossessionPercentile.crossesPerPositionPercentile,
                                this.playerPossessionPercentile.expectedAssistsPerPositionPercentile,
                                this.playerPossessionPercentile.assistsPerPositionPercentile,

                                this.playerAttackingPercentile.goalsPerPositionPercentile,
                                this.playerAttackingPercentile.expectedGoalsPerPositionPercentile,
                                this.playerAttackingPercentile.shotsPerPositionPercentile,
                                this.playerAttackingPercentile.shotsOnTargetPerPositionPercentile,
                            ],
                        },
                    ],
                    true
                )
            }
        },
        setPer90() {
            if(this.$refs.chart){
                this.$refs.chart.updateSeries(
                    [
                        {
                            data: [ 
                                this.playerPossessionPercentile.dribblesPer90Percentile,
                                this.playerPossessionPercentile.progressiveDribbleDistancePer90Percentile,
                                this.playerPossessionPercentile.progressivePassingDistancePer90Percentile,
                                this.playerPossessionPercentile.passesCompletedPer90Percentile,
                                this.playerPossessionPercentile.crossesPer90Percentile,
                                this.playerPossessionPercentile.expectedAssistsPer90Percentile,
                                this.playerPossessionPercentile.assistsPer90Percentile,

                                this.playerAttackingPercentile.goalsPer90Percentile,
                                this.playerAttackingPercentile.expectedGoalsPer90Percentile,
                                this.playerAttackingPercentile.shotsPer90Percentile,
                                this.playerAttackingPercentile.shotsOnTargetPer90Percentile,
                            ],
                        },
                    ],
                    true
                )
            }
        },
        setPer90Position() {
            if(this.$refs.chart){
                this.$refs.chart.updateSeries(
                    [
                        {
                            data: [ 
                                this.playerPossessionPercentile.dribblesPer90PerPositionPercentile,
                                this.playerPossessionPercentile.progressiveDribbleDistancePer90PerPositionPercentile,
                                this.playerPossessionPercentile.progressivePassingDistancePer90PerPositionPercentile,
                                this.playerPossessionPercentile.passesCompletedPer90PerPositionPercentile,
                                this.playerPossessionPercentile.crossesPer90PerPositionPercentile,
                                this.playerPossessionPercentile.expectedAssistsPer90PerPositionPercentile,
                                this.playerPossessionPercentile.assistsPer90PerPositionPercentile,

                                this.playerAttackingPercentile.goalsPer90PerPositionPercentile,
                                this.playerAttackingPercentile.expectedGoalsPer90PerPositionPercentile,
                                this.playerAttackingPercentile.shotsPer90PerPositionPercentile,
                                this.playerAttackingPercentile.shotsOnTargetPer90PerPositionPercentile,
                            ],
                        },
                    ],
                    true
                )
            }
        },
        updateGraph(){
            setTimeout(() => {
                this.fetchPlayerDefendingPercentile(this.player.id)
                this.fetchPlayerPossessionPercentile(this.player.id)
                this.fetchPlayerAttackingPercentile(this.player.id)
            }, 400)

            setTimeout(() => {
                if (this.per90) {
                    if (this.position) {
                        this.setPer90Position()
                    } else {
                        this.setPer90()
                    }
                } else {
                    if (this.position) {
                        this.setTotalPosition()
                    } else {
                        this.setTotal()
                    }
                }
            }, 800)
        }
    },
    created() {        
        if (this.mini) {
            this.options.title.text = ''
        }

        this.updateGraph()
    },
    updated() {
        this.updateGraph()
    },
    computed: mapGetters(['playerDefendingPercentile', 'playerPossessionPercentile', 'playerAttackingPercentile']),
}
</script>

<style scoped>
.winger-graph {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
}

.option {
    white-space: nowrap;
    text-align: left;
    margin-left: 10px;
}

.option > p {
    display: inline-block;
    padding: 5px;
    vertical-align: 2px;
    font-size: 10px;
}

.option > label {
    display: inline-block;
}

/********* Toggle Switch Styling **********/

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 15px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 15px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
