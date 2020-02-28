<template>
    <div class="aligned">
        <el-button plain class="pink-button home-button" size="lg" @click.native="openList">
            <strong>Abrir Listado</strong>
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "HomeButton",
        methods: {
            openList() {
                this.$router.push('index')
            }
        }
    }
</script>

<style scoped>
    .aligned {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .home-button {
        font-size: 22px;
        padding: 24px 36px;
        border-radius: 10px;
    }
</style>