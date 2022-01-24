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
                <!-- TODO hover over informational pop explaing what progressive passing distance is -->
                <td class="label">Progressive Passing Distance</td>
                <td class="data">{{ player.progressivePassingDistance }}m</td>
            </tr>
            <tr>
                <td class="label">Crosses</td>
                <td class="data">{{ player.crosses }}</td>
            </tr>
            <tr>
                <td class="label">Short Passing</td>
                <td class="data">
                    {{ player.shortPassesCompleted }} /
                    {{ player.shortPassesAttempted }}
                </td>
            </tr>
            <tr>
                <td class="label">Medium Passing</td>
                <td class="data">
                    {{ player.mediumPassesCompleted }} /
                    {{ player.mediumPassesAttempted }}
                </td>
            </tr>
            <tr>
                <td class="label">Long Passing</td>
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
