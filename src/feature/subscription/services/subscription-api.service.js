import http from "../../../shared/services/http-common.js";

export  class SubscriptionApiService{
    getCompany(){
        return http.get('/company-card');
    }
    getCompanyById(){
        return http.get(`/company-card/${id}`);
    }
    getSubscription(){
        return http.get('/subscription-form');
    }

}