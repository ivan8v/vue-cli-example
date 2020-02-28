import ListIndex from "@/components/ListIndex";
import ItemDetailDialog from "@/components/ItemDetail";
import HomeButton from "@/components/HomeButton";

const routes = [
    {
        path: '/',
        name: 'index',
        component: HomeButton
    },
    {
        path: '/index',
        name: 'list-index',
        component: ListIndex
    },
    {
        path: '/detail',
        name: 'detail',
        component: ItemDetailDialog
    }
];

export default routes;