import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Layout from "../layout/layout";
import Home from "../pages/Home/home";
import NotFound from "../pages/NotFound/404";
import RequiredAuth from "../utils/requiredAuth";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public router */}
        <Route path="login" element={<Login />} />
        {/* protect router */}
        <Route element={<RequiredAuth />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
