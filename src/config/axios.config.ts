import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out...",
    headers: {
        "Content-Type": "application/json"
    },
    responseType: "json",
})

// interceptors on request
axiosInstance.interceptors.request.use((config) => {
    const token = Cookies.get("token")
    if(token) {
        config.headers.Authorization = "Bearer "+token
    }
    return config
})

// interceptors on response
axiosInstance.interceptors.response.use(
    (response) => {
        return response.data.data;
    },
    (error) => {
        throw error?.response?.data
    }
)



export default axiosInstance