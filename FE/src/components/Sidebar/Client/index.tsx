import { useAtom } from "jotai";
// import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
// import { getActiveMainMenuIndex } from "../hooks/beryllium-menu-utils";

import SimpleBar from "simplebar-react";
import { ActionIcon } from "rizzui";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import {
  MenuItemsType,
  berylliumMenuItemAtom,
  berylliumMenuItems,
} from "../menuItem";
import cn from "@/lib/class-names";
import { Search } from "lucide-react";
import { useBerylliumSidebars } from "@/hooks/useSidebar";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

function MenuItem({ menu }: { menu: MenuItemsType }) {
  //   const { expandedLeft, setExpandedLeft } = useBerylliumSidebars();
  const [menuItems, setMenuItems] = useAtom(berylliumMenuItemAtom);
  const navigate = useNavigate();

  const Icon = menu.icon;

  const isActive = menuItems === menu;

  function handleClick() {
    setMenuItems(menu);
    // if (!expandedLeft) {
    //   setExpandedLeft(true);
    // }
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
  const { width } = useWindowSize();
  return (
    <menu className="flex w-full justify-center">
      <SimpleBar className="h-[calc(100vh_-_105px)] w-full pb-5 ">
        <ul
          className={`${
            width < 1000
              ? "flex flex-row justify-around py-4 items-center"
              : "flex flex-col gap-6"
          }`}
        >
          {berylliumMenuItems.map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </ul>
      </SimpleBar>
    </menu>
  );
}

export function BerylliumLeftSidebarFixed() {
  const { width } = useWindowSize();
  const { expandedLeft, setExpandedLeft } = useBerylliumSidebars();

  // useEffect(() => {
  //   if (width < 1536) {
  //     setExpandedLeft(false);
  //   } else {
  //     setExpandedLeft(true);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [width]);

  return (
    <aside
      className={`fixed  overflow-y-hidden overflow-x-hidden start-0 bg-gray-900  z-50 ${
        width < 1000
          ? "bottom-0 h-[90px] flex-row  w-full"
          : "h-screen w-[90px] top-0 flex-col items-center gap-10  py-3.5 bg-gray-0 flex "
      } `}
    >
      <ActionIcon
        aria-label="open sidebar"
        variant="text"
        className={`rounded-full bg-transparent text-white  transition-colors mt-16 hover:bg-gray-300  hover:enabled:text-gray-900 ${
          width < 1000 ? "absolute  hidden  bottom-1" : ""
        }`}
        size="xl"
        onClick={() => setExpandedLeft(!expandedLeft)}
      >
        <Search className="h-6 w-6" />
      </ActionIcon>
      <MenuItems />
    </aside>
  );
}

export function SidebarExpandable() {
  const { expandedLeft } = useBerylliumSidebars();
  // const selectedMenu = useAtomValue(berylliumMenuItemAtom);

  const { isLoading, sendRequest } = useFetch();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Tạo debounced search function
  const debouncedSearch = useCallback(
    debounce(async (value) => {
      await sendRequest({
        type: REQUEST_TYPE.GET_LIST_USER_SEARCH,
        data: null,
        slug: searchTerm,
      });
    }, 500),
    [searchTerm]
  );
  const userFilter = useSelector(
    (state: RootState) => state.user.listUserSearch
  );

  function handleInputBlur() {
    debouncedSearch(searchTerm);
  }

  return (
    <div
      className={cn(
        "fixed start-[90px] top-0 z-50 hidden h-full w-0 border-l overflow-x-hidden overflow-y-hidden duration-200 xl:flex",
        !!expandedLeft && "w-[294px]"
      )}
    >
      <SimpleBar className="h-screen py-20  bg-gray-900 p-2 min-w-[200px]">
        <div className="outline-none items-center h-10 rounded-xl bg-gray-800  flex-1 compact flex px-4 overflow-hidden bg-input   cursor-text ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-title-foreground mr-2 w-6 h-6"
            id="search"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
          <input
            value={searchTerm}
            onBlur={handleInputBlur}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Users"
            id="posts-search"
            className="flex-1 outline-none ring-0 border-0 focus:ring-0 h-10 rounded-12  text-white hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"
          ></input>
        </div>
        <div className="border-b mt-5" />
        <div className="py-2 flex flex-col gap-5">
          <div className="flex flex-col">
            {isLoading ? (
              <div className="flex p-4 space-x-4 sm:px-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
                <div className="flex-1 py-2 space-y-4">
                  <div className="w-full h-3 rounded bg-gray-700"></div>
                  <div className="w-5/6 h-3 rounded bg-gray-700"></div>
                </div>
              </div>
            ) : userFilter && userFilter.length > 0 ? (
              userFilter.map((user) => (
                <div
                  onClick={() => {
                    navigate(`/user/${user.id}`);
                  }}
                  key={user?.id}
                  className="flex items-center space-x-2 w-full hover:bg-gray-700/75 p-2 rounded-md cursor-pointer"
                >
                  <img
                    src={user?.avatar?.toString()}
                    alt=""
                    className="object-cover object-center w-12 h-12 rounded-full shadow-sm bg-gray-500 border-gray-700"
                  />
                  <div className="-space-y-1">
                    <h2 className="text-sm text-white font-semibold leadi">
                      {user?.name}
                    </h2>
                    <span className="inline-block text-xs leadi text-blue-600">
                      @{user?.second_name}
                    </span>
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}
