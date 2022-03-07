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
                <td class="label tooltip"><VueCustomTooltip label="Expected assists measure the danger created by a pass that ends up in a shot, assigning it a probability related to the chances of scoring a goal.">Expected Assists</VueCustomTooltip></td>
                <td class="data">
                    {{ getPer90(player.expectedAssists) }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="Total distance, in yards, that completed passes have traveled towards the opponent's goal. Note: Passes away from opponent's goal are counted as zero progressive yards.">Progressive Passing Distance</VueCustomTooltip></td>
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
                <td class="label tooltip"><VueCustomTooltip label="Passes less than 15 yards.">Short Passes</VueCustomTooltip></td>
                <td class="data">
                    {{ getPer90(player.shortPassesCompleted) }}
                    /
                    {{ getPer90(player.shortPassesAttempted) }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="Passes between 15 and 30 yards.">Medium Passes</VueCustomTooltip></td>
                <td class="data">
                    {{ getPer90(player.mediumPassesCompleted) }}
                    /
                    {{ getPer90(player.mediumPassesAttempted) }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="Passes longer than 30 yards.">Long Passes</VueCustomTooltip></td>
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
