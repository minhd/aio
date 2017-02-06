<template>
<div class="container">
    <sidenav></sidenav>
</div>
</template>

<script>
    import sidenav from '../components/SideNav'
    export default {
        components: { sidenav },
        mounted() {
            axios.get('/api/quotes').then((response) => console.log( response ))
        }
    }
</script>