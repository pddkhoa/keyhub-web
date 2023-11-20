import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../Search/search";
import { RootStateToken } from "../../types/token";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AlphabetAvatar from "../Avatar/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ModeToggle } from "../DarkMode/modeToggle";
import { ButtonAddPost } from "../ui/buttonAddPost";
import { REQUEST_TYPE } from "@/types";
import useFetch from "@/hooks/useFetch";

const Header = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);
  const userData = useSelector((state: RootState) => state.user.detail.data);
  const user = useSelector((state: RootStateToken) => state.auth.login);
  const refreshToken = user?.data.refreshToken;
  const navigate = useNavigate();
  const { sendRequest } = useFetch();

  const handleLogout = () => {
    sendRequest({ type: REQUEST_TYPE.LOGOUT, slug: refreshToken, data: null });
  };
  return (
    <header className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-900-900 to-slate-950 w-full border-border border-b-2 fixed z-50">
      <div className="mx-auto max-w-screen-3xl px-8 py-2 ">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex gap-5 justify-center items-center">
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 via-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Rainbow Hover
            </span>
            {/* <SearchBar /> */}
          </div>
          <div className="flex gap-5 items-center justify-end mx-4">
            {data.token ? (
              <>
                <Link to={"/editor"}>
                  <ButtonAddPost />
                </Link>
                <a
                  href="#"
                  className="block shrink-0 rounded-full  p-2.5 bg-input hover:brightness-75 cursor-pointer text-title-foreground"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
                <span
                  aria-hidden="true"
                  className="block h-6 w-px rounded-full bg-gray-200"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex justify-center items-center cursor-pointer hover:brightness-75">
                      <AlphabetAvatar size={40} />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 mr-4 ">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => {
                        navigate("/profile");
                      }}
                      className="cursor-pointer h-12"
                    >
                      <AlphabetAvatar size={40} />
                      <span className="ml-2">{userData.name}</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        navigate("/setting");
                      }}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        id="profile-setting"
                        className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="7.12"
                            x2="24.88"
                            y1="7.12"
                            y2="24.88"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#00c6ff"></stop>
                            <stop offset="1" stop-color="#0072ff"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#a)"
                          d="M28.05,14.15h-2.1c-.26-1.38-.81-2.71-1.61-3.88l1.49-1.49c.2-.18,.2-.52,0-.7l-1.91-1.91c-.19-.2-.51-.2-.7,0l-1.49,1.49c-1.17-.8-2.5-1.35-3.88-1.61V3.95c0-.28-.22-.5-.5-.5h-2.7c-.28,0-.5,.22-.5,.5v2.1c-1.38,.26-2.71,.81-3.88,1.61l-1.49-1.49c-.19-.2-.51-.2-.7,0l-1.91,1.91c-.2,.18-.2,.52,0,.7l1.49,1.49c-.8,1.17-1.35,2.5-1.61,3.88H3.95c-.28,0-.5,.22-.5,.5v2.7c0,.28,.22,.5,.5,.5h2.1c.26,1.38,.81,2.71,1.61,3.88l-1.49,1.49c-.2,.18-.2,.52,0,.7l1.91,1.91c.19,.2,.51,.2,.7,0l1.49-1.49c1.17,.8,2.5,1.35,3.88,1.61v2.1c0,.28,.22,.5,.5,.5h2.7c.28,0,.5-.22,.5-.5v-2.1c1.38-.26,2.71-.81,3.88-1.61l1.49,1.49c.19,.2,.51,.2,.7,0l1.91-1.91c.2-.18,.2-.52,0-.7l-1.49-1.49c.8-1.17,1.35-2.5,1.61-3.88h2.1c.28,0,.5-.22,.5-.5v-2.7c0-.28-.22-.5-.5-.5Zm-12.05,8.31c-3.56,0-6.46-2.9-6.46-6.46,.33-8.56,12.59-8.56,12.92,0,0,3.56-2.9,6.46-6.46,6.46Zm0-10.78c.9,0,1.63,.78,1.63,1.75,.05,1.33-1.52,2.28-2.58,1.42-1.26-.9-.64-3.2,.95-3.17Zm3.26,7.36c-.04,.39,.19,1.27-.44,1.27h-5.64c-.63,0-.41-.89-.44-1.27,.13-4.31,6.39-4.33,6.53,0Z"
                        ></path>
                      </svg>
                      <span>Setting Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        navigate("/draft");
                      }}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 64 64"
                        id="concept"
                        className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
                      >
                        <path
                          fill="#168fd6"
                          d="M57 31v19L46 61H8a2.006 2.006 0 0 1-2-2V31a2.006 2.006 0 0 1 2-2h47a2.006 2.006 0 0 1 2 2Z"
                        ></path>
                        <path
                          d="M57 49h-9a2 2 0 0 0-2 2v9l11-10Z"
                          opacity=".1"
                        ></path>
                        <path
                          fill="#044388"
                          d="M57 50h-9a2 2 0 0 0-2 2v9Z"
                        ></path>
                        <path
                          d="M20.63 29h4.05c-1 6.35-2.36 14.96-2.85 18.04a2.005 2.005 0 0 1-3.96-.63c.53-3.34 1.74-10.94 2.76-17.41zm21.56 13.02-1.45-1.23a1.992 1.992 0 0 1-2.39-.67c-1.6-2.21-5.02-6.96-8.02-11.12h4.94l6.33 8.78a1.984 1.984 0 0 1-.12 2.47z"
                          opacity=".1"
                        ></path>
                        <path
                          fill="#044388"
                          d="m42.19 41.02-1.45-1.23a1.992 1.992 0 0 1-2.39-.67c-2.62-3.635-10.143-14.075-12.65-17.55-.654 4.142-3.17 20.04-3.87 24.47a2.005 2.005 0 0 1-3.96-.63c.846-5.337 3.422-21.584 4.23-26.66l3.71-3.87 6.59 9.14 9.2 12.76a1.984 1.984 0 0 1-.12 2.47Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M31.65 51.515a18.588 18.588 0 0 1-7.536-1.74 1 1 0 0 1 .893-1.79c.054.026 5.408 2.639 10.118.966a9.695 9.695 0 0 0 5.526-5.485 1 1 0 1 1 1.82.827 11.365 11.365 0 0 1-10.82 7.222Z"
                        ></path>
                        <path
                          fill="#044388"
                          d="M46.35 9.88c-.133 5.275-7.869 5.275-8 0 .14-5.293 7.869-5.256 8 0zm0 12a4 4 0 0 1-8 0 4 4 0 0 1 8 0z"
                        ></path>
                        <path
                          fill="#42210b"
                          d="m46.23 8.92-1.67 1.67a1.017 1.017 0 0 1-1.42 0l-2.5-2.5a1.004 1.004 0 0 1 1.42-1.42l1.79 1.8 1.37-1.37a3.903 3.903 0 0 1 1.01 1.82Z"
                          opacity=".1"
                        ></path>
                        <path
                          fill="#ccdde7"
                          d="M43.85 11.88a.997.997 0 0 1-.708-.293l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.793 1.792 5.293-5.293a1 1 0 0 1 1.414 1.415l-6 6a.997.997 0 0 1-.707.293zm14-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm1 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2z"
                        ></path>
                        <path
                          fill="#044388"
                          d="M57.85 20.88h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm1 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2z"
                        ></path>
                        <path
                          fill="#168fd6"
                          d="M28.56 6.88v8h-6v-8a2.006 2.006 0 0 1 2-2h2a2 2 0 0 1 2 2Z"
                        ></path>
                        <path
                          d="M32.4 24.02a8.08 8.08 0 0 1-2.9 2.82l-3.8-5.27-.99 6.27a7.934 7.934 0 0 1-3.82-1.47l1.21-7.62 1.76.28-1.3-1.81 3.25-2.34zm-3.84-11.55v2.41h-6v-2.41a7.979 7.979 0 0 1 6 0z"
                          opacity=".1"
                        ></path>
                        <path
                          fill="#ccdde7"
                          d="M32.561 19.88a7 7 0 0 1-7 7c-9.266-.32-9.264-13.682 0-14a7 7 0 0 1 7 7Z"
                        ></path>
                      </svg>
                      <span>List Draft</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        navigate("/bookmark");
                      }}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Gradient Line"
                        viewBox="0 0 24 24"
                        className="w-10 h-10  mr-2 bg-input p-1 rounded-full"
                        id="bookmark"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="-10.17"
                            x2="32.62"
                            y1="-9.87"
                            y2="32.91"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#9cecfb"></stop>
                            <stop offset=".51" stop-color="#65c7f7"></stop>
                            <stop offset="1" stop-color="#0052d4"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#a)"
                          d="M18,23a2,2,0,0,1-1-.27l-5-2.86L7,22.73A2,2,0,0,1,4,21V4A3,3,0,0,1,7,1H17a3,3,0,0,1,3,3V21a2,2,0,0,1-1,1.73A2,2,0,0,1,18,23Zm-6-5.13a1.94,1.94,0,0,1,1,.27L18,21V4a1,1,0,0,0-1-1H7A1,1,0,0,0,6,4V21l5-2.86A1.94,1.94,0,0,1,12,17.87ZM15,7H9A1,1,0,0,1,9,5h6a1,1,0,0,1,0,2Z"
                        ></path>
                      </svg>
                      <span>Bookmark</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <ModeToggle />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10  mr-2 bg-input p-1.5 rounded-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        id="logout"
                      >
                        <path
                          fill="#5E94FF"
                          fill-rule="evenodd"
                          d="M15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H3C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12Z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#5E94FF"
                          fill-rule="evenodd"
                          d="M7.03033 7.96967C6.73744 7.67678 6.26256 7.67678 5.96967 7.96967L2.46967 11.4697C2.17678 11.7626 2.17678 12.2374 2.46967 12.5303L5.96967 16.0303C6.26256 16.3232 6.73744 16.3232 7.03033 16.0303 7.32322 15.7374 7.32322 15.2626 7.03033 14.9697L4.06066 12 7.03033 9.03033C7.32322 8.73744 7.32322 8.26256 7.03033 7.96967zM8.25 4C8.25 3.58579 8.58579 3.25 9 3.25H21C21.4142 3.25 21.75 3.58579 21.75 4V20C21.75 20.4142 21.4142 20.75 21 20.75H9C8.58579 20.75 8.25 20.4142 8.25 20V17C8.25 16.5858 8.58579 16.25 9 16.25 9.41421 16.25 9.75 16.5858 9.75 17V19.25H20.25V4.75H9.75V7C9.75 7.41421 9.41421 7.75 9 7.75 8.58579 7.75 8.25 7.41421 8.25 7V4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="mt-1">
                <Link
                  to={"/register"}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Register
                </Link>
                <Link
                  to={"/login"}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
