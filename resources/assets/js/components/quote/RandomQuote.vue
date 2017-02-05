<template>
    <div class="content" @click="getQuote">
        <blockquote>
            {{ quote.content }}
        </blockquote>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: {}
            }
        },
        methods: {
            getQuote() {
                axios.get('api/quotes/random').then(response => this.quote = response.data[0])
            }
        },
        mounted() {
            this.getQuote()
        }
    }
</script>