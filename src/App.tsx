import {Route, Routes} from "react-router-dom";
import {LoginRoutes} from "@/router";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginRoutes/>} />
            <Route path="/" element={<LoginRoutes />} />
        </Routes>
    )
}

export default App
