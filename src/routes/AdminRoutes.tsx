import { Route } from "react-router-dom";
import { StudentsPage, SubjectsPage, TeacherPage } from "@/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { PermissionType } from "@/types";
import { StudentPage } from "@/pages/student";

export const AdminRoutes = (
  <Route element={<ProtectedRoute allowedRoles={[PermissionType.ADMIN]} />}>
    <Route path="subjects" element={<SubjectsPage />} />
    <Route path="teachers" element={<TeacherPage />} />
    <Route path="students" element={<StudentsPage />} />
    <Route path="student" element={<StudentPage />} />
  </Route>
);
