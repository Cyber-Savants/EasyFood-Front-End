<script>

import ToobalContent from "./public/components/toobal-content.component.vue";

export default {
  components: {ToobalContent},
  data(){
    return {
     items:[
       { label: 'Restaurants',to:'/restaurants'},
       { label: 'Menus',to:'/menus'},
     ]
    }
  }
}
</script>

<template>
  <toobal-content></toobal-content>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>