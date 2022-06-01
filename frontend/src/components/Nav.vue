<template>
    <nav class="navbar">
        <ul class="navbar-nav">

            <li class="logo">
                <router-link to="/home" class="nav-link">
                    <span class="link-text logo-text">Football <br> Stats</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                class="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/player/21" class="nav-link hide-on-big-screen">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"                        
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
                                class="fa-primary"
                            ></path>    
                        </g>
                    </svg>
                    <span class="link-text">Home</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/player/22" class="nav-link">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"
                                class="fa-primary"
                            ></path>    
                        </g>
                    </svg>
                    <span class="link-text">Clubs</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/player" class="nav-link">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M640 162.8c0 6.917-2.293 13.88-7.012 19.7l-49.96 61.63c-6.32 7.796-15.62 11.85-25.01 11.85c-7.01 0-14.07-2.262-19.97-6.919L480 203.3V464c0 26.51-21.49 48-48 48H208C181.5 512 160 490.5 160 464V203.3L101.1 249.1C96.05 253.7 88.99 255.1 81.98 255.1c-9.388 0-18.69-4.057-25.01-11.85L7.012 182.5C2.292 176.7-.0003 169.7-.0003 162.8c0-9.262 4.111-18.44 12.01-24.68l135-106.6C159.8 21.49 175.7 16 191.1 16H225.6C233.3 61.36 272.5 96 320 96s86.73-34.64 94.39-80h33.6c16.35 0 32.22 5.49 44.99 15.57l135 106.6C635.9 144.4 640 153.6 640 162.8z"
                                class="fa-primary"
                            ></path>    
                        </g>
                    </svg>
                    <span class="link-text">Player</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/player/24" class="nav-link">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                    <span class="link-text">Insights</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/player/25" class="nav-link">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                                class="fa-primary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M160,320h64V224H160Zm192-96v96h64V224Z"
                                class="fa-secondary"
                            ></path>
                        </g>
                    </svg>
                    <span class="link-text">Games</span>
                </router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link">
                    <svg @click="toggleSearching()"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                                class="fa-primary"
                            ></path>
                        </g>
                    </svg>
                    <span class="link-text-small-screen">Search</span>
                    <vSelect v-if="this.allPlayers" class="large-screen-search" placeholder="Search" clearSearchOnSelect v-model="selectedPlayer" label="playerName" :options="allPlayers"/>
                </a>
            </li>
            
        </ul>

        <vSelect v-if="this.isSearching" class="small-screen" placeholder="Search" clearSearchOnSelect v-model="selectedPlayer" label="playerName" :options="allPlayers"/>
    </nav>

    
</template>

<script>
import vSelect from 'vue-select'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Nav',
    components: {
        vSelect,
    },
    data() {
        return {
            isSearching: false,
            selectedPlayer: ''
        }
    },
    computed: {
        ...mapGetters(['allPlayers']),
    },
    methods: {
        ...mapActions(['fetchPlayers']),
        formatName(name){
            if(name.contains(' ')){
                var splitName = name.split(' ', 1)
                return splitName[0][0] + splitName[1]
            }
        },
        toggleSearching(){
            this.isSearching = !this.isSearching
            this.$emit('isSearching')
        }
    },
    created(){
        this.fetchPlayers()
    },
    emits: ['isSearching'],    
    updated(){
        if(this.selectedPlayer != ''){
            console.log(this.selectedPlayer)
            this.$router.push({
                name: 'PlayerDefaultView',
                params: { playerId: this.selectedPlayer.id },
            })
            this.$router.go()
            setTimeout(() => {
                this.selectedPlayer = ''
            }, 500)
            
        }
    }
    
}
</script>

<style scoped>

.large-screen-search {
    flex: 1;
    background-color: white;
    color: black;
    text-decoration: none;
    border: 1px solid white;
    font-size: 11px;
    margin-right: 5px;
    display: none;
    margin-left: 1rem;
}

.nav-button {
    flex: 1;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #B9B9B9;
    color: black;
    text-decoration: none;
    border: 1px solid grey
}

.navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 600ms ease;
    overflow: scroll;
    z-index: 100000;
}

.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.nav-item {
    width: 100%;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
}

.nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
}

.link-text {
    display: none;
    margin-left: 1rem;
}

.link-text-small-screen {
    display: none;
}

.nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
}

.fa-primary {
    color: var(--primary);
}

.fa-secondary {
    color: #2f756c;
}

.fa-primary,
.fa-secondary {
    transition: var(--transition-speed);
}

.logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.4rem;
    letter-spacing: 0.3ch;
    width: 100%;
}

.logo svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
}

.logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
}

.navbar:hover .logo svg {
    transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
    .navbar {
        top: 0;
        width: 97vw;
        height: 6rem;
    }

    .searching {
        height: 5rem;
    }

    .logo {
        display: none;
    }

    .navbar-nav {
        flex-direction: row;
        margin-top: 5px;
    }

    .nav-link {
        justify-content: center;
        flex-wrap: wrap;
    }

    .link-text {
        display: inline;
        margin-left: 0;
    }

    .link-text-small-screen {
        display: inline;
        margin-left: 0;
    }

    .search-bar {
        display: inline;
        margin-left: 0;
    }

    .large-screen-search {
        display: none;
    }

    .small-screen {
        position: fixed;
        display: inline;
        left: -12px;
        top: 6rem;
        width: 97vw;
        margin-left: 20px;
        background-color: white;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

}

/* Large screens */
@media only screen and (min-width: 600px) {
    .hide-on-big-screen {
        display: none;
    }

    .navbar {
        top: 0;
        width: 6rem;
        height: 100vh;
    }

    .navbar:hover {
        width: 16rem;
    }

    .search-bar:hover {
        width: 16rem;
    }

    .navbar:hover .link-text {
        display: inline;
    }
    
    .navbar:hover .large-screen-search {
        display: inline;
        margin-left: 0;
    }

    .navbar:hover .logo svg {
        margin-left: 11rem;
    }

    .navbar:hover .logo-text {
        left: 0px;
    }

    .nav-item:last-child {
        margin-top: auto;
        margin-bottom: 600px;
    }

    .small-screen {
        display: none;
    }
}

/* a.router-link-exact-active {
    filter: brightness(0) invert(1);
} */

a.router-link-active {
    filter: brightness(0) invert(1);
}

/* .dark {
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
}

.light {
    --text-primary: #1f1f1f;
    --text-secondary: #000000;
    --bg-primary: #ffffff;
    --bg-secondary: #e4e4e4;
}

.solar {
    --text-primary: #576e75;
    --text-secondary: #35535c;
    --bg-primary: #fdf6e3;
    --bg-secondary: #f5e5b8;
}

.theme-icon {
    display: none;
}

.dark #darkIcon {
    display: block;
}

.light #lightIcon {
    display: block;
}

.solar #solarIcon {
    display: block;
} */

/* Styling scroll bars */
.search-bar > ::-webkit-scrollbar {
    width: 0.5rem;
}

.search-bar > ::-webkit-scrollbar-track {
    background: #1e1e24;
}

.search-bar > ::-webkit-scrollbar-thumb {
    background: #47b4a5;
}

::-webkit-scrollbar {
    width: 0;
}

::-webkit-scrollbar-track {
    background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
    background: var(--bg-primary);
} 
</style>
