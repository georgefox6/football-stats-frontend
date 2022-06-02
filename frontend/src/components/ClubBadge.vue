<template>
    <div>
        <img v-if="clubName == 'Arsenal'" src="https://resources.premierleague.com/premierleague/badges/70/t3.png" alt="Arsenal">
        <img v-if="clubName == 'Aston Villa'" src="https://resources.premierleague.com/premierleague/badges/70/t7.png" alt="Aston Villa">
        <img v-if="clubName == 'Brentford'" src="https://resources.premierleague.com/premierleague/badges/70/t94.png" alt="Brentford">
        <img v-if="clubName == 'Brighton & Hove Albion'" src="https://resources.premierleague.com/premierleague/badges/70/t36.png" alt="Brighton & Hove Albion">
        <img v-if="clubName == 'Burnley'" src="https://resources.premierleague.com/premierleague/badges/70/t90.png" alt="Burnley">
        <img v-if="clubName == 'Chelsea'" src="https://resources.premierleague.com/premierleague/badges/70/t8.png" alt="Chelsea">
        <img v-if="clubName == 'Crystal Palace'" src="https://resources.premierleague.com/premierleague/badges/70/t31.png" alt="Crystal Palace">
        <img v-if="clubName == 'Everton'" src="https://resources.premierleague.com/premierleague/badges/70/t11.png" alt="Everton">
        <img v-if="clubName == 'Leeds United'" src="https://resources.premierleague.com/premierleague/badges/70/t2.png" alt="Leeds United">
        <img v-if="clubName == 'Leicester City'" src="https://resources.premierleague.com/premierleague/badges/70/t13.png" alt="Leicester City">
        <img v-if="clubName == 'Liverpool'" src="https://resources.premierleague.com/premierleague/badges/70/t14.png" alt="Liverpool">
        <img v-if="clubName == 'Manchester City'" src="https://resources.premierleague.com/premierleague/badges/70/t43.png" alt="">
        <img v-if="clubName == 'Manchester United'" src="https://resources.premierleague.com/premierleague/badges/70/t1.png" alt="Manchester United">
        <img v-if="clubName == 'Newcastle United'" src="https://resources.premierleague.com/premierleague/badges/70/t4.png" alt="Newcastle United">
        <img v-if="clubName == 'Norwich City'" src="https://resources.premierleague.com/premierleague/badges/70/t45.png" alt="Norwich City">
        <img v-if="clubName == 'Southampton'" src="https://resources.premierleague.com/premierleague/badges/70/t20.png" alt="Southampton">
        <img v-if="clubName == 'Tottenham Hotspur'" src="https://resources.premierleague.com/premierleague/badges/70/t6.png" alt="Tottenham Hotspur">
        <img v-if="clubName == 'Watford'" src="https://resources.premierleague.com/premierleague/badges/70/t57.png" alt="Watford">
        <img v-if="clubName == 'West Ham United'" src="https://resources.premierleague.com/premierleague/badges/70/t21.png" alt="West Ham United">
        <img v-if="clubName == 'Wolverhampton Wanderers'" src="https://resources.premierleague.com/premierleague/badges/70/t39.png" alt="Wolverhampton Wanderers">
        <img v-if="clubName == 'Bayern Munich'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000G.svg" alt="Bayern Munich">
        <img v-if="clubName == 'RB Leipzig'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000017.svg" alt="RB Leipzig">
        <img v-if="clubName == 'Dortmund'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000007.svg" alt="Dortmund">
        <img v-if="clubName == 'Wolfsburg'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000003.svg" alt="Wolfsburg">
        <img v-if="clubName == 'Eintracht Frankfurt'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000F.svg" alt="Eintracht Frankfurt">
        <img v-if="clubName == 'Bayer Leverkusen'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000B.svg" alt="Bayer Leverkusen">
        <img v-if="clubName == 'Union Berlin'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000V.svg" alt="Union Berlin">
        <img v-if="clubName == 'Mönchengladbach'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000004.svg" alt="Mönchengladbach">
        <img v-if="clubName == 'Stuttgart'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000D.svg" alt="Stuttgart">
        <img v-if="clubName == 'Freiburg'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000A.svg" alt="Freiburg">
        <img v-if="clubName == 'Hoffenheim'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000002.svg" alt="Hoffenheim">
        <img v-if="clubName == 'Mainz 05'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000006.svg" alt="Mainz 05">
        <img v-if="clubName == 'Augsburg'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000010.svg" alt="Augsburg">
        <img v-if="clubName == 'Hertha BSC'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000Z.svg" alt="Hertha BSC">
        <img v-if="clubName == 'Arminia'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000015.svg" alt="Arminia">
        <img v-if="clubName == 'Köln'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-000008.svg" alt="Köln">
        <img v-if="clubName == 'Bochum'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000S.svg" alt="Bochum">
        <img v-if="clubName == 'Greuther Fürth'" src="https://www.bundesliga.com/assets/clublogo/DFL-CLU-00000W.svg" alt="Greuther Fürth">
    </div>
</template>

<script>
export default {
    name: 'ClubBadge',
    props: ['clubName'],
}
</script>

<style scoped>

img {
    width: 100%;
}

</style>