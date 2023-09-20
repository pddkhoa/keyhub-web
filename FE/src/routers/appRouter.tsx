import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Layout from "../layout/layout";
import Home from "../pages/Home/home";
import NotFound from "../pages/NotFound/404";
import { Profile } from "../pages/Profile/profile";
import { SignUp } from "../pages/SignUp/signUp";
import LoginRouter from "./loginRouter";
import PrivateRouter from "./privateRouter";
import { VerifySignUp } from "@/pages/SignUp/verifySignUp";
import { UpdateProfile } from "@/pages/Profile/updateProfile";
import { ForgotPassword } from "@/pages/VerifyPassword/forgotPassword";
import { ConfirmEmail } from "@/pages/VerifyPassword/confirmEmail";
import { ResetPassword } from "@/pages/VerifyPassword/resetPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginRouter element={<Login />} />} />
      <Route path="register" element={<LoginRouter element={<SignUp />} />} />
      <Route
        path="verify"
        element={<LoginRouter element={<VerifySignUp />} />}
      />
      <Route
        path="forgotpassword"
        element={<LoginRouter element={<ForgotPassword />} />}
      />
      <Route
        path="confirmmail"
        element={<LoginRouter element={<ConfirmEmail />} />}
      />
      <Route
        path="resetpassword"
        element={<LoginRouter element={<ResetPassword />} />}
      />

      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRouter />}>
          <Route path="profile/update" element={<UpdateProfile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
