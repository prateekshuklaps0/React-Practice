import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./ContextApi";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(Context);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}
export default PrivateRoute;
