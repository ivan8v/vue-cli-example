<template>
    <el-row>
        <el-col :span="9">
            <el-input placeholder="Filtro Real Time" @input="filterItems" v-model="realTimeSearchWord"></el-input>
        </el-col>
        <el-col :span="9">
            <el-input @keyup.enter.native="filterItems" @focus="clearRealTimeFilter" placeholder="Filtro" v-model="searchWord"></el-input>
        </el-col>
        <el-col :span="6">
            <el-button class="pink-button" @click="filterItems" :disabled="searchWord === ''">Buscar</el-button>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ListFilters",
        data() {
            return {
                realTimeSearchWord: '',
                searchWord: ''
            }
        },
        methods: {
            filterItems() {
                if (this.searchWord !== '') return this.$store.dispatch('filterItems', this.searchWord);
                else {
                    this.searchWord = '';
                    return this.$store.dispatch('filterItems', this.realTimeSearchWord);
                }
            },
            clearRealTimeFilter() {
                if (this.realTimeSearchWord !== '') {
                    this.realTimeSearchWord = '';
                    this.$store.dispatch('filterItems', this.realTimeSearchWord);
                }
            },
        },
        watch: {
            searchWord(newValue) {
                if (newValue === '') {
                    this.$store.dispatch('filterItems', '');
                }
            }
        },

    }
</script>

<style scoped>

</style>