<template>
    <transition
        :name="transition"
        mode="in-out"

        :appear-active-class="enterClass"
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass"

        @beforeEnter="event('beforeEnter')"
        @afterEnter="event('afterEnter')"
        @beforeLeave="event('beforeLeave')"
        @afterLeave="event('afterLeave')"
    >
        <div class="modal animated is-active" v-if="show">
            <div class="modal-background" @click="deactivate"></div>
            <div class="modal-container">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close" @click="deactivate"
                    v-if="closable"></button>
        </div>
    </transition>
</template>

<script>
    export default {

        props: {
            visible: Boolean,
            closable: {
                type: Boolean,
                default: true
            },
            transition: {
                type: String,
                default: 'fade'
            }
        },

        data () {
            return {
                show: this.visible
            }
        },

        mounted () {
            document.body.appendChild(this.$el)
        },

        methods: {
            event(ev) {
                switch(ev) {
                    case 'beforeEnter': this.$emit('open'); break;
                    case 'afterEnter': this.$emit('after-open'); break;
                    case 'beforeLeave': this.$emit('before-close'); break;
                    case 'afterLeave': this.$emit('close'); break;
                }
            },

            active () {
                this.show = true
            },

            deactivate () {
                if (this.closable)
                    this.show = false
            }
        },

        computed: {

            enterClass () {
                return `${this.transition}In`
            },

            leaveClass () {
                return `${this.transition}Out`
            }
        },

        watch: {
            visible (val) {
                this.show = val
            }
        }
    }
</script>