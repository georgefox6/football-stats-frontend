<template>
    <div class="flex-container">
        <div class="content">
            <img id="player-image" :src="player.imageUrl" alt="Player image" />
            <h1 id="player-name">{{ player.playerName }}</h1>
            <br>
            <div id="club">
                <img id="club-image" src="https://resources.premierleague.com/premierleague/badges/50/t14.png" alt="player club" />
                <h3 id="club-name">{{ player.playerTeam }}</h3>
            </div>
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

.content > h1 {
    margin: 0;
    margin-top: 10px;
}

@media screen and (min-width: 550px){
    .content > h1 {
        margin-left: 50px;
        float: left;
    }  

    .content > img {
        float: left;
        width: 20%;
    }

    .content > div {
        margin-left: 50px;
        float: left;
    }
}

@media screen and (min-width: 650px){
    .content > h1 {
        margin-right: 8%;
    }    
}

@media screen and (min-width: 920px){
    .content > h1 {
        /* margin-left: 100px; */
        margin-top: 50px;
        margin-right: 33%;
    }    
}

.content > div > img {
    display: inline-block;
    width: 2rem;
}

.content > div > h3 {
    display: inline-block;
}


.content {
    background-color: var(--primary);
    color: white;
    margin: 30px;
    width: 100%;
    padding: 20px;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (min-width: 720px){
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 75rem;
        margin: auto;
    }    
}
</style>
