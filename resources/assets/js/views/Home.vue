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
        components: {randomquote, greeting}
    }
</script>