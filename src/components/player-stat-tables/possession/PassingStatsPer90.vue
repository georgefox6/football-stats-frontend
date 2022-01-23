<template>
    <div class="passing-stats">
        <h1 class="title">Passing stats per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Passes</td>
                <td class="data">{{ Math.round(player.totalPassesCompleted / player.minutesPlayed * 90) }} / {{ Math.round(player.totalPassesAttempted / player.minutesPlayed * 90) }}</td>
            </tr>
            <tr>
                <!-- TODO hover over informational pop explaing what progressive passing distance is -->
                <td class="label">Progressive Passing Distance</td>
                <td class="data">{{ Math.round(player.progressivePassingDistance / player.minutesPlayed * 90)}}m</td>
            </tr>
            <tr>
                <td class="label">Crosses</td>
                <td class="data">{{ Math.round(player.crosses / player.minutesPlayed * 90)}}</td>
            </tr>
            <tr>
        <td class="label">Short Passing</td>
                <td class="data">{{ Math.round(player.shortPassesCompleted / player.minutesPlayed * 90) }} / {{ Math.round(player.shortPassesAttempted / player.minutesPlayed * 90) }}</td>
            </tr>
            <tr>
                <td class="label">Medium Passing</td>
                <td class="data">{{ Math.round(player.mediumPassesCompleted / player.minutesPlayed * 90) }} / {{ Math.round(player.mediumPassesAttempted / player.minutesPlayed * 90) }}</td>
            </tr>
            <tr>
                <td class="label">Long Passing</td>
                <td class="data">{{ Math.round(player.longPassesCompleted / player.minutesPlayed * 90) }} / {{ Math.round(player.longPassesAttempted / player.minutesPlayed * 90) }}</td>
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
    methods: {},
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
