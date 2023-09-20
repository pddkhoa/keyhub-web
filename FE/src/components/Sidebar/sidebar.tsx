import { useState } from "react";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { RootStateToken } from "../../types/token";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from "../../api/createInstance";
import { logOutSuccess } from "../../redux/authSlice";
import { logOut } from "../../redux/apiRequest";
import { Home, Settings } from "lucide-react";
import { Items } from "./items";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import { ModeToggle } from "../DarkMode/modeToggle";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import "./sidebar.css";

type SidebarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

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

  return (
    <div
      className={`${
        open ? "w-52" : "w-16"
      } sidebar z-40 left-0  border-r-2 border-border  bg-background ease-in-out group fixed top-0 h-full 
      }`}
    >
      <div
        className="absolute  cursor-pointer rounded-lg shadow-xl bg-white  group-hover:opacity-100 duration-300 right-3 top-16 z-50"
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
        className={`flex overflow-x-hidden overflow-y-auto flex-col h-full no-scrollbar`}
      >
        <div className="mt-28 w-full h-full ">
          <nav className="relative h-full  p-2 lg:block">
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
              </ul>
              <div className="py-3 space-y-2">
                <div className="mt-0 w-full flex items-center rounded-xl p-1.5 hover:bg-hover ">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-fit pr-7 h-full outline-none">
                        <Items
                          icon={
                            <Settings className="text-title-foreground mx-auto" />
                          }
                          title={"Setting"}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 ml-4 rounded-xl bg-card">
                      <ModeToggle />

                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {user.data.token ? (
                          <li
                            onClick={handleLogout}
                            className="mt-0  flex items-center cursor-pointer rounded-lg p-2 hover:bg-hover"
                          >
                            <span>Logout</span>
                          </li>
                        ) : null}
                      </DropdownMenuItem>
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
