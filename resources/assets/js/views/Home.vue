<template>
    <div>
        Hello, this is the Home Page
        <randomquote></randomquote>
    </div>
</template>

<script>
    import randomquote from '../components/quote/RandomQuote'

    export default {
        components: {randomquote}
    }
</script>