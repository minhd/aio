<template>
    <transition
            :name="'slide-Right'"
            mode="in-out"
            appear
            :appear-active-class="'slideInRight'"
            :enter-active-class="'slideInRight'"
            :leave-active-class="'slideOutRight'"
            @after-leave="afterLeave"
    >
        <div :class="['notification', 'animated', type ? `is-${type}` : '']" v-if="show">
            <button class="delete touchable" @click="close()"></button>
            <div class="title is-5" v-if="title">{{ title }}</div>
            {{ message }}
        </div>
    </transition>
</template>

<script>

    export default {
        props: {
            type: String,
            title: String,
            message: String,
            duration: {
                type: Number,
                default: 5000
            }
        },
        data () {
            return {
                $parent: null,
                show: true
            }
        },
        created () {
            if (!this.$parent) {
                let parent = document.querySelector('.notifications');
                if (!parent) {
                    // there's no .notifications, add one and mount
                    const Notifications = Vue.extend({
                        name: 'Notifications',
                        render (h) {
                            return h('div', {
                                'class': 'notifications'
                            })
                        }
                    });
                    this.$parent = new Notifications().$mount();
                    document.body.appendChild(this.$parent.$el);
                    parent = document.querySelector('.notifications');
                }
                this.$parent = parent.__vue__;
            }
        },
        mounted () {
            this.$parent.$el.appendChild(this.$el);
            if (this.duration > 0) {
                this.timer = setTimeout(() => this.close(), this.duration)
            }
        },

        methods: {
            close () {
                this.$emit('closed');
                clearTimeout(this.timer);
                this.show = false
            },
            afterLeave () {
                this.$el.remove()
            }
        }
    }
</script>

<style lang="scss">
    .notifications {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 999999;
        pointer-events: none;
    }

    .notification {
        margin: 20px;
        position: relative;
        min-width: 240px;
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
        pointer-events: all;
    }
</style>