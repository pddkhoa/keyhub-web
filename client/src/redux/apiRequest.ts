import api from "../api/axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

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
