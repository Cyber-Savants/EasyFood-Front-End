<script>


export default {
  name: "toobal-content",
  methods:{
    goToRestaurants(){
      this.$router.push('/restaurants');
    },
    gotToProfile(){
      this.$router.push('/profile');
    },
    goToOrders(){
      this.$router.push('/orders');
    },
    goToHome(){
      this.$router.push('/');
  }
  }
}
</script>

<template>

  <pv-toolbar style="padding: 1rem 1rem 1rem 1.5rem;background-color: #0A732F;">
    <template #start>
      <div class="flex align-items-center gap-2">
        <img src="../../assets/logo.png" alt="avatar" class="" style="width: 10rem;" />
      </div>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <pv-button @click="goToHome" label="Inicio" text plain />
        <pv-button @click="goToRestaurants" label="Restaurantes" text plain />
        <pv-button @click="gotToProfile" label="Perfil" text plain />
        <pv-button @click="goToOrders" label="Historial" text plain />
      </div>
    </template>
  </pv-toolbar>

</template>

<style scoped>

</style>