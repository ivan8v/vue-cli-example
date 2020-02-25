<template>
    <el-dialog
            title="Item Detail"
            :visible.sync="visible"
           :before-close="handleClose">
        <el-row>
            <el-container>
                <el-aside width="30%">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="item.url"
                            fit="fill"></el-image>
                </el-aside>
                <el-main>
                    <h2>{{item.title}}</h2>
                </el-main>
            </el-container>
        </el-row>
    </el-dialog>
</template>

<script>
    export default {
        name: "ItemDetailDialog",
        computed: {
            visible() {
                return this.$store.getters.dialogVisibility;
            },
            item() {
                return this.$store.getters.selectedItem;
            }
        },
        methods: {
            handleClose() {
                let payload = {
                    visibility: false,
                    item: {}
                };
                this.$store.commit('TOGGLE_DIALOG', payload)
            }
        }
    }
</script>

<style scoped>

</style>