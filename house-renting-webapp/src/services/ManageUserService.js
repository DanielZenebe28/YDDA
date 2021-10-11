import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/users";

class ManageUserService {

    getUsers(){
        return axios.get(API_URL);
    }

    createUser(users){
        return axios.post(API_URL, users);
    }

    getUsersById(userId){
        return axios.get(API_URL + '/' + userId);
    }

    updateEmployee(users, usersId){
        return axios.put(API_URL + '/' + usersId, users);
    }

    deleteusers(usersId){
        return axios.delete(API_URL + '/' + usersId);
    }
}

export default new ManageUserService()