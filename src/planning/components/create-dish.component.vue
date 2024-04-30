<script>
import { PlanningApiService } from '../services/planning-api.service.js';

export default {
  name: 'CreateDish',
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
    onDishAdded: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      dish: {
        entrada: '',
        segundo: '',
        name: '',
        category: '',
        stock: 0,
        image: '',
      },
      planningApi: new PlanningApiService(),
    };
  },
  methods: {
    async createDish() {
      if (this.validateForm()) {
        try {
          const response = await this.planningApi.createDish(this.restaurantId, this.dish);
          if (response.status === 201) {
            const newDish = response.data;
            this.onDishAdded(newDish);

            this.clearForm();
            alert('Plato creado con éxito');
          }
        } catch (error) {
          console.error('Error al crear el plato:', error);
          alert('Hubo un error al crear el plato. Por favor, inténtelo de nuevo.');
        }
      } else {
        alert('Por favor, completa todos los campos requeridos.');
      }
    },
    clearForm() {

      this.dish.entrada = '';
      this.dish.segundo = '';
      this.dish.name = '';
      this.dish.category = '';
      this.dish.stock = 0;
      this.dish.image = '';
    },
    validateForm() {

      return this.dish.entrada && this.dish.segundo && this.dish.name && this.dish.category && this.dish.stock && this.dish.image;
    },
  },
};
</script>

<template>
  <div class="create-dish-form">
    <h3>Añadir Nuevo Plato</h3>
    <form @submit.prevent="createDish">
      <div class="form-group">
        <label for="dish-entrada">Entrada:</label>
        <input type="text" id="dish-entrada" v-model="dish.entrada" required/>
      </div>
      <div class="form-group">
        <label for="dish-segundo">Segundo:</label>
        <input type="text" id="dish-segundo" v-model="dish.segundo" required/>
      </div>
      <div class="form-group">
        <label for="dish-name">Nombre:</label>
        <input type="text" id="dish-name" v-model="dish.name" required/>
      </div>
      <div class="form-group">
        <label for="dish-category">Categoría:</label>
        <input type="text" id="dish-category" v-model="dish.category" required/>
      </div>
      <div class="form-group">
        <label for="dish-stock">Stock:</label>
        <input type="number" id="dish-stock" v-model="dish.stock" required/>
      </div>
      <div class="form-group">
        <label for="dish-image">Imagen:</label>
        <input type="text" id="dish-image" v-model="dish.image" required/>
      </div>
      <button type="submit">Añadir Plato</button>
    </form>
  </div>
</template>

<style scoped>
.create-dish-form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}

.form-group {
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}
</style>
