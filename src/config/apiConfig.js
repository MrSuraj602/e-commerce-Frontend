import axios from "axios";

export const API_BASE_URL = "";

const jwt = localStorage.getItem("token");

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})
