<script>
import { ref } from 'vue';
import { PlanningApiService } from '../services/planning-api.service.js';
import CreateDish from "../components/create-dish.component.vue";
import ItemCard from "../components/item-card.component.vue";


export default {
  name: 'AddDishPage',
  components: {ItemCard, CreateDish},
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      menus: [],
      errors: [],
      planningApi: new PlanningApiService(),
    };
  },
  created() {
    this.loadMenus();
  },
  methods: {

    onDishAdded(newDish) {

      const menu = this.menus.find(menu => menu.id === newDish.menuId);

      if (newDish.category === 'Entrada') {
        menu.entradas.push(newDish);
      } else if (newDish.category === 'Segundo') {
        menu.segundo.push(newDish);
      } else {
        menu.bebidas.push(newDish);
      }

      this.$forceUpdate();
    },
    loadMenus() {
      this.planningApi.getMenusByRestaurantId(this.restaurantId)
          .then(response => {
            this.menus = response.data.menus;
          })
          .catch(error => {
            this.errors.push(error);
          });
    },
  },
};
</script>

<template>
  <div class="add-dish-page">
    <CreateDish :restaurantId="restaurantId" :onDishAdded="onDishAdded" />

    <div v-for="menu in menus" :key="menu.id">
      <h3>{{ menu.name }}</h3>
      <h4>Entradas</h4>
      <div v-for="entrada in menu.entradas" :key="entrada.id">
        <item-card :item="entrada" />
      </div>
      <h4>Segundos</h4>
      <div v-for="segundo in menu.segundo" :key="segundo.id">
        <item-card :item="segundo" />
      </div>
      <h4>Bebidas</h4>
      <div v-for="bebida in menu.bebidas" :key="bebida.id">
        <item-card :item="bebida" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-dish-page {
  margin: 20px;
}
</style>
