import axios from "axios";
import jwt_decode from "jwt-decode";
import TokenPayload from "../types/user";
import useRefreshToken from "../hooks/useRefreshToken";

export const createAxios = (user: any, dispatch: any, stateSuccess: any) => {
  const newInstance = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      "Content-Type": "application/json",
    },
  });
  newInstance.interceptors.request.use(
    async (config) => {
      const date = new Date();
      const decodedToken = jwt_decode(user?.data.token) as TokenPayload;
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await useRefreshToken();
        const refreshUser = {
          ...user,
          accessToken: data,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["Authorization"] = "Bearer " + data;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
