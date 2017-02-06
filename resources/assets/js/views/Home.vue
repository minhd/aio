<template>
    <div class="container">
        <greeting></greeting>
        <randomquote></randomquote>
    </div>
</template>

<script>
    import randomquote from '../components/quote/RandomQuote'
    import greeting from '../components/Greeting'
    export default {
        components: {randomquote, greeting},
        mounted() {
            axios.get('/api/quotes').then((response) => console.log(response))
        }
    }
</script>