<template>
    <div class="success-stats">

        <VueApexCharts
            ref="graph"
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
    name: 'GraphSuccessRates',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            series: [0,0,0,0,0,0,0,0],
            options: {
                chart: {
                    width: 380,
                    type: 'polarArea',
                },
                labels: ['Shot Conversion', 'Shot accuracy', 'Penalty Conversion', 'Pass Accuracy', 'Passes Controlled', 'Dribble Success', 'Tackle Win Rate', 'Headers won'],
                legend: {
                    position: 'bottom'
                },
                // title: {
                //     text: this.player.playerName + ' Shooting stats',
                // },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 2
                        },
                        spokes: {
                            strokeWidth: 2
                        },
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function(val) {
                            return (Math.round(val * 100)/100) + '%'
                        }
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
            }
        }
    },
    props: ['player'],
    methods: {
        updateGraphData() {
            this.series = [
                this.player.goals/this.player.shots * 100,
                this.player.shotsOnTarget/this.player.shots * 100,
                0,
                this.player.totalPassesCompleted/this.player.totalPassesAttempted * 100,
                this.player.passesControlled/this.player.passesReceived * 100,
                this.player.dribblesCompleted/this.player.dribblesAttempted * 100,
                this.player.tacklesWon/this.player.tacklesAttempted * 100,
                this.player.headersWon/(this.player.headersWon + this.player.headersLost)  * 100
            ]
        }
    },
    created() {
        setTimeout(() => {
            this.updateGraphData()
        }, 500)
    },
    updated() {
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
