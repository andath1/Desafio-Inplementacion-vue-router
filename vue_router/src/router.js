import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SobremiView from './views/SobremiView.vue'
import ContactoView from './views/ContactoView.vue'
import UltimopostView from './views/UltimopostView.vue'
import RutasnoView from './views/RutasnoView.vue'
import ArticuloView from './views/ArticuloView.vue'


const routes = [{
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/sobremi",
        name: "SobremiView",
        component: SobremiView
    },
    {
        path: "/contacto",
        name: "ContactoView",
        component: ContactoView
    },
    {
        path: "/post",
        name: "UltimopostView",
        component: UltimopostView,
        children: [{
            path: ":1",
            name: "1",
            component: ArticuloView
        }]
    },
    {
        path: '/:catchAll(.*)',
        name: RutasnoView,
        component: RutasnoView
            /*    name: "RutasnoView",
               component: RutasnoView */
    }
];

const history = createWebHistory();
const router = createRouter({
    history,
    routes,
});


export default router