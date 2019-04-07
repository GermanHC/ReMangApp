import axios from "axios";
import { BASE_URL } from "../config/api";

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
}

export function fetchMangas() {
    const url = "/v3/top/manga";
    return axios.get(url);
}