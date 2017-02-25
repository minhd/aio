<template>
    <div class="container">
        <tree-view :model="jsonData" :show="true"></tree-view>
    </div>
</template>

<script>
    import TreeView from '../components/TreeView'
    export default {
        components: { TreeView},
        data() {
            return {
                jsonData: {
                    "key1": "value1",
                    "key2": "value2",
                    "keyArray": ["1", 2, true],
                    "keyObject": {
                        "1.2" : [1,2,3]
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
</style>