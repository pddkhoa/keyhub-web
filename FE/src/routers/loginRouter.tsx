import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootStateToken } from "../types/token";

const LoginRouter = ({ element }: any) => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);

  return data.token ? <Navigate to="/" /> : element;
};
export default LoginRouter;
