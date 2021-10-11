import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const House_API_BASE_URL = "http://localhost:8080/api/house/houses";

const register = (firstname,middlename,lastname,username, email,dateofbirth,phonenumber, password,role) => {
  return axios.post(API_URL + "signup", {
    firstname,
    middlename,
    lastname,
    username,
    email,
    dateofbirth,
    phonenumber,
    password,
    role,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
