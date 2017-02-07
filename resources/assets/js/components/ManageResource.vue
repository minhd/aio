<template>
    <div>
        <div class="is-clearfix">
            <p class="control has-icon is-pulled-right">
                <input class="input is-small" type="text" placeholder="Search" v-model.lazy="query" @change="getResources()">
                <span class="icon is-small"><i class="fa fa-search"></i></span>
            </p>
            <p class="control is-pulled-left">
                <select class="select" @change="getResources()" v-model="limit">
                    <option v-for="lim in limits" v-bind:value="lim">Show {{ lim }}</option>
                </select>
            </p>
        </div>

        <table class="table is-striped">
            <thead>
                <th v-for="column in columns" @click="toggleSort(column)">{{ column }}</th>
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
                query: '',
                limit: 10,
                sortBy: 'updated_at',
                sortDirection: 'desc',
                limits: [10, 50, 100]
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
                axios.get('api/' + this.resource, {
                    params: {
                        query: this.query,
                        limit: this.limit,
                        sortBy: this.sortBy,
                        sortDirection: this.sortDirection
                    }
                }).then((response) => this.resources = response.data);
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
            },
            toggleSort(heading) {
                if (this.sortBy == heading) {
                    this.sortDirection = this.sortDirection == 'desc' ? 'asc' : 'desc';
                } else {
                    this.sortBy = heading;
                    this.sortDirection = "desc";
                }
                this.getResources();
            }
        }
    }
</script>