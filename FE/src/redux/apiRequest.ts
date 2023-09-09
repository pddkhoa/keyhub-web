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

export const loginUser = async (user: any, dispatch: any, navigate: any) => {
  dispatch(loginStart());
  try {
    const res = await api.post("api/auth/login", user);
    if (res.data.token) {
      dispatch(loginSuccess(res.data));
      navigate("/profile");
    } else {
      dispatch(loginFailed());
    }
  } catch (err) {
    dispatch(loginFailed());
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
