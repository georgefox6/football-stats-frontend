<template>
    <nav id="nav">
        <router-link class="nav-button" to="/home">Home</router-link>|
        <router-link class="nav-button" to="/home">Leagues</router-link>|
        <router-link class="nav-button" to="/home">Clubs</router-link>|
        <router-link class="nav-button" to="/players">Players</router-link>|
        <router-link class="nav-button" to="/home">Insights</router-link>|
        <router-link class="nav-button" to="/home">Games</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>

.nav-button {
    padding: 80px;
}

#nav a:hover {
    color: var(--primary);
}

#nav {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #B9B9B9;
}

#nav a {
    font-weight: bold;
    color: black;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: var(--primary);
}

</style>