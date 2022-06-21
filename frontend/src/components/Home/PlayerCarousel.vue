<template>
    <div>
        <div class="heading-line-right">
            <h2>{{Name}}</h2>
        </div>
        
        
        <div class="carousel-container">
            <div @click="navigate(player.id)" class="player-profile" v-for="player in players" :key="player.id">
                <h4 class="player-name">{{player.playerName}}</h4>
                <img class="player-image" :src="player.imageUrl" alt="Player image" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PlayerCarousel',

    data() {
        return {
            players: []
        }
    },

    props: {
        Sort: {
            default: 'Value'
        },
        ClubFilter: {
            default(){
                return []
            }
        },
        PositionFilter: {
            default(){
                return []
            }
        },
        NationFilter: {
            default(){
                return []
            }
        },
        ContractEndDateFilter: {
            default(){
                return []
            }
        },
        Name: {
            default: "Some players"
        }            
    },        

    methods: {
        ...mapActions(['fetchPaginatedPlayers']),
        navigate(id) {
            this.$router.push({
                name: 'PlayerDefaultView',
                params: { playerId: id },
            })
        }
    },

    created () {
        let request = {
            Page: 1,
            PageSize: 10,
            ClubFilter: this.ClubFilter,
            PositionFilter: this.PositionFilter,
            NationFilter: this.NationFilter,
            ContractEndDateFilter: this.ContractEndDateFilter,
            MinMarketValueFilter: 0,
            MaxMarketValueFilter: 200,
            MinWageFilter: 0,
            MaxWageFilter: 500,
            SearchTerm: null,
            Sort: this.Sort,
            SortDesc: true,
        }
        this.fetchPaginatedPlayers(request).then( () => {
            this.players = this.allPaginatedPlayers.items
        })
    },
    computed: {
        ...mapGetters(['allPaginatedPlayers']),
    }
}
</script>

<style scoped>
.carousel-container{
    display: flex;
    width: 100%;
    overflow: scroll;
    /* overflow: hidden; */
}

.player-profile {
    margin: 10px;
    flex: 1;
    cursor: pointer;
}

.player-name {
    height: 38px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.carousel-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.carousel-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
    margin: 0;
    margin-top: 30px;
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
</style>