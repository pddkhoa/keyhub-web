import Header from "../components/Header/header";
import {
  BerylliumLeftSidebarFixed,
  SidebarExpandable,
} from "@/components/Sidebar/Client";
import { useBerylliumSidebars } from "@/hooks/useSidebar";
import cn from "@/lib/class-names";
import { Outlet } from "react-router-dom";
// import { Footer } from "@/components/Footer/footer";

export default function Layout() {
  const { expandedLeft } = useBerylliumSidebars();

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
