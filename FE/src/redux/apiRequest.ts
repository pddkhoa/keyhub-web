import { requestApiHelper } from "@/helpers/request";
import api from "../api/axios";
import {
  logOutFailed,
  logOutStart,
  logOutSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
} from "./authSlice";
import {
  getSeriesFailed,
  getSeriesStart,
  getSeriesSuccess,
} from "./seriesSlice";
import { showToast } from "@/hooks/useToast";
import { TokenType } from "@/types/token";
import User from "@/types/user";
import jwt_decode from "jwt-decode";
import { getUserSuccess } from "./userSlice";
import { AxiosInstance } from "axios";

export const loginUser = async (user: any, dispatch: any, navigate: any) => {
  type body = {
    success: boolean;
    message: string;
    result: TokenType;
    statusCode: number;
  };

  dispatch(loginStart());
  try {
    const { body } = await requestApiHelper<body>(
      api.post("api/auth/login", user)
    );
    if (body?.success) {
      const { userDetails }: any = jwt_decode(body.result.token);
      dispatch(loginSuccess(body.result));
      dispatch(getUserSuccess(userDetails.users));
      showToast("Congratulations! Sign In Success");
      navigate("/profile");
    } else {
      dispatch(loginFailed());
      showToast(body?.message || "Error", "error");
    }
  } catch (err) {
    dispatch(loginFailed());
    showToast("Error", "error");
  }
};
export const registerUser = async (user: any) => {
  type body = {
    success: boolean;
    message: string;
    result: User;
    statusCode: number;
  };

  return await requestApiHelper<body>(api.post("api/auth/signup", user));
};

export const verifyAccount = async (otp: any) => {
  type body = {
    success: boolean;
    message: string;
    result: boolean | null;
    statusCode: number;
  };

  return await requestApiHelper<body>(
    api.post(`api/auth/verify-account?token=${otp}`)
  );
};

export const logOut = async (
  dispatch: any,
  refreshToken: string,
  navigate: any,
  accessToken: any,
  axiosJWT: any
) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post(`api/auth/logout?refreshToken=${refreshToken}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    showToast("Congratulations! Logout Success");
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};
export const getAllSeries = async (
  accessToken: any,
  dispatch: any,
  axiosJWT: any
) => {
  dispatch(getSeriesStart());
  try {
    const res = await axiosJWT.get("api/v1/blog/series/list", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getSeriesSuccess(res.data));
  } catch (err) {
    dispatch(getSeriesFailed());
  }
};
export const forgortPassword = async (email: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  return await requestApiHelper<body>(
    api.post(`api/auth/forgot-password?email=${email}`)
  );
};
export const checkOtp = async (data: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  return await requestApiHelper<body>(api.post(`api/auth/veriry-otp`, data));
};

export const resetPassword = async (data: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string | null;
    statusCode: number;
  };
  return await requestApiHelper<body>(
    api.patch(`api/auth/reset-password`, data)
  );
};

export const updateProfile = async (
  report: any,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: any;
    statusCode: number;
  };

  const res = await requestApiHelper<body>(
    axiosJWT.patch("api/v1/users/change-info", report, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  );
  return res;
};
