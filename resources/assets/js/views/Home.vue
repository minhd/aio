<template>
<div class="container">
    <randomquote></randomquote>
</div>
</template>

<script>
    import randomquote from '../components/quote/RandomQuote'
    export default {
        components: { randomquote },
        mounted() {
            axios.get('/api/quotes').then((response) => console.log( response ))
        }
    }
</script>