import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useState } from "react";
import { Footer } from "@/components/Footer/footer";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="flex bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-950 to-gray-950 min-h-screen overflow-x-hidden">
      <div
        className={`transition-all duration-300 ${
          !openSidebar ? "w-16" : "w-60"
        }`}
      >
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </div>
      <Header />
      <div className="w-full">
        <div className="min-h-body">
          <Outlet />
        </div>
        <hr />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Layout;
