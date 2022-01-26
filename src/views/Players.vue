<template>
    <div class="player">
        <table>
            <thead>
                <tr>
                    
                    <th>Player Name</th>
                    <th>Club</th>
                    <th>Nationality</th>
                    <th>Age</th>
                    <th>Value</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="player in allPlayers" :key="player.id">
                    <!-- <td><a :href="'http://localhost:8080/#/player/' + player.id"> {{ player.playerName }} </a></td> -->
                    <!-- <td><router-link :to="{ name: 'PlayerDefaultView', params: { playerId: this.player.id },}"> {{ player.playerName }} </router-link></td> -->
                    <td>{{ player.playerName }}</td>
                    <td>{{ player.playerTeam }}</td>
                    <td>{{ player.playerNation }}</td>
                    <td>{{ player.playerAge }}</td>
                    <td>£{{ player.marketValue.toLocaleString('en-GB') }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Players',
    components: {},
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['fetchPlayers']),
    },
    computed: mapGetters(['allPlayers']),
    created() {
        this.fetchPlayers()
    },
}
</script>

<style lang="less">
html,
body {
	height: 100%;
}

body {
	margin: 0;
	// background: linear-gradient(45deg, #49a09d, #5f2c82);
	background: #363636;
	font-family: sans-serif;
	font-weight: 100;
}

.container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

table {
    margin-left: 12%;
	width: 1200px;
	border-collapse: collapse;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

th,
td {
	padding: 15px;
	background-color: rgba(255,255,255,0.2);
	color: #fff;
}

th {
	text-align: left;
}

thead {
	th {
		background-color: #55608f;
	}
}

tbody {
	tr {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			}
		}
	}
}
</style>
