import http from "../../shared/services/http-common.js";

export class SubscriptionApiService{
    getAllCompanies(){
        return http.get("/register-subscription");
    }
    getCompaniesId(id){
        return http.get(`/register-subscription/${id}`);
    }
    submitSubscriptionForm(subscription) {
        return http.post("/subscription-form", subscription);
    }
}