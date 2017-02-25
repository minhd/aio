<template>
    <ul class="treeview" v-show="show">
       <li v-for="(value, key, index) in model">
           <span v-if="key && !isArray(model)">{{ key }} :</span>
           <span v-if="isString(value) || isNumber(value) || isBool(value)">
                {{ value | stringify }}
           </span>
           <span v-if="isObject(value)">
               <button @click="toggle(key)">s</button>
               <tree-view :model="value" :show="true"></tree-view>
           </span>
       </li>
    </ul>
</template>

<script>
    export default {
        name: "tree-view",
        props: ['model', 'show'],
        data() {
            return {
                showChildren: false,
                shows: []
            }
        },
        methods: {
            toggle(key) {
                this.shows[key] = false;
            },
            isShowing(key) {
                return this.shows[key];
            },
            isString(value) {
                return (typeof value) == "string";
            },
            isNumber(value) {
                return (typeof value) == "number";
            },
            isBool(value) {
                return (typeof value) == "boolean";
            },
            isObject(value) {
                return (typeof value) == "object";
            },
            isArray(value) {
                return Array.isArray(value);
            }
        },
        filters: {
            stringify(value) {
                return ""+value;
            }
        }
    }
</script>

<style lang="scss">
    .treeview {
        padding: 1em;
        border: 1px solid black;
        margin: 1em;
    }
</style>