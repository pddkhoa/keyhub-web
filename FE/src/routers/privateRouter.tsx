import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootStateToken } from "../types/token";

const PrivateRouter = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);
  const location = useLocation();
  return data.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRouter;
