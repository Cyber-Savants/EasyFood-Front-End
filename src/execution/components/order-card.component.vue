<script>

import {Order} from "../model/order.entity.js";

export default {
  name: "order-card",
  props: {
    order: {
      type: Order,
      required: true
    }
  }
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #title>Orden</template>
    <template #content>
      <p class="m-0">
        <span class="font-bold">Cliente:</span> Juan Perez {{order.id}}
        <h4>Entradas</h4>
        <li v-for="entrada in order.entradas" > {{entrada.name}}</li>
        <p>cantidad</p>
        <h4>Segundo</h4>
        <li v-for="segundo in order.segundo" > {{segundo.name}}</li>
        <p>cantidad</p>
        <h4>Bebidas</h4>
        <li v-for="bebida in order.bebidas" > {{bebida.name}}</li>
        <p>cantidad</p>
      </p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <pv-button label="Save" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>