<template>
    <div v-if="player" class="player-comparison-column">
        <img id="player-image" v-if="player" :src="player.imageUrl" alt="Player image" />
        <h2 v-if="player">{{ player.playerName }}</h2>
        <h4 v-if="player">{{ player.playerTeam }}</h4>
        <!-- Player Graph -->
        <button type="button" @click="toggleActiveClass('General')" :class="{activeGeneral: isActiveGeneral}" class="collapsible">General</button>
        <div class="content" :class="{activeContent: isActiveGeneral}">
            <StrikerGraph class="position-graph" v-bind:mini="true" v-bind:player="player" v-if="this.player.playerPosition == 'Centre-Forward' || this.player.playerPosition == 'Second Striker'"></StrikerGraph>
            <MidfieldGraph class="position-graph" v-bind:mini="true" v-bind:player="player" v-if="this.player.playerPosition == 'Central Midfield' || this.player.playerPosition == 'Defensive Midfield'"></MidfieldGraph>
            <FullBackGraph class="position-graph" v-bind:mini="true" v-bind:player="player" v-if="this.player.playerPosition == 'Left-Back' || this.player.playerPosition == 'Right-Back'"></FullBackGraph>
            <CentreBackGraph class="position-graph" v-bind:mini="true" v-bind:player="player" v-if="this.player.playerPosition == 'Centre-Back'"></CentreBackGraph>
            <WingerGraph class="position-graph" v-bind:mini="true" v-bind:player="player" v-if="this.player.playerPosition == 'Left Winger' || this.player.playerPosition == 'Right Winger' || this.player.playerPosition == 'Left Midfield' || this.player.playerPosition == 'Right Midfield'"></WingerGraph>
            <AttackingMidfieldGraph class="position-graph" v-bind:mini="true" v-bind:player="player" v-if="this.player.playerPosition == 'Attacking Midfield'"></AttackingMidfieldGraph>
            <GeneralStats id="general-stats" v-bind:player="player"></GeneralStats>
        </div>
        <button type="button" @click="toggleActiveClass('Attacking')" :class="{activeAttacking: isActiveAttacking}" class="collapsible">Attacking</button>
        <div class="content" :class="{activeContent: isActiveAttacking}">
            <p>Lorem ipsum...</p>
        </div>
        <button type="button" @click="toggleActiveClass('Possession')" :class="{activePossession: isActivePossession}" class="collapsible">Possession</button>
        <div class="content" :class="{activeContent: isActivePossession}">
            <p>Lorem ipsum...</p>
        </div>
        <button type="button" @click="toggleActiveClass('Defending')" :class="{activeDefending: isActiveDefending}" class="collapsible">Defending</button>
        <div class="content" :class="{activeContent: isActiveDefending}">
            <p>Lorem ipsum...</p>
        </div>
    </div>
</template>

<script>
import StrikerGraph from '@/components/position-graphs/StrikerGraph.vue'
import MidfieldGraph from '@/components/position-graphs/MidfieldGraph.vue'
import FullBackGraph from '@/components/position-graphs/FullBackGraph.vue'
import CentreBackGraph from '@/components/position-graphs/CentreBackGraph.vue'
import WingerGraph from '@/components/position-graphs/WingerGraph.vue'
import AttackingMidfieldGraph from '@/components/position-graphs/AttackingMidfieldGraph.vue'

import GeneralStats from '@/components/player-stat-tables/default/GeneralStats.vue'

export default {
    name: 'PlayerComparisonColumn',
    props: ['player'],
    data() {
        return {
            isActiveGeneral: true,
            isActiveAttacking: false,
            isActivePossession: false,
            isActiveDefending: false,
        }
    },
    components: {
        StrikerGraph,
        MidfieldGraph,
        FullBackGraph,
        CentreBackGraph,
        WingerGraph,
        AttackingMidfieldGraph,
        GeneralStats,
    },
    methods: {
        toggleActiveClass(tab){
            if(tab == 'General'){
                this.isActiveGeneral = !this.isActiveGeneral
            }

            if(tab == 'Attacking'){
                this.isActiveAttacking = !this.isActiveAttacking
            }

            if(tab == 'Possession'){
                this.isActivePossession = !this.isActivePossession
            }

            if(tab == 'Defending'){
                this.isActiveDefending = !this.isActiveDefending
            }
        }
    },
    created() {
    },
    mounted() {},
}
</script>

<style scoped>
.position-graph {
    width: 600px;
}

/* Style the button that is used to open and close the collapsible content */
.collapsible {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .activeGeneral, .activeAttacking, .activePossession, .activeDefending, .collapsible:hover {
    background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
    padding: 0 18px;
    overflow: hidden;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.activeContent {
    overflow: auto;
    max-height: 1000px;
    transition: max-height 0.3s ease-in-out;
}

.collapsible:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: white;
  float: right;
  margin-left: 5px;
}

.active:after, .activeGeneral:after, .activeAttacking:after, .activePossession:after, .activeDefending:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}

.player-comparison-column {
    background-color: white;
}

.position-graph {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

#general-stats {
    width: 94%;
    /* width: 40%; */
}

</style>
