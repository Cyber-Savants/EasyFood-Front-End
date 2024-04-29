<script>
import OrderCard from "../components/order-card.component.vue";
import {ExecutionApiService} from "../services/execution-api.service.js";
import {Order} from "../model/order.entity.js";


export default {
  name: "make-order",
  components:{ OrderCard},
  data(){
    return {
      order:Order,
      errors:[],
      executionApi: new ExecutionApiService(),
      selectedItemName: ""
    }
  },
  created() {
    this.getAllOrders();
  },
  methods:{
    buildOrderListFromResponseData(order){
      return new Order(
          order.id,
          order.entradas.map(entrada => ({id: entrada.id, name: entrada.name, quantity: entrada.quantity})),
          order.segundo.map(segundo => ({id: segundo.id, name: segundo.name, quantity: segundo.quantity})),
          order.bebidas.map(bebida => ({id: bebida.id, name: bebida.name, quantity: bebida.quantity})),
          order.tiempoEntrega,
          order.state,
          order.fecha,
          order.restaurantId,
          order.userId
      );
    },
    getAllOrders(){
      this.executionApi.getAllOrders()
        .then(response => {
          let order = response.data;
          this.order = this.buildOrderListFromResponseData(order);
          console.log(response.data);
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  },
  mounted() {
    this.selectedItemName = localStorage.getItem('selectedItem');
  }
}
</script>

<template>
  {{selectedItemName}}
  <order-card :order="order"></order-card>
</template>

<style scoped>

</style>