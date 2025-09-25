import axios from "axios";
import API_CONFIG from "@/app/config/axios";

export const api = axios.create({
    baseURL: API_CONFIG.baseURL,
    headers: API_CONFIG.headers
})

api.interceptors.request.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
)