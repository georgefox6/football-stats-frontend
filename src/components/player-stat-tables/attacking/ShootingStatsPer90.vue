<template>
    <div class="shooting-stats">
        <h1 class="title">Shooting stats per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Goals</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.goals / player.minutesPlayed) * 90 * 100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Expected Goals</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.expectedGoals / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Shots</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.shots / player.minutesPlayed) * 90 * 100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Shots on Target</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.shotsOnTarget / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Average Shot Distance</td>
                <td class="data">{{ player.shotDistance }}m</td>
            </tr>
            <tr>
                <td class="label">Penalties Taken</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.penaltyShots / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Penalties Scored</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.penaltyScored / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Free Kick Shots</td>
                <td class="data">
                    {{
                        Math.round(
                            (player.freeKickShots / player.minutesPlayed) *
                                90 *
                                100
                        ) / 100
                    }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ShootingStatsPer90',
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

.data {
    text-align: right;
}

td {
    padding: 15px;
}
</style>
