const defaultState = {
    items: [],
    filterItemsWord: '',
    detailDialogVisible: false,
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
    TOGGLE_DIALOG: (state, payload) => {
        state.detailDialogVisible = payload.visibility;
        state.selectedItem = payload.item;
    }
};
const getters = {
    filteredItems: state => state.items.filter(item => item.title.toLowerCase().includes(state.filterItemsWord.toLowerCase())),
    dialogVisibility: state => state.detailDialogVisible,
    selectedItem: state => state.selectedItem
};
export default {
    state: defaultState,
    getters,
    actions,
    mutations,
};