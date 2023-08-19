import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";

const Layout = () => {
  return (
    <div className="animate-face-in min-h-dynamic-screen">
      <Header />
      <div className="min-h-body">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
