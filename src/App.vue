<template>
    <div id="app">
        <el-row>
            <el-col :span="10" :offset="7">
                <ListIndex/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import ListIndex from "@/components/ListIndex";

    export default {
        name: 'App',
        components: {
            ListIndex
        }
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
</style>
