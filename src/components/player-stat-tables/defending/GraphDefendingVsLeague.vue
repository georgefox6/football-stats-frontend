<template>
    <div class="possession-stats">
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
    name: 'GraphPossessionVsLeague',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            total: true,
            maxStats: {
                tacklesWon: 40,
                blocks: 50,
                interceptions: 40,
                pressuresWon: 150,
                headersWon: 80,
                per90: {
                    tacklesWon: 10,
                    blocks: 10,
                    interceptions: 10,
                    pressuresWon: 10,
                    headersWon: 10,
                },
            },
            options: {
                title: {
                    text: this.player.playerName + ' Defending stats',
                },
                xaxis: {
                    categories: [
                        'Tackles Won',
                        'Blocks',
                        'Interceptions',
                        'Pressures',
                        'Headers Won',
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
            ],
        }
    },
    props: ['player'],
    methods: {
        setTotal() {
            var tacklesWon = this.player.tacklesWon / this.maxStats.tacklesWon
            var blocks = this.player.blocks / this.maxStats.blocks
            var interceptions = this.player.interceptions / this.maxStats.interceptions
            var pressuresWon = this.player.pressuresWon / this.maxStats.pressuresWon
            var headersWon = this.player.headersWon / this.maxStats.headersWon
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ tacklesWon, blocks, interceptions, pressuresWon, headersWon ],
                            // this.player.totalPassesCompleted / this.maxStats.totalPassesCompleted,
                            // this.player.progressivePassingDistance /
                            //     this.maxStats.progressivePassingDistance,
                            // this.player.crosses / this.maxStats.crosses,
                            // this.player.dribblesCompleted /
                            //     this.maxStats.dribblesCompleted,
                            // this.player.dribblesProgressiveDistance /
                            //     this.maxStats.dribblesProgressiveDistance,
                            // this.player.passesControlled /
                            //     this.maxStats.passesControlled,
                        // ],
                    },
                ],
                true
            )
        },
        setPer90() {
            var tacklesWonPer90 = this.player.tacklesWon / this.maxStats.per90.tacklesWon / this.player.minutesPlayed * 90
            var blocksPer90 = this.player.blocks / this.maxStats.per90.blocks / this.player.minutesPlayed * 90
            var interceptionsPer90 = this.player.interceptions / this.maxStats.per90.interceptions / this.player.minutesPlayed * 90
            var pressuresWonPer90 = this.player.pressuresWon / this.maxStats.per90.pressuresWon / this.player.minutesPlayed * 90
            var headersWonPer90 = this.player.headersWon / this.maxStats.per90.headersWon / this.player.minutesPlayed * 90
            
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ tacklesWonPer90, blocksPer90, interceptionsPer90, pressuresWonPer90, headersWonPer90 ]
                    },
                ],
                true
            )
        },
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
.possession-stats {
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
