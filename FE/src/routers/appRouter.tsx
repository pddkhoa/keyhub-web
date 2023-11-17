import { Route, Routes } from "react-router-dom";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import { Suspense, lazy } from "react";
import Layout from "@/layout/layout";
import { Loading } from "@/components/Loading/loading";

// Public
const Introduction = lazy(() => import("../pages/Introduction/introduction"));
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

//Protect

const UpdateProfile = lazy(() => import("../pages/Profile/updateProfile"));
const Profile = lazy(() => import("../pages/Profile/profile"));
const Categories = lazy(() => import("../pages/Categories/categories"));
const Explore = lazy(() => import("../pages/Explore/explore"));
const Editor = lazy(() => import("../components/Editor/editor"));
const EditBlog = lazy(() => import("../components/Editor/editBlog"));

const DetailBlog = lazy(() => import("../pages/Blog/detailBlog"));
const Bookmark = lazy(() => import("../pages/Bookmark/bookmark"));
const ListDraft = lazy(() => import("../pages/Draft/draft"));
const CategoriesDetail = lazy(() => import("../pages/Categories/detail"));
const Users = lazy(() => import("../pages/Users/users"));
const Message = lazy(() => import("../pages/Message/message"));
const Home = lazy(() => import("../pages/Home/home"));
const NotFound = lazy(() => import("../pages/NotFound/404"));
// const Setting = lazy(() => import("../pages/Setting/main"));
const SettingAccount = lazy(() => import("../pages/Setting/account"));
// const SettingPassword = lazy(() => import("../pages/Setting/password"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
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
            {/* <Route path="setting" element={<Setting />} /> */}
            <Route path="setting" element={<SettingAccount />} />
            {/* <Route path="setting/password" element={<SettingPassword />} /> */}

            {/* <Route path="profile/update" element={<UpdateProfile />} /> */}
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
    </Suspense>
  );
};
export default AppRouter;
