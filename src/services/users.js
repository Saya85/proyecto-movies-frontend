import axios from "axios";

import authHeader from './auth';

const API_URL = 'http://localhost:3000/users/';

class AuthService {
  async login(email, password) {
      try {
        const res = await axios.post(API_URL+'login', {
            "email": email,
            "password": password
          })
          .then(response => {
            if (response.data) {
              localStorage.setItem("userToken", JSON.stringify(response.data.token));
            }
            return true;
           }).catch(error => {return false});
          return res;
      } catch (error) {
        
      }
  }     
    logout() {
      try {
        return axios.get(API_URL+'logout', { headers: authHeader() })
          .then(() => {return true}).catch(() => {return false});
      } catch (error) {
      }
    }
  
    registrar(nombre, apellidos, email, password) {
      try {
        return axios.post(API_URL + "registrar", {
          "nombre": nombre,
          "apellidos": apellidos,
          "email": email,
          "password": password
        }).then(() => {
          return this.login(email, password);
        })  
        .catch(() => {return false});
      } catch (error) {
        
      }
    }
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('userToken'));;
    }
  }
  
  export default new AuthService();