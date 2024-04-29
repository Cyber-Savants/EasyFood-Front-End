import {createRouter, createWebHistory} from "vue-router";
import RestaurantSelectionComponent from "../planning/pages/restaurant-selection.component.vue";
import MenuSelectionComponent from "../planning/pages/menu-selection.component.vue";
import MakeOrderComponent from "../execution/pages/make-order.component.vue";

import CompanyCardComponent from "../feature/subscription/component/company-card.component.vue";
import SubscriptionFormComponent from "../feature/subscription/component/subscription-form.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/restaurants',    component: RestaurantSelectionComponent},
        { path: '/restaurants/:id/menus',   component: MenuSelectionComponent},
        { path: '/subscription-form', component: SubscriptionFormComponent },
        { path: '/company-card', component: CompanyCardComponent },
        { path:'/orders',component:MakeOrderComponent},
        { path: '/',        redirect: '/home'},
    ]
});

export default router;