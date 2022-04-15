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