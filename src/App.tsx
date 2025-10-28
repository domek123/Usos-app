import { Navigate, Route, Routes } from "react-router-dom";
import {
  ContactPage,
  GradesPage,
  Login,
  MainPage,
  SchedulePage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />}>
        <Route index element={<Navigate to="grades" replace />} />
        <Route path="grades" element={<GradesPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
