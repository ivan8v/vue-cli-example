<template>
    <div>
        <el-card class="item-card">
            <el-container @click.native="showDetail">
                <el-aside>
                    <img :src="item.thumbnailUrl">
                </el-aside>
                <el-main>
                    <p>{{item.title}}</p>
                </el-main>
            </el-container>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            item: {
                type: Object
            },
        },
        methods: {
            showDetail() {
                let payload = {
                    visibility: true,
                    item: this.item
                };
                this.$store.commit('TOGGLE_DIALOG', payload);
            }
        },
    }
</script>

<style scoped>
    .item-card {
        margin: 1em;
        cursor: pointer;
    }
</style>