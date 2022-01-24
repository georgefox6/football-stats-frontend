<template>
    <div class="playing-stats">
        <h1 class="title">Playing stats</h1>
        <table class="table">
            <tr>
                <td class="label">Games Played</td>
                <td class="data">{{ player.matchesPlayed }}</td>
            </tr>
            <tr>
                <td class="label">Games Started</td>
                <td class="data">{{ player.matchesStarted }}</td>
            </tr>
            <tr>
                <td class="label">Minutes Played</td>
                <td class="data">{{ player.minutesPlayed }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PlayingStats',
    data() {
        return {}
    },
    props: ['player'],
    methods: {},
    created() {},
}
</script>

<style scoped>
.playing-stats {
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
