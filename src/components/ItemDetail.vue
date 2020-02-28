<template>
    <el-card>
        <div slot="header" class="clearfix">
            <el-row>
                <el-col span="6">
                    <el-button @click.native="back" class="without-border">
                        <fa-icon icon="chevron-left"></fa-icon>
                        Volver
                    </el-button>
                </el-col>
                <el-col span="12">
                        <el-button @click.native="backHome" class="without-border">
                            <fa-icon icon="home"></fa-icon>
                            Inicio
                        </el-button>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-container>
                <el-aside width="30%">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="item.url"
                            fit="fill"></el-image>
                </el-aside>
                <el-main>
                    <h2 style="text-align: left">{{item.title}}</h2>
                </el-main>
            </el-container>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "ItemDetailDialog",
        computed: {
            item() {
                return this.$store.getters.selectedItem;
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            backHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .without-border {
        border-style: hidden
    }
</style>