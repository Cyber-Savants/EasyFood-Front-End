<script>
import CompanyCardComponent from "../components/company-card.component.vue";
import {PlansCard} from "../model/plans-card.entity.js";
import {SubscriptionApiService} from "../services/subscription-api.service.js";

export default {
  name: "register-subscription",
  components: {
    companyCard: CompanyCardComponent,
  },
  data(){
    return {
      companies: [],
    };
  },
  created() {
    const apiService = new SubscriptionApiService();
    apiService.getAllCompanies().then(response => {
      this.companies = response.data.empresas.map(company => new PlansCard(company.id, company.name, company.description, company.urlToImage));
    });
  },
};
</script>

<template>
  <div class="p-grid">
    <div class="p-col" v-for="company in companies" :key="company.id">
      <company-card :company="company"></company-card>
    </div>
  </div>
</template>

<style scoped>
.p-grid {
  display: flex;
  justify-content: space-around;
}
</style>