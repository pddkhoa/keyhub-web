import { useSelector } from "react-redux";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { updateAccessToken } from "../redux/authSlice";
import { RootStateToken } from "../types/token";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateToken) => state.auth.login);

  console.log(auth.data.token);

  const refresh = async () => {
    const response = await api.post(`/api/auth/refreshtoken`, {
      refreshToken: auth.data.refreshToken,
    });
    dispatch(updateAccessToken(response.data.accessToken));
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
