import {createRouter, createWebHistory} from "vue-router";
import RestaurantSelectionComponent from "../planning/pages/restaurant-selection.component.vue";
import MenuSelectionComponent from "../planning/pages/menu-selection.component.vue";
import MakeOrderComponent from "../execution/pages/make-order.component.vue";
import AddDishPage from "../planning/pages/add-dish-component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/restaurants',    component: RestaurantSelectionComponent},
        { path: '/restaurants/:id/menus',   component: MenuSelectionComponent},
        {path:'/orders',component:MakeOrderComponent},
        { path: '/restaurants/:id/add-dish', component: AddDishPage },
        { path: '/',        redirect: '/home'}
    ]
});

export default router;