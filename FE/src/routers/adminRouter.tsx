import { Navigate, Route, Routes } from "react-router-dom";

import EditBlog from "@/components/Editor/editBlog";
import { Loading } from "@/components/Loading/loading";
import LayoutAdmin from "@/layout/layoutAdmin";
import { Suspense, lazy } from "react";

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
const AdminUserBlock = lazy(
  () => import("../pages/Admin/Support/AccountBlocked/listUserBlock")
);
const AdminCategoriesDetail = lazy(
  () => import("../pages/Admin/Categories/detail")
);
const DetailBlog = lazy(() => import("../pages/Client/Blog/detailBlog"));

const AdminRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<LayoutAdmin />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/admin/blogs" element={<AdminBlog />} />
          <Route path="/admin/users" element={<AdminUsers />} />

          <Route path="/admin/editor/:id" element={<EditBlog />} />

          <Route path="/admin/users/:id" element={<AdminMainProfile />} />

          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/blogs/:id" element={<DetailBlog />} />

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
        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
      </Routes>
    </Suspense>
  );
};

export default AdminRouter;
