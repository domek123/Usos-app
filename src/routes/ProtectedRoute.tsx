import { Navigate, Outlet } from "react-router-dom";
import { PermissionType } from "@/types";
import { useUserStore } from "@/stores";
import { getAuthToken } from "@/api/api";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  allowedRoles?: PermissionType[];
  children?: ReactNode;
}

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const { role } = useUserStore();
  const token = getAuthToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
