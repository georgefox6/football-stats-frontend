<template>
    <div class="dribbling-stats">
        <h1 class="title">Dribbling stats Per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Dribbles (Attempted/Completed)</td>
                <td class="data">
                    {{ getPer90(player.dribblesCompleted) }}
                    /
                    {{ getPer90(player.dribblesAttempted) }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="The total distance travelled towards the opponents goal while in possession of the ball.">Progressive Dribble Distance</VueCustomTooltip></td>
                <td class="data">
                    {{ getPer90(player.dribblesProgressiveDistance) }}m
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="The number of drribles where the starting point and the last touch of the player is at least 30 meters closer to opponent goal if starting and finishing points are in own half.">Progressive Dribbles</VueCustomTooltip></td>
                <td class="data">
                    {{ getPer90(player.progressiveDribbles) }}
                </td>
            </tr>
            <tr>
                <td class="label">Passes Controlled</td>
                <td class="data">
                    {{ getPer90(player.passesControlled) }}
                    /
                    {{ getPer90(player.passesReceived) }}
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
.dribbling-stats {
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
