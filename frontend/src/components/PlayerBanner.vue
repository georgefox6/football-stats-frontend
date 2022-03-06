<template>
    <div class="player-banner">
        <img
            id="player-image"
            :src="player.imageUrl"
            alt="Player image"
        />
        <h1 id="player-name">{{ player.playerName }}</h1>
        <div id="club">
            <img
                id="club-image"
                src="https://resources.premierleague.com/premierleague/badges/50/t14.png"
                alt="club"
            />
            <h3 id="club-name">{{ player.playerTeam }}</h3>
            <div class="clear-float"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerBanner',
    data() {
        return {}
    },
    props: ['player'],
    methods: {},
    created() {},
}
</script>

<style scoped>
.player-banner {
    background-color: var(--primary);
    color: white;
    padding: 30px;
    padding-bottom: 60px;
}

#player-image {
    width: 110px;
    float: left;
    margin-bottom: 30px;
}

#player-name {
    margin-left: 180px;
    text-align: left;
}

#club {
    width: 450px;
    margin-left: 180px;
    height: 30px;
    line-height: 40px;
}

#club-image {
    margin: 0;
    width: 30px;
    float: left;
}

#club-name {
    margin: 0;
    margin-left: 20px;

    float: left;
    display: inline;
}

.clear-float {
    clear: both;
}
</style>
