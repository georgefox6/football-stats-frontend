<template>
    <div class="defending-stats">
        <h1 class="title">Defending stats</h1>
        <table class="table">
            <tr>
                <td class="label">Tackles</td>
                <td class="data">{{ player.tacklesWon }} / {{ player.tacklesAttempted }}</td>
            </tr>
            <tr>
                <!-- TODO hover over informational pop explaing what progressive passing distance is -->
                <td class="label">Fouls</td>
                <td class="data">{{ player.fouls }}</td>
            </tr>
            <tr>
                <td class="label">Blocks</td>
                <td class="data">{{ player.blocks }}</td>
            </tr>
            <tr>
                <td class="label">Interceptions</td>
                <td class="data">{{ player.interceptions }}</td>
            </tr>
            <tr>
                <td class="label">Pressures in defensive third</td>
                <td class="data">{{ player.pressuresDefensiveThird }}</td>
            </tr>
            <tr>
                <td class="label">Pressures in middle third</td>
                <td class="data">{{ player.pressuresMiddleThird }}</td>
            </tr>
            <tr>
                <td class="label">Pressures in attacking third</td>
                <td class="data">{{ player.pressuresAttackingThird }}</td>
            </tr>
            <tr>
                <td class="label">Yellow cards</td>
                <td class="data">{{ player.yellowCards }}</td>
            </tr>
            <tr>
                <td class="label">Red cards</td>
                <td class="data">{{ player.redCards }}</td>
            </tr>
            <tr>
                <td class="label">Headers won</td>
                <td class="data">{{ player.headersWon }} / {{player.headersWon + player.headersLost}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DefendingStats',
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
