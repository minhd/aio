<template>
    <div class="container">
        <div class="box">
            <manage-resource
                    resource="counters"
                    :columns="['name', 'count', 'updated_at']"
            ></manage-resource>
        </div>
    </div>
</template>

<script>
    import ManageResource from "../components/ManageResource";
    export default {
        components: { ManageResource }
    }
</script>

<style lang="scss">
</style>