<template>
    <div class="container">
        <div class="box">
            <authorized-clients></authorized-clients>
        </div>
    </div>
</template>

<script>
    import AuthorizedClients from '../components/passport/AuthorizedClients'
    import Clients from '../components/passport/Clients'

    export default {
        components: { AuthorizedClients, Clients }
    }
</script>