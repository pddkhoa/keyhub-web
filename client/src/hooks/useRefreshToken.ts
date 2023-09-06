import api from "../api/axios";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const refresh = async () => {
    const response = await api.post(
      `/api/auth/refreshtoken`,
      { refreshToken: auth.refreshToken } // Pass the refresh token as the request body
      //   {
      //     withCredentials: true,
      //   }
    );
    setAuth((prev: any) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
