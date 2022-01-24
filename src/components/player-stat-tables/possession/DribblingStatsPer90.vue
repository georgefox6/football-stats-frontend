<template>
    <div class="dribbling-stats">
        <h1 class="title">Dribbling stats Per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Dribbles (Attempted/Completed)</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.dribblesCompleted / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                    /
                    {{
                        Math.round(
                            (player.dribblesAttempted / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <!-- TODO hover over informational pop explaing what progressive dribble distance is -->
                <td class="label">Progressive Dribble Distance</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.dribblesProgressiveDistance /
                                player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}m
                </td>
            </tr>
            <tr>
                <td class="label">Progressive Dribbles</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.progressiveDribbles /
                                player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Passes Controlled</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.passesControlled / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                    /
                    {{
                        Math.round(
                            (player.passesReceived / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DribblingStatsPer90',
    data() {
        return {}
    },
    props: ['player'],
    methods: {},
    created() {},
}
</script>

<style scoped>
.dribbling-stats {
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #c9c9c9;
    padding: 20px;
}

.title {
    margin: 0 auto;
}

.table {
    margin: 0 auto;
}

.label {
    text-align: left;
}

.data {
    text-align: right;
}

td {
    padding: 15px;
}
</style>
