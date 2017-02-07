<template>
    <div class="content" @click="getQuote(quote.id)" v-if="quote.content">
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
            getQuote(id) {
                axios.get('api/quotes/random'+"?butnot="+id).then((response) => {
                    if (response.data.length > 0) {
                        this.quote = response.data[0]
                    }
                })
            }
        },
        mounted() {
            this.getQuote('')
        }
    }
</script>