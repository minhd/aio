<template>
    <aside class="menu">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        mounted() {
            console.log('Component SideNav mounted.')
        }
    }
</script>
