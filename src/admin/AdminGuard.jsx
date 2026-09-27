import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUser, logout } from "../State/Auth/Action";

export default function AdminGuard() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.jwt && !auth.user && !auth.isLoading && !auth.error) {
      dispatch(getUser(auth.jwt));
    }
  }, [auth.error, auth.isLoading, auth.jwt, auth.user, dispatch]);

  useEffect(() => {
    if (auth.error && !auth.isLoading && auth.jwt && !auth.user) {
      dispatch(logout());
    }
  }, [auth.error, auth.isLoading, auth.jwt, auth.user, dispatch]);

  if (!auth.jwt) {
    return <Navigate to="/" replace />;
  }

  if (auth.isLoading || !auth.user) {
    return <main className="grid min-h-screen place-items-center text-sm text-gray-600">Checking account access...</main>;
  }

  if (String(auth.user.role).toUpperCase() !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}