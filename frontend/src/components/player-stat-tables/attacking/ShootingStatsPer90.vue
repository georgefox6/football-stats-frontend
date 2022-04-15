<template>
    <div class="shooting-stats">
        <h1 class="title">Shooting stats per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Goals</td>
                <td class="data">
                    {{ getPer90(player.goals) }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Very simply, xG (or expected goals) is the probability that a shot will result in a goal based on the characteristics of that shot and the events leading up to it.">Expected Goals</VueCustomTooltip></td>
                <td class="data">
                    {{ getPer90(player.expectedGoals) }}
                </td>
            </tr>
            <tr>
                <td class="label">Shots</td>
                <td class="data">
                    {{ getPer90(player.shots) }}
                </td>
            </tr>
            <tr>
                <td class="label">Shots on Target</td>
                <td class="data">
                    {{ getPer90(player.shotsOnTarget) }}
                </td>
            </tr>
            <tr>
                <td class="label tooltip"><VueCustomTooltip :multiline="true" label="Average shot distance in m of all shots taken by this player">Average Shot Distance</VueCustomTooltip></td>
                <td class="data">{{ player.shotDistance }}m</td>
            </tr>
            <tr>
                <td class="label">Penalties Taken</td>
                <td class="data">
                    {{ getPer90(player.penaltyShots) }}
                </td>
            </tr>
            <tr>
                <td class="label">Penalties Scored</td>
                <td class="data">
                    {{ getPer90(player.penaltyScored) }}
                </td>
            </tr>
            <tr>
                <td class="label">Free Kick Shots</td>
                <td class="data">
                    {{ getPer90(player.freeKickShots) }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ShootingStatsPer90',
    data() {
        return {
        }
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
.shooting-stats {
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
