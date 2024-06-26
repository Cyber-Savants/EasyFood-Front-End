import {createRouter, createWebHistory} from "vue-router";
import RestaurantSelectionComponent from "../planning/pages/restaurant-selection.component.vue";
import MenuSelectionComponent from "../planning/pages/menu-selection.component.vue";
import userProfileComponent from "../profile/pages/user-profile.component.vue";
import MakeOrderComponent from "../execution/pages/make-order.component.vue";
import RegisterSubscriptionComponent from "../subscription/pages/register-subscription.component.vue";
import homeContentComponent from "../public/components/home-content.component.vue";
import SubscriptionFormComponent from "../subscription/components/subscription-form.component.vue";
import CompanyCardComponent from "../subscription/components/company-card.component.vue";
import AddDishComponent from "../planning/pages/add-dish-component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/restaurants',    component: RestaurantSelectionComponent},
        { path: '/restaurants/:id/menus',   component: MenuSelectionComponent},
        { path: '/restaurants/:id/add-dish', component: AddDishComponent },
        { path: '/subscription-form', component: SubscriptionFormComponent },
        { path: '/company-card', component: CompanyCardComponent },
        { path:'/orders',component:MakeOrderComponent},
        {path: '/profile', component: userProfileComponent},
        {path: '/register-subscription', component: RegisterSubscriptionComponent},
        {path: '/subscription-selection', component: SubscriptionFormComponent},
        { path: '/home', component: homeContentComponent},
        { path: '/',        redirect: '/home'}
    ]
});

export default router;