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
                <td class="label">Expected Goals</td>
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
                <td class="label">Average Shot Distance</td>
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
