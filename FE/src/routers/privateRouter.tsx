import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { RootState } from "@/redux/store";
import { UserDetailsResponse } from "@/types/response";

const PrivateRouter = () => {
  const { data } = useSelector((state: RootState) => state.auth.login);
  const checkRole = jwtDecode(data.token) as UserDetailsResponse;
  const location = useLocation();
  return data.token ? (
    checkRole.userDetails.users.role !== "ADMIN" ? (
      <Outlet />
    ) : (
      <Navigate to="/admin" state={{ from: location }} replace />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRouter;
