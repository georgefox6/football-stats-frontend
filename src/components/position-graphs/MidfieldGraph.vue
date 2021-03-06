<template>
    <div class="midfielder-graph">
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
    name: 'MidfieldGraph',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            per90: true,
            position: true,
            options: {
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColor: '#e8e8e8',
                            fill: {
                                colors: ['#f8f8f8', '#fff'],
                            },
                        },
                        size: '240',
                    },
                },
                title: {
                    text: '',
                },
                xaxis: {
                    categories: [
                        'Assists',
                        'Expected Assists',
                        'Passes Complete',
                        'Progressive Passing Distance',
                        'Passes Ccontrolled',
                        'Dribbles',
                        'Progressive Dribble Distance',
                        'Headers Won',
                        'Tackles',
                        'Interceptions',
                        'Pressures'
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
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ 
                            this.playerPossessionPercentile.assistsPercentile,
                            this.playerPossessionPercentile.expectedAssistsPercentile,
                            this.playerPossessionPercentile.passesCompletedPercentile,
                            this.playerPossessionPercentile.progressivePassingDistancePercentile,
                            this.playerPossessionPercentile.passesControlledPercentile,
                            this.playerPossessionPercentile.dribblesPercentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePercentile,

                            this.playerDefendingPercentile.headersWonPercentile,
                            this.playerDefendingPercentile.tacklesWonPercentile,
                            this.playerDefendingPercentile.interceptionsPercentile,
                            this.playerDefendingPercentile.pressuresPercentile,
                        ],
                    },
                ],
                true
            )
        },
        setTotalPosition() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ 
                            this.playerPossessionPercentile.assistsPerPositionPercentile,
                            this.playerPossessionPercentile.expectedAssistsPerPositionPercentile,
                            this.playerPossessionPercentile.passesCompletedPerPositionPercentile,
                            this.playerPossessionPercentile.progressivePassingDistancePerPositionPercentile,
                            this.playerPossessionPercentile.passesControlledPerPositionPercentile,
                            this.playerPossessionPercentile.dribblesPerPositionPercentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePerPositionPercentile,

                            this.playerDefendingPercentile.headersWonPerPositionPercentile,
                            this.playerDefendingPercentile.tacklesWonPerPositionPercentile,
                            this.playerDefendingPercentile.interceptionsPerPositionPercentile,
                            this.playerDefendingPercentile.pressuresPerPositionPercentile,
                        ],
                    },
                ],
                true
            )
        },
        setPer90() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ 
                            this.playerPossessionPercentile.assistsPer90Percentile,
                            this.playerPossessionPercentile.expectedAssistsPer90Percentile,
                            this.playerPossessionPercentile.passesCompletedPer90Percentile,
                            this.playerPossessionPercentile.progressivePassingDistancePer90Percentile,
                            this.playerPossessionPercentile.passesControlledPer90Percentile,
                            this.playerPossessionPercentile.dribblesPer90Percentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePer90Percentile,

                            this.playerDefendingPercentile.headersWonPer90Percentile,
                            this.playerDefendingPercentile.tacklesWonPer90Percentile,
                            this.playerDefendingPercentile.interceptionsPer90Percentile,
                            this.playerDefendingPercentile.pressuresPer90Percentile,
                        ],
                    },
                ],
                true
            )
        },
        setPer90Position() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ 
                            this.playerPossessionPercentile.assistsPer90PerPositionPercentile,
                            this.playerPossessionPercentile.expectedAssistsPer90PerPositionPercentile,
                            this.playerPossessionPercentile.passesCompletedPer90PerPositionPercentile,
                            this.playerPossessionPercentile.progressivePassingDistancePer90PerPositionPercentile,
                            this.playerPossessionPercentile.passesControlledPer90PerPositionPercentile,
                            this.playerPossessionPercentile.dribblesPer90PerPositionPercentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePer90PerPositionPercentile,

                            this.playerDefendingPercentile.headersWonPer90PerPositionPercentile,
                            this.playerDefendingPercentile.tacklesWonPer90PerPositionPercentile,
                            this.playerDefendingPercentile.interceptionsPer90PerPositionPercentile,
                            this.playerDefendingPercentile.pressuresPer90PerPositionPercentile,
                        ],
                    },
                ],
                true
            )
        },
        updateGraph(){
            this.playerDefendingPercentile = null
            this.playerPossessionPercentile = null
            this.playerAttackingPercentile = null

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
            this.options.plotOptions.radar.size = '160'
        }

        this.updateGraph()
    },
    updated() {
        this.updateGraph()
    },
    computed: mapGetters(['playerDefendingPercentile', 'playerPossessionPercentile', 'playerAttackingPercentile']),
    mounted(){
        if(this.playerDefendingPercentile){
            // this.setTotal()
        }  
    }
}
</script>

<style scoped>
.midfielder-graph {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #c9c9c9;
}

.option {
    white-space: nowrap;
    text-align: left;
    margin-left: 10px;
    /* float: left; */
}

.option > p {
    display: inline-block;
    padding: 5px;
    /* vertical-align: -8px; */
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
