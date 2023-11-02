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
import { ListDraft } from "@/pages/Draft/draft";
import { Editor } from "@/components/Editor/editor";
import { EditBlog } from "@/components/Editor/editBlog";
import PublicRouter from "./publicRouter";
import { Bookmark } from "@/pages/Bookmark/bookmark";
import { Users } from "@/pages/Users/users";
import { CategoriesDetail } from "@/pages/Categories/detail";
import { Introduction } from "@/pages/Introduction/introduction";
import { Message } from "@/pages/Message/message";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route path="intro" element={<Introduction />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="verify" element={<VerifySignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="confirmmail" element={<ConfirmEmail />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Route>

      <Route path="/" element={<PrivateRouter />}>
        <Route element={<Layout />}>
          <Route path="profile/update" element={<UpdateProfile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user/:id" element={<Profile />} />

          <Route path="categories" element={<Categories />} />

          <Route path="explore" element={<Explore />} />
          <Route path="editor" element={<Editor />} />
          <Route path="/" index element={<Home />} />
          <Route path="editor/:id" element={<EditBlog />} />

          <Route path="blog/:id" element={<DetailBlog />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="draft" element={<ListDraft />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:id" element={<CategoriesDetail />} />
          <Route path="user" element={<Users />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
