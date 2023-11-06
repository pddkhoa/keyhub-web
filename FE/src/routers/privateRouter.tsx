import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { RootState } from "@/redux/store";

const PrivateRouter = () => {
  const { data } = useSelector((state: RootState) => state.auth.login);
  const location = useLocation();
  return data.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRouter;
