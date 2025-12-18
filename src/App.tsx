import { Navigate, Route, Routes } from "react-router-dom";
import {
  ContactPage,
  CreateMessageContent,
  Dashboard,
  ForgotPassword,
  Login,
  MainPage,
  MessageDetails,
  ReceivedContent,
  SentContent,
  StudentPage,
} from "./pages";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AdminRoutes, TeacherRoutes } from "./routes";
import { StudentRoutes } from "./routes/StudentRoutes";
import { PermissionType } from "./types";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route
            element={
              <ProtectedRoute
                allowedRoles={[PermissionType.TEACHER, PermissionType.ADMIN]}
              />
            }
          >
            <Route path="student" element={<StudentPage />} />
          </Route>
          {AdminRoutes}
          {StudentRoutes}
          {TeacherRoutes}
          <Route path="contact" element={<ContactPage />}>
            <Route index element={<Navigate to="received" replace />} />
            <Route path="create" element={<CreateMessageContent />} />
            <Route path="received" element={<ReceivedContent />}>
              <Route path=":id" element={<MessageDetails />} />
            </Route>

            <Route path="sent" element={<SentContent />}>
              <Route path=":id" element={<MessageDetails />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
