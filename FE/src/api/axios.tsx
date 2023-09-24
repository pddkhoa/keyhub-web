import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
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
