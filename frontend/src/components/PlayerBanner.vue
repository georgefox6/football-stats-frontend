<template>
    <div class="flex-container">
        <div class="content">
            <img id="player-image" :src="player.imageUrl" alt="Player image" />
            <table id="player-table">
                <tbody>
                    <tr>
                        <td colspan="2"> <h1> {{ player.playerName }} </h1></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <img id="club-image" src="https://resources.premierleague.com/premierleague/badges/50/t14.png" alt="player club" />
                            
                        </td>
                        <td>
                            <h3 id="club-name">{{ player.playerTeam }}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <router-link
                                class="comparison-button"
                                :to="{
                                    name: 'PlayerComparison',
                                    params: { player1: this.$route.params.playerId },
                                }"
                                > &#43; Add to compare</router-link
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
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

.comparison-button {
    text-align: left;
    text-decoration: none;
    color: black;
    float: left;
    margin-top: 10px;   
}

#player-table {
    margin: 20px;
    margin-left: 40px;
    float: left;
}

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
