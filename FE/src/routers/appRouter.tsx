import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Layout from "../layout/layout";
import Home from "../pages/Home/home";
import NotFound from "../pages/NotFound/404";
import { Profile } from "../pages/Profile/profile";
import { SingUp } from "../pages/SignUp/signUp";
import LoginRouter from "./loginRouter";
import PrivateRouter from "./privateRouter";
import { VerifySignUp } from "@/pages/SignUp/verifySignUp";
import { UpdateProfile } from "@/pages/Profile/updateProfile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginRouter element={<Login />} />} />
      <Route path="register" element={<LoginRouter element={<SingUp />} />} />
      <Route
        path="verify"
        element={<LoginRouter element={<VerifySignUp />} />}
      />

      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRouter />}>
          <Route path="profile" element={<Profile />} />
          <Route path="profile/update" element={<UpdateProfile />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
