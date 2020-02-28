const defaultState = {
    items: [],
    filterItemsWord: '',
    selectedItem: {}
};
const actions = {
    async filterItems({commit}, word)
    {
        await commit('UPDATE_ITEMS_FILTER', word);
    },
    getItems({state})
    {
        let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
        this._vm.$http.get(url)
            .then(response => {
                state.items = response.data;
            })
            .catch(error => {
                console.log(error);
            })
    },
};
const mutations =  {
    UPDATE_ITEMS_FILTER: (state, payload) => state.filterItemsWord = payload,
    SET_ITEMS: (state, payload) => state.items = payload,
    SET_DETAIL_ITEM: (state, payload) => {
        state.selectedItem = payload.item;
    }
};
const getters = {
    filteredItems: state => state.items.filter(item => item.title.toLowerCase().includes(state.filterItemsWord.toLowerCase())),
    selectedItem: state => state.selectedItem
};
export default {
    state: defaultState,
    getters,
    actions,
    mutations
};