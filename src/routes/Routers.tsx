import FogotPassword from "@/features/authentication/FogotPassword"
import Login from "@/features/authentication/Login"
import Register from "@/features/authentication/Register"
import PageNotFound from "@/features/error/404"
import { Route, Routes } from "react-router-dom"

const Routers = () => {
    return (
        <Routes>
            <Route path="/authentication">
                <Route path="sign_in" element={<Login/>}></Route>
                <Route path="sign_up" element={<Register />}></Route>
                <Route path="fogot_password" element={<FogotPassword />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )
}

export default Routers;