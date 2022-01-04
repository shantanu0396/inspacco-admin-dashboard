import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  children: JSX.Element;
};

export default function ReqAuth({ children }: Props) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user?.sessionToken) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
}
