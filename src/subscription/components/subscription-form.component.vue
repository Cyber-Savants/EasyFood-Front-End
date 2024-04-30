<template>
  <div class="subscription-form">
    <h3>Plan de Suscripción</h3>
    <form @submit.prevent="submitForm">
      <!-- Campos del formulario -->
      <input v-model="subscription.name" placeholder="Nombre">
      <input v-model="subscription.surname" placeholder="Apellidos">
      <input v-model="subscription.email" placeholder="Correo Electrónico">
      <input v-model="subscription.dni" placeholder="DNI">
      <input v-model="subscription.card" placeholder="Número de Tarjeta">
      <input v-model="subscription.cvv" placeholder="CVV">
      <select v-model="subscription.time">
        <option disabled value="">Selecciona el periodo de suscripción</option>
        <option>Mensual</option>
        <option>Trimestral</option>
        <option>Anual</option>
      </select>
      <button type="submit">Confirmar</button>
    </form>
  </div>
</template>

<script>

import { SubscriptionApiService } from "../services/subscription-api.service.js";
import {Subscription} from "../model/subscripton.entity.js";

export default {
  name: "subscription-form",
  data() {
    return {
      subscription: new Subscription(),
    };
  },
  methods: {
    submitForm() {
      const apiService = new SubscriptionApiService();
      apiService.submitSubscriptionForm(this.subscription)
          .then(response => {
            this.$router.push('blank');
          })
          .catch(error => {
            this.errorMessage = 'Hubo un error al procesar el formulario. Por favor, completa el formulario de nuevo.';
          });
    }
  }
}
</script>

<style scoped>

</style>
