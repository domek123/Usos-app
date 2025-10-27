import { Route, Routes } from "react-router-dom";
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
        <Route index path="grades" element={<GradesPage />} />
        <Route index path="schedule" element={<SchedulePage />} />
        <Route index path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
