<script>
import axios from 'axios';
//import storage from '/src/shared/services/firebaseConfig.js'

export default {
  name: 'AddDish',
  data() {
    return {
      dishF: '',
      dishS: '',
      dishImage: null,
    };
  },
  methods: {
    handleImageChange(event) {
      this.dishImage = event.target.files[0];
    },
    async handleSubmit() {
      try {
        const response = await axios.post('https://apifakeeasyfood.onrender.com/menus', {
          name: this.dishF,
          description: this.dishS,
          image: this.dishImage,
        });

        console.log('Plato añadido con éxito:', response.data);
      } catch (error) {
        console.error('Error al añadir plato:', error);
      }
    }
  },
};
</script>


<template>
  <div class="add-dish">
    <div class="card">
      <h2>Añadir un nuevo plato</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="dish-image">Imagen del plato</label>
          <input
              type="file"
              id="dish-image"
              @change="handleImageChange"
              accept="image/*"
          />
        </div>

        <div class="form-group">
          <label for="dish-name">Plato de entrada</label>
          <input
              type="text"
              id="dish-name"
              v-model="dishF"
              placeholder="Ingrese nombre"
              required
          />
        </div>

        <div class="form-group">
          <label for="dish-description">Plato de Segundo</label>
          <input
              type="text"
              id="dish-description"
              v-model="dishS"
              placeholder="Ingrese nombre"
              required
          />
        </div>
        <button type="submit">Añadir plato</button>
      </form>
    </div>
  </div>
</template>



<style scoped>
.add-dish {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
