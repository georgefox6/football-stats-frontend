<template>
    <div>
        <div class="heading-line-right">
            <h2>{{leagueData.name}}</h2>
        </div>
        <div class="league-summary">
            
            <div>
                <div class="heading-line-right">
                    <h3>Table</h3>
                </div>
                
                <table class="league-table">
                    <tr v-for="club in leagueData.table.slice(0,4)" :key="club.id">
                        <td class="table-data name-column">{{club.name}}</td>
                        <td class="table-data">{{club.games}}</td>
                        <td class="table-data points-column">{{club.points}} pts</td>
                    </tr>
                    <tr v-for="club in leagueData.table.slice(4,leagueData.table.length)" :key="club.id">
                        <td v-if="expanded" class="table-data name-column">{{club.name}}</td>
                        <td v-if="expanded" class="table-data">{{club.games}}</td>
                        <td v-if="expanded" class="table-data points-column">{{club.points}} pts</td>
                    </tr>
                </table>
            </div>
            
            <div>
                <div class="heading-line-right">
                    <h3>Goals</h3>
                </div>
                
                <table class="league-table">
                    <tr v-for="player in topGoals.slice(0,4)" :key="player.id">
                        <td @click="playerLink(player.id)" class="table-data name-column">{{player.playerName}}</td>
                        <td class="table-data">{{player.goals}}</td>
                    </tr>
                    <tr v-for="player in topGoals.slice(4,leagueData.table.length)" :key="player.id">
                        <td @click="playerLink(player.id)" v-if="expanded" class="table-data name-column">{{player.playerName}}</td>
                        <td v-if="expanded" class="table-data">{{player.goals}}</td>
                    </tr>
                </table>
            </div>

            <div>    
                <div class="heading-line-right">
                    <h3>Assists</h3>
                </div>
                <table class="league-table">
                    <tr v-for="player in topAssists.slice(0,4)" :key="player.id">
                        <td @click="playerLink(player.id)" class="table-data name-column">{{player.playerName}}</td>
                        <td class="table-data">{{player.assists}}</td>
                    </tr>
                    <tr v-for="player in topAssists.slice(4,leagueData.table.length)" :key="player.id">
                        <td @click="playerLink(player.id)" v-if="expanded" class="table-data name-column">{{player.playerName}}</td>
                        <td v-if="expanded" class="table-data">{{player.assists}}</td>
                    </tr>
                    
                </table>
            </div>

        </div>

        <div class="line-both">
            <div v-if="!this.expanded" @click="toggleExpand()">
                &#8681;
            </div>
            <div v-if="this.expanded" @click="toggleExpand()">
                &#8679;
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'LeagueSummary',
    props: [ 'leagueData', 'league' ],
    data() {
        return {
            expanded: false,
            topGoals: [],
            topAssists: [],
            premierLeagueClubs: [
                'Arsenal',
                'Aston Villa',
                'Brentford',
                'Brighton & Hove Albion',
                'Burnley',
                'Chelsea',
                'Crystal Palace',
                'Everton',
                'Leeds United',
                'Leicester City',
                'Liverpool',
                'Manchester City',
                'Manchester United',
                'Newcastle United',
                'Norwich City',
                'Southampton',
                'Tottenham Hotspur',
                'Watford',
                'West Ham United',
                'Wolverhampton Wanderers'
            ],
            bundesligaClubs: [
                'Bayern Munich',
                'RB Leipzig',
                'Dortmund',
                'Wolfsburg',
                'Eintracht Frankfurt',
                'Bayer Leverkusen',
                'Union Berlin',
                'Mönchengladbach',
                'Stuttgart',
                'Freiburg',
                'Hoffenheim',
                'Mainz 05',
                'Augsburg',
                'Hertha BSC',
                'Arminia',
                'Köln',
                'Bochum',
                'Greuther Fürth',
            ]
        }
    },
    methods: {
        toggleExpand() {
            this.expanded = !this.expanded
        },
        ...mapActions(['fetchPaginatedPlayers']),
        playerLink(id) {
            this.$router.push({
                name: 'PlayerDefaultView',
                params: { playerId: id },
            })
        },
    },
    created () {
        let request = {
            Page: 1,
            PageSize: 20,
            ClubFilter: [],
            PositionFilter: [],
            NationFilter: [],
            ContractEndDateFilter: [],
            MinMarketValueFilter: 0,
            MaxMarketValueFilter: 200,
            MinWageFilter: 0,
            MaxWageFilter: 500,
            SearchTerm: null,
            Sort: 'Goals',
            SortDesc: true,
        }
        
        if(this.league == "Premier League"){
            request.ClubFilter = this.premierLeagueClubs
        }
        if( this.league == 'Bundesliga'){
            request.ClubFilter = this.bundesligaClubs
        }
        this.fetchPaginatedPlayers(request).then( () => {
            this.topGoals = this.allPaginatedPlayers.items

            request.Sort = "Assists"
            this.fetchPaginatedPlayers(request).then( () => {
                this.topAssists = this.allPaginatedPlayers.items
            })
        })
    },
    computed: {
        ...mapGetters(['allPaginatedPlayers']),
    }
}
</script>

<style scoped>

.league-summary {
    display: flex;
}

.league-summary > div {
    flex: 1;
}

.league-summary > div:nth-child(1) {
    flex: 1.3;
}

.league-summary > div:nth-child(2) {
    flex: 1;
    padding-left: 40px;
    padding-right: 40px;
}

.table-data {
    padding: 10px;
    text-align: left;
}

.points-column {
    min-width: 44px;
}

.league-table {
    width: 100%;
}

.league-table > tr {
    display: flex;
}

.name-column {
    flex: 1;
}

.name-column:hover {
    color: var(--primary);
    cursor: pointer;
}

@media screen and (max-width: 1000px){
    .table-data {
        padding: 3px;
    }

    .league-summary > div:nth-child(2) {
        padding-left: 20px;
        padding-right: 20px;
    }
}

@media screen and (max-width: 750px){
    .league-summary > div:nth-child(2) {
        padding-left: 10px;
        padding-right: 10px;
    }
}

@media screen and (max-width: 600px){
    .league-summary {
        flex-direction: column;
    }

    .league-summary > div:nth-child(2) {
        padding-left: 0;
        padding-right: 0;
    }
}

/* Styling for heading lines */

/*align the heading and lines*/

.heading-line-right h2, .heading-line-right h3 {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
    color: var( --primary );
}


/*add and adjust the lines*/

.heading-line-right h2:after, .heading-line-right h3:after {
	content: '';
	border-top: 3px solid;
	margin: 0 20px 0 0;
	flex: 1 0 20px;
	color: var( --primary );
}


/*add spacing between heading and line*/

.heading-line-right h2:after, .heading-line-right h3:after {
	margin: 0 0 0 20px;
}


/* Styling for lines either side */
/*center the heading and lines*/

.line-both div {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-align: center;
    font-size: 40px;
}

.line-both div:hover {
    background-color: white;
    border-radius: 10px;
}


/*add and adjust the lines*/

.line-both div:before,
.line-both div:after {
	content: '';
	border-top: 2px solid;
	margin: 0 20px 0 0;
	flex: 1 0 20px;
    color: var(--primary)
}


/*add spacing between heading and lines*/

.line-both div:after {
	margin: 0 0 0 20px;
}

.line-both {
    cursor: pointer;
    color: var(--primary)
    
}

</style>