<template>
    <div class="general-stats">
        <h1 class="title">General stats</h1>
        <table class="table">
            <tr>
                <td class="label">Position</td>
                <td class="data">{{ player.playerPosition }}</td>
            </tr>
            <tr>
                <td class="label">Age</td>
                <td class="data">{{ player.playerAge }}</td>
            </tr>
            <tr>
                <td class="label">Team</td>
                <td class="data">{{ player.playerTeam }}</td>
            </tr>
            <tr>
                <td class="label">Nationality</td>
                <td class="data">{{ playerNationSecond }}
                        <country-flag
                            :country="this.playerNationFirst"
                            size="small"
                        /></td>
            </tr>
            <tr>
                <td class="label">Height</td>
                <td class="data tooltip"><VueCustomTooltip :label="toFeet(player.height)">{{ player.height }}cm</VueCustomTooltip></td>
            </tr>
            <tr>
                <td class="label">Foot</td>
                <td class="data">{{ player.preferredFoot }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'GeneralStats',
    components: {
        CountryFlag,
    },
    props: ['player'],
    methods: {
        toFeet(height) {
            var realFeet = ((height*0.393700) / 12);
            var feet = Math.floor(realFeet);
            var inches = Math.round((realFeet - feet) * 12);
            return feet + " Foot " + inches + ' Inches ';
        }
    },
    created() {
    },
    computed: {
        playerNationFirst() {
            if(!this.player.playerNation){
                return ''
            }
            return this.player.playerNation.split(' ')[0]
        },
        playerNationSecond() {
            if(!this.player.playerNation){
                return ''
            }
            return this.player.playerNation.split(' ')[1]
        },
    }
}
</script>

<style scoped>
.general-stats {
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
