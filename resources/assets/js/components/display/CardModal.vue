<template>
    <transition
            :name="transition"
            mode="in-out"
            appear
            :appear-active-class="enterClass"
            :enter-active-class="enterClass"
            :leave-active-class="leaveClass"
    >
        <div :class="classes" v-if="show">
            <div class="modal-background" @click="deactive"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{ title }}</p>
                    <button class="delete" @click="deactive"></button>
                </header>
                <section class="modal-card-body">
                    <slot></slot>
                </section>
                <footer class="modal-card-foot">
                    <a class="button is-primary" @click="ok">{{ okText }}</a>
                    <a class="button" @click="cancel">{{ cancelText }}</a>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    import Modal from "./Modal";

    export default {
        mixins: [Modal],
        props: {
            title: {
                type: String
            },
            okText: {
                type: String,
                default: 'Ok'
            },
            cancelText: {
                type: String,
                default: 'Cancel'
            }
        },
        computed: {
            classes () {
                return ['modal', 'animated', 'is-active']
            }
        },
        methods: {
            ok () {
                this.$emit('ok')
                this.deactive();
            },
            cancel () {
                this.$emit('cancel')
                this.deactive();
            },
        }
    }
</script>