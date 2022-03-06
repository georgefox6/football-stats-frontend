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
    box-shadow: 0 0 20px #9e9e9e;
    padding: 20px;
    background-color: white;
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
