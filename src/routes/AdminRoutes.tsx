import { Route } from "react-router-dom";
import { StudentPage, SubjectsPage, TeacherPage } from "@/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { PermissionType } from "@/types";

export const AdminRoutes = (
  <Route element={<ProtectedRoute allowedRoles={[PermissionType.ADMIN]} />}>
    <Route path="subjects" element={<SubjectsPage />} />
    <Route path="teachers" element={<TeacherPage />} />
    <Route path="students" element={<StudentPage />} />
  </Route>
);
