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
                <!-- TODO hover over informational pop explaing what progressive dribble distance is -->
                <td class="label">Progressive Dribble Distance</td>
                <td class="data">
                    {{ getPer90(player.dribblesProgressiveDistance) }}m
                </td>
            </tr>
            <tr>
                <td class="label">Progressive Dribbles</td>
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
