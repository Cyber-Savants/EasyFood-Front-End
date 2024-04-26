import http from '../../shared/services/http-common.js';

export class UsersApiService {
    getUserById(id) {
        return http.get(`/users/${id}`);
    }
}