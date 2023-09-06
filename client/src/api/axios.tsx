import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error status codes
      if (error.response.status === 401) {
        // Redirect to login or perform other actions
        console.log("Unauthorized");
      }
    } else if (error.request) {
      // Handle request-level errors (no response received)
      console.log("Request error");
    } else {
      // Handle other errors
      console.log("Other error");
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:8081",
  headers: { "Content-Type": "application/json" },
});

export default api;
