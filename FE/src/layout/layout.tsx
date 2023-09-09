import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import { Sidebar } from "../components/Sidebar/sidebar";
import { useState } from "react";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  console.log(openSidebar);
  return (
    <>
      <div className="relative flex bg-gray-100 w-full">
        <div className="flex-shrink h-screen ml-0">
          <Sidebar setOpenSidebar={setOpenSidebar} />
        </div>

        <div
          className={`flex-1 static animate-face-in min-h-dynamic-screen  ${
            openSidebar ? "pl-[250px]" : "pl-[80px]"
          }`}
        >
          <Header />
          <div className="min-h-body">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
