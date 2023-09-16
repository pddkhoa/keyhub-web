import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useState } from "react";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <div className="flex bg-background min-h-screen">
      <div className={`flex flex-row ${!openSidebar ? "w-16" : "w-60"}`}>
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </div>
      <Header />
      <div className="w-screen">
        <div className="min-h-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
