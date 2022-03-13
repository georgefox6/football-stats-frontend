<template>
    <div id="app">
        <Header></Header>
        <router-view id="view" />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style>
:root {
  --primary: #47b4a5;
  --secondary: #707070;
  --tertiary: #ffffff;
  --quaternary: #000000;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#view {
    min-height: 100vh;
}
</style>
