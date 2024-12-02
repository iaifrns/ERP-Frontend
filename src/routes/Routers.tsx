import FogotPassword from "@/features/authentication/FogotPassword";
import Login from "@/features/authentication/Login";
import Register from "@/features/authentication/Register";
import PageNotFound from "@/features/error/404";
import { Route, Routes } from "react-router-dom";
import { routerPath } from "./paths";

const Routers = () => {
  return (
    <Routes>
      <Route path={routerPath.AUTH}>
        <Route path={routerPath.LOGIN} element={<Login />}></Route>
        <Route path={routerPath.REGISTER} element={<Register />}></Route>
        <Route
          path={routerPath.FOGOTPASSWORD}
          element={<FogotPassword />}
        ></Route>
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default Routers;
