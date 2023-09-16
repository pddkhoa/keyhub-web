import api from "../api/axios";
import {
  logOutFailed,
  logOutStart,
  logOutSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  verifyFailed,
  verifyStart,
  verifySuccess,
} from "./authSlice";
import {
  getSeriesFailed,
  getSeriesStart,
  getSeriesSuccess,
} from "./seriesSlice";
import { showToast } from "@/hooks/useToast";

export const loginUser = async (user: any, dispatch: any, navigate: any) => {
  dispatch(loginStart());
  try {
    const res = await api.post("api/auth/login", user);
    if (res.data.token) {
      dispatch(loginSuccess(res.data));
      showToast("Congratulations! Sign In Success");
      navigate("/profile");
    } else {
      dispatch(loginFailed());
      showToast("Fail! Sign In Fail", "error");
    }
  } catch (err) {
    dispatch(loginFailed());
    showToast("Fail! Sign In Fail", "error");
  }
};
export const registerUser = async (user: any, dispatch: any, navigate: any) => {
  dispatch(registerStart);
  try {
    const res = await api.post("api/auth/signup", user);
    if (res.data.code === 200) {
      dispatch(verifyStart);
      showToast("Congratulations! Please Verify Account", "success");
      navigate("/verify");
      return;
    } else {
      dispatch(registerFailed);
      showToast(res.data.message, "error");
    }
  } catch {
    dispatch(registerFailed);
  }
};

export const verifyAccount = async (otp: any, dispatch: any, navigate: any) => {
  dispatch(verifyStart);
  try {
    await api.post(`api/auth/verify-account?token=${otp}`);
    dispatch(verifySuccess);
    dispatch(registerSuccess);
    showToast("Congratulations! Sign Up Success", "success");
    navigate("/login");
  } catch {
    dispatch(verifyFailed);
    showToast("Invalid OTP code", "error");
  }
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
