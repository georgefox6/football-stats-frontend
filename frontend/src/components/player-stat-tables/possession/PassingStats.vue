<template>
    <div class="passing-stats">
        <h1 class="title">Passing stats</h1>
        <table class="table">
            <tr>
                <td class="label">Passes</td>
                <td class="data">
                    {{ player.totalPassesCompleted }} /
                    {{ player.totalPassesAttempted }}
                </td>
            </tr>
            <tr>
                <td class="label">Assists</td>
                <td class="data">
                    {{ player.assists }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Expected assists measure the danger created by a pass that ends up in a shot, assigning it a probability related to the chances of scoring a goal.">Expected Assists</VueCustomTooltip></td>
                <td class="data">
                    {{ player.expectedAssists }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Total distance, in yards, that completed passes have traveled towards the opponent's goal. Note: Passes away from opponent's goal are counted as zero progressive yards.">Progressive Passing Distance</VueCustomTooltip></td>
                <td class="data">{{ player.progressivePassingDistance }}m</td>
            </tr>
            <tr>
                <td class="label">Crosses</td>
                <td class="data">{{ player.crosses }}</td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Passes less than 15 yards.">Short Passes</VueCustomTooltip></td>
                <td class="data">
                    {{ player.shortPassesCompleted }} /
                    {{ player.shortPassesAttempted }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Passes between 15 and 30 yards.">Medium Passes</VueCustomTooltip></td>
                <td class="data">
                    {{ player.mediumPassesCompleted }} /
                    {{ player.mediumPassesAttempted }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Passes longer than 30 yards.">Long Passes</VueCustomTooltip></td>
                <td class="data">
                    {{ player.longPassesCompleted }} /
                    {{ player.longPassesAttempted }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PassingStats',
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
    text-align: left;
}
</style>
