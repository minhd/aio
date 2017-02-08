<template >
    <div class="container">
        <div class="box">
            <div class="content"></div>
            <manage-resource
                    :resource="'quotes'"
                    :columns="['content', 'author', 'updated_at']"
                    :friendlytimecolumns="['updated_at']">
            </manage-resource>
        </div>
    </div>
</template>

<script>
    import ManageResource from '../components/ManageResource'
    import NewQuote from '../components/quote/NewQuote'

    export default {
        components: { ManageResource, NewQuote }
    }
</script>