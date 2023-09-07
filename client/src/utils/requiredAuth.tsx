import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import TokenPayload from "../types/user";

interface RootState {
  auth: {
    login: {
      currentUser: TokenPayload;
    };
  };
}

const RequiredAuth = () => {
  const currentUser = useSelector((state: RootState) => state.auth.login);
  const location = useLocation();
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
