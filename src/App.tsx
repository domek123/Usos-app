import { Navigate, Route, Routes } from "react-router-dom";
import {
  ContactPage,
  Dashboard,
  ForgotPassword,
  Login,
  MainPage,
} from "./pages";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AdminRoutes } from "./routes";
import { StudentRoutes } from "./routes/StudentRoutes";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          {AdminRoutes}
          {StudentRoutes}
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
