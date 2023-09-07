import { useSelector } from "react-redux";
import api from "../api/axios";
import TokenPayload from "../types/user";
import { useAuth } from "./useAuth";
import { useDispatch } from "react-redux";
import { updateAccessToken } from "../redux/authSlice";
import TokenType from "../types/token";
interface RootState {
  auth: {
    login: {
      data: TokenType;
    };
  };
}

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.auth.login);

  const refresh = async () => {
    const response = await api.post(`/api/auth/refreshtoken`, {
      refreshToken: data.refreshToken,
    });
    dispatch(updateAccessToken(response.data.accessToken));
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
