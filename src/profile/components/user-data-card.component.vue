<script>
import {User} from "../model/user.entity.js";

export default {
  name: "user-data-card",
  props: {
    user: {
      type: User,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class="mt-5 md:m-5" style="width: 50%; background-color: #97E896 ;overflow: hidden">
    <template #title>Mis Datos</template>
    <template #content>
      <p class="m-5">
        <span class="font-bold">Nombre:</span>
        <p>{{user.name}}</p>
        <span class="font-bold bg-white">Apellido:</span>
        <p>{{user.lastname}}</p>
        <span class="font-bold">Email:</span>
        <p>{{user.email}}</p>
        <span class="font-bold">Telefono:</span>
        <p>{{user.phone}}</p>
      </p>
    </template>
    <template #footer>
      <div class="flex justify-content-center mt-1">
        <pv-button label="Actualizar Datos" style="background-color: white; color: black" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>