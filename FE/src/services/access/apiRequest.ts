import { requestApiHelper } from "@/helpers/request";
import api from "../../api/axios";
import {
  logOutFailed,
  logOutStart,
  logOutSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
} from "../../redux/authSlice";
import { showToast } from "@/hooks/useToast";
import { TokenType } from "@/types/token";
import User from "@/types/user";
import jwt_decode from "jwt-decode";
import { getUserSuccess } from "../../redux/userSlice";

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
