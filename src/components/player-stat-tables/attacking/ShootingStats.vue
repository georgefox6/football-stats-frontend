<template>
    <div class="shooting-stats">
        <h1 class="title">Shooting stats</h1>
        <table class="table">
            <tr>
                <td class="label">Goals</td>
                <td class="data">{{ player.goals }}</td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="Very simply, xG (or expected goals) is the probability that a shot will result in a goal based on the characteristics of that shot and the events leading up to it.">Expected Goals</VueCustomTooltip></td>
                <td class="data">{{ player.expectedGoals }}</td>
            </tr>
            <tr>
                <td class="label">Shots</td>
                <td class="data">{{ player.shots }}</td>
            </tr>
            <tr>
                <td class="label">Shots on Target</td>
                <td class="data">{{ player.shotsOnTarget }}</td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip label="Average shot distance in m of all shots taken by this player">Average Shot Distance</VueCustomTooltip></td>
                <td class="data">{{ player.shotDistance }}m</td>
            </tr>
            <tr>
                <td class="label">Penalties Taken</td>
                <td class="data">{{ player.penaltyShots }}</td>
            </tr>
            <tr>
                <td class="label">Penalties Scored</td>
                <td class="data">{{ player.penaltyScored }}</td>
            </tr>
            <tr>
                <td class="label">Free Kick Shots</td>
                <td class="data">{{ player.freeKickShots }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ShootingStats',
    data() {
        return {}
    },
    props: ['player'],
    methods: {},
    created() {},
}
</script>

<style scoped>
.shooting-stats {
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
