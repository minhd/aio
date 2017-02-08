<template>
    <form action="" @submit.prevent="addQuote">
        <p class="control">
            <textarea class="textarea" placeholder="Textarea" v-model="newQuote.content"></textarea>
        </p>
        <p class="control">
            <input class="input" type="text" placeholder="Author" name="author" v-model="newQuote.author">
        </p>
        <p class="control">
            <button class="button is-success">Add Quote</button>
        </p>
    </form>

</template>

<script>
    export default {
        data() {
            return {
                newQuote: {}
            }
        },
        computed: {
            user() {
                return this.$store.state.user;
            }
        },
        methods: {
            addQuote() {
                let that = this;
                axios.post('api/quotes', {
                    content : this.newQuote.content,
                    author : this.newQuote.author,
                    user_id: this.user.id
                }).then( () => {
                    that.newQuote = {};
                    eventBus.$emit('refreshQuotes');
                });
            }
        }
    }
</script>