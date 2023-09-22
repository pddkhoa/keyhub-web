import axios from "axios";
import jwt_decode from "jwt-decode";
import api from "./axios";
import { updateAccessToken } from "@/redux/authSlice";

export const createAxios = (user: any, dispatch: any) => {
  const newInstance = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      "Content-Type": "application/json",
    },
  });
  newInstance.interceptors.request.use(
    async (config) => {
      const date = new Date();
      const decodedToken = jwt_decode(user?.data.token) as any;
      if (decodedToken.exp < date.getTime() / 1000) {
        const res = await api.post(`/api/auth/refreshtoken`, {
          refreshToken: user?.data.refreshToken,
        });
        const refreshUser = {
          token: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          type: "Bearer",
        };
        dispatch(updateAccessToken(refreshUser));
        config.headers["Authorization"] = "Bearer " + res.data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
