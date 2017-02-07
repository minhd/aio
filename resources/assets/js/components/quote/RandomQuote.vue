<template>
    <div class="content" @click="getQuote" v-if="quote.content">
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
                axios.get('api/quotes/random').then((response) => {
                    if (response.data.length > 0) {
                        this.quote = response.data[0]
                    }
                })
            }
        },
        mounted() {
            this.getQuote()
        }
    }
</script>