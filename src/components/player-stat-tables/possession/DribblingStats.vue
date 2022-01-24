<template>
    <div class="dribbling-stats">
        <h1 class="title">Dribbling stats</h1>
        <table class="table">
            <tr>
                <td class="label">Dribbles (Attempted/Completed)</td>
                <td class="data">{{ player.dribblesCompleted }} / {{ player.dribblesAttempted }}</td>
            </tr>
            <tr>
                <!-- TODO hover over informational pop explaing what progressive dribble distance is -->
                <td class="label">Progressive Dribble Distance</td>
                <td class="data">{{ player.dribblesProgressiveDistance }}m</td>
            </tr>
            <tr>
                <td class="label">Progressive Dribbles</td>
                <td class="data">{{ player.progressiveDribbles }}</td>
            </tr>
            <tr>
                <td class="label">Passes Controlled</td>
                <td class="data">{{ player.passesControlled }} / {{ player.passesReceived }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DribblingStats',
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
