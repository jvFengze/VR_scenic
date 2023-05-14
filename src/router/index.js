import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../login/index.vue')
    },
]
 const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
 
export default router