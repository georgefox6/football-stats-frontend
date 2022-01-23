<template>
    <div class="defending-stats">
        <h1 class="title">Defending stats per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Tackles</td>
                <td class="data">{{ Math.round(player.tacklesWon / player.minutesPlayed * 90 * 100) / 100 }} / {{ Math.round(player.tacklesAttempted / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <!-- TODO hover over informational pop explaing what progressive passing distance is -->
                <td class="label">Fouls</td>
                <td class="data">{{ Math.round(player.fouls / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Blocks</td>
                <td class="data">{{ Math.round(player.blocks / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Interceptions</td>
                <td class="data">{{ Math.round(player.interceptions / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Pressures in defensive third</td>
                <td class="data">{{ Math.round(player.pressuresDefensiveThird / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Pressures in middle third</td>
                <td class="data">{{ Math.round(player.pressuresMiddleThird / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Pressures in attacking third</td>
                <td class="data">{{ Math.round(player.pressuresAttackingThird / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Yellow cards</td>
                <td class="data">{{ Math.round(player.yellowCards / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Red cards</td>
                <td class="data">{{ Math.round(player.redCards / player.minutesPlayed * 90  * 100) / 100 }}</td>
            </tr>
            <tr>
                <td class="label">Headers won</td>
                <td class="data">{{ Math.round(player.headersWon / player.minutesPlayed * 90  * 100) / 100 }} / {{ Math.round((player.headersWon + player.headersLost) / player.minutesPlayed  * 90 * 100) / 100 }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DefendingStatsPer90',
    data() {
        return {}
    },
    props: ['player'],
    methods: {},
    created() {},
}
</script>

<style scoped>
.defending-stats {
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
