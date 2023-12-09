import cn from "@/lib/class-names";
import { Outlet } from "react-router-dom";
import {
  BerylliumLeftSidebarFixedAdmin,
  SidebarExpandableAdmin,
} from "@/components/Sidebar/Admin";
import { useBerylliumSidebars } from "@/hooks/useSidebar";
import HeaderAdmin from "@/components/Header/Admin/header";
// import { Footer } from "@/components/Footer/footer";

export default function LayoutAdmin() {
  const { expandedLeft } = useBerylliumSidebars();

  return (
    <main className={cn("flex min-h-screen flex-grow")}>
      <BerylliumLeftSidebarFixedAdmin />
      <SidebarExpandableAdmin />
      <div className="flex w-full flex-col ">
        <HeaderAdmin />
        <div
          className={cn(
            "flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 @container md:px-5 lg:pb-8  xl:pe-8 ",
            expandedLeft ? "xl:pl-[280px]" : "xl:ps-[62px]"
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
