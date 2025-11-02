import { Route } from "react-router-dom";
import { SubjectsPage } from "@/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { PermissionType } from "@/types";

export const AdminRoutes = (
  <Route element={<ProtectedRoute allowedRoles={[PermissionType.ADMIN]} />}>
    <Route path="subjects" element={<SubjectsPage />} />
  </Route>
);
