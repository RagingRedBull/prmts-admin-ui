import axios from "axios";
import { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
})