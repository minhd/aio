<template>
    <div>
        <clients></clients>
        Hello, this is the Home Page
    </div>
</template>

<script>
    import clients from '../components/passport/Clients'
    export default {
        components: { clients },
        mounted() {
            axios.get('/api/quotes').then((response) => console.log( response ))
        }
    }
</script>