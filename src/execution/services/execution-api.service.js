import http from "../../shared/services/http-common.js";

export class ExecutionApiService{
    getAllOrders(){
        return http.get("/orders");
    }
    postOrder(order){
        return http.post("/orders", order);
    }
}