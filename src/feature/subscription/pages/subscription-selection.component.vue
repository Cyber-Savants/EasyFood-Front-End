<script>
import CompanyCardComponent from "../component/company-card.component.vue";
import {SubscriptionApiService} from "../services/subscription-api.service.js";
import {PlansCard} from "../model/plans-card.entity.js";

export default {
  name: "subscription-selection",
  component: {CompanyCardComponent},
  data(){
    return {
      name:[],
      description:[],
      subscriptionApi: new SubscriptionApiService()
    }
  },
  created() {
    const plansCardId = this.$route.params.id;
    this.getCompanyById(plansCardId);
    this.getCompany(plansCardId);
  },
}

</script>

<template>

</template>

<style scoped>

</style>