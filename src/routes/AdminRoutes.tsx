import { Route } from "react-router-dom";
import {
  StudentsPage,
  SemestersPage,
  TeacherPage,
  SemesterInfo,
} from "@/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { PermissionType } from "@/types";
import { StudentPage } from "@/pages/student";

export const AdminRoutes = (
  <Route element={<ProtectedRoute allowedRoles={[PermissionType.ADMIN]} />}>
    <Route path="semesters" element={<SemestersPage />} />
    <Route path="semester" element={<SemesterInfo />} />
    <Route path="teachers" element={<TeacherPage />} />
    <Route path="students" element={<StudentsPage />} />
    <Route path="student" element={<StudentPage />} />
  </Route>
);
