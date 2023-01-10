import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading, user } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && !user.email) {
    return <Navigate to="/login" state={{ path: pathname, replace: true }} />;
  }
  return children;
};

export default PrivetRoute;
