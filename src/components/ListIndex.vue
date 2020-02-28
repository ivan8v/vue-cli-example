<template>
    <el-card>
        <div slot="header" class="clearfix">
            <el-row>
                <h3>Listado de Items</h3>
            </el-row>
            <el-row>
                <h4>Click en item para ver detalle</h4>
            </el-row>
        </div>
        <ListFilters></ListFilters>
        <transition-group name="fade-list">
            <ListItem :key="item.id" v-for="item in items" :item="item"></ListItem>
        </transition-group>
    </el-card>
</template>

<script>
    import ListItem from "@/components/ListItem";
    import ListFilters from "@/components/ListFilters";

    export default {
        name: "ListIndex",
        components: {ListFilters, ListItem},
        mounted() {
            this.fetchItems();
        },
        computed: {
            items: {
                get: function () {
                    return this.$store.getters.filteredItems;
                },
                set: function (items) {
                    this.$store.dispatch('SET_ITEMS', items)
                }
            },
            dialogVisible: {
                get: function () {
                    return this.$store.getters.dialogVisibility;
                },
            }
        },
        data() {
            return {
                item: {
                    id: 0
                }
            }
        },
        methods: {
            fetchItems() {
                this.$store.dispatch('getItems');
            }
        }
    }
</script>

<style scoped>
    .fade-list-move {
        transition: transform 0.25s ease;
    }

    .fade-list-leave-to {
        transition: all 0.5s ease;
        opacity: 0;
    }
</style>