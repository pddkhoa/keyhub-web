import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import { Loading } from "@/components/Loading/loading";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import AdminRouter from "./adminRouter";

const AppRouter = () => {
  const user = useSelector((state: RootState) => state?.auth?.login?.data);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {user?.token ? (
          jwtDecode(user?.token).userDetails.users?.role === "ADMIN" ? (
            <Route path="*" element={<AdminRouter />} />
          ) : (
            <Route path="*" element={<PrivateRouter />} />
          )
        ) : (
          <Route path="*" element={<PublicRouter />} />
        )}
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
