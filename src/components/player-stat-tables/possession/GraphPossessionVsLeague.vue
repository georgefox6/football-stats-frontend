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
                totalPassesCompleted: 800,
                progressivePassingDistance: 4000,
                crosses: 70,
                dribblesCompleted: 100,
                dribblesProgressiveDistance: 2500,
                passesControlled: 900,
                asssists: 15,
                expectedAssists: 15,
                per90: {
                    totalPassesCompleted: 70,
                    progressivePassingDistance: 400,
                    crosses: 5,
                    dribblesCompleted: 15,
                    dribblesProgressiveDistance: 300,
                    passesControlled: 70,
                    asssists: 1,
                    expectedAssists: 1,
                },
            },
            options: {
                title: {
                    text: this.player.playerName + ' Possession stats',
                },
                xaxis: {
                    categories: [
                        'Passes Completed',
                        'Progressive Passing Distance',
                        'Crosses',
                        'Dribbles',
                        'Progressive Dribble Distance',
                        'Passes Controlled',
                        'Assists',
                        'Expected Assists'
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
                    data: [0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
        }
    },
    props: ['player'],
    methods: {
        checkIsNumber(num){
            if(isNaN(num)){
                return 0
            }
            return num
        },
        setTotal() {
            var totalPassesCompleted = this.checkIsNumber(this.player.totalPassesCompleted / this.maxStats.totalPassesCompleted)
            var progressivePassingDistance = this.checkIsNumber(this.player.progressivePassingDistance / this.maxStats.progressivePassingDistance)
            var crosses = this.checkIsNumber(this.player.crosses / this.maxStats.crosses)
            var dribblesCompleted = this.checkIsNumber(this.player.dribblesCompleted / this.maxStats.dribblesCompleted)
            var dribblesProgressiveDistance = this.checkIsNumber(this.player.dribblesProgressiveDistance / this.maxStats.dribblesProgressiveDistance)
            var passesControlled = this.checkIsNumber(this.player.passesControlled / this.maxStats.passesControlled)
            var assists = this.checkIsNumber(this.player.assists / this.maxStats.assists)
            var expectedAssists = this.checkIsNumber(this.player.expectedAssists / this.maxStats.expectedAssists)

            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ totalPassesCompleted, progressivePassingDistance, crosses, dribblesCompleted, dribblesProgressiveDistance, passesControlled, assists, expectedAssists],
                    },
                ],
                true
            )
        },
        setPer90() {
            var totalPassesCompletedPer90 = this.checkIsNumber(this.player.totalPassesCompleted / this.maxStats.per90.totalPassesCompleted / this.player.minutesPlayed * 90)
            var progressivePassingDistancePer90 = this.checkIsNumber(this.player.progressivePassingDistance / this.maxStats.per90.progressivePassingDistance / this.player.minutesPlayed * 90)
            var crossesPer90 = this.checkIsNumber(this.player.crosses / this.maxStats.per90.crosses / this.player.minutesPlayed * 90)
            var dribblesCompletedPer90 = this.checkIsNumber(this.player.dribblesCompleted / this.maxStats.per90.dribblesCompleted / this.player.minutesPlayed * 90)
            var dribblesProgressiveDistancePer90 = this.checkIsNumber(this.player.dribblesProgressiveDistance / this.maxStats.per90.dribblesProgressiveDistance / this.player.minutesPlayed * 90)
            var passesControlledPer90 = this.checkIsNumber(this.player.passesControlled / this.maxStats.per90.passesControlled / this.player.minutesPlayed * 90)
            var assistsPer90 = this.checkIsNumber(this.player.assists / this.maxStats.per90.assists / this.player.minutesPlayed * 90)
            var expectedAssistsPer90 = this.checkIsNumber(this.player.expectedAssists / this.maxStats.per90.expectedAssists / this.player.minutesPlayed * 90)
            
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ totalPassesCompletedPer90, progressivePassingDistancePer90, crossesPer90, dribblesCompletedPer90, dribblesProgressiveDistancePer90, passesControlledPer90, assistsPer90, expectedAssistsPer90 ]
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
