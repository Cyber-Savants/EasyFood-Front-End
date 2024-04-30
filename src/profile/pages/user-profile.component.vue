<script>

import UserDataCard from "../components/user-data-card.component.vue";
import {UsersApiService} from "../services/users-api.service.js";
import {User} from "../model/user.entity.js";

export default {
  name: "user-profile",
  components: {UserDataCard},
  data(){
    return{
      user: User,
      errors: [],
      usersApi: new UsersApiService()
    }
  },
  created() {
    this.getAllUsers();
  },
  methods:{
    buildUserFromResponsiveData(user){
      return new User(
          user.name,
          user.lastname,
          user.email,
          user.phone,
          user.urlToImage
      )
    },

    getAllUsers(){
      this.usersApi.getAllUsers()
          .then(response =>{
            let user = response.data;
            this.user = this.buildUserFromResponsiveData(user);
            console.log(user);
          })
          .catch(error => {
            this.errors.push(error);
          });
    }

  }
}
</script>

<template>
  <div class="profile-container flex justify-content-center">
    <div class="flex flex-column align-items-center mt-5 md:m-5">
      <div>
        <img v-if="user" :src="user.urlToImage" :alt="user.name">
        <p>{{ user.name }} {{user.lastname}}</p>
      </div>
      <div class="flex flex-row md:flex-column md:justify-content-between row-gap-3 mt-4">
        <pv-button class="custom-button" label="Mis Datos" />
        <pv-button class="custom-button" label="Direcciones"/>
        <pv-button class="custom-button" label="Historial de Pedidos"/>
        <pv-button class="custom-button" label="Ayuda"/>
      </div>
    </div>
    <user-data-card user="user" />
  </div>
</template>

<style scoped>
.profile-container {
  background-color: #d2f0cd;
  gap: 5rem;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.custom-button {
  background-color: #97E896;
  border: none;
  color: black;
  text-align: center;
  display: inline-block;
  transition-duration: 0.4s;
}

.custom-button:hover {
  background-color: #45a049;
}



</style>