<template>
  <div class="wrapper">

    <h1 class="main-header">Home</h1>

    <section @click="navigate('Players')" class="section">
        <h2 class="section-header">Players</h2>
        <p>Here at football stats we have all of the most important stats for each of the top 5 leagues. You have the ability to see in depth player analysis, compare players and find players based on market value, traits or other statistics.</p>
    </section>
    
    <section class="section">
        <h2 class="section-header">Clubs</h2>
        <p>Want to know how your club compares to its rivals? Find in depth statistics based on real worlds performances, historic data as well as current and future facilities. This is also the place to see financial reacords enabling you to see how well clubs are performing both on and off the field.</p>
    </section>
    
    <section class="section">
        <h2 class="section-header">Insights</h2>
        <p>Create your own team with our squad build. You can select a starting 11 and see how much it would cost to purchase and the expected weekly wages. It will also indicate how well it would perform and display any strengths or weaknesses. It can also find the perfect players to complement your team and play style.</p>
    </section>
    
    <section class="section">
        <h2 class="section-header">Games</h2>
        <p>Want to test your football knowledge? Play our selection of games including higher or lower with modes including transfer value and specific stats. Compare your scores with your friends on the leaderboard. There are also various quizzes and other football related games.</p>
    </section>
    

    <league-summary
      :league="'Premier League'"
      :leagueData="premierLeague"
      class="league-table"
    />
    <league-summary
      :league="'Bundesliga'"
      :leagueData="bundesliga"
      class="league-table"
    />
    <player-carousel
      class="player-carousel"
      :Name="'Most Valuable players'"
      :Sort="'Value'"
    />
    <player-carousel
      class="player-carousel"
      :Name="'Players out of contract in 2023'"
      :Sort="'Value'"
      :ContractEndDateFilter="['Jun 30, 2023']"
    />
    <player-carousel
      class="player-carousel"
      :Name="'Top scorers U21'"
      :Sort="'Goals'"
      :MaxAgeFilter="21"
    />
    <player-carousel
      class="player-carousel"
      :Name="'Most Valuable players U21'"
      :Sort="'Value'"
      :MaxAgeFilter="21"
    />
  </div>
</template>

<script>
import LeagueSummary from '../components/Home/LeagueSummary.vue';
import PlayerCarousel from '../components/Home/PlayerCarousel.vue';
    export default {
        name: 'Home',
        components: {
            LeagueSummary,
            PlayerCarousel
        },
        data() {
            return {
                premierLeague: {
                    name: 'Premier League',
                    table: [
                        {
                            name: 'Manchester City',
                            games: 38,
                            points: 93
                        },
                        {
                            name: 'Liverpool',
                            games: 38,
                            points: 92
                        },
                        {
                            name: 'Chelsea',
                            games: 38,
                            points: 74
                        },
                        {
                            name: 'Tottenham',
                            games: 38,
                            points: 71
                        },
                        {
                            name: 'Arsenal',
                            games: 38,
                            points: 69
                        },
                        {
                            name: 'Manchester United',
                            games: 38,
                            points: 58
                        },
                        {
                            name: 'West Ham',
                            games: 38,
                            points: 56
                        },
                        {
                            name: 'Leicester City',
                            games: 38,
                            points: 52
                        },
                        {
                            name: 'Brighton',
                            games: 38,
                            points: 51
                        },
                        {
                            name: 'Wolves',
                            games: 38,
                            points: 51
                        },
                        {
                            name: 'Newcastle',
                            games: 38,
                            points: 49
                        },
                        {
                            name: 'Crystal Palace',
                            games: 38,
                            points: 48
                        },
                        {
                            name: 'Brentford',
                            games: 38,
                            points: 46
                        },
                        {
                            name: 'Aston Villa',
                            games: 38,
                            points: 45
                        },
                        {
                            name: 'Southampton',
                            games: 38,
                            points: 40
                        },
                        {
                            name: 'Everton',
                            games: 38,
                            points: 39
                        },
                        {
                            name: 'Leeds United',
                            games: 38,
                            points: 38
                        },
                        {
                            name: 'Burnley',
                            games: 38,
                            points: 35
                        },
                        {
                            name: 'Watford',
                            games: 38,
                            points: 23
                        },
                        {
                            name: 'Norwich City',
                            games: 38,
                            points: 22
                        },
                    ],
                },
                bundesliga: {
                    name: 'Bundesliga',
                    table: [
                        {
                            name: 'Bayern Munich',
                            games: 34,
                            points: 77
                        },
                        {
                            name: 'Dortmund',
                            games: 34,
                            points: 69
                        },
                        {
                            name: 'Leverkusen',
                            games: 34,
                            points: 64
                        },
                        {
                            name: 'Leipzig',
                            games: 34,
                            points: 58
                        },
                        {
                            name: 'Union Berlin',
                            games: 34,
                            points: 57
                        },
                        {
                            name: 'Freiburg',
                            games: 34,
                            points: 55
                        },
                        {
                            name: 'Cologne',
                            games: 34,
                            points: 52
                        },
                        {
                            name: 'Mainz',
                            games: 34,
                            points: 46
                        },
                        {
                            name: 'Hoffenheim',
                            games: 34,
                            points: 46
                        },
                        {
                            name: 'Gladbach',
                            games: 34,
                            points: 45
                        },
                        {
                            name: 'Frankfurt',
                            games: 34,
                            points: 42
                        },
                        {
                            name: 'Wolfsburg',
                            games: 34,
                            points: 42
                        },
                        {
                            name: 'Bochum',
                            games: 34,
                            points: 42
                        },
                        {
                            name: 'Augsburg',
                            games: 34,
                            points: 38
                        },
                        {
                            name: 'Stuttgart',
                            games: 34,
                            points: 33
                        },
                        {
                            name: 'Hertha Berlin',
                            games: 34,
                            points: 33
                        },
                        {
                            name: 'Arminia',
                            games: 34,
                            points: 28
                        },
                        {
                            name: 'Greuther',
                            games: 34,
                            points: 18
                        }
                    ]
                }
            }
        },
        methods: {
            navigate(route) {
            this.$router.push({
                name: route,
            })
        },
        },
    }
</script>

<style scoped>
.league-table {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
}

.wrapper {
    width: 80%;
    margin: auto;
}

.section-header {
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 900;
    font-size: 30px;
    margin: 5px;
}

.main-header {
    color: black;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 900;
    font-size: 40px;
    margin: 5px;
    margin-top: 100px;
}

.section > p {
    line-height: 30px;
}

.section {
    padding: 10px;
    margin: 10px;
    cursor: pointer;
}

@media screen and (max-width: 800px) {
    .wrapper {
        width: 95%;
        margin: auto;
    }
}

@media screen and (max-width: 600px) {
    .wrapper {
        width: 80%;
        margin: auto;
        margin-top: 80px;
    }
}
</style>
