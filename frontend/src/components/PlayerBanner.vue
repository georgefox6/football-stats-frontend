<template>
    <div class="container">
        <div class="content">
            <img id="player-image" :src="player.imageUrl" alt="Player image" />
            <table id="player-table">
                <tbody>
                    <tr>
                        <td colspan="2"> <h1 id="player-name"> {{ player.playerName }} </h1></td>
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

#player-image {
    float: left;
    width: 20%;
}

.comparison-button {
    text-align: left;
    text-decoration: none;
    color: black;
    float: left;
    margin-top: 10px;   
}

#player-table {
    margin: 20px;
    margin-left: 60px;
    float: left;
}

#player-name {
    margin: 0;
    margin-top: 30px;
    font-size: 2.5em;
}

#club-name {
    font-size: 1.5em;
    text-align: left;
}

#club-image {
    width: 40px;
}

.content {
    background-color: var(--primary);
    color: white;
    margin: 30px;
    width: 100%;
    padding: 20px;
}

.container {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (min-width: 720px){
    .container {
        display: flex;
        flex-wrap: wrap;
        max-width: 75rem;
        margin: auto;
    }    
}

@media screen and (max-width: 1000px){
    #player-table {
        margin: 10px;
        margin-left: 20px;
    }

    #player-name {
        margin-top: 0;
    }
    
    .comparison-button {
        margin: 0;
    }
}

@media screen and (max-width: 800px){
    #player-table {
        margin: 0;
        margin-left: 10px;
    }

    #player-name {
        font-size: 2em;
    }
    
    #club-name {
        font-size: 1.3em;
    }
}

@media screen and (max-width: 650px){
    #player-name {
        font-size: 1.5em;
    }
    
    #club-name {
        font-size: 1em;
    }

    #club-image {
        width: 30px;
    }

    .comparison-button {
        font-size: 0.8em;
    }
}

@media screen and (max-width: 515px){
    #player-image {
        width: 50%;
        margin: auto;
        margin-bottom: 10px;
        float: none;
    }

    #player-table {
        float: none;
        margin: auto;
    }
}

</style>
