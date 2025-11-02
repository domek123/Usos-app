import { GradesPage, SchedulePage } from "@/pages";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PermissionType } from "@/types";

export const StudentRoutes = (
  <Route element={<ProtectedRoute allowedRoles={[PermissionType.STUDENT]} />}>
    <Route key="subjects" path="grades" element={<GradesPage />} />
    <Route key="subjects" path="schedule" element={<SchedulePage />} />
  </Route>
);
