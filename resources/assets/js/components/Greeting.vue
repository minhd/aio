<template>
    <div>Hello {{ user.name }}</div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            getUser() {
                axios.get('api/user').then((response) => this.user = response.data);
            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>