import http from "../../../shared/services/http-common.js";

export  class SubscriptionApiService{
    getCompany(){
        return http.get("/company-card");
    }
    getSubscription(){
        return http.get('/subscription-form');
    }
}