<template>
    <div class="container">
        <div class="box">
            <manage-resource
                    resource="oauth/clients"
                    prefix=""
                    :columns="['id', 'name', 'secret']"
            ></manage-resource>

            <manage-resource
                    resource="oauth/personal-access-tokens"
                    prefix=""
                    :columns="['name', 'scopes']"
            ></manage-resource>

            <manage-resource
                    resource="oauth/tokens"
                    prefix=""
                    :columns="[]"
            ></manage-resource>


            <authorized-clients></authorized-clients>
            <clients></clients>
        </div>
    </div>
</template>

<script>
    import AuthorizedClients from '../components/passport/AuthorizedClients'
    import Clients from '../components/passport/Clients'
    import ManageResource from '../components/ManageResource'

    export default {
        components: { AuthorizedClients, Clients, ManageResource }
    }
</script>