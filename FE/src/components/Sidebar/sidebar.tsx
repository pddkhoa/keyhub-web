import { useState } from "react";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { RootStateToken } from "../../types/token";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from "../../api/createInstance";
import { logOutSuccess } from "../../redux/authSlice";
import { logOut } from "../../services/access/apiRequest";
import { Home, Newspaper, Settings } from "lucide-react";
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
                  <Link to={"/home"}>
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="news-feed"
                        >
                          <path
                            fill="url(#paint0_linear_1233_4660)"
                            fill-rule="evenodd"
                            d="M5 1C2.79086 1 1 2.79086 1 5V9V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V9V5C23 2.79086 21.2091 1 19 1H5ZM6.5 8H21V5C21 3.89543 20.1046 3 19 3H6.5H5C3.89543 3 3 3.89543 3 5V8H6.5ZM9 5.5C9 6.88071 7.88071 8 6.5 8C5.11929 8 4 6.88071 4 5.5C4 4.11929 5.11929 3 6.5 3C7.88071 3 9 4.11929 9 5.5ZM3 10H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V10ZM6.5 5C6.22386 5 6 5.22386 6 5.5C6 5.77614 6.22386 6 6.5 6C6.77614 6 7 5.77614 7 5.5C7 5.22386 6.77614 5 6.5 5ZM11 4.5C10.4477 4.5 10 4.94772 10 5.5C10 6.05228 10.4477 6.5 11 6.5H19C19.5523 6.5 20 6.05228 20 5.5C20 4.94772 19.5523 4.5 19 4.5H11Z"
                            clip-rule="evenodd"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1233_4660"
                              x1="12"
                              x2="12"
                              y1="1"
                              y2="23"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#57EAEA"></stop>
                              <stop offset="1" stop-color="#2BC9FF"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      }
                      title={"News Feed"}
                    ></Items>
                  </Link>
                </li>
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to="explore">
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full pr-0.5 "
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          image-rendering="optimizeQuality"
                          shape-rendering="geometricPrecision"
                          text-rendering="geometricPrecision"
                          viewBox="0 0 4335 4335"
                          id="article"
                        >
                          <defs>
                            <linearGradient
                              id="a"
                              x1="1862.19"
                              x2="2472.73"
                              y1="205.68"
                              y2="4129.22"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#1e8ac6"></stop>
                              <stop offset=".302" stop-color="#834fbc"></stop>
                              <stop offset="1" stop-color="#e813b1"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#a)"
                            fill-rule="nonzero"
                            d="M806 4063c-67,0 -67,-102 0,-102l509 0 177 -332 1351 0 177 332 509 0c67,0 67,102 0,102l-2723 0zm793 -635l-80 150 1297 0 -80 -150 1178 0c231,0 420,-189 421,-421l0 -2022c0,-232 -189,-421 -421,-421l-647 0c0,-93 12,-170 -55,-237 -34,-34 -81,-55 -132,-55l-1825 0c-51,0 -98,21 -132,55l0 0c-67,68 -55,143 -55,237l-647 0c-232,0 -421,189 -421,421l0 2027c1,226 190,416 421,416l1178 0zm1668 -2762l647 0c176,0 319,143 319,319l0 1977 -4131 0 0 -1977c0,-176 143,-319 319,-319l647 0 0 1981c0,103 84,187 187,187l1825 0c103,0 187,-84 187,-187l0 -1981zm-1888 507l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 273l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 272l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 273l1577 0c33,0 33,50 0,50l-1577 0c-33,0 -33,-50 0,-50zm0 272l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 272l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm221 -1577l0 0zm421 24l-250 0c-14,0 -26,-11 -26,-25l0 -412c0,-14 12,-25 26,-25l250 0c33,0 33,51 0,51l-225 0 0 155 220 0c33,0 33,50 0,50l-220 0 0 155 225 0c33,0 33,51 0,51zm-421 -435l0 411c0,25 -32,35 -46,14l-232 -343 0 329c0,33 -51,33 -51,0l0 -411c0,-25 33,-37 47,-13l231 341 0 -328c0,-34 51,-34 51,0zm837 80l-109 337c-8,25 -43,23 -49,-1l-109 -408c-9,-32 40,-45 49,-13l87 326 107 -331c8,-23 41,-23 48,0l108 331 87 -326c9,-32 58,-19 49,13l-109 408c-7,24 -41,25 -49,2l-110 -338zm589 -70l0 0zm-35 36l0 0zm35 351l0 0zm-35 -35l0 0zm-184 -261c0,-171 257,-166 257,0 0,33 -51,33 -51,0 0,-101 -155,-103 -155,0 0,128 206,25 206,206 0,166 -257,171 -257,0 0,-34 51,-34 51,0 0,103 155,101 155,0 0,-129 -206,-25 -206,-206z"
                          ></path>
                        </svg>
                      }
                      title={"Explore News"}
                    ></Items>
                  </Link>
                </li>
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to="explore">
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="user-network"
                        >
                          <path
                            fill="#8B98A6"
                            fill-rule="evenodd"
                            d="M7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H12C12.4142 16.25 12.75 16.5858 12.75 17 12.75 17.4142 12.4142 17.75 12 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17zM16.75 7C16.75 6.58579 16.4142 6.25 16 6.25H12C11.5858 6.25 11.25 6.58579 11.25 7 11.25 7.41421 11.5858 7.75 12 7.75H16C16.4142 7.75 16.75 7.41421 16.75 7zM9.96967 9.96967C10.2626 9.67678 10.7374 9.67678 11.0303 9.96967L14.0303 12.9697C14.3232 13.2626 14.3232 13.7374 14.0303 14.0303 13.7374 14.3232 13.2626 14.3232 12.9697 14.0303L9.96967 11.0303C9.67678 10.7374 9.67678 10.2626 9.96967 9.96967z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#5E94FF"
                            d="M7 1.25C3.82436 1.25 1.25 3.82436 1.25 7 1.25 10.1756 3.82436 12.75 7 12.75 10.1756 12.75 12.75 10.1756 12.75 7 12.75 3.82436 10.1756 1.25 7 1.25zM17 11.25C13.8244 11.25 11.25 13.8244 11.25 17 11.25 20.1756 13.8244 22.75 17 22.75 20.1756 22.75 22.75 20.1756 22.75 17 22.75 13.8244 20.1756 11.25 17 11.25z"
                          ></path>
                          <path
                            fill="#4DC4FF"
                            fill-rule="evenodd"
                            d="M11.5722 10.4873V10.3156C11.5722 10.2404 11.5609 10.1656 11.5386 10.0938 10.9393 8.15776 9.13526 6.75 7.00045 6.75 4.86564 6.75 3.06159 8.15776 2.46226 10.0938 2.44002 10.1656 2.42871 10.2404 2.42871 10.3156V10.4884C3.47939 11.8632 5.13613 12.75 7 12.75 8.86441 12.75 10.5216 11.8627 11.5722 10.4873zM21.5722 20.4873V20.3156C21.5722 20.2404 21.5609 20.1656 21.5386 20.0938 20.9393 18.1578 19.1353 16.75 17.0005 16.75 14.8656 16.75 13.0616 18.1578 12.4623 20.0938 12.44 20.1656 12.4287 20.2404 12.4287 20.3156V20.4884C13.4794 21.8632 15.1361 22.75 17 22.75 18.8644 22.75 20.5216 21.8627 21.5722 20.4873z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#4DC4FF"
                            d="M7 3.75C5.75736 3.75 4.75 4.75736 4.75 6 4.75 7.24264 5.75736 8.25 7 8.25 8.24264 8.25 9.25 7.24264 9.25 6 9.25 4.75736 8.24264 3.75 7 3.75zM17 13.75C15.7574 13.75 14.75 14.7574 14.75 16 14.75 17.2426 15.7574 18.25 17 18.25 18.2426 18.25 19.25 17.2426 19.25 16 19.25 14.7574 18.2426 13.75 17 13.75z"
                          ></path>
                          <path
                            fill="#5E94FF"
                            d="M6 14.25C4.48122 14.25 3.25 15.4812 3.25 17 3.25 18.5188 4.48122 19.75 6 19.75 7.51878 19.75 8.75 18.5188 8.75 17 8.75 15.4812 7.51878 14.25 6 14.25zM18 4.25C19.5188 4.25 20.75 5.48122 20.75 7 20.75 8.51878 19.5188 9.75 18 9.75 16.4812 9.75 15.25 8.51878 15.25 7 15.25 5.48122 16.4812 4.25 18 4.25z"
                          ></path>
                          <path
                            fill="#5485E5"
                            fill-rule="evenodd"
                            d="M7 1.25V12.75C3.82436 12.75 1.25 10.1756 1.25 7 1.25 3.82436 3.82436 1.25 7 1.25zM17 11.25V22.75C13.8244 22.75 11.25 20.1756 11.25 17 11.25 13.8244 13.8244 11.25 17 11.25z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#45B0E5"
                            fill-rule="evenodd"
                            d="M6.99997 6.75V12.75C5.21367 12.75 3.61762 11.9355 2.56299 10.6575M17 16.75V22.75C15.2137 22.75 13.6176 21.9355 12.563 20.6575"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#45B0E5"
                            fill-rule="evenodd"
                            d="M7 3.75V8.25C5.75736 8.25 4.75 7.24264 4.75 6 4.75 4.75736 5.75736 3.75 7 3.75zM17 13.75V18.25C15.7574 18.25 14.75 17.2426 14.75 16 14.75 14.7574 15.7574 13.75 17 13.75z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#5485E5"
                            fill-rule="evenodd"
                            d="M18 4.25C16.4812 4.25 15.25 5.48122 15.25 7 15.25 8.51878 16.4812 9.75 18 9.75V4.25zM6 14.25C4.48122 14.25 3.25 15.4812 3.25 17 3.25 18.5188 4.48122 19.75 6 19.75V14.25z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      }
                      title={"User Network"}
                    ></Items>
                  </Link>
                </li>
                {/* <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to="explore">
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="user-network"
                        >
                          <path
                            fill="#8B98A6"
                            fill-rule="evenodd"
                            d="M7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H12C12.4142 16.25 12.75 16.5858 12.75 17 12.75 17.4142 12.4142 17.75 12 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17zM16.75 7C16.75 6.58579 16.4142 6.25 16 6.25H12C11.5858 6.25 11.25 6.58579 11.25 7 11.25 7.41421 11.5858 7.75 12 7.75H16C16.4142 7.75 16.75 7.41421 16.75 7zM9.96967 9.96967C10.2626 9.67678 10.7374 9.67678 11.0303 9.96967L14.0303 12.9697C14.3232 13.2626 14.3232 13.7374 14.0303 14.0303 13.7374 14.3232 13.2626 14.3232 12.9697 14.0303L9.96967 11.0303C9.67678 10.7374 9.67678 10.2626 9.96967 9.96967z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#5E94FF"
                            d="M7 1.25C3.82436 1.25 1.25 3.82436 1.25 7 1.25 10.1756 3.82436 12.75 7 12.75 10.1756 12.75 12.75 10.1756 12.75 7 12.75 3.82436 10.1756 1.25 7 1.25zM17 11.25C13.8244 11.25 11.25 13.8244 11.25 17 11.25 20.1756 13.8244 22.75 17 22.75 20.1756 22.75 22.75 20.1756 22.75 17 22.75 13.8244 20.1756 11.25 17 11.25z"
                          ></path>
                          <path
                            fill="#4DC4FF"
                            fill-rule="evenodd"
                            d="M11.5722 10.4873V10.3156C11.5722 10.2404 11.5609 10.1656 11.5386 10.0938 10.9393 8.15776 9.13526 6.75 7.00045 6.75 4.86564 6.75 3.06159 8.15776 2.46226 10.0938 2.44002 10.1656 2.42871 10.2404 2.42871 10.3156V10.4884C3.47939 11.8632 5.13613 12.75 7 12.75 8.86441 12.75 10.5216 11.8627 11.5722 10.4873zM21.5722 20.4873V20.3156C21.5722 20.2404 21.5609 20.1656 21.5386 20.0938 20.9393 18.1578 19.1353 16.75 17.0005 16.75 14.8656 16.75 13.0616 18.1578 12.4623 20.0938 12.44 20.1656 12.4287 20.2404 12.4287 20.3156V20.4884C13.4794 21.8632 15.1361 22.75 17 22.75 18.8644 22.75 20.5216 21.8627 21.5722 20.4873z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#4DC4FF"
                            d="M7 3.75C5.75736 3.75 4.75 4.75736 4.75 6 4.75 7.24264 5.75736 8.25 7 8.25 8.24264 8.25 9.25 7.24264 9.25 6 9.25 4.75736 8.24264 3.75 7 3.75zM17 13.75C15.7574 13.75 14.75 14.7574 14.75 16 14.75 17.2426 15.7574 18.25 17 18.25 18.2426 18.25 19.25 17.2426 19.25 16 19.25 14.7574 18.2426 13.75 17 13.75z"
                          ></path>
                          <path
                            fill="#5E94FF"
                            d="M6 14.25C4.48122 14.25 3.25 15.4812 3.25 17 3.25 18.5188 4.48122 19.75 6 19.75 7.51878 19.75 8.75 18.5188 8.75 17 8.75 15.4812 7.51878 14.25 6 14.25zM18 4.25C19.5188 4.25 20.75 5.48122 20.75 7 20.75 8.51878 19.5188 9.75 18 9.75 16.4812 9.75 15.25 8.51878 15.25 7 15.25 5.48122 16.4812 4.25 18 4.25z"
                          ></path>
                          <path
                            fill="#5485E5"
                            fill-rule="evenodd"
                            d="M7 1.25V12.75C3.82436 12.75 1.25 10.1756 1.25 7 1.25 3.82436 3.82436 1.25 7 1.25zM17 11.25V22.75C13.8244 22.75 11.25 20.1756 11.25 17 11.25 13.8244 13.8244 11.25 17 11.25z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#45B0E5"
                            fill-rule="evenodd"
                            d="M6.99997 6.75V12.75C5.21367 12.75 3.61762 11.9355 2.56299 10.6575M17 16.75V22.75C15.2137 22.75 13.6176 21.9355 12.563 20.6575"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#45B0E5"
                            fill-rule="evenodd"
                            d="M7 3.75V8.25C5.75736 8.25 4.75 7.24264 4.75 6 4.75 4.75736 5.75736 3.75 7 3.75zM17 13.75V18.25C15.7574 18.25 14.75 17.2426 14.75 16 14.75 14.7574 15.7574 13.75 17 13.75z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#5485E5"
                            fill-rule="evenodd"
                            d="M18 4.25C16.4812 4.25 15.25 5.48122 15.25 7 15.25 8.51878 16.4812 9.75 18 9.75V4.25zM6 14.25C4.48122 14.25 3.25 15.4812 3.25 17 3.25 18.5188 4.48122 19.75 6 19.75V14.25z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      }
                      title={"User Network"}
                    ></Items>
                  </Link>
                </li> */}
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
