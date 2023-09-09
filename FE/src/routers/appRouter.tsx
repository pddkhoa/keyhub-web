import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Layout from "../layout/layout";
import Home from "../pages/Home/home";
import NotFound from "../pages/NotFound/404";
import { Profile } from "../pages/Profile/profile";
import { Register } from "../pages/Register/register";
import LoginRouter from "./loginRouter";
import PrivateRouter from "./privateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginRouter element={<Login />} />} />
      <Route path="register" element={<LoginRouter element={<Register />} />} />

      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRouter />}>
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
