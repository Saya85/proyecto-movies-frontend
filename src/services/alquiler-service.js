import axios from "axios";

import authHeader from './auth-header';


const API_URL = 'http://localhost:2030/pedido/';

class AlquilarService {

    async alquilarPelicula(pelicula, calidad, fecha) {
        try {
            const res = await axios.post(API_URL + '', {
                "idMovie": pelicula,
                "calidad": calidad,
                "fecha": fecha
            }, { headers: authHeader() }).then(response => {
                return response.data.message;
            }).catch((error) => {
                console.log(error);
                return false
            });
            return res;
        } catch (error) {
        }
    }

    alquilarlist() {
        try {
            const res = axios.get(API_URL + "user", { headers: authHeader() })
                .then((response) => {
                    return response.data;
                }).catch(() => {
                    return false;
                });
            return res;
        } catch (error) {
        }
    }
}
export default new AlquilarService();