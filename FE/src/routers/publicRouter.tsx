import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "@/components/Loading/loading";

const Login = lazy(() => import("../pages/Login/login"));
const SignUp = lazy(() => import("../pages/SignUp/signUp"));
const VerifySignUp = lazy(() => import("../pages/SignUp/verifySignUp"));
const ForgotPassword = lazy(
  () => import("../pages/VerifyPassword/forgotPassword")
);
const ConfirmEmail = lazy(() => import("../pages/VerifyPassword/confirmEmail"));
const ResetPassword = lazy(
  () => import("../pages/VerifyPassword/resetPassword")
);

const PublicRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="verify" element={<VerifySignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="confirmmail" element={<ConfirmEmail />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
      </Routes>
    </Suspense>
  );
};
export default PublicRouter;
