import { useState } from "react";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { RootStateToken } from "../../types/token";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from "../../api/createInstance";
import { logOutSuccess } from "../../redux/authSlice";
import { logOut } from "../../redux/apiRequest";
import { Home, LogOut, Settings } from "lucide-react";
import { Items } from "./items";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type SidebarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const Sidebar: React.FC<SidebarProps> = ({ setOpenSidebar }) => {
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen(!open);
    setOpenSidebar(!open);
  };

  const user = useSelector((state: RootStateToken) => state.auth.login);
  const accessToken = user?.data.token;
  const refreshToken = user?.data.refreshToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosJWT = createAxios(user, dispatch, logOutSuccess);

  const handleLogout = () => {
    logOut(dispatch, refreshToken, navigate, accessToken, axiosJWT);
  };
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div
      className={`flex flex-col z-40 left-0  border-r-2 border-border  bg-background ease-in-out group fixed top-0 h-full w-${
        !open ? "16" : "52"
      }`}
    >
      <div
        className="absolute cursor-pointer rounded-lg shadow-xl bg-white  group-hover:opacity-100 duration-300 right-3 top-16 z-50"
        onClick={handleOpenSidebar}
      >
        {
          <TbSquareRoundedChevronRight
            className={`fixed w-fit h-6  bg-white rounded-lg duration-300 transition  ${
              open ? "rotate-180" : ""
            }`}
          />
        }
      </div>
      <div
        className={`flex overflow-x-hidden overflow-y-auto flex-col h-full no-scrollbar `}
      >
        <div className="mt-28 w-full h-full ">
          <nav className="relative h-full flex-none w-full hidden p-2 lg:block">
            <div className="flex flex-col justify-between h-full">
              <ul className="py-3 h-full sticky top-14  space-y-2">
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to={"profile"}>
                    <Items
                      icon={<Home className="text-title-foreground" />}
                      title={"Dashboard"}
                    ></Items>
                  </Link>
                </li>

                {user.data.token ? (
                  <li
                    onClick={handleLogout}
                    className="mt-0  flex items-center cursor-pointer rounded-xl p-1.5 hover:bg-hover"
                  >
                    <Items
                      icon={<LogOut className="text-title-foreground" />}
                      title={"Logout"}
                    ></Items>
                  </li>
                ) : null}
              </ul>
              <div className="py-3">
                <div className="mt-0  flex items-center cursor-pointer rounded-xl p-1.5 hover:bg-hover">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button>
                        <Items
                          icon={<Settings className="text-title-foreground" />}
                          title={"Setting"}
                        ></Items>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 ml-4">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Status Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                      >
                        Activity Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                      >
                        Panel
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
