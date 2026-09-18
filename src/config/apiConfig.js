import axios from "axios";

export const API_BASE_URL = "";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt") || localStorage.getItem("token");

    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }

    return config;
});
