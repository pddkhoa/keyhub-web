import { Navigate, Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";
import { Loading } from "@/components/Loading/loading";
import Layout from "@/layout/layoutMain";

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
// const Message = lazy(() => import("../pages/Client/Message/message"));
const Home = lazy(() => import("../pages/Client/Home/home"));
const Exclusives = lazy(() => import("../pages/Client/Exclusives/index"));

const SettingAccount = lazy(() => import("../pages/Client/Setting/account"));

const PrivateRouter = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
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
                    <Route
                        path="categories/:id"
                        element={<CategoriesDetail />}
                    />
                    <Route path="user" element={<Users />} />
                    {/* <Route path="messenger" element={<Message />} /> */}
                </Route>
                <Route
                    path="*"
                    element={<Navigate to={"/"} replace={true} />}
                />
            </Routes>
        </Suspense>
    );
};

export default PrivateRouter;
