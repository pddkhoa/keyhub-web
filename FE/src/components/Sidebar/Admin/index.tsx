import { useAtom, useAtomValue } from "jotai";
import { Fragment, useEffect } from "react";
// import { getActiveMainMenuIndex } from "../hooks/beryllium-menu-utils";

import SimpleBar from "simplebar-react";
import { ActionIcon } from "rizzui";
import { useWindowSize } from "react-use";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ItemType,
  MenuItemsType,
  berylliumMenuItemAtomAdmin,
  berylliumMenuItemsAdmin,
} from "../menuItem";
import cn from "@/lib/class-names";
import { useBerylliumSidebars } from "@/hooks/useSidebar";
import { PiTextIndent } from "react-icons/pi";

function MenuItem({ menu }: { menu: MenuItemsType }) {
  //   const { expandedLeft, setExpandedLeft } = useBerylliumSidebars();
  const [menuItems, setMenuItems] = useAtom(berylliumMenuItemAtomAdmin);
  const navigate = useNavigate();

  const Icon = menu.icon;

  const isActive = menuItems === menu;

  function handleClick() {
    setMenuItems(menu);
    navigate(menu.href!);
  }

  return (
    <li
      onClick={handleClick}
      className="group flex cursor-pointer flex-col items-center gap-1.5 pb-1.5 "
    >
      <span
        className={cn(
          "rounded-3xl bg-gray-0/0 px-4 py-2 text-white transition-colors duration-200 group-hover:bg-gray-0 group-hover:text-gray-900 group-hover:bg-gray-100",
          isActive && "bg-gray-0 text-gray-900 bg-gray-100 "
        )}
      >
        <Icon className="h-auto w-6" />
      </span>
      <span className="text-white">{menu.name}</span>
    </li>
  );
}

function MenuItems() {
  const { setExpandedLeft } = useBerylliumSidebars();

  return (
    <menu className="flex w-full justify-center">
      <SimpleBar className="h-[calc(100vh_-_105px)] w-full pb-5 ">
        <ul
          onClick={() => {
            setExpandedLeft(true);
          }}
          className="flex flex-col gap-6"
        >
          {berylliumMenuItemsAdmin.map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </ul>
      </SimpleBar>
    </menu>
  );
}

export function BerylliumLeftSidebarFixedAdmin() {
  const { width } = useWindowSize();
  const { expandedLeft, setExpandedLeft } = useBerylliumSidebars();

  useEffect(() => {
    if (width < 1536) {
      setExpandedLeft(false);
    } else {
      setExpandedLeft(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <aside className="fixed pt-20  overflow-y-hidden overflow-x-hidden start-0 top-0 z-50 hidden h-screen w-[90px] flex-col items-center gap-10 bg-gray-900 py-3.5 bg-gray-0 xl:flex">
      <ActionIcon
        aria-label="open sidebar"
        variant="text"
        className="rounded-full bg-transparent text-white transition-colors hover:bg-gray-300  hover:enabled:text-gray-900"
        size="xl"
        onClick={() => setExpandedLeft(!expandedLeft)}
      >
        <PiTextIndent className="h-auto w-9" />
      </ActionIcon>
      <MenuItems />
    </aside>
  );
}

export function SidebarExpandableAdmin() {
  const { expandedLeft } = useBerylliumSidebars();
  const selectedMenu = useAtomValue(berylliumMenuItemAtomAdmin);

  return (
    <div
      className={cn(
        "fixed start-[90px] top-0 z-50 hidden h-full w-0 border-l overflow-x-hidden overflow-y-hidden duration-200 xl:flex",
        !!expandedLeft && "w-[294px]"
      )}
    >
      <SimpleBar className="h-screen pt-20  bg-gray-900 p-2 min-w-[200px]">
        <p className="mb-3 text-xs text-red-500">{selectedMenu.title}</p>
        <div className="flex flex-col gap-2 ">
          {selectedMenu?.menuItems?.map((menu) => (
            <Fragment key={menu.name}>
              <LinkMenuItem item={menu} />
            </Fragment>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}

function LinkMenuItem({ item }: { item: ItemType }) {
  const location = useLocation();

  const isActive = location.pathname === item.href;
  const Icon = item.icon;

  return (
    <Link
      to={item.href || "/"}
      className={cn(
        "flex items-center gap-3 rounded-2xl text-white px-4 py-2 font-medium duration-200 ",
        isActive
          ? " bg-gray-700 text-white "
          : "hover:bg-gray-700 hover:text-gray-200"
      )}
    >
      <span>
        <Icon className="h-[18px] w-[18px] text-white " />
      </span>
      {item.name}
    </Link>
  );
}

//
