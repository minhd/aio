<template>
    <form action="" @submit.prevent="addQuote">
        <p class="control">
            <textarea v-bind:class="hasErrorClass('content')" class="textarea" placeholder="Textarea" v-model="newQuote.content"></textarea>
            <span class="help is-danger" v-if="hasError('content')">
                {{ errors['content'][0] }}
            </span>
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
                newQuote: {},
                errors: {}
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
                that.errors = {};
                axios.post('api/quotes', {
                    content : this.newQuote.content,
                    author : this.newQuote.author,
                    user_id: this.user.id
                }).then( (response) => {
                    that.newQuote = {};
                    eventBus.$emit('refreshQuotes');
                    openNotification({
                        message: 'The quote is successfully created',
                        type: 'success'
                    })
                }).catch( (error) => {
                    that.errors = error.response.data;
                });
            },
            hasErrorClass(field) {
                if (this.hasError(field)) {
                    return 'is-danger'
                }
                return '';
            },
            hasError(field) {
                return (field in this.errors);
            }
        }
    }
</script>