import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: '/',
        name: 'login',
        // redirect: '/login',
        component: () => import('../views/login/index.vue')
    },
]
 const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from, next) =>{
    console.log(to);
    if(to.fullPath === "/"){
        next()
    }
})
export default router