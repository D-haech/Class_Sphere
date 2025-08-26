import axios from "axios";

const AxiosIns = axios.create({ baseURL: `http://127.0.0.1:8000/api` });

AxiosIns.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) { config.headers['Authorization'] = `Bearer ${token}` }
    return config

}, (error) => { Promise.reject(error) })


export const AxiosPublic = axios.create({ baseURL: `http://127.0.0.1:8000/api` })

export default AxiosIns;