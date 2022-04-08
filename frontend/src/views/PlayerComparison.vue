<template>
    <div>
        <div class="wrapper">
            <div class="comparison">
                
                <h1 v-if="player1 && player2">Comparison between <span class="player-link" @click="playerLink(player1.id)">{{player1.playerName}}</span> and <span class="player-link" @click="playerLink(player2.id)">{{player2.playerName}}</span></h1>
                
                <PlayerGraph class="player-graph" v-if="player1 && player2" :player1="player1" :player2="player2" :per90="per90" :key="key"></PlayerGraph>

                <div v-if="player1 && player2" class="option">
                    <label class="switch">
                        <input @click="updatePer90()" v-model="per90" type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <p>Stats per 90</p>
                </div>

                <table v-if="per90 && player1 && player2" class="stat-table-per90">
                    <thead>
                        <tr>
                            <th class="side-header" id="expand-all" @click="expandAll()">Expand all +</th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName1" :options="playerNames"/></th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName2" :options="playerNames"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><img class="player-link" @click="playerLink(player1.id)" :src="player1.imageUrl" alt="Player image" /></td>
                            <td><img class="player-link" @click="playerLink(player2.id)" :src="player2.imageUrl" alt="Player image" /></td>
                        </tr>
                        <tr>
                            <th v-if="generalCollapse" class="table-header" @click="collapseGeneral()" colspan="3">
                                General Information &#x25BC;
                            </th>
                            <th v-if="!generalCollapse" class="table-header" @click="collapseGeneral()" colspan="3">
                                General Information &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Position</th>
                            <td>{{player1.playerPosition}}</td>
                            <td>{{player2.playerPosition}}</td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Age</th>
                            <td>{{player1.playerAge}}</td>
                            <td>{{player2.playerAge}}</td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Team</th>
                            <td>{{player1.playerTeam}}</td>
                            <td>{{player2.playerTeam}}</td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Nationality</th>
                            <td>
                                {{ player1.playerNation.split(' ')[1] }}
                                <country-flag :country="player1.playerNation.split(' ')[0]" size="normal"/>
                            </td>
                            <td>
                                {{ player2.playerNation.split(' ')[1] }}
                                <country-flag :country="player2.playerNation.split(' ')[0]" size="normal"/>
                            </td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Height</th>
                            <td>{{player1.height}}cm</td>
                            <td>{{player2.height}}cm</td>
                        </tr>
                        

                        <tr>
                            <th v-if="playingTimeCollapse" class="table-header" @click="collapsePlayingTime()" colspan="3">
                                Playing Time &#x25BC;
                            </th>
                            <th v-if="!playingTimeCollapse" class="table-header" @click="collapsePlayingTime()" colspan="3">
                                Playing Time &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Games Played</th>
                            <td :class="player1.matchesPlayed > player2.matchesPlayed ? 'best' : 'worst'">{{player1.matchesPlayed}}</td>
                            <td :class="player1.matchesPlayed < player2.matchesPlayed ? 'best' : 'worst'">{{player2.matchesPlayed}}</td>
                        </tr>
                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Games Started</th>
                            <td :class="player1.matchesStarted > player2.matchesStarted ? 'best' : 'worst'">{{player1.matchesStarted}}</td>
                            <td :class="player1.matchesStarted < player2.matchesStarted ? 'best' : 'worst'">{{player2.matchesStarted}}</td>
                        </tr>
                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Minutes Played</th>
                            <td :class="player1.minutesPlayed > player2.minutesPlayed ? 'best' : 'worst'">{{player1.minutesPlayed}}</td>
                            <td :class="player1.minutesPlayed < player2.minutesPlayed ? 'best' : 'worst'">{{player2.minutesPlayed}}</td>
                        </tr>

                        <tr>
                            <th v-if="transferCollapse" class="table-header" @click="collapseTransfer()" colspan="3">
                                Transfer &#x25BC;
                            </th>
                            <th v-if="!transferCollapse" class="table-header" @click="collapseTransfer()" colspan="3">
                                Transfer &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Transfer Value</th>
                            <td :class="player1.marketValue > player2.marketValue ? 'best' : 'worst'">£{{player1.marketValue.toLocaleString('en-GB')}}</td>
                            <td :class="player1.marketValue < player2.marketValue ? 'best' : 'worst'">£{{player2.marketValue.toLocaleString('en-GB')}}</td>
                        </tr>
                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Wage</th>
                            <td :class="player1.wage > player2.wage ? 'best' : 'worst'">£{{player1.wage.toLocaleString('en-GB')}}</td>
                            <td :class="player1.wage < player2.wage ? 'best' : 'worst'">£{{player2.wage.toLocaleString('en-GB')}}</td>
                        </tr>
                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Contract End</th>
                            <td>{{player1.contractEndDate}}</td>
                            <td>{{player2.contractEndDate}}</td>
                        </tr>


                        <tr>
                            <th v-if="shootingCollapse" class="table-header" @click="collapseShooting()" colspan="3">
                                Shooting &#x25BC;
                            </th>
                            <th v-if="!shootingCollapse" class="table-header" @click="collapseShooting()" colspan="3">
                                Shooting &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Goals Per 90</th>
                            <td :class="(player1.goals/player1.minutesPlayed) > (player2.goals/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.goals, player1.minutesPlayed)}}</td>
                            <td :class="(player1.goals/player1.minutesPlayed) < (player2.goals/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.goals, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Expected Goals Per 90</th>
                            <td :class="(player1.expectedGoals/player1.minutesPlayed) > (player2.expectedGoals/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.expectedGoals,player1.minutesPlayed)}}</td>
                            <td :class="(player1.expectedGoals/player1.minutesPlayed) < (player2.expectedGoals/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.expectedGoals,player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Shots Per 90</th>
                            <td :class="(player1.shots/player1.minutesPlayed) > (player2.shots/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.shots, player1.minutesPlayed)}}</td>
                            <td :class="(player1.shots/player1.minutesPlayed) < (player2.shots/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.shots, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Shots On Target</th>
                            <td :class="(player1.shotsOnTarget/player1.minutesPlayed) > (player2.shotsOnTarget/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.shotsOnTarget, player1.minutesPlayed)}}</td>
                            <td :class="(player1.shotsOnTarget/player1.minutesPlayed) < (player2.shotsOnTarget/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.shotsOnTarget, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Average Shot Distance</th>
                            <td :class="player1.shotDistance > player2.shotDistance ? 'best' : 'worst'">{{player1.shotDistance}}m</td>
                            <td :class="player1.shotDistance < player2.shotDistance ? 'best' : 'worst'">{{player2.shotDistance}}m</td>
                        </tr>


                        <tr>
                            <th v-if="passingCollapse" class="table-header" @click="collapsePassing()" colspan="3">
                                Passing &#x25BC;
                            </th>
                            <th v-if="!passingCollapse" class="table-header" @click="collapsePassing()" colspan="3">
                                Passing &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Passes Per 90</th>
                            <td :class="(player1.totalPassesCompleted/player1.minutesPlayed) > (player2.totalPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.totalPassesCompleted, player1.minutesPlayed)}}</td>
                            <td :class="(player1.totalPassesCompleted/player1.minutesPlayed) < (player2.totalPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.totalPassesCompleted, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Assists Per 90</th>
                            <td :class="(player1.assists/player1.minutesPlayed) > (player2.assists/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.assists,player1.minutesPlayed)}}</td>
                            <td :class="(player1.assists/player1.minutesPlayed) < (player2.assists/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.assists,player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Expected Assists Per 90</th>
                            <td :class="(player1.expectedAssists/player1.minutesPlayed) > (player2.expectedAssists/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.expectedAssists, player1.minutesPlayed)}}</td>
                            <td :class="(player1.expectedAssists/player1.minutesPlayed) < (player2.expectedAssists/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.expectedAssists, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Progressive Passing Distance Per 90</th>
                            <td :class="(player1.progressivePassingDistance/player1.minutesPlayed) > (player2.progressivePassingDistance/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.progressivePassingDistance, player1.minutesPlayed)}}</td>
                            <td :class="(player1.progressivePassingDistance/player1.minutesPlayed) < (player2.progressivePassingDistance/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.progressivePassingDistance, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Crosses Per 90</th>
                            <td :class="(player1.crosses/player1.minutesPlayed) > (player2.crosses/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.crosses, player1.minutesPlayed)}}</td>
                            <td :class="(player1.crosses/player1.minutesPlayed) < (player2.crosses/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.crosses, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Short Passes Per 90</th>
                            <td :class="(player1.shortPassesCompleted/player1.minutesPlayed) > (player2.shortPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.shortPassesCompleted, player1.minutesPlayed)}}</td>
                            <td :class="(player1.shortPassesCompleted/player1.minutesPlayed) < (player2.shortPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.shortPassesCompleted, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Medium Passes Per 90</th>
                            <td :class="(player1.mediumPassesCompleted/player1.minutesPlayed) > (player2.mediumPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.mediumPassesCompleted, player1.minutesPlayed)}}</td>
                            <td :class="(player1.mediumPassesCompleted/player1.minutesPlayed) < (player2.mediumPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.mediumPassesCompleted, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Long Passes Per 90</th>
                            <td :class="(player1.longPassesCompleted/player1.minutesPlayed) > (player2.longPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.longPassesCompleted, player1.minutesPlayed)}}</td>
                            <td :class="(player1.longPassesCompleted/player1.minutesPlayed) < (player2.longPassesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.longPassesCompleted, player2.minutesPlayed)}}</td>
                        </tr>


                        <tr>
                            <th v-if="dribblingCollapse" class="table-header" @click="collapseDribbling()" colspan="3">
                                Dribbling &#x25BC;
                            </th>
                            <th v-if="!dribblingCollapse" class="table-header" @click="collapseDribbling()" colspan="3">
                                Dribbling &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Dribbles Per 90</th>
                            <td :class="(player1.dribblesCompleted/player1.minutesPlayed) > (player2.dribblesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.dribblesCompleted, player1.minutesPlayed)}}</td>
                            <td :class="(player1.dribblesCompleted/player1.minutesPlayed) < (player2.dribblesCompleted/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.dribblesCompleted, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Progressive Dribble Distance Per 90</th>
                            <td :class="(player1.dribblesProgressiveDistance/player1.minutesPlayed) > (player2.dribblesProgressiveDistance/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.dribblesProgressiveDistance, player1.minutesPlayed)}}</td>
                            <td :class="(player1.dribblesProgressiveDistance/player1.minutesPlayed) < (player2.dribblesProgressiveDistance/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.dribblesProgressiveDistance, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Progressive Dribbles Per 90</th>
                            <td :class="(player1.progressiveDribbles/player1.minutesPlayed) > (player2.progressiveDribbles/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.progressiveDribbles, player1.minutesPlayed)}}</td>
                            <td :class="(player1.progressiveDribbles/player1.minutesPlayed) < (player2.progressiveDribbles/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.progressiveDribbles, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Passes Controlled Per 90</th>
                            <td :class="(player1.passesControlled/player1.minutesPlayed) > (player2.passesControlled/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.passesControlled, player1.minutesPlayed)}}</td>
                            <td :class="(player1.passesControlled/player1.minutesPlayed) < (player2.passesControlled/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.passesControlled, player2.minutesPlayed)}}</td>
                        </tr>
                        
                        
                        <tr>
                            <th v-if="defendingCollapse" class="table-header" @click="collapseDefending()" colspan="3">
                                Defending &#x25BC;
                            </th>
                            <th v-if="!defendingCollapse" class="table-header" @click="collapseDefending()" colspan="3">
                                Defending &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Tackles Per 90</th>
                            <td :class="(player1.tacklesWon/player1.minutesPlayed) > (player2.tacklesWon/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.tacklesWon, player1.minutesPlayed)}}</td>
                            <td :class="(player1.tacklesWon/player1.minutesPlayed) < (player2.tacklesWon/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.tacklesWon, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Fouls Per 90</th>
                            <td :class="(player1.fouls/player1.minutesPlayed) < (player2.fouls/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.fouls, player1.minutesPlayed)}}</td>
                            <td :class="(player1.fouls/player1.minutesPlayed) > (player2.fouls/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.fouls, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Blocks Per 90</th>
                            <td :class="(player1.blocks/player1.minutesPlayed) > (player2.blocks/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.blocks, player1.minutesPlayed)}}</td>
                            <td :class="(player1.blocks/player1.minutesPlayed) < (player2.blocks/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.blocks, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Interceptions Per 90</th>
                            <td :class="(player1.interceptions/player1.minutesPlayed) > (player2.interceptions/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.interceptions, player1.minutesPlayed)}}</td>
                            <td :class="(player1.interceptions/player1.minutesPlayed) < (player2.interceptions/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.interceptions, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Defensive Third Per 90</th>
                            <td :class="(player1.pressuresDefensiveThird/player1.minutesPlayed) > (player2.pressuresDefensiveThird/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.pressuresDefensiveThird, player1.minutesPlayed)}}</td>
                            <td :class="(player1.pressuresDefensiveThird/player1.minutesPlayed) < (player2.pressuresDefensiveThird/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.pressuresDefensiveThird, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Middle Third Per 90</th>
                            <td :class="(player1.pressuresMiddleThird/player1.minutesPlayed) > (player2.pressuresMiddleThird/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.pressuresMiddleThird, player1.minutesPlayed)}}</td>
                            <td :class="(player1.pressuresMiddleThird/player1.minutesPlayed) < (player2.pressuresMiddleThird/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.pressuresMiddleThird, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Attacking Third Per 90</th>
                            <td :class="(player1.pressuresAttackingThird/player1.minutesPlayed) > (player2.pressuresAttackingThird/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.pressuresAttackingThird, player1.minutesPlayed)}}</td>
                            <td :class="(player1.pressuresAttackingThird/player1.minutesPlayed) < (player2.pressuresAttackingThird/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.pressuresAttackingThird, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Headers Won Per 90</th>
                            <td :class="(player1.headersWon/player1.minutesPlayed) > (player2.headersWon/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.headersWon, player1.minutesPlayed)}}</td>
                            <td :class="(player1.headersWon/player1.minutesPlayed) < (player2.headersWon/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.headersWon, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Yellow Cards Per 90</th>
                            <td :class="(player1.yellowCards/player1.minutesPlayed) < (player2.yellowCards/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.yellowCards, player1.minutesPlayed)}}</td>
                            <td :class="(player1.yellowCards/player1.minutesPlayed) > (player2.yellowCards/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.yellowCards, player2.minutesPlayed)}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Red Cards Per 90</th>
                            <td :class="(player1.redCards/player1.minutesPlayed) < (player2.redCards/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player1.redCards, player1.minutesPlayed)}}</td>
                            <td :class="(player1.redCards/player1.minutesPlayed) > (player2.redCards/player2.minutesPlayed) ? 'best' : 'worst'">{{per90Calculator(player2.redCards, player2.minutesPlayed)}}</td>
                        </tr>
                    </tbody>
                </table>

                <table v-if="!per90 && player1 && player2" class="stat-table">
                    <thead>
                        <tr>
                            <th class="side-header" id="expand-all" @click="expandAll()">Expand all +</th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName1" :options="playerNames"/></th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName2" :options="playerNames"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><img class="player-link" @click="playerLink(player1.id)" :src="player1.imageUrl" alt="Player image" /></td>
                            <td><img class="player-link" @click="playerLink(player2.id)" :src="player2.imageUrl" alt="Player image" /></td>
                        </tr>
                        <tr>
                            <th v-if="generalCollapse" class="table-header" @click="collapseGeneral()" colspan="3">
                                General Information &#x25BC;
                            </th>
                            <th v-if="!generalCollapse" class="table-header" @click="collapseGeneral()" colspan="3">
                                General Information &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Position</th>
                            <td>{{player1.playerPosition}}</td>
                            <td>{{player2.playerPosition}}</td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Age</th>
                            <td>{{player1.playerAge}}</td>
                            <td>{{player2.playerAge}}</td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Team</th>
                            <td>{{player1.playerTeam}}</td>
                            <td>{{player2.playerTeam}}</td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Nationality</th>
                            <td>
                                {{ player1.playerNation.split(' ')[1] }}
                                <country-flag :country="player1.playerNation.split(' ')[0]" size="normal"/>
                            </td>
                            <td>
                                {{ player2.playerNation.split(' ')[1] }}
                                <country-flag :country="player2.playerNation.split(' ')[0]" size="normal"/>
                            </td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Height</th>
                            <td>{{player1.height}}cm</td>
                            <td>{{player2.height}}cm</td>
                        </tr>
                        

                        <tr>
                            <th v-if="playingTimeCollapse" class="table-header" @click="collapsePlayingTime()" colspan="3">
                                Playing Time &#x25BC;
                            </th>
                            <th v-if="!playingTimeCollapse" class="table-header" @click="collapsePlayingTime()" colspan="3">
                                Playing Time &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Games Played</th>
                            <td :class="player1.matchesPlayed > player2.matchesPlayed ? 'best' : 'worst'">{{player1.matchesPlayed}}</td>
                            <td :class="player1.matchesPlayed < player2.matchesPlayed ? 'best' : 'worst'">{{player2.matchesPlayed}}</td>
                        </tr>
                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Games Started</th>
                            <td :class="player1.matchesStarted > player2.matchesStarted ? 'best' : 'worst'">{{player1.matchesStarted}}</td>
                            <td :class="player1.matchesStarted < player2.matchesStarted ? 'best' : 'worst'">{{player2.matchesStarted}}</td>
                        </tr>
                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Minutes Played</th>
                            <td :class="player1.minutesPlayed > player2.minutesPlayed ? 'best' : 'worst'">{{player1.minutesPlayed}}</td>
                            <td :class="player1.minutesPlayed < player2.minutesPlayed ? 'best' : 'worst'">{{player2.minutesPlayed}}</td>
                        </tr>

                        <tr>
                            <th v-if="transferCollapse" class="table-header" @click="collapseTransfer()" colspan="3">
                                Transfer &#x25BC;
                            </th>
                            <th v-if="!transferCollapse" class="table-header" @click="collapseTransfer()" colspan="3">
                                Transfer &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Transfer Value</th>
                            <td :class="player1.marketValue > player2.marketValue ? 'best' : 'worst'">£{{player1.marketValue.toLocaleString('en-GB')}}</td>
                            <td :class="player1.marketValue < player2.marketValue ? 'best' : 'worst'">£{{player2.marketValue.toLocaleString('en-GB')}}</td>
                        </tr>
                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Wage</th>
                            <td :class="player1.wage > player2.wage ? 'best' : 'worst'">£{{player1.wage.toLocaleString('en-GB')}}</td>
                            <td :class="player1.wage < player2.wage ? 'best' : 'worst'">£{{player2.wage.toLocaleString('en-GB')}}</td>
                        </tr>
                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Contract End</th>
                            <td>{{player1.contractEndDate}}</td>
                            <td>{{player2.contractEndDate}}</td>
                        </tr>


                        <tr>
                            <th v-if="shootingCollapse" class="table-header" @click="collapseShooting()" colspan="3">
                                Shooting &#x25BC;
                            </th>
                            <th v-if="!shootingCollapse" class="table-header" @click="collapseShooting()" colspan="3">
                                Shooting &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Goals</th>
                            <td :class="player1.goals > player2.goals ? 'best' : 'worst'">{{player1.goals}}</td>
                            <td :class="player1.goals < player2.goals ? 'best' : 'worst'">{{player2.goals}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Expected Goals</th>
                            <td :class="player1.expectedGoals > player2.expectedGoals ? 'best' : 'worst'">{{player1.expectedGoals}}</td>
                            <td :class="player1.expectedGoals < player2.expectedGoals ? 'best' : 'worst'">{{player2.expectedGoals}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Shots</th>
                            <td :class="player1.shots > player2.shots ? 'best' : 'worst'">{{player1.shots}}</td>
                            <td :class="player1.shots < player2.shots ? 'best' : 'worst'">{{player2.shots}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Shots On Target</th>
                            <td :class="player1.shotsOnTarget > player2.shotsOnTarget ? 'best' : 'worst'">{{player1.shotsOnTarget}}</td>
                            <td :class="player1.shotsOnTarget < player2.shotsOnTarget ? 'best' : 'worst'">{{player2.shotsOnTarget}}</td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Average Shot Distance</th>
                            <td :class="player1.shotDistance > player2.shotDistance ? 'best' : 'worst'">{{player1.shotDistance}}m</td>
                            <td :class="player1.shotDistance < player2.shotDistance ? 'best' : 'worst'">{{player2.shotDistance}}m</td>
                        </tr>


                        <tr>
                            <th v-if="passingCollapse" class="table-header" @click="collapsePassing()" colspan="3">
                                Passing &#x25BC;
                            </th>
                            <th v-if="!passingCollapse" class="table-header" @click="collapsePassing()" colspan="3">
                                Passing &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Passes</th>
                            <td :class="player1.totalPassesCompleted > player2.totalPassesCompleted ? 'best' : 'worst'">{{player1.totalPassesCompleted}}</td>
                            <td :class="player1.totalPassesCompleted < player2.totalPassesCompleted ? 'best' : 'worst'">{{player2.totalPassesCompleted}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Assists</th>
                            <td :class="player1.assists > player2.assists ? 'best' : 'worst'">{{player1.assists}}</td>
                            <td :class="player1.assists < player2.assists ? 'best' : 'worst'">{{player2.assists}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Expected Assists</th>
                            <td :class="player1.expectedAssists > player2.expectedAssists ? 'best' : 'worst'">{{player1.expectedAssists}}</td>
                            <td :class="player1.expectedAssists < player2.expectedAssists ? 'best' : 'worst'">{{player2.expectedAssists}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Progressive Passing Distance</th>
                            <td :class="player1.progressivePassingDistance > player2.progressivePassingDistance ? 'best' : 'worst'">{{player1.progressivePassingDistance}}</td>
                            <td :class="player1.progressivePassingDistance < player2.progressivePassingDistance ? 'best' : 'worst'">{{player2.progressivePassingDistance}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Crosses</th>
                            <td :class="player1.crosses > player2.crosses ? 'best' : 'worst'">{{player1.crosses}}</td>
                            <td :class="player1.crosses < player2.crosses ? 'best' : 'worst'">{{player2.crosses}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Short Passes</th>
                            <td :class="player1.shortPassesCompleted > player2.shortPassesCompleted ? 'best' : 'worst'">{{player1.shortPassesCompleted}}</td>
                            <td :class="player1.shortPassesCompleted < player2.shortPassesCompleted ? 'best' : 'worst'">{{player2.shortPassesCompleted}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Medium Passes</th>
                            <td :class="player1.mediumPassesCompleted > player2.mediumPassesCompleted ? 'best' : 'worst'">{{player1.mediumPassesCompleted}}</td>
                            <td :class="player1.mediumPassesCompleted < player2.mediumPassesCompleted ? 'best' : 'worst'">{{player2.mediumPassesCompleted}}</td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Long Passes</th>
                            <td :class="player1.longPassesCompleted > player2.longPassesCompleted ? 'best' : 'worst'">{{player1.longPassesCompleted}}</td>
                            <td :class="player1.longPassesCompleted < player2.longPassesCompleted ? 'best' : 'worst'">{{player2.longPassesCompleted}}</td>
                        </tr>


                        <tr>
                            <th v-if="dribblingCollapse" class="table-header" @click="collapseDribbling()" colspan="3">
                                Dribbling &#x25BC;
                            </th>
                            <th v-if="!dribblingCollapse" class="table-header" @click="collapseDribbling()" colspan="3">
                                Dribbling &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Dribbles</th>
                            <td :class="player1.dribblesCompleted > player2.dribblesCompleted ? 'best' : 'worst'">{{player1.dribblesCompleted}}</td>
                            <td :class="player1.dribblesCompleted < player2.dribblesCompleted ? 'best' : 'worst'">{{player2.dribblesCompleted}}</td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Progressive Dribble Distance</th>
                            <td :class="player1.dribblesProgressiveDistance > player2.dribblesProgressiveDistance ? 'best' : 'worst'">{{player1.dribblesProgressiveDistance}}</td>
                            <td :class="player1.dribblesProgressiveDistance < player2.dribblesProgressiveDistance ? 'best' : 'worst'">{{player2.dribblesProgressiveDistance}}</td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Progressive Dribbles</th>
                            <td :class="player1.progressiveDribbles > player2.progressiveDribbles ? 'best' : 'worst'">{{player1.progressiveDribbles}}</td>
                            <td :class="player1.progressiveDribbles < player2.progressiveDribbles ? 'best' : 'worst'">{{player2.progressiveDribbles}}</td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Passes Controlled</th>
                            <td :class="player1.passesControlled > player2.passesControlled ? 'best' : 'worst'">{{player1.passesControlled}}</td>
                            <td :class="player1.passesControlled < player2.passesControlled ? 'best' : 'worst'">{{player2.passesControlled}}</td>
                        </tr>

                        <tr>
                            <th v-if="defendingCollapse" class="table-header" @click="collapseDefending()" colspan="3">
                                Defending &#x25BC;
                            </th>
                            <th v-if="!defendingCollapse" class="table-header" @click="collapseDefending()" colspan="3">
                                Defending &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Tackles</th>
                            <td :class="player1.tacklesWon > player2.tacklesWon ? 'best' : 'worst'">{{player1.tacklesWon}}</td>
                            <td :class="player1.tacklesWon < player2.tacklesWon ? 'best' : 'worst'">{{player2.tacklesWon}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Fouls</th>
                            <td :class="player1.fouls < player2.fouls ? 'best' : 'worst'">{{player1.fouls}}</td>
                            <td :class="player1.fouls > player2.fouls ? 'best' : 'worst'">{{player2.fouls}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Blocks</th>
                            <td :class="player1.blocks > player2.blocks ? 'best' : 'worst'">{{player1.blocks}}</td>
                            <td :class="player1.fouls < player2.blocks ? 'best' : 'worst'">{{player2.blocks}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Interceptions</th>
                            <td :class="player1.interceptions > player2.interceptions ? 'best' : 'worst'">{{player1.interceptions}}</td>
                            <td :class="player1.interceptions < player2.interceptions ? 'best' : 'worst'">{{player2.interceptions}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Defensive Third</th>
                            <td :class="player1.pressuresDefensiveThird > player2.pressuresDefensiveThird ? 'best' : 'worst'">{{player1.pressuresDefensiveThird}}</td>
                            <td :class="player1.pressuresDefensiveThird < player2.pressuresDefensiveThird ? 'best' : 'worst'">{{player2.pressuresDefensiveThird}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Middle Third</th>
                            <td :class="player1.pressuresMiddleThird > player2.pressuresMiddleThird ? 'best' : 'worst'">{{player1.pressuresMiddleThird}}</td>
                            <td :class="player1.pressuresMiddleThird < player2.pressuresMiddleThird ? 'best' : 'worst'">{{player2.pressuresMiddleThird}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Attacking Third</th>
                            <td :class="player1.pressuresAttackingThird > player2.pressuresAttackingThird ? 'best' : 'worst'">{{player1.pressuresAttackingThird}}</td>
                            <td :class="player1.pressuresAttackingThird < player2.pressuresAttackingThird ? 'best' : 'worst'">{{player2.pressuresAttackingThird}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Headers Won</th>
                            <td :class="player1.headersWon > player2.headersWon ? 'best' : 'worst'">{{player1.headersWon}}</td>
                            <td :class="player1.headersWon < player2.headersWon ? 'best' : 'worst'">{{player2.headersWon}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Yellow Cards</th>
                            <td :class="player1.yellowCards < player2.yellowCards ? 'best' : 'worst'">{{player1.yellowCards}}</td>
                            <td :class="player1.yellowCards > player2.yellowCards ? 'best' : 'worst'">{{player2.yellowCards}}</td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Red Cards</th>
                            <td :class="player1.redCards < player2.redCards ? 'best' : 'worst'">{{player1.redCards}}</td>
                            <td :class="player1.redCards > player2.redCards ? 'best' : 'worst'">{{player2.redCards}}</td>
                        </tr>
                        
                    </tbody>
                </table>
                

                <table v-if="player1 && !player2" class="stat-table">
                    <thead>
                        <tr>
                            <th class="side-header" id="expand-all" @click="expandAll()">Expand all +</th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName1" :options="playerNames"/></th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName2" :options="playerNames"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><img class="player-link" @click="playerLink(player1.id)" :src="player1.imageUrl" alt="Player image" /></td>
                            <td><img class="player-image" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <th v-if="generalCollapse" class="table-header" @click="collapseGeneral()" colspan="3">
                                General Information &#x25BC;
                            </th>
                            <th v-if="!generalCollapse" class="table-header" @click="collapseGeneral()" colspan="3">
                                General Information &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Position</th>
                            <td>{{player1.playerPosition}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Age</th>
                            <td>{{player1.playerAge}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Team</th>
                            <td>{{player1.playerTeam}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Nationality</th>
                            <td>
                                {{ player1.playerNation.split(' ')[1] }}
                                <country-flag :country="player1.playerNation.split(' ')[0]" size="normal"/>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr :class="{ collapse: generalCollapse }">
                            <th class="side-header">Height</th>
                            <td>{{player1.height}}cm</td>
                            <td></td>
                        </tr>
                        

                        <tr>
                            <th v-if="playingTimeCollapse" class="table-header" @click="collapsePlayingTime()" colspan="3">
                                Playing Time &#x25BC;
                            </th>
                            <th v-if="!playingTimeCollapse" class="table-header" @click="collapsePlayingTime()" colspan="3">
                                Playing Time &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Games Played</th>
                            <td>{{player1.matchesPlayed}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Games Started</th>
                            <td>{{player1.matchesStarted}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: playingTimeCollapse }">
                            <th class="side-header">Minutes Played</th>
                            <td>{{player1.minutesPlayed}}</td>
                            <td></td>
                        </tr>

                        <tr>
                            <th v-if="transferCollapse" class="table-header" @click="collapseTransfer()" colspan="3">
                                Transfer &#x25BC;
                            </th>
                            <th v-if="!transferCollapse" class="table-header" @click="collapseTransfer()" colspan="3">
                                Transfer &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Transfer Value</th>
                            <td>£{{player1.marketValue.toLocaleString('en-GB')}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Wage</th>
                            <td>£{{player1.wage.toLocaleString('en-GB')}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: transferCollapse }">
                            <th class="side-header">Contract End</th>
                            <td>{{player1.contractEndDate}}</td>
                            <td></td>
                        </tr>


                        <tr>
                            <th v-if="shootingCollapse" class="table-header" @click="collapseShooting()" colspan="3">
                                Shooting &#x25BC;
                            </th>
                            <th v-if="!shootingCollapse" class="table-header" @click="collapseShooting()" colspan="3">
                                Shooting &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Goals</th>
                            <td>{{player1.goals}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Expected Goals</th>
                            <td>{{player1.expectedGoals}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Shots</th>
                            <td>{{player1.shots}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Shots On Target</th>
                            <td>{{player1.shotsOnTarget}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: shootingCollapse }">
                            <th class="side-header">Average Shot Distance</th>
                            <td>{{player1.shotDistance}}m</td>
                            <td></td>
                        </tr>


                        <tr>
                            <th v-if="passingCollapse" class="table-header" @click="collapsePassing()" colspan="3">
                                Passing &#x25BC;
                            </th>
                            <th v-if="!passingCollapse" class="table-header" @click="collapsePassing()" colspan="3">
                                Passing &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Passes</th>
                            <td>{{player1.totalPassesCompleted}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Assists</th>
                            <td>{{player1.assists}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Expected Assists</th>
                            <td>{{player1.expectedAssists}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Progressive Passing Distance</th>
                            <td>{{player1.progressivePassingDistance}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Crosses</th>
                            <td>{{player1.crosses}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Short Passes</th>
                            <td>{{player1.shortPassesCompleted}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Medium Passes</th>
                            <td>{{player1.mediumPassesCompleted}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: passingCollapse }">
                            <th class="side-header">Long Passes</th>
                            <td>{{player1.longPassesCompleted}}</td>
                            <td></td>
                        </tr>


                        <tr>
                            <th v-if="dribblingCollapse" class="table-header" @click="collapseDribbling()" colspan="3">
                                Dribbling &#x25BC;
                            </th>
                            <th v-if="!dribblingCollapse" class="table-header" @click="collapseDribbling()" colspan="3">
                                Dribbling &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Dribbles</th>
                            <td>{{player1.dribblesCompleted}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Progressive Dribble Distance</th>
                            <td>{{player1.dribblesProgressiveDistance}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Progressive Dribbles</th>
                            <td>{{player1.progressiveDribbles}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: dribblingCollapse }">
                            <th class="side-header">Passes Controlled</th>
                            <td>{{player1.passesControlled}}</td>
                            <td></td>
                        </tr>

                        <tr>
                            <th v-if="defendingCollapse" class="table-header" @click="collapseDefending()" colspan="3">
                                Defending &#x25BC;
                            </th>
                            <th v-if="!defendingCollapse" class="table-header" @click="collapseDefending()" colspan="3">
                                Defending &#x25B2;
                            </th>
                        </tr>

                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Tackles</th>
                            <td>{{player1.tacklesWon}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Fouls</th>
                            <td>{{player1.fouls}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Blocks</th>
                            <td>{{player1.blocks}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Interceptions</th>
                            <td>{{player1.interceptions}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Defensive Third</th>
                            <td>{{player1.pressuresDefensiveThird}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Middle Third</th>
                            <td>{{player1.pressuresMiddleThird}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Pressures in the Attacking Third</th>
                            <td>{{player1.pressuresAttackingThird}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Headers Won</th>
                            <td>{{player1.headersWon}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Yellow Cards</th>
                            <td>{{player1.yellowCards}}</td>
                            <td></td>
                        </tr>
                        <tr :class="{ collapse: defendingCollapse }">
                            <th class="side-header">Red Cards</th>
                            <td>{{player1.redCards}}</td>
                            <td></td>
                        </tr>
                        
                    </tbody>
                </table>


                <table v-if="!player1 && !player2" class="stat-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName1" :options="playerNames"/></th>
                            <th class="top-table-header name-header"><vSelect class="player-selector" v-model="selectedPlayerName2" :options="playerNames"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><img class="player-image" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" alt=""></td>
                            <td><img class="player-image" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" alt=""></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>

    </div>
</template>

<script>
import PlayerGraph from '@/components/position-graphs/PlayerGraph.vue'
import vSelect from 'vue-select'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PlayerComparisonTest',
    components: {
        PlayerGraph,
        vSelect
    },
    data() {
        return {
            generalCollapse: false,
            playingTimeCollapse: false,
            transferCollapse: false,
            shootingCollapse: false,
            passingCollapse: false,
            dribblingCollapse: false,
            defendingCollapse: false,
            per90: false,
            key: "hello",
            selectedPlayerName1: '',
            selectedPlayerName2: '',
            firstLoad: true
        }
    },
    methods: {
        ...mapActions(['fetchPlayers']),
        playerLink(id) {
            this.$router.push({
                name: 'PlayerDefaultView',
                params: { playerId: id },
            })
        },
        collapseGeneral(){
            this.generalCollapse = !this.generalCollapse
        },
        collapsePlayingTime(){
            this.playingTimeCollapse = !this.playingTimeCollapse
        },
        collapseTransfer(){
            this.transferCollapse = !this.transferCollapse
        },
        collapseShooting(){
            this.shootingCollapse = !this.shootingCollapse
        },
        collapsePassing(){
            this.passingCollapse = !this.passingCollapse
        },
        collapseDribbling(){
            this.dribblingCollapse = !this.dribblingCollapse
        },
        collapseDefending(){
            this.defendingCollapse = !this.defendingCollapse
        },
        per90Calculator(stat, minutesPlayed){
            return Math.round(stat/minutesPlayed*9000)/100
        },
        expandAll(){
            this.generalCollapse = false
            this.playingTimeCollapse = false
            this.transferCollapse = false
            this.shootingCollapse = false
            this.passingCollapse = false
            this.dribblingCollapse = false
        },
        updatePer90(){
            this.key = this.key + "h"
        }
    },
    created() {
        this.fetchPlayers()
        if(this.player1) {
            this.selectedPlayerName1 = this.player1.playerName
        }
        if(this.player2) {
            this.selectedPlayerName2 = this.player2.playerName
        }
    },
    updated() {
        if(this.player1) {
            this.selectedPlayerName1 = this.player1.playerName
        }
        if(this.player2) {
            this.selectedPlayerName2 = this.player2.playerName
        }

        if(this.player1 && this.player2){
            this.firstLoad = false
        }

        //If player 2 has been removed then remove the player from params
        if(!this.player2 && this.$route.params.player2){
            this.key = this.key + "h"
            this.$router.push({
                name: 'PlayerComparison',
                params: {
                    player1: this.player1.id
                }
            })
        }

        //If player has been selected but no player in params - add player to params
        else if(this.player1 && !this.$route.params.player1){
            this.key = this.key + "h"
            this.$router.push({
                name: 'PlayerComparison',
                params: {
                    player1: this.player1.id
                }
            })
        }

        //If player 1 has been removed and there is still a player in the params - remove params
        if(!this.player1 && this.$route.params.player1 && !this.firstLoad) {
            this.key = this.key + "h"
            this.$router.push({
                name: 'PlayerComparison',
                params: {
                }
            })
        } 

        // else if((this.player1 && this.player1.id != this.$route.params.player1) || (this.player2 && this.player2.id != this.$route.params.player2)){
        //     this.key = this.key + "h"
        //     this.$router.push({
        //         name: 'PlayerComparison',
        //         params: {
        //             player1: this.player1.id,
        //             player2: this.player2.id
        //         }
        //     })
        // }

        //If the params and player1 are not in sync - update the params
        else if(this.player1 && !this.player2 && this.player1.id != this.$route.params.player1){
            this.key = this.key + "h"
            this.$router.push({
                name: 'PlayerComparison',
                params: {
                    player1: this.player1.id
                }
            })
        }

        else if((this.player1 && this.player2 && this.player1.id != this.$route.params.player1) || (this.player1 && this.player2 && this.player2.id != this.$route.params.player2)){
            this.key = this.key + "h"
            this.$router.push({
                name: 'PlayerComparison',
                params: {
                    player1: this.player1.id,
                    player2: this.player2.id
                }
            })
        }
        
    },
    computed: { 
        ...mapGetters(['allPlayers']),
        playerNames(){
            var playerNamesArray = []

            this.allPlayers.forEach(player => {
                playerNamesArray.push(player.playerName)    
            })
            return playerNamesArray
        },
        player1(){
            //Drop down empty and nothing in params - no player
            if(this.selectedPlayerName1 == '' && !this.$route.params.player1){
                return null
            }
            //Drop down empty and player in param and first load - use param to fill player
            if(!this.selectedPlayerName1 && this.$route.params.player1 && this.firstLoad){
                return this.allPlayers.filter( player => player.id == this.$route.params.player1)[0]
            }
            //Drop down empty and player in param and subsequent load - no player
            if(!this.selectedPlayerName1 && this.$route.params.player1 && !this.firstLoad){
                return null
            }
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName == this.selectedPlayerName1
                )[0]
        },
        player2(){
            //Drop down empty and nothing in params - no player
            if(this.selectedPlayerName2 == '' && !this.$route.params.player2){
                return null
            }
            //Drop down empty and player in param and first load - use param to fill player
            if(!this.selectedPlayerName2 && this.$route.params.player2 && this.firstLoad){
                return this.allPlayers.filter( player => player.id == this.$route.params.player2)[0]
            }
            //Drop down empty and player in param and subsequent load - no player
            if(!this.selectedPlayerName2 && this.$route.params.player2 && !this.firstLoad){
                return null
            }
            return this.allPlayers
                .filter(
                    (player) =>
                        player.playerName == this.selectedPlayerName2
                )[0]
        }
    }
}
</script>

<style>
.player-selector .vs__search::placeholder,
.player-selector .vs__dropdown-toggle,
.player-selector .vs__dropdown-menu {
    background: #f5f5f5;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
    z-index: 11;
}
</style>

<style scoped>
.player-link {
    cursor: pointer;
    transition: transform .2s; 
    transition: color .2s; 
}

.player-link:hover {
    transform: scale(1.2);
    color: var(--primary);
    transition: color 0.2s; 
}

.player-image {
    width: 100px;
}

.player-graph {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 30px;
    margin-bottom: 30px;
}

.best {
    color: #93ff61;
}

.worst {
    color: #ff5252;
}

.table-header {
    cursor: pointer;
}

.side-header {
    width: 110px;
}

.collapse {
    display: none;
}

table {
    margin: auto;
}

.top-table-header {
    width: 350px;
    background-color: var(--primary);
}

.wrapper {
    width: 100%;
    max-width: 75rem;
    margin-top: 0;
    margin: auto;
}

.comparison {
    margin-left: 30px;
    margin-right: 30px;
}

td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    min-width: 10px;
}

.comparison {
    margin-left: 30px;
    margin-right: 30px;

}

#expand-all {
    cursor: pointer;
}

th {
    user-select: none;
    padding: 15px;
    color: #fff;
    background-color: var(--secondary);
    position: sticky;
    top: 65px;
    z-index: 10;
}

.name-header {
    position: sticky;
    top: 0;
    z-index: 11;
}

.comparison tbody tr {
    background: #2c3845;
}

.comparison tbody tr:nth-child(odd) {
    background: #202932;
}

.comparison tbody tr:hover {
    background: #ffffff80;
}

tr:hover {
    background-color: white;
}

tr:hover > td {
    color: black;
}

/********* Toggle Switch Styling **********/

.option {
    white-space: nowrap;
    text-align: left;
    margin-left: 120px;
    /* float: left; */
}

.option > p {
    display: inline-block;
    padding: 5px;
    /* vertical-align: -8px; */
    vertical-align: 2px;
    font-size: 10px;
}

.option > label {
    display: inline-block;
}

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 15px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 15px;
}

.slider.round:before {
    border-radius: 50%;
}

</style>