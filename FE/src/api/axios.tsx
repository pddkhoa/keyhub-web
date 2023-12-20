import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
    },
});

// const onRequest = (
//   config: InternalAxiosRequestConfig
// ): InternalAxiosRequestConfig => {
//   const token = localStorage.getItem("accessToken");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// };

// const onErrorResponse = (error: AxiosError | Error) => {
//   throw error;
// };

// api.interceptors.request.use(onRequest);
// api.interceptors.response.use(null, onErrorResponse);

export default api;
