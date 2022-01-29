<template>
    <div class="passing-stats">
        <h1 class="title">Passing stats per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Passes</td>
                <td class="data">
                    {{ getPer90(player.totalPassesCompleted) }}
                    /
                    {{ getPer90(player.totalPassesAttempted) }}
                </td>
            </tr>
            <tr>
                <td class="label">Assists</td>
                <td class="data">
                    {{ getPer90(player.assists) }}
                </td>
            </tr>
            <tr>
                <td class="label">Expected Assists</td>
                <td class="data">
                    {{ getPer90(player.expectedAssists) }}
                </td>
            </tr>
            <tr>
                <!-- TODO hover over informational pop explaing what progressive passing distance is -->
                <td class="label">Progressive Passing Distance</td>
                <td class="data">
                    {{ getPer90(player.progressivePassingDistance) }}m
                </td>
            </tr>
            <tr>
                <td class="label">Crosses</td>
                <td class="data">
                    {{ getPer90(player.crosses) }}
                </td>
            </tr>
            <tr>
                <td class="label">Short Passing</td>
                <td class="data">
                    {{ getPer90(player.shortPassesCompleted) }}
                    /
                    {{ getPer90(player.shortPassesAttempted) }}
                </td>
            </tr>
            <tr>
                <td class="label">Medium Passing</td>
                <td class="data">
                    {{ getPer90(player.mediumPassesCompleted) }}
                    /
                    {{ getPer90(player.mediumPassesAttempted) }}
                </td>
            </tr>
            <tr>
                <td class="label">Long Passing</td>
                <td class="data">
                    {{ getPer90(player.longPassesCompleted) }}
                    /
                    {{ getPer90(player.longPassesAttempted) }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PassingStatsPer90',
    data() {
        return {}
    },
    props: ['player'],
    methods: {
        getPer90(stat) {
            return isFinite(
                Math.round((stat / this.player.minutesPlayed) * 90 * 100) / 100
            )
                ? Math.round((stat / this.player.minutesPlayed) * 90 * 100) /
                      100
                : 0
        },
    },
    created() {},
}
</script>

<style scoped>
.passing-stats {
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
