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
        <button class="button is-success" @click="showAddModal"><i class="fa fa-plus"></i> Add New</button>

        <modal :visible.sync="showModal" transition="zoom" @close="closeAddModal">
            <div class="box content has-text-centered">
                <new-quote v-if="resource == 'quotes'"></new-quote>
            </div>
        </modal>
    </div>
</template>

<script>

    import Modal from '../components/display/Modal'
    import NewQuote from '../components/quote/NewQuote'

    export default {
        props: {
            resource: { type: String },
            columns: { type:Array },
            friendlytimecolumns: { type:String, default:'updated_at' },
            prefix: { type:String, default:'api' }
        },
        components: { Modal, NewQuote },
        data() {
            return {
                resources: [],
                showModal: false,
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
                axios.get(this.prefix + '/' + this.resource, {
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
                axios.delete(this.prefix + '/' + this.resource + '/' + res.id).then(() => {
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
            },
            showAddModal() {
                this.showModal = true;
            },
            closeAddModal() {
                this.showModal = false;
            }
        }
    }
</script>