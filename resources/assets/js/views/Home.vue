<template>
    <div class="container">
        <div class="tile is-ancestor is-12">
            <div class="tile is-parent is-7">
                <div class="box hero-body has-text-centered tile is-child">
                    <greeting></greeting>
                </div>

            </div>
            <div class="tile is-parent is-5">
                <div class="box tile is-child">
                    <randomquote></randomquote>
                </div>
            </div>
        </div>

        <type-ahead></type-ahead>

    </div>
</template>

<script>
    import randomquote from '../components/quote/RandomQuote'
    import TypeAhead from '../components/TypeAhead'
    import greeting from '../components/Greeting'

    export default {
        data() {
            return {
                showModal: false
            }
        },
        components: {randomquote, greeting, TypeAhead },
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