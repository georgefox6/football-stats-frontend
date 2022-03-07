<template>
    <div class="defending-stats">
        <h1 class="title">Defending stats per 90</h1>
        <table class="table">
            <tr>
                <td class="label">Tackles</td>
                <td class="data">
                    {{
                        getPer90(player.tacklesWon)
                        
                    }}
                    /
                    {{
                        getPer90(player.tacklesAttempted)
                        
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Fouls</td>
                <td class="data">
                    {{
                        getPer90(player.fouls)
                        
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Blocks</td>
                <td class="data">
                    {{
                        getPer90(player.blocks)
                        
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Interceptions</td>
                <td class="data">
                    {{
                        getPer90(player.interceptions)
                        
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Pressures in defensive third</td>
                <td class="data">
                    {{
                        getPer90(player.pressuresDefensiveThird)
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Pressures in middle third</td>
                <td class="data">
                    {{
                        getPer90(player.pressuresMiddleThird)
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Pressures in attacking third</td>
                <td class="data">
                    {{
                        getPer90(player.pressuresAttackingThird)
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Yellow cards</td>
                <td class="data">
                    {{
                        getPer90(player.yellowCards)
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Red cards</td>
                <td class="data">
                    {{
                        getPer90(player.redCards)
                    }}
                </td>
            </tr>
            <tr>
                <td class="label">Headers won</td>
                <td class="data">
                    {{
                        getPer90(player.headersWon)
                    }}
                    /
                    {{
                        getPer90(player.headersWon + player.headersLost)
                    }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DefendingStatsPer90',
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
.defending-stats {
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

.data {
    text-align: right;
}

td {
    padding: 15px;
}
</style>
