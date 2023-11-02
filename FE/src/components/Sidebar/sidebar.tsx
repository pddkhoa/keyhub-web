import { useState } from "react";

import { Link } from "react-router-dom";
import { Items } from "./items";

import React from "react";
import "./sidebar.css";
import { ButtonMenu } from "./btnMenu";

type SidebarProps = {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidebar: React.FC<SidebarProps> = ({ setOpenSidebar }) => {
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen(!open);
    setOpenSidebar(!open);
  };

  return (
    <div
      className={`${
        open ? "w-52" : "w-16"
      } sidebar z-40 left-0  border-r-2 border-border  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-900-900 to-slate-950 ease-in-out group fixed top-0 h-full 
      }`}
    >
      <div
        className="absolute  cursor-pointer  shadow-xl bg-white  group-hover:opacity-100 duration-300 right-4 top-[70px] z-50"
        onClick={handleOpenSidebar}
      >
        {<ButtonMenu open={open} />}
      </div>
      <div
        className={`flex overflow-x-hidden overflow-y-auto flex-col h-full no-scrollbar`}
      >
        <div className="mt-28 w-full h-full ">
          <nav className="relative h-full  p-2 lg:block">
            <div className="flex flex-col justify-between h-full">
              <ul className="py-3 h-full sticky top-14  space-y-2">
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to={"/"}>
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
                            fillRule="evenodd"
                            d="M5 1C2.79086 1 1 2.79086 1 5V9V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V9V5C23 2.79086 21.2091 1 19 1H5ZM6.5 8H21V5C21 3.89543 20.1046 3 19 3H6.5H5C3.89543 3 3 3.89543 3 5V8H6.5ZM9 5.5C9 6.88071 7.88071 8 6.5 8C5.11929 8 4 6.88071 4 5.5C4 4.11929 5.11929 3 6.5 3C7.88071 3 9 4.11929 9 5.5ZM3 10H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V10ZM6.5 5C6.22386 5 6 5.22386 6 5.5C6 5.77614 6.22386 6 6.5 6C6.77614 6 7 5.77614 7 5.5C7 5.22386 6.77614 5 6.5 5ZM11 4.5C10.4477 4.5 10 4.94772 10 5.5C10 6.05228 10.4477 6.5 11 6.5H19C19.5523 6.5 20 6.05228 20 5.5C20 4.94772 19.5523 4.5 19 4.5H11Z"
                            clipRule="evenodd"
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
                              <stop stopColor="#57EAEA"></stop>
                              <stop offset="1" stopColor="#2BC9FF"></stop>
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          imageRendering="optimizeQuality"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
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
                              <stop offset="0" stopColor="#1e8ac6"></stop>
                              <stop offset=".302" stopColor="#834fbc"></stop>
                              <stop offset="1" stopColor="#e813b1"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#a)"
                            fillRule="nonzero"
                            d="M806 4063c-67,0 -67,-102 0,-102l509 0 177 -332 1351 0 177 332 509 0c67,0 67,102 0,102l-2723 0zm793 -635l-80 150 1297 0 -80 -150 1178 0c231,0 420,-189 421,-421l0 -2022c0,-232 -189,-421 -421,-421l-647 0c0,-93 12,-170 -55,-237 -34,-34 -81,-55 -132,-55l-1825 0c-51,0 -98,21 -132,55l0 0c-67,68 -55,143 -55,237l-647 0c-232,0 -421,189 -421,421l0 2027c1,226 190,416 421,416l1178 0zm1668 -2762l647 0c176,0 319,143 319,319l0 1977 -4131 0 0 -1977c0,-176 143,-319 319,-319l647 0 0 1981c0,103 84,187 187,187l1825 0c103,0 187,-84 187,-187l0 -1981zm-1888 507l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 273l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 272l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 273l1577 0c33,0 33,50 0,50l-1577 0c-33,0 -33,-50 0,-50zm0 272l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm0 272l1577 0c33,0 33,51 0,51l-1577 0c-33,0 -33,-51 0,-51zm221 -1577l0 0zm421 24l-250 0c-14,0 -26,-11 -26,-25l0 -412c0,-14 12,-25 26,-25l250 0c33,0 33,51 0,51l-225 0 0 155 220 0c33,0 33,50 0,50l-220 0 0 155 225 0c33,0 33,51 0,51zm-421 -435l0 411c0,25 -32,35 -46,14l-232 -343 0 329c0,33 -51,33 -51,0l0 -411c0,-25 33,-37 47,-13l231 341 0 -328c0,-34 51,-34 51,0zm837 80l-109 337c-8,25 -43,23 -49,-1l-109 -408c-9,-32 40,-45 49,-13l87 326 107 -331c8,-23 41,-23 48,0l108 331 87 -326c9,-32 58,-19 49,13l-109 408c-7,24 -41,25 -49,2l-110 -338zm589 -70l0 0zm-35 36l0 0zm35 351l0 0zm-35 -35l0 0zm-184 -261c0,-171 257,-166 257,0 0,33 -51,33 -51,0 0,-101 -155,-103 -155,0 0,128 206,25 206,206 0,166 -257,171 -257,0 0,-34 51,-34 51,0 0,103 155,101 155,0 0,-129 -206,-25 -206,-206z"
                          ></path>
                        </svg>
                      }
                      title={"Explore News"}
                    ></Items>
                  </Link>
                </li>
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to="user">
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          enableBackground="new 0 0 32 32"
                          viewBox="0 0 32 32"
                          className="w-7 h-7"
                          id="user"
                        >
                          <defs>
                            <linearGradient id="a">
                              <stop offset="0" stopColor="#000092"></stop>
                              <stop offset="1" stopColor="#ff00f3"></stop>
                            </linearGradient>
                            <linearGradient
                              id="b"
                              x1="2"
                              x2="27"
                              y1="16"
                              y2="16"
                              gradientUnits="userSpaceOnUse"
                              xlinkHref="#a"
                            ></linearGradient>
                          </defs>
                          <path
                            fill="url(#b)"
                            d="M 15.976562 5 C 13.495563 5 11.476563 7.019 11.476562 9.5 C 11.476562 10.937 12.16675 12.204297 13.21875 13.029297 C 11.98175 13.107297 10.886141 13.6815 10.119141 14.5625 C 9.8061406 14.3615 9.4759063 14.208516 9.1289062 14.103516 C 9.8129062 13.503516 10.253906 12.633297 10.253906 11.654297 C 10.253906 9.8212969 8.817375 8.3867187 6.984375 8.3867188 C 5.181375 8.3867188 3.7148437 9.8512969 3.7148438 11.654297 C 3.7148438 12.638297 4.1605625 13.512328 4.8515625 14.111328 C 3.2085625 14.608328 2 16.119828 2 17.923828 L 2 23.5 C 2 23.776 2.224 24 2.5 24 L 9 24 L 9 26.5 C 9 26.776 9.224 27 9.5 27 L 12.5 27 L 19.5 27 L 22.5 27 C 22.776 27 23 26.776 23 26.5 L 23 24 L 29.5 24 C 29.776 24 30 23.776 30 23.5 L 30 17.923828 C 30 16.119828 28.791438 14.609328 27.148438 14.111328 C 27.838438 13.511328 28.285156 12.638297 28.285156 11.654297 C 28.285156 9.8512969 26.818625 8.3847656 25.015625 8.3847656 C 23.182625 8.3847656 21.746094 9.8212969 21.746094 11.654297 C 21.746094 12.633297 22.187094 13.502563 22.871094 14.101562 C 22.524094 14.206563 22.193859 14.359547 21.880859 14.560547 C 21.105859 13.669547 19.994234 13.091438 18.740234 13.023438 C 19.789234 12.198438 20.476563 10.934 20.476562 9.5 C 20.476562 6.977 18.499562 5 15.976562 5 z M 15.976562 6 C 17.938562 6 19.476562 7.538 19.476562 9.5 C 19.476562 11.462 17.938563 13 15.976562 13 C 14.046563 13 12.476562 11.43 12.476562 9.5 C 12.476562 7.538 14.014562 6 15.976562 6 z M 6.984375 9.3847656 C 8.256375 9.3847656 9.2539062 10.382297 9.2539062 11.654297 C 9.2539062 12.926297 8.256375 13.923828 6.984375 13.923828 C 5.733375 13.923828 4.7148438 12.905297 4.7148438 11.654297 C 4.7148438 10.381297 5.711375 9.3847656 6.984375 9.3847656 z M 25.015625 9.3847656 C 26.287625 9.3847656 27.285156 10.382297 27.285156 11.654297 C 27.285156 12.905297 26.267625 13.923828 25.015625 13.923828 C 23.743625 13.923828 22.746094 12.926297 22.746094 11.654297 C 22.746094 10.382297 23.743625 9.3847656 25.015625 9.3847656 z M 13.5 14 L 18.5 14 C 19.695 14 20.750812 14.604484 21.382812 15.521484 C 21.416812 15.571484 21.440656 15.624781 21.472656 15.675781 C 21.548656 15.799781 21.620641 15.927547 21.681641 16.060547 C 21.712641 16.128547 21.739625 16.199531 21.765625 16.269531 C 21.815625 16.400531 21.857625 16.533875 21.890625 16.671875 C 21.906625 16.737875 21.923547 16.802141 21.935547 16.869141 C 21.973547 17.074141 22 17.284 22 17.5 L 22 23.5 L 22 26 L 20 26 L 20 18.5 C 20 18.224 19.776 18 19.5 18 C 19.224 18 19 18.224 19 18.5 L 19 26 L 13 26 L 13 18.5 C 13 18.224 12.776 18 12.5 18 C 12.224 18 12 18.224 12 18.5 L 12 26 L 10 26 L 10 23.5 L 10 17.5 C 10 17.284 10.026453 17.075094 10.064453 16.871094 C 10.076453 16.804094 10.093375 16.739828 10.109375 16.673828 C 10.143375 16.535828 10.185375 16.400531 10.234375 16.269531 C 10.261375 16.199531 10.287359 16.128547 10.318359 16.060547 C 10.379359 15.927547 10.450344 15.801734 10.527344 15.677734 C 10.559344 15.626734 10.583187 15.571484 10.617188 15.521484 C 11.249188 14.603484 12.305 14 13.5 14 z M 24.001953 14.921875 L 26.001953 14.921875 C 27.655953 14.921875 29.001953 16.267875 29.001953 17.921875 L 29.001953 23 L 29 23 L 28 23 L 28 18.5 C 28 18.224 27.776 18 27.5 18 C 27.224 18 27 18.224 27 18.5 L 27 23 L 23 23 L 23 17.5 C 23 17.227 22.967922 16.958359 22.919922 16.693359 C 22.909922 16.636359 22.898719 16.580437 22.886719 16.523438 C 22.831719 16.278437 22.758109 16.037688 22.662109 15.804688 C 22.640109 15.749688 22.613844 15.698531 22.589844 15.644531 C 22.546844 15.550531 22.507984 15.454281 22.458984 15.363281 C 22.928984 15.073281 23.455953 14.921875 24.001953 14.921875 z M 6 14.923828 L 8 14.923828 C 8.546 14.923828 9.0729688 15.075234 9.5429688 15.365234 C 9.4939688 15.456234 9.4551094 15.550531 9.4121094 15.644531 C 9.3881094 15.698531 9.3598906 15.749688 9.3378906 15.804688 C 9.2418906 16.037687 9.1682812 16.278438 9.1132812 16.523438 C 9.1002813 16.579438 9.0920312 16.637313 9.0820312 16.695312 C 9.0330313 16.959312 9 17.227 9 17.5 L 9 23 L 5 23 L 5 18.5 C 5 18.224 4.776 18 4.5 18 C 4.224 18 4 18.224 4 18.5 L 4 23 L 3 23 L 3 17.923828 C 3 16.269828 4.346 14.923828 6 14.923828 z "
                          ></path>
                        </svg>
                      }
                      title={"User Network"}
                    ></Items>
                  </Link>
                </li>
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to="/categories">
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 24 24"
                          className="w-7 h-7 "
                          id="book"
                        >
                          <defs>
                            <linearGradient
                              id="a"
                              x1="2"
                              x2="12"
                              y1="12"
                              y2="12"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#16b0e2"></stop>
                              <stop offset="1" stopColor="#6e5af0"></stop>
                            </linearGradient>
                            <linearGradient
                              id="b"
                              x1="12"
                              x2="22"
                              y1="12.005"
                              y2="12.005"
                              xlinkHref="#a"
                            ></linearGradient>
                            <linearGradient
                              id="c"
                              x1="4.75"
                              x2="8.5"
                              y1="8.496"
                              y2="8.496"
                              xlinkHref="#a"
                            ></linearGradient>
                            <linearGradient
                              id="d"
                              x1="4.75"
                              x2="9.25"
                              y1="11.496"
                              y2="11.496"
                              xlinkHref="#a"
                            ></linearGradient>
                          </defs>
                          <g data-name="1">
                            <path
                              fill="url(#a)"
                              d="M12,5.3v16.03a1.009,1.009,0,0,1-.49-.11l-.04-.02a25.693,25.693,0,0,0-7.44-2.44l-.29-.04A2.055,2.055,0,0,1,2,16.744V4.664a1.967,1.967,0,0,1,2.16-1.99,18.757,18.757,0,0,1,7.06,2.34l.25.15A1.048,1.048,0,0,0,12,5.3Z"
                              opacity=".4"
                            ></path>
                            <path
                              fill="url(#b)"
                              d="M22,4.674v12.07a2.055,2.055,0,0,1-1.74,1.98l-.33.04a25.461,25.461,0,0,0-7.46,2.46.885.885,0,0,1-.47.11V5.3a1.048,1.048,0,0,0,.53-.14l.17-.11a18.851,18.851,0,0,1,7.07-2.37h.06A1.97,1.97,0,0,1,22,4.674Z"
                            ></path>
                            <path
                              fill="url(#c)"
                              d="M7.75,9.246H5.5a.75.75,0,0,1,0-1.5H7.75a.75.75,0,1,1,0,1.5Z"
                            ></path>
                            <path
                              fill="url(#d)"
                              d="M8.5,12.246h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z"
                            ></path>
                          </g>
                        </svg>
                      }
                      title={"Categories"}
                    ></Items>
                  </Link>
                </li>
                <li className="mt-0  flex items-center rounded-xl p-1.5 hover:bg-hover">
                  <Link to="/message">
                    <Items
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="message"
                        >
                          <path
                            fill="url(#paint0_linear_1_13183)"
                            fillRule="evenodd"
                            d="M21.455 4.73005C22 5.79961 22 7.19974 22 10V11.1842C22 12.8734 22 13.7179 21.798 14.4069C21.3188 16.041 20.041 17.3188 18.4069 17.798C17.7179 18 16.8734 18 15.1842 18H14.6354L14.5703 18.0001C13.5501 18.0066 12.5562 18.3251 11.7222 18.9128L11.6692 18.9506L9.05848 20.8154C8.1635 21.4546 6.98743 20.5314 7.3959 19.5103C7.68525 18.7869 7.15251 18 6.37341 18H5.77166C3.68863 18 2 16.3114 2 14.2283V10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H14C16.8003 2 18.2004 2 19.27 2.54497C20.2108 3.02433 20.9757 3.78924 21.455 4.73005ZM9.29426 9.7664C9.92735 9.13331 11.0054 9.38779 11.2885 10.2372C11.9242 12.1444 14.3448 12.7158 15.7664 11.2943L16.5303 10.5303C16.8232 10.2374 16.8232 9.76256 16.5303 9.46967C16.2374 9.17677 15.7626 9.17677 15.4697 9.46967L14.7057 10.2336C14.0726 10.8667 12.9946 10.6122 12.7115 9.76283C12.0758 7.85559 9.65517 7.28417 8.2336 8.70574L7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303C7.76256 10.8232 8.23744 10.8232 8.53033 10.5303L9.29426 9.7664Z"
                            clipRule="evenodd"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1_13183"
                              x1="12"
                              x2="12"
                              y1="2"
                              y2="21.026"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#834D9B"></stop>
                              <stop offset="1" stopColor="#D04ED6"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      }
                      title={"Message"}
                    ></Items>
                  </Link>
                </li>
              </ul>
              <div className="py-3 space-y-2">
                <div className="mt-0 w-full flex items-center rounded-xl p-1.5 hover:bg-hover ">
                  {/* <DropdownMenu>
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
                  </DropdownMenu> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
