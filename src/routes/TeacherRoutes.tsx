import { Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PermissionType } from "@/types";
import { TeacherGradePage } from "@/pages";

export const TeacherRoutes = (
  <Route element={<ProtectedRoute allowedRoles={[PermissionType.TEACHER]} />}>
    <Route path="teacher-grade" element={<TeacherGradePage />} />
  </Route>
);
