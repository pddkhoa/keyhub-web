import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootStateToken } from "../types/token";

const PublicRouter = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);

  return data.token ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRouter;
