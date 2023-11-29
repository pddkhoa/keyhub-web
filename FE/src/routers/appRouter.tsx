import { Route, Routes } from "react-router-dom";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import { Suspense, lazy } from "react";
import Layout from "@/layout/layoutMain";
import { Loading } from "@/components/Loading/loading";
import LayoutAdmin from "@/layout/layoutAdmin";
import AdminRouter from "./adminRouter";
import Introduction from "@/pages/Introduction/introduction";

// Public
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

const Profile = lazy(() => import("../pages/Client/Profile/profile"));
const Categories = lazy(() => import("../pages/Client/Categories/categories"));
const Explore = lazy(() => import("../pages/Client/Explore/explore"));
const Editor = lazy(() => import("../components/Editor/editor"));
const EditBlog = lazy(() => import("../components/Editor/editBlog"));

const DetailBlog = lazy(() => import("../pages/Client/Blog/detailBlog"));
const Bookmark = lazy(() => import("../pages/Client/Bookmark/bookmark"));
const ListDraft = lazy(() => import("../pages/Client/Draft/draft"));
const CategoriesDetail = lazy(
  () => import("../pages/Client/Categories/detail")
);
const Users = lazy(() => import("../pages/Client/Users/users"));
const Message = lazy(() => import("../pages/Client/Message/message"));
const Home = lazy(() => import("../pages/Client/Home/home"));
const Exclusives = lazy(() => import("../pages/Client/Exclusives/index"));

const NotFound = lazy(() => import("../pages/NotFound/404"));
// const Setting = lazy(() => import("../pages/Setting/main"));
const SettingAccount = lazy(() => import("../pages/Client/Setting/account"));

//Admin

const AdminMain = lazy(() => import("../pages/Admin/main"));
const Dashboard = lazy(() => import("../pages/Admin/Dashboard/dashboard"));
const AdminBlog = lazy(() => import("../pages/Admin/Blogs/main"));
const AdminUsers = lazy(() => import("../pages/Admin/Users/main"));
const AdminCategories = lazy(() => import("../pages/Admin/Categories/main"));
const AdminTags = lazy(() => import("../pages/Admin/Tags/main"));
const AdminBlogReport = lazy(
  () => import("../pages/Admin/Support/BlogsReport/main")
);
const AdminUserReport = lazy(
  () => import("../pages/Admin/Support/AccountReport/main")
);
const AdminMainProfile = lazy(() => import("../pages/Admin/Profile/main"));
const AdminUserBlock = lazy(() => import("../pages/Admin/Users/listUserBlock"));
const AdminCategoriesDetail = lazy(
  () => import("../pages/Admin/Categories/detail")
);

// const SettingPassword = lazy(() => import("../pages/Setting/password"));

//

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicRouter />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="verify" element={<VerifySignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="confirmmail" element={<ConfirmEmail />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>

        <Route path="/" element={<AdminRouter />}>
          <Route element={<LayoutAdmin />}>
            <Route path="/admin" index element={<AdminMain />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/blogs" element={<AdminBlog />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/users/:id" element={<AdminMainProfile />} />

            <Route path="/admin/categories" element={<AdminCategories />} />
            <Route
              path="/admin/categories/:id"
              element={<AdminCategoriesDetail />}
            />

            <Route path="/admin/tags" element={<AdminTags />} />
            <Route path="/admin/profile" element={<AdminMainProfile />} />

            <Route
              path="/admin/support/blog-report"
              element={<AdminBlogReport />}
            />
            <Route
              path="/admin/support/account-report"
              element={<AdminUserReport />}
            />
            <Route
              path="/admin/support/account-blocked"
              element={<AdminUserBlock />}
            />
          </Route>
        </Route>

        <Route path="/" element={<PrivateRouter />}>
          <Route element={<Layout />}>
            {/* <Route path="setting" element={<Setting />} /> */}
            <Route path="/" index element={<Home />} />
            <Route path="setting" element={<SettingAccount />} />
            <Route path="profile" element={<Profile />} />
            <Route path="exclusives" element={<Exclusives />} />

            <Route path="user/:id" element={<Profile />} />

            <Route path="categories" element={<Categories />} />

            <Route path="explore" element={<Explore />} />
            <Route path="editor" element={<Editor />} />
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
