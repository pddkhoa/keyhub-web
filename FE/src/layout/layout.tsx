import Header from "../components/Header/header";
import {
  BerylliumLeftSidebarFixed,
  SidebarExpandable,
} from "@/components/Sidebar";
import cn from "@/lib/class-names";
import { useBerylliumSidebars } from "@/hooks/useTable";
import { Outlet } from "react-router-dom";
// import { Footer } from "@/components/Footer/footer";

export default function Layout() {
  // const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const { expandedLeft } = useBerylliumSidebars();

  // return (
  //   <div className="flex bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-950 to-gray-950 min-h-screen overflow-x-hidden">
  //     {/* <div
  //       className={`transition-all duration-300 ${
  //         !openSidebar ? "w-16" : "w-60"
  //       }`}
  //     >
  //       <Sidebar setOpenSidebar={setOpenSidebar} />
  //     </div> */}
  //     <BerylliumLeftSidebarFixed />
  //     <SidebarExpandable />
  //     {/* <Header /> */}
  //     <div className="w-full">
  //       <div className="min-h-body">
  //         <Outlet />
  //       </div>
  //       <hr />
  //       {/* <Footer /> */}
  //     </div>
  //   </div>
  // );
  return (
    <main className={cn("flex min-h-screen flex-grow")}>
      <BerylliumLeftSidebarFixed />
      <SidebarExpandable />
      <div className="flex w-full flex-col ">
        <Header />
        <div
          className={cn(
            "flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 @container md:px-5 lg:pb-8  xl:pe-8 ",
            expandedLeft ? "xl:ps-[400px]" : "xl:px-[62px]"
          )}
        >
          <div className="grow xl:mt-4 bg-orange-lighter">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
