import { createRouter, createWebHistory } from 'vue-router'
import userProfileComponent from "../profile/pages/user-profile.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/profile', component: userProfileComponent}
    ]
})

export default router;