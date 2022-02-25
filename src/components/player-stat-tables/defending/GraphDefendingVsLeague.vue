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
                    data: [0, 0, 0, 0, 0, 0],
                },
            ],
        }
    },
    props: ['player'],
    methods: {
        ...mapActions(['fetchPlayerDefendingPercentile']),
        setTotal() {
            this.$refs.chart.updateSeries(
                [
                    {
                        data: [ 
                            this.playerDefendingPercentile.tacklesWonPercentile,
                            this.playerDefendingPercentile.blocksPercentile,
                            this.playerDefendingPercentile.interceptionsPercentile,
                            this.playerDefendingPercentile.pressuresPercentile,
                            this.playerDefendingPercentile.headersWonPercentile,
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
                            this.playerDefendingPercentile.tacklesWonPerPositionPercentile,
                            this.playerDefendingPercentile.blocksPerPositionPercentile,
                            this.playerDefendingPercentile.interceptionsPerPositionPercentile,
                            this.playerDefendingPercentile.pressuresPerPositionPercentile,
                            this.playerDefendingPercentile.headersWonPerPositionPercentile,
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
                            this.playerDefendingPercentile.tacklesWonPer90Percentile,
                            this.playerDefendingPercentile.blocksPer90Percentile,
                            this.playerDefendingPercentile.interceptionsPer90Percentile,
                            this.playerDefendingPercentile.pressuresPer90Percentile,
                            this.playerDefendingPercentile.headersWonPer90Percentile,
                        ]
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
                            this.playerDefendingPercentile.tacklesWonPer90PerPositionPercentile,
                            this.playerDefendingPercentile.blocksPer90PerPositionPercentile,
                            this.playerDefendingPercentile.interceptionsPer90PerPositionPercentile,
                            this.playerDefendingPercentile.pressuresPer90PerPositionPercentile,
                            this.playerDefendingPercentile.headersWonPer90PerPositionPercentile,
                        ]
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

        this.fetchPlayerDefendingPercentile(this.player.id)
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
    computed: mapGetters(['playerDefendingPercentile']),
    mounted(){
        if(this.playerDefendingPercentile){
            this.setTotal()
        }  
    }
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
