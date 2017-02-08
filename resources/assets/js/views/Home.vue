<template>
    <div class="container">
        <greeting></greeting>
        <randomquote></randomquote>

        <modal :visible.sync="showModal" transition="fade" @close="closeModal">
            <div class="box content has-text-centered">
                Stuff
            </div>
        </modal>

        <card-modal :visible.sync="false" transition="fade" @close="closeModal" @cancel="closeModal" @ok="closeModal">
            Stuffy
        </card-modal>

        <button @click="openModal()">Open Modal</button> {{ showModal }}
    </div>
</template>

<script>
    import randomquote from '../components/quote/RandomQuote'
    import greeting from '../components/Greeting'
    import modal from '../components/display/Modal'
    import CardModal from '../components/display/CardModal'

    export default {
        data() {
            return {
                showModal: false
            }
        },
        components: {randomquote, greeting, modal, CardModal},
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