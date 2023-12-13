import axios from "axios";
import jwt_decode from "jwt-decode";
import api from "./axios";
import { updateAccessToken } from "@/redux/authSlice";

const refreshToken = async (user: any) => {
  console.log(user.data.refreshToken);
  try {
    const res = await api.post(`/api/auth/refreshtoken`, {
      refreshToken: user?.data?.refreshToken,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const createAxios = (user: any, dispatch: any, stateSuccess?: any) => {
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
        const data = await refreshToken(user);
        const refreshUser = {
          ...user.data.result,
          token: data?.data?.result?.accessToken,
          refreshToken: data?.data?.result?.refreshToken,
          type: data?.data?.result?.tokenType,
        };
        dispatch(updateAccessToken(refreshUser));
        dispatch(stateSuccess(refreshUser));
        config.headers["Authorization"] =
          "Bearer " + data?.data?.result?.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
