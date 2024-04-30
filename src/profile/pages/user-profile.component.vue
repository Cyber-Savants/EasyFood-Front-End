<script>
import {User} from "../model/user.entity.js";
import UserDataCard from "../components/user-data-card.component.vue";
import {UsersApiService} from "../services/users-api.service.js";

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
          user.address,
          user.urlToImage
      )
    },

    getAllUsers(){
      this.usersApi.getAllUsers()
          .then(response =>{
            let user = response.data;
            this.user = this.buildUserFromResponsiveData(user);
            console.log(response.data);
          })
          .catch(error => {
            this.errors.push(error);
          });
    }

  }
}
</script>

<template>
  <div class="profile-container">
    <div class="flex mt-5 flex-column align-items-center">
      <div>
        <img v-if="user" :src="user.urlToImage" :alt="user.name">
        <p>{{ user.name }} {{user.lastname}}</p>
      </div>
      <div class="button-container">
        <pv-button class="custom-button" label="Mis Datos"/>
        <pv-button class="custom-button" label="Direcciones"/>
        <pv-button class="custom-button" label="Historial de Pedidos"/>
        <pv-button class="custom-button" label="Ayuda"/>
      </div>
    </div>
    <UserDataCard :user="user"></UserDataCard>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  background-color: #d2f0cd;
  gap: 3rem;
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


.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;
}
</style>