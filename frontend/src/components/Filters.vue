<template>
    <div v-if="showFilter" class="filters">

        <div class="close" @click="close">
            &times;
        </div>

        <div class="filter" id="min-value">
            <h3 class="header">Min Value</h3>
            <input type="range" min="0" max="200" step="1" v-model="filters.minValue"> 
            £{{filters.minValue}} Million
        </div>

        <div class="filter" id="min-value">
            <h3 class="header">Max Value</h3>
            <input type="range" min="0" max="200" step="1" v-model="filters.maxValue"> 
            £{{filters.maxValue}} Million
        </div>

        <div class="filter" id="min-wage">
            <h3 class="header">Min Wage</h3>
            <input type="range" min="0" max="500" step="1" v-model="filters.minWage"> 
            £{{filters.minWage}} K p/w
        </div>

        <div class="filter" id="max-wage">
            <h3 class="header">Max Wage</h3>
            <input type="range" min="0" max="500" step="1" v-model="filters.maxWage"> 
            £{{filters.maxWage}} K p/w
        </div>

        <div class="filter" id="min-age">
            <h3 class="header">Min Age</h3>
            <input type="range" min="16" max="45" step="1" v-model="filters.minAge"> 
            {{filters.minAge}}
        </div>

        <div class="filter" id="max-age">
            <h3 class="header">Max Age</h3>
            <input type="range" min="16" max="45" step="1" v-model="filters.maxAge"> 
            {{filters.maxAge}}
        </div>

        
        <vSelect class="filter" placeholder="Positions" multiple v-model="filters.checkedPositions" :options="positions"/>
        <vSelect class="filter" placeholder="Contract End Date" multiple v-model="filters.checkedContracts" :options="contracts"/>
        <vSelect class="filter" placeholder="Nationality" multiple v-model="filters.checkedNations" :options="nations"/>
        <vSelect class="filter" placeholder="Clubs" multiple v-model="filters.checkedClubs" :options="clubs"/>

        <button class="filter-button" @click="filter()">Apply</button>
        <button class="filter-button" @click="clear()">Clear</button>


    </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
    name: "Filters",
    props: {
        showFilter: {
            type: Boolean
        },
    },
    components: {
        vSelect,
    },
    data() {
        return {
            positionCollapse: true,
            clubCollapse: true,
            nationCollapse: true,
            premierLeagueCollapse: true,
            bundesligaCollapse: true,
            contractCollapse: true,
            filters: {
                checkedPositions: [],
                checkedClubs: [],
                checkedNations: [],
                checkedContracts: [],
                minValue: 0,
                maxValue: 200,
                minWage: 0,
                maxWage: 1000,
                minAge: 16,
                maxAge: 45
            },
            positions: [
                "Centre-Forward",
                "Second Striker",
                "Left Winger",
                "Right Winger",
                "Attacking Midfield",
                "Left Midfield",
                "Right Midfield",
                "Central Midfield",
                "Defensive Midfield",
                "Left-Back",
                "Right-Back",
                "Centre-Back",
                "Goalkeeper"
            ],
            clubs: [
                "Arsenal",
                "Aston Villa",
                "Brentford",
                "Brighton & Hove Albion",
                "Burnley",
                "Chelsea",
                "Crystal Palace",
                "Everton",
                "Leeds United",
                "Leicester City",
                "Liverpool",
                "Manchester City",
                "Manchester United",
                "Newcastle United",
                "Norwich City",
                "Southampton",
                "Tottenham Hotspur",
                "Watford",
                "West Ham United",
                "Wolverhampton Wanderers",
                "Arminia",
                "Augsburg",
                "Bayer Leverkusen",
                "Bayern Munich",
                "Bochum",
                "Dortmund",
                "Mönchengladbach",
                "Eintracht Frankfurt",
                "Freiburg",
                "Greuther Fürth",
                "Hertha BSC",
                "Hoffenheim",
                "Köln",
                "RB Leipzig",
                "Mainz 05",
                "Stuttgart",
                "Union Berlin",
                "Wolfsburg"
            ],
            nations: [
                "England",
                "Spain",
                "France",
                "Germany",
                "Netherlands",
                "Brazil",
                "Argentina"
            ],
            contracts: [
                "Jun 30, 2022",
                "Jun 30, 2023",
                "Jun 30, 2024",
                "Jun 30, 2025",
                "Jun 30, 2026",
                "Jun 30, 2027",
                "Jun 30, 2028",
                "Jun 30, 2029",
                "Jun 30, 2030",
            ],
        }
    },
    methods: {
        filter(){
            this.showFilter = false
            this.$emit('filter', this.filters)
        },
        close(){
            this.showFilter = false
        },
        clear(){
            this.filters.checkedPositions = []
            this.filters.checkedClubs = []
            this.filters.checkedNations = []
            this.filters.checkedContracts = []
            this.filters.minValue = 0
            this.filters.maxValue = 200
            this.filters.minWage = 0
            this.filters.maxWage = 1000
            this.filters.minAge = 1
            this.filters.maxAge = 45
        }
    },
    emits: ['filter'],
};
</script>

<style scoped>
.filters {
    padding: 10px;
}

.filter {
    max-height: 300px;
    margin: 10px;
    width: 250px;
    display: inline-block;
}

.filter::-webkit-scrollbar {
  display: none;
}

.filter > div {
    padding: 5px;
}


.filter-button {
    padding: 20px;
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 10px;
}

.header {
    font-size: 1rem;
    margin: 5px;
}

label {
    text-align: left;
}

.close {
    font-size: 40px;
    float: right;
    margin: 0;
    padding: 0;
    cursor: pointer;
    width: 40px;
}
</style>