import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "../layout/layout";

const RequiredAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
