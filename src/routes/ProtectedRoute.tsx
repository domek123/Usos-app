import { Navigate, Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import { PermissionType } from "@/types";

interface ProtectedRouteProps {
  allowedRoles: PermissionType[];
  children?: ReactNode;
}

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const role = PermissionType.STUDENT;

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  if (children) return <>{children}</>;
  return <Outlet />;
};

export const ProtectedRouteToken = ({ children }: { children: ReactNode }) => {
  const mockedToken = "123";
  if (!mockedToken) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
