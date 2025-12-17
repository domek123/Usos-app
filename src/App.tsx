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
