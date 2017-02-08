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
        data() {
            return {
                showModal: false
            }
        },
        components: {randomquote, greeting },
        mounted() {
            openNotification({
                message: 'Welcome',
                type: 'success',
                direction: 'Down'
            })
        },
        methods: {
            openModal() {
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
            }
        }
    }
</script>