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

        <div id="option">
            <p>All positions</p>
            <label class="switch">
                <input v-model="position" type="checkbox" />
                <span class="slider round"></span>
            </label>
            <p>Player position</p>
        </div>

        <VueApexCharts
            ref="chart"
            width="800"
            type="radar"
            :options="options"
            :series="series"
        ></VueApexCharts>
        <!-- TODO add buttons to compare to league, similar positions, age groups etc -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueApexCharts from 'vue-apexcharts'
export default {
    name: 'GraphPossessionVsLeague',
    components: {
        VueApexCharts,
    },
    data: function () {
        return {
            total: true,
            position: false,
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
                    data: [0, 0, 0, 0, 0, 0, 0, 0],
                },
            ],
        }
    },
    props: ['player'],
    methods: {
        ...mapActions(['fetchPlayerPossessionPercentile']),
        setTotal() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [
                            this.playerPossessionPercentile.passesCompletedPercentile,
                            this.playerPossessionPercentile.progressivePassingDistancePercentile,
                            this.playerPossessionPercentile.crossesPercentile,
                            this.playerPossessionPercentile.dribblesPercentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePercentile,
                            this.playerPossessionPercentile.passesControlledPercentile,
                            this.playerPossessionPercentile.assistsPercentile,
                            this.playerPossessionPercentile.expectedAssistsPercentile,
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
                            this.playerPossessionPercentile.passesCompletedPerPositionPercentile,
                            this.playerPossessionPercentile.progressivePassingDistancePerPositionPercentile,
                            this.playerPossessionPercentile.crossesPerPositionPercentile,
                            this.playerPossessionPercentile.dribblesPerPositionPercentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePerPositionPercentile,
                            this.playerPossessionPercentile.passesControlledPerPositionPercentile,
                            this.playerPossessionPercentile.assistsPerPositionPercentile,
                            this.playerPossessionPercentile.expectedAssistsPerPositionPercentile,
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
                            this.playerPossessionPercentile.passesCompletedPer90Percentile,
                            this.playerPossessionPercentile.progressivePassingDistancePer90Percentile,
                            this.playerPossessionPercentile.crossesPer90Percentile,
                            this.playerPossessionPercentile.dribblesPer90Percentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePer90Percentile,
                            this.playerPossessionPercentile.passesControlledPer90Percentile,
                            this.playerPossessionPercentile.assistsPer90Percentile,
                            this.playerPossessionPercentile.expectedAssistsPer90Percentile,
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
                            this.playerPossessionPercentile.passesCompletedPer90PerPositionPercentile,
                            this.playerPossessionPercentile.progressivePassingDistancePer90PerPositionPercentile,
                            this.playerPossessionPercentile.crossesPer90PerPositionPercentile,
                            this.playerPossessionPercentile.dribblesPer90PerPositionPercentile,
                            this.playerPossessionPercentile.progressiveDribbleDistancePer90PerPositionPercentile,
                            this.playerPossessionPercentile.passesControlledPer90PerPositionPercentile,
                            this.playerPossessionPercentile.assistsPer90PerPositionPercentile,
                            this.playerPossessionPercentile.expectedAssistsPer90PerPositionPercentile,
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
        this.fetchPlayerPossessionPercentile(this.player.id)
    },
    updated() {
        if (this.total) {
            if(this.position){
                this.setTotalPosition()
            } else {
                this.setTotal()
            }
        } else {
            if(this.position){
                this.setPer90Position()
            } else {
                this.setPer90()
            }
        }
    },
    computed: mapGetters(['playerPossessionPercentile']),
    mounted(){
        if(this.playerPossessionPercentile){
            this.setTotal()
        }        
    }
}
</script>

<style scoped>
.possession-stats {
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
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
