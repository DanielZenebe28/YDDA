import axios from 'axios';

const Rent_API_BASE_URL = "POST http://localhost:8080/api/auth/payment";

class RentService {

    gePayment(){
        return axios.get(Rent_API_BASE_URL);
    }

    requestPayment(payment){
        return axios.post(Rent_API_BASE_URL, payment);
    }

}

export default new RentService();