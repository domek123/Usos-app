import {Route, Routes} from "react-router-dom";
import {Login} from "@/pages";

export const LoginRoutes = () => {
    return <Routes>
        <Route index element={<Login />} />
    </Routes>
}