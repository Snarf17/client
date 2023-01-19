import axios from "axios"



export const API = axios.create({
    baseURL: "https://server-production-57b6.up.railway.app/api/v1",
    // baseURL: "https://server-dewetour-production.up.railway.app/api/v1",
    // baseURL: "http://localhost:9000/api/v1",
})

export const setAuthToken = (token) =>{
    if(token){
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }else{
        delete API.defaults.common["Authorization"]
    }
}