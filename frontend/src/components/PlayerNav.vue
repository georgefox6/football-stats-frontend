<template>
    <nav id="nav">
        <router-link
            class="nav-button"
            :to="{
                name: 'PlayerDefaultView',
                params: { playerId: this.$route.params.playerId },
            }"
            >General</router-link
        >
        <router-link
            class="nav-button"
            :to="{
                name: 'PlayerAttackingView',
                params: { playerId: this.$route.params.playerId },
            }"
            >Attacking</router-link
        >
        <router-link
            class="nav-button"
            :to="{
                name: 'PlayerPossessionView',
                params: { playerId: this.$route.params.playerId },
            }"
            >Possession</router-link
        >
        <router-link
            class="nav-button"
            :to="{
                name: 'PlayerDefendingView',
                params: { playerId: this.$route.params.playerId },
            }"
            >Defending</router-link
        >
    </nav>
</template>

<script>
export default {
    name: 'PlayerNav'
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
    background-color: #363636;
    color: white;
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
}

</style>