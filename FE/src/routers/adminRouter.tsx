import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { RootState } from "@/redux/store";
import jwtDecode from "jwt-decode";

const AdminRouter = () => {
  const user = useSelector((state: RootState) => state.auth.login.data);
  const checkRole = jwtDecode(user.token) as any;
  const location = useLocation();
  return user?.token && checkRole?.userDetails?.users?.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AdminRouter;
