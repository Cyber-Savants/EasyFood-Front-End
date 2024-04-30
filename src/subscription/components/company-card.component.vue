<script>
export default {
  name: "company-card",
  props: {
    company: Object,
  },
  methods: {
    buy() {
      this.$route.push(`./subscription-selection/${this.company.id}`);
    },
  },
};
</script>
<template>
  <div class="p-card">
    <div style="display: flex; flex-direction: row; justify-content: space-around;">
      <div class="p-d-flex p-jc-center p-ai-center">
        <div class="p-mr-2">
          <img v-if="company" :src="company.urlToImage" alt="Company Logo" class="company-logo">
        </div>
        <div>
          <h5 v-if="company">{{ company.name }}</h5>
          <p v-if="company">{{ company.description }}</p>
        </div>
      </div>
    </div>
    <button class="p-button-success" @click="buy">Comprar</button>
  </div>
</template>
<style scoped>
.p-card {
  width: 300px;
  margin: 1rem;
  border: 2px solid #D9D052;
  background-color: #D3F2CE;
  padding: 1rem;
}

.p-button-success {
  background-color: #ffffff;
  border: 1px solid #000000;
}

.company-logo {
  width: 90px;
  height: 90px;
}
</style>