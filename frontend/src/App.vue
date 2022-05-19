<template>
    <div id="app">
        <Nav @isSearching="searching()" class="nav"></Nav>
        <div class="menu-left-margin">
            <router-view :class=" isSearching ? 'searching' : 'not-searching' " id="view" />
        </div>
        
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
    components: {
        // Header,
        Nav
    },
    data() {
        return {
            isSearching: false
        }
    },
    methods: {
        searching() {
            this.isSearching = !this.isSearching
        }
    },
}
</script>

<style>
:root {
  --primary: #47b4a5;
  --secondary: #707070;
  --tertiary: #ffffff;
  --quaternary: #000000;
}

:root {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --transition-speed: 600ms;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f5f5f5;
}

/* Small screens */
@media only screen and (max-width: 600px) {

    .searching {
        margin-top: 9rem;
    }

    .not-searching {
        margin-top: 7rem;
    }
}

/* Large screens */
@media only screen and (min-width: 600px) {
    .menu-left-margin{
        margin-left: 6rem;
    }
}

body::-webkit-scrollbar {
    width: 1.5rem;
}

body::-webkit-scrollbar-track {
    background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
    background: #47b4a5;
}

</style>
