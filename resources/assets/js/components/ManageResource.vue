<template>
    <div>
        <p class="control has-icon">
            <input class="input is-small" type="text" placeholder="Search" v-model.lazy="query" @change="getResources()">
            <span class="icon is-small"><i class="fa fa-search"></i></span>
        </p>
        <table class="table is-striped">
            <thead>
                <th v-for="column in columns">{{ column }}</th>
                <th>Action</th>
            </thead>
            <tfoot>
                <th v-for="column in columns">{{ column }}</th>
                <th>Action</th>
            </tfoot>
            <tbody>
                <tr v-for="res in resources">
                    <td v-for="column in columns">{{ format(res, column) }}</td>
                    <td>
                        <button class="button is-small is-danger" @click="deleteResource(res)">
                            <span class="icon is-small">
                                <i class="fa fa-remove"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        props: ['resource', 'columns', 'friendlytimecolumns'],
        data() {
            return {
                resources: [],
                query: ''
            }
        },
        mounted() {
            let that = this;
            that.getResources();
            eventBus.$on('refreshQuotes', function() {
                that.getResources();
            });
        },
        methods: {
            getResources() {
                axios.get('api/' + this.resource + '/?query=' + this.query)
                    .then((response) => this.resources = response.data);
            },
            deleteResource(res) {
                let that = this;
                axios.delete('api/' + this.resource + '/' + res.id).then(() => {
                    that.getResources();
                });
            },
            format(res, column) {
                if (this.friendlytimecolumns.indexOf(column) >= 0) {
                    return moment.utc(res[column]).fromNow();
                }
                return res[column];
            }
        }
    }
</script>