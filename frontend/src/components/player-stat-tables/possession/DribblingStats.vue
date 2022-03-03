<template>
    <div class="dribbling-stats">
        <h1 class="title">Dribbling stats</h1>
        <table class="table">
            <tr>
                <td class="label">Dribbles (Attempted/Completed)</td>
                <td class="data">
                    {{ player.dribblesCompleted }} /
                    {{ player.dribblesAttempted }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="The total distance travelled towards the opponents goal while in possession of the ball.">Progressive Dribble Distance</VueCustomTooltip></td>
                <td class="data">{{ player.dribblesProgressiveDistance }}m</td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="The number of drribles where the starting point and the last touch of the player is at least 30 meters closer to opponent goal if starting and finishing points are in own half.">Progressive Dribbles</VueCustomTooltip></td>
                <td class="label">Progressive Dribbles</td>
                <td class="data">{{ player.progressiveDribbles }}</td>
            </tr>
            <tr>
                <td class="label">Passes Controlled</td>
                <td class="data">
                    {{ player.passesControlled }} / {{ player.passesReceived }}
                </td>
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

.tooltip {
    color: blue;
}

.data {
    text-align: right;
}

td {
    padding: 15px;
}
</style>
