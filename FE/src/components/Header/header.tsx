import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../Search/search";
import { RootStateToken } from "../../types/token";
import { useSelector } from "react-redux";
import logoLight from "../../asset/logo-white.png";
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
import { UserCog2 } from "lucide-react";

const Header = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);
  const userData = useSelector((state: RootState) => state.user.detail.data);
  const navigate = useNavigate();

  return (
    <div className="bg-background w-full border-border border-b-2 fixed z-50">
      <div className="md:flex justify-between px-6 py-2">
        <div className="flex gap-5 w-2/4">
          <span className=" cursor-pointer my-auto">
            <img src={logoLight} alt="logo-light" width={120} />
          </span>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-row  md:flex-row md:block">
          {data.token ? (
            <div className="ml-10 flex gap-5">
              <div className="rounded-full p-2.5 bg-input hover:brightness-75 cursor-pointer text-title-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-5 w-5 "
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
              <div className="rounded-full p-2.5 bg-input hover:brightness-75 cursor-pointer text-title-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle h-5 w-5 "
                >
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex justify-center items-center cursor-pointer hover:brightness-75">
                    <AlphabetAvatar size={40} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-4 ">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/profile");
                    }}
                    className="cursor-pointer"
                  >
                    <AlphabetAvatar size={27} />
                    <span className="ml-2">{userData.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/profile/update");
                    }}
                    className="cursor-pointer"
                  >
                    <UserCog2 className="w-5 h-5 mr-4 ml-1" />
                    <span>Setting Account</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
  );
};
export default Header;
