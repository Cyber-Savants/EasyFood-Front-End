import http from '../../shared/services/http-common.js';

export class UsersApiService {
    getAllUsers(id) {
        return http.get(`/user`);
    }
}