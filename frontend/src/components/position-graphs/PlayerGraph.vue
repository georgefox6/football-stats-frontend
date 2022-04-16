<template>
    <div class="graph">

        <VueApexCharts
            v-if="player2AttackingPercentile"
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
    name: 'PlayerGraph',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            options: {
                responsive: [
                    {
                        breakpoint: 950,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 150
                                }
                            }
                        },
                    },
                    {
                        breakpoint: 820,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 100
                                }
                            }
                        },
                    },
                    {
                        breakpoint: 650,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 60
                                }
                            }
                        },
                    },
                    {
                        breakpoint: 500,
                        options: {
                            plotOptions: {
                                radar: {
                                    size: 40
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
                        size: '180',
                    },
                },
                title: {
                    text: '',
                },
                xaxis: {
                    categories: [
                        'Goals',
                        'Expected Goals',
                        'Shots',
                        'Shots on Target',
                        'Penalty Goals',
                        'Free Kick Shots',
                        'Passes Completed',
                        'Progressive Passing Distance',
                        'Crosses',
                        'Assists',
                        'Expected Assists',
                        'Passes Controlled',
                        'Dribbles',
                        'Progressive Dribble Distance',
                        'Tackles Won',
                        'Blocks',
                        'Interceptions',
                        'Pressures',
                        'Headers Won'
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
                    name: this.player1.playerName,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                    name: this.player2.playerName,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
        }
    },
    props: ['player1', 'player2', 'per90'],
    methods: {
        ...mapActions(['fetchPlayerDefendingPercentile']),
        ...mapActions(['fetchPlayerPossessionPercentile']),
        ...mapActions(['fetchPlayerAttackingPercentile']),
        ...mapActions(['fetchPlayerDefendingPercentiles']),
        ...mapActions(['fetchPlayerPossessionPercentiles']),
        ...mapActions(['fetchPlayerAttackingPercentiles']),
        setTotal() {
            if(this.playerAttackingPercentiles && this.playerPossessionPercentiles && this.playerDefendingPercentiles && this.$refs.chart){

                this.$refs.chart.updateSeries(
                    [
                        {
                            data: [ 
                                this.playerAttackingPercentile.goalsPercentile,
                                this.playerAttackingPercentile.expectedGoalsPercentile,
                                this.playerAttackingPercentile.shotsPercentile,
                                this.playerAttackingPercentile.shotsOnTargetPercentile,
                                this.playerAttackingPercentile.penaltyGoalsPercentile,
                                this.playerAttackingPercentile.freeKickShotsPercentile,

                                this.playerPossessionPercentile.passesCompletedPercentile,
                                this.playerPossessionPercentile.progressivePassingDistancePercentile,
                                this.playerPossessionPercentile.crossesPercentile,
                                this.playerPossessionPercentile.assistsPercentile,
                                this.playerPossessionPercentile.expectedAssistsPercentile,
                                this.playerPossessionPercentile.passesControlledPercentile,
                                this.playerPossessionPercentile.dribblesPercentile,
                                this.playerPossessionPercentile.progressiveDribbleDistancePercentile,

                                this.playerDefendingPercentile.tacklesWonPercentile,
                                this.playerDefendingPercentile.blocksPercentile,
                                this.playerDefendingPercentile.interceptionsPercentile,
                                this.playerDefendingPercentile.pressuresPercentile,
                                this.playerDefendingPercentile.headersWonPercentile
                            ],
                        },
                    ],
                    true
                )

                this.$refs.chart.appendSeries(
                    
                        {
                            name: this.player2.playerName,
                            data: [ 
                                this.player2AttackingPercentile.goalsPercentile,
                                this.player2AttackingPercentile.expectedGoalsPercentile,
                                this.player2AttackingPercentile.shotsPercentile,
                                this.player2AttackingPercentile.shotsOnTargetPercentile,
                                this.player2AttackingPercentile.penaltyGoalsPercentile,
                                this.player2AttackingPercentile.freeKickShotsPercentile,

                                this.player2PossessionPercentile.passesCompletedPercentile,
                                this.player2PossessionPercentile.progressivePassingDistancePercentile,
                                this.player2PossessionPercentile.crossesPercentile,
                                this.player2PossessionPercentile.assistsPercentile,
                                this.player2PossessionPercentile.expectedAssistsPercentile,
                                this.player2PossessionPercentile.passesControlledPercentile,
                                this.player2PossessionPercentile.dribblesPercentile,
                                this.player2PossessionPercentile.progressiveDribbleDistancePercentile,

                                this.player2DefendingPercentile.tacklesWonPercentile,
                                this.player2DefendingPercentile.blocksPercentile,
                                this.player2DefendingPercentile.interceptionsPercentile,
                                this.player2DefendingPercentile.pressuresPercentile,
                                this.player2DefendingPercentile.headersWonPercentile
                            ],
                        },               
                    true
                )
            }
        },
        setPer90() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ 
                            this.playerAttackingPercentile.goalsPer90Percentile,
                            this.playerAttackingPercentile.expectedGoalsPer90Percentile,
                            this.playerAttackingPercentile.shotsPer90Percentile,
                            this.playerAttackingPercentile.shotsOnTargetPer90Percentile,
                            this.playerAttackingPercentile.penaltyGoalsPer90Percentile,
                            this.playerAttackingPercentile.freeKickShotsPer90Percentile,

                            this.playerPossessionPercentile.passesCompletedPer90Percentile,
                            this.playerPossessionPercentile.progressivePassingDistancePer90Percentile,
                            this.playerPossessionPercentile.crossesPer90Percentile,
                            this.playerPossessionPercentile.assistsPer90Percentile,
                            this.playerPossessionPercentile.expectedAssistsPer90Percentile,
                            this.playerPossessionPercentile.passesControlledPer90Percentile,
                            this.playerPossessionPercentile.dribblesPer90Percentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePer90Percentile,

                            this.playerDefendingPercentile.tacklesWonPer90Percentile,
                            this.playerDefendingPercentile.blocksPer90Percentile,
                            this.playerDefendingPercentile.interceptionsPer90Percentile,
                            this.playerDefendingPercentile.pressuresPer90Percentile,
                            this.playerDefendingPercentile.headersWonPercentile
                        ],
                    },
                ],
                true
            )

            this.$refs.chart.appendSeries(
                
                    {
                        name: this.player2.playerName,
                        data: [ 
                            this.player2AttackingPercentile.goalsPer90Percentile,
                            this.player2AttackingPercentile.expectedGoalsPer90Percentile,
                            this.player2AttackingPercentile.shotsPer90Percentile,
                            this.player2AttackingPercentile.shotsOnTargetPer90Percentile,
                            this.player2AttackingPercentile.penaltyGoalsPer90Percentile,
                            this.player2AttackingPercentile.freeKickShotsPer90Percentile,

                            this.player2PossessionPercentile.passesCompletedPer90Percentile,
                            this.player2PossessionPercentile.progressivePassingDistancePer90Percentile,
                            this.player2PossessionPercentile.crossesPer90Percentile,
                            this.player2PossessionPercentile.assistsPer90Percentile,
                            this.player2PossessionPercentile.expectedAssistsPer90Percentile,
                            this.player2PossessionPercentile.passesControlledPer90Percentile,
                            this.player2PossessionPercentile.dribblesPer90Percentile,
                            this.player2PossessionPercentile.progressiveDribbleDistancePer90Percentile,

                            this.player2DefendingPercentile.tacklesWonPer90Percentile,
                            this.player2DefendingPercentile.blocksPer90Percentile,
                            this.player2DefendingPercentile.interceptionsPer90Percentile,
                            this.player2DefendingPercentile.pressuresPer90Percentile,
                            this.player2DefendingPercentile.headersWonPercentile
                        ],
                    },               
                true
            )
        },
        updateGraph(){
            setTimeout(() => {
                this.fetchPlayerDefendingPercentile(this.player1.id)
                this.fetchPlayerPossessionPercentile(this.player1.id)
                this.fetchPlayerAttackingPercentile(this.player1.id)
            }, 400)

            setTimeout(() => {
                if (this.per90) {
                    this.setPer90()
                } else {
                    this.setTotal()
                }
            }, 800)
        }
    },
    created() {

        this.updateGraph()

        this.fetchPlayerDefendingPercentiles()
        this.fetchPlayerPossessionPercentiles()
        this.fetchPlayerAttackingPercentiles()
    },
    updated() {
        this.updateGraph()
        this.fetchPlayerDefendingPercentile(this.player1.id)
        this.fetchPlayerPossessionPercentile(this.player1.id)
        this.fetchPlayerAttackingPercentile(this.player1.id)
    },
    computed:  {
        ...mapGetters(['playerDefendingPercentile', 'playerPossessionPercentile', 'playerAttackingPercentile', 'playerDefendingPercentiles', 'playerPossessionPercentiles', 'playerAttackingPercentiles']),
        player2DefendingPercentile: function() {
            return this.playerDefendingPercentiles.filter( percentile => percentile.playerId == this.player2.id)[0]
        },
        player2PossessionPercentile: function() {
            return this.playerPossessionPercentiles.filter( percentile => percentile.playerId == this.player2.id)[0]
        },
        player2AttackingPercentile: function() {
            return this.playerAttackingPercentiles.filter( percentile => percentile.playerId == this.player2.id)[0]
        }
    },
}
</script>

<style scoped>
.graph {
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
