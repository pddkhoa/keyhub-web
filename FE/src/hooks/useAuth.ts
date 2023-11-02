import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { createAxios } from "@/api/createInstance";
import { loginSuccess } from "@/redux/authSlice";
import { useDispatch } from "react-redux";

export default function useAuth() {
  const user = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();

  const axiosJWT = createAxios(user, dispatch, loginSuccess);

  return {
    user,
    axiosJWT,
    accessToken: user?.data.token,
  };
}
