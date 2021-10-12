import axios from 'axios';

const House_API_BASE_URL = "http://localhost:8080/api/house/houses";

class HouseService {

    getHouses(){
        return axios.get(House_API_BASE_URL);
    }

    createHouses(houses){
        return axios.post(House_API_BASE_URL, houses);
    }

    getHousesById(houseId){
        return axios.get(House_API_BASE_URL + '/' + houseId);
    }

    updateHouses(houses, houseId){
        return axios.put(House_API_BASE_URL + '/' + houseId, houses);
    }

    deleteHouses(housesId){
        return axios.delete(House_API_BASE_URL + '/' + housesId);
    }
}

export default new HouseService();