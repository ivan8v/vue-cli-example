<template>
    <div id="app">
        <el-row>
            <el-col :span="10" :offset="7">
                    <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .pink-button {
        background: #ff009a !important;
        color: white !important;
    }
</style>
