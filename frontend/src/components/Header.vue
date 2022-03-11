<template>
    <nav id="nav">
        <router-link class="nav-button" to="/home">Home</router-link>
        <router-link class="nav-button" to="/home">Leagues</router-link>
        <router-link class="nav-button" to="/home">Clubs</router-link>
        <router-link class="nav-button" to="/players">Players</router-link>
        <router-link class="nav-button" to="/home">Insights</router-link>
        <router-link class="nav-button" to="/home">Games</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
#nav {
    display: flex;
    flex-wrap: wrap;
    max-width: 71.25rem;
    margin: auto;
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

@media screen and (max-width: 450px){
    .nav-button {
        flex: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
}

#nav a:hover {
    color: var(--primary);
    background-color: #424242;
    transition: background-color 500ms linear;
}

#nav a.router-link-exact-active {
    color: var(--primary);
    background-color: #424242;
}
</style>