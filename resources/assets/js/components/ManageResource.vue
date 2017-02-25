<template>
    <div>
        <div class="is-clearfix">
            <p class="control has-icon is-pulled-right" v-if="showLimit">
                <input class="input is-small" type="text" placeholder="Search" v-model.lazy="query" @change="getResources()">
                <span class="icon is-small"><i class="fa fa-search"></i></span>
            </p>
            <p class="control is-pulled-left" v-if="showSearch">
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
            <tfoot v-if="showTableFooter">
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
        <button v-if="showAddNew" class="button is-success" @click="showAddModal"><i class="fa fa-plus"></i> Add New</button>

        <modal :visible.sync="showModal" transition="zoom" @close="closeAddModal">
            <div class="box content has-text-centered">
                <new-quote v-if="resource == 'quotes'"></new-quote>
            </div>
        </modal>

        <modal :visible.sync="showingDeleteModal" transition="zoom" @close="closeDeleteModal">
            <div class="box content has-text-centered">
                Are you sure you want to delete this resource?
                {{ deleteTarget }}
                <a href="" class="button" @click="deleteResourceConfirmed(deleteTarget)">Yes</a>
            </div>
        </modal>
    </div>
</template>

<script>

    import Modal from '../components/display/Modal'
    import NewQuote from '../components/quote/NewQuote'

    export default {
        components: { Modal, NewQuote },
        props: {
            resource: { type: String },
            columns: { type:Array },
            showTableFooter: {type:Boolean, default:false},
            showLimit: {type:Boolean, default:false},
            showSearch: {type:Boolean, default:false},
            showAddNew: {type:Boolean, default:false},
            friendlytimecolumns: { type:Array, default: () => ['updated_at'] },
            prefix: { type:String, default:'api' }
        },
        data() {
            return {
                resources: [],
                showModal: false,
                showingDeleteModal: false,
                query: '',
                limit: 10,
                sortBy: 'updated_at',
                sortDirection: 'desc',
                limits: [10, 50, 100],
                deleteTarget: null
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
                this.deleteTarget = res;
                this.showDeleteModal();
                openConfirmationModal({
                    show: true
                });
            },
            deleteResourceConfirmed(res) {
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
            },
            showDeleteModal() {
                this.showingDeleteModal = true;
            },
            closeDeleteModal() {
                this.showingDeleteModal = false;
            }
        }
    }
</script>