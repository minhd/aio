<template>
<div class="nav-left">
    <router-link to="/" exact class="nav-item is-tab" v-bind:class="custom">Home</router-link>
    <router-link to="/quotes" exact class="nav-item is-tab" v-bind:class="custom">Quotes</router-link>
    <router-link to="/counters" exact class="nav-item is-tab" v-bind:class="custom">Counters</router-link>
    <router-link to="/about" exact class="nav-item is-tab" v-bind:class="custom">About</router-link>
    <router-link to="/settings" exact class="nav-item is-tab" v-bind:class="custom">Settings</router-link>
</div>
</template>

<script>
    export default {
        props: ['custom']
    }
</script>