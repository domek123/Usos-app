import { Navigate, Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import { PermissionType } from "@/types";
import { useUserStore } from "@/stores";
import { getAuthToken } from "@/api/api";

interface ProtectedRouteProps {
  allowedRoles: PermissionType[];
  children?: ReactNode;
}

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const { role } = useUserStore();

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  if (children) return <>{children}</>;
  return <Outlet />;
};

export const ProtectedRouteToken = ({ children }: { children: ReactNode }) => {
  const token = getAuthToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
