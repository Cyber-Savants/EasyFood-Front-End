import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/user', component: UserComponent}
    ]
})

export default router;