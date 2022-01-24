<template>
    <div class="shooting-stats">
        <div id="option">
            <p>Per 90</p>
            <label class="switch">
                <input v-model="total" type="checkbox" />
                <span class="slider round"></span>
            </label>
            <p>Total</p>
        </div>

        <VueApexCharts
            ref="chart"
            width="800"
            type="radar"
            :options="options"
            :series="series"
        ></VueApexCharts>
        <!-- TODO add buttons to compare to league, similar positions, age groups etc -->
        <!-- TODO Change to percentile rather than percentage of best -->
        <!-- TODO Pull in real max stats data rather than hardcoded -->
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    name: 'GraphShootingVsLeague',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            total: true,
            maxStats: {
                goals: 8,
                expectedGoals: 5,
                shots: 20,
                shotsOnTarget: 10,
                penaltyScored: 2,
                freeKickShots: 3,
                per90: {
                    goals: 0.2,
                    expectedGoals: 0.3,
                    shots: 4,
                    shotsOnTarget: 1,
                    penaltyScored: 0.1,
                    freeKickShots: 0.2,
                }
            },
            options: {
                title: {
                    text: this.player.playerName + ' Shooting stats',
                },
                xaxis: {
                    categories: [
                        'Goals',
                        'Expected Goals',
                        'Shots',
                        'Shots on Target',
                        'Penalty Goals',
                        'FK Shots',
                    ],
                },
                yaxis: {
                    show: false,
                    labels: {
                        formatter: function (value) {
                            return (Math.round(value * 100) / 100) * 100 + '%'
                        },
                    },
                    min: 0,
                    max: 1,
                    tickAmount: 5,
                },
            },
            series: [
                {
                    name: this.player.playerName,
                    data: [0, 0, 0, 0, 0, 0],
                },
                // {
                //     name: 'Series 2',
                //     data: [4, 4 , 5 , 2 , 1 , 0,5 ],
                // },
            ],
        }
    },
    props: ['player'],
    methods: {
        setTotal() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [
                            this.player.goals / this.maxStats.goals,
                            this.player.expectedGoals /
                                this.maxStats.expectedGoals,
                            this.player.shots / this.maxStats.shots,
                            this.player.shotsOnTarget /
                                this.maxStats.shotsOnTarget,
                            this.player.penaltyScored /
                                this.maxStats.penaltyScored,
                            this.player.freeKickShots /
                                this.maxStats.freeKickShots,
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
                            this.player.goals / this.maxStats.per90.goals/this.player.minutesPlayed * 90,
                            this.player.expectedGoals / this.maxStats.per90.expectedGoals/this.player.minutesPlayed * 90,
                            this.player.shots / this.maxStats.per90.shots/this.player.minutesPlayed * 90,
                            this.player.shotsOnTarget / this.maxStats.per90.shotsOnTarget/this.player.minutesPlayed * 90,
                            this.player.penaltyScored / this.maxStats.per90.penaltyScored/this.player.minutesPlayed * 90,
                            this.player.freeKickShots / this.maxStats.per90.freeKickShots/this.player.minutesPlayed * 90,
                        ],
                    },
                ],
                true
            )
        }
    },
    created() {
        setTimeout(() => {
            this.setTotal()
        }, 500)
    },
    updated() {
        if (this.total) {
            this.setTotal()
        } else {
            this.setPer90()
        }
    },
}
</script>

<style scoped>
.shooting-stats {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #c9c9c9;
    padding: 40px;
}

#option {
    white-space: nowrap;
}

#option > p {
    display: inline-block;
    padding: 20px;
    vertical-align: -8px;
}

#option > label {
    display: inline-block;
}

/********* Toggle Switch Styling **********/

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
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
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
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
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
