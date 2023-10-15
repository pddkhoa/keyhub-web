import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Layout from "../layout/layout";
import Home from "../pages/Home/home";
import NotFound from "../pages/NotFound/404";
import { Profile } from "../pages/Profile/profile";
import { SignUp } from "../pages/SignUp/signUp";
import PrivateRouter from "./privateRouter";
import { VerifySignUp } from "@/pages/SignUp/verifySignUp";
import { UpdateProfile } from "@/pages/Profile/updateProfile";
import { ForgotPassword } from "@/pages/VerifyPassword/forgotPassword";
import { ConfirmEmail } from "@/pages/VerifyPassword/confirmEmail";
import { ResetPassword } from "@/pages/VerifyPassword/resetPassword";
import { Explore } from "@/pages/Explore/explore";
import { DetailBlog } from "@/pages/Blog/detailBlog";

import { Categories } from "@/pages/Categories/categories";
import { ListDraft } from "@/pages/Draft/listDraft";
import { Editor } from "@/components/Editor/editor";
import { EditBlog } from "@/components/Editor/editBlog";
import PublicRouter from "./publicRouter";
import { Bookmark } from "@/pages/Bookmark/bookmark";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="verify" element={<VerifySignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="confirmmail" element={<ConfirmEmail />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRouter />}>
          <Route path="profile/update" element={<UpdateProfile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="categories" element={<Categories />} />

          <Route path="explore" element={<Explore />} />
          <Route path="editor" element={<Editor />} />
          <Route path="/home" element={<Home />} />
          <Route path="editor/:id" element={<EditBlog />} />

          <Route path="blog/:id" element={<DetailBlog />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="draft" element={<ListDraft />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
