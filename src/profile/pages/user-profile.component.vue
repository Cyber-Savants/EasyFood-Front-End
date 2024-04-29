<script>
import {User} from "../model/user.entity.js";

export default {
  name: "user-profile",
  props: {
    user: {
      type: User,
      required: true
    }
  }

}
</script>

<template>
  <div class="bg-green-200">
    <div class="flex align-items-center justify-content-center">
      <img v-if="user" :src="user.urlToImage" :alt="user.name" style="font-size: 5rem">
    </div>
    <div class="button-container">
      <pv-button class="custom-button" label="Mis Datos"></pv-button>
      <pv-button class="custom-button" label="Direcciones"></pv-button>
      <pv-button class="custom-button" label="Historial de Pedidos"></pv-button>
      <pv-button class="custom-button" label="Ayuda"></pv-button>
    </div>
  </div>
</template>

<style scoped>
.custom-button {
  background-color: #A8D291;
  border: none;
  color: black;
  text-align: center;
  display: inline-block;
  transition-duration: 0.4s;
}

.custom-button:hover {
  background-color: #45a049;
}


.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  gap: 2rem;
}
</style>