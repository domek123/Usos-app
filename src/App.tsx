import { Navigate, Route, Routes } from "react-router-dom";
import {
  ContactPage,
  Dashboard,
  ForgotPassword,
  Login,
  MainPage,
} from "./pages";
import { ProtectedRouteToken } from "./routes/ProtectedRoute";
import { AdminRoutes } from "./routes";
import { StudentRoutes } from "./routes/StudentRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/"
        element={
          <ProtectedRouteToken>
            <MainPage />
          </ProtectedRouteToken>
        }
      >
        <Route index element={<Dashboard />} />
        {AdminRoutes}
        {StudentRoutes}
        <Route key="contact" path="contact" element={<ContactPage />} />,
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
