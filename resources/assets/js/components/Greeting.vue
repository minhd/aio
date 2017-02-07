<template>
    <div>Hello {{ user.name }}, it's {{ now }}</div>
</template>

<script>
    export default {
        data() {
            return {
                now : this.getNow(),
                user: {}
            }
        },
        methods: {
            getUser() {
                axios.get('api/user').then((response) => this.user = response.data);
            },
            getNow() {
                return moment().format('MMMM Do YYYY, h:mm a');
            }
        },
        mounted() {
            this.getUser();
            let that = this;
            setInterval(function() {
                that.now = that.getNow();
            },30000);
        }
    }
</script>