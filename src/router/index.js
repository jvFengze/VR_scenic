import { createRouter, createWebHashHistory } from "vue-router"
import { ElMessage } from 'element-plus'

const routes = [
    {
        path: '/',
        name: 'login',
        // redirect: '/login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../layout/index.vue'),
        children: [
            {
                path: '/balance',
                name: 'balance',
                component: () => import('../views/balance/index.vue')
            }
        ]
    }
]
 const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from, next) =>{
    if(to.fullPath === "/"){
        next()
    }else{
        const token = sessionStorage.getItem('token')
        if(!token){
            ElMessage({
                message: "您还没有登录，请先登录！",
                type: 'error'
            })
            next('/')
        }else{
            next()
        }
    }
})
export default router