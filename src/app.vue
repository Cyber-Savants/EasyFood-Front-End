<script>
import FooterContent from './public/components/footer-content.component.vue'
import ToobalContent from "./public/components/toobal-content.component.vue";

export default {
  name: 'app',
  components: {FooterContent,ToobalContent},
  data(){
    return{
      items:[
          {label: 'Mi Perfil', to: '/profile'},
      ]
    }
  }
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
  <footer-content/>
</template>

<style scoped>

</style>