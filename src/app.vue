<script>
import FooterContent from './public/components/footer-content.component.vue'

export default {
  name: 'app',
  components: {FooterContent},
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
