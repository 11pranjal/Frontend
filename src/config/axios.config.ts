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
    if (token) {
        config.headers.Authorization = "Bearer " + token
    }
    return config
})

// interceptors on response

axiosInstance.interceptors.response.use(
    (response) => {
        // Different endpoints return different nested structures
        // Banner endpoints: { data: { data: [...], meta: {...} } } -> return { data: [...], meta: {...} }
        // Auth endpoints: { data: { data: { tokens: {...} } } } -> return { tokens: {...} }
        const url = response.config.url || '';

        // For auth endpoints, return response.data.data (inner data object)
        if (url.includes('/auth/')) {
            return response.data?.data ?? response.data;
        }

        // For other endpoints (like banner), return response.data (outer data object)
        return response.data;
    },
    (error) => {
        throw error?.response?.data
    }
)





// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response.data.data;
//     },
//     (error) => {
//         throw error?.response?.data
//     }
// )



export default axiosInstance