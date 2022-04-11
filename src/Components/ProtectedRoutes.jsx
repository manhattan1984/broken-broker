import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, redirectPath = "/signin" }) => {
  const { currentUser, getAuthorized } = useAuth();

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }
  if (currentUser && !getAuthorized()) {
    return <Navigate to={"review"} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
