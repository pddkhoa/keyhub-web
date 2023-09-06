import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import logoLight from "../../asset/logo.png";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

import { SiKeystone } from "react-icons/si";
import Switcher from "../ToggleMode/switch";

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
      className={` bg-white dark:bg-black dark:text-white rounded p-3 duration-300 fixed z-50 h-full group border border-r ${
        open ? `w-2/12` : `w-20`
      }`}
    >
      <div
        className="absolute cursor-pointer bg-white dark:bg-black rounded-lg shadow-xl opacity-0 group-hover:opacity-100 duration-300  -right-3 top-20"
        onClick={handleOpenSidebar}
      >
        {
          <TbSquareRoundedChevronRight
            className={`w-full h-6 duration-300 transition  ${
              open ? "rotate-180" : ""
            }`}
          />
        }
      </div>

      <div className="flex items-center space-x-3 text-sm  p-2 mb-10 mt-3">
        {!open ? (
          <span className=" pl-2 cursor-pointer">
            <SiKeystone className="w-6 h-6 text-black dark:text-white" />
          </span>
        ) : (
          <span className=" pl-2 cursor-pointer ">
            <img src={logoLight} alt="logo-light" />
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm mt-10">
        <div>
          <div className="flex w-full items-center space-x-3 text-gray-700 hover p-2 group rounded-md font-medium hover:bg-gray-200 dark:text-white dark:hover:bg-gray-500 cursor-pointer focus:shadow-outline">
            <span className="text-gray-600 pl-2">
              <AiFillHome className="w-6 h-6  text-black dark:text-white transition hover:duration-300 group-hover:scale-110 ease-in-out" />
            </span>
            <span
              className={`text-lg  dark:text-white ${
                open ? `scale-100 duration-300 transition` : `scale-0`
              }`}
            >
              Dashboard
            </span>
          </div>
        </div>
        <div>
          <div className="absolute bottom-2">
            <Switcher />
          </div>
          <div className="absolute bottom-2">
            <Switcher />
          </div>
          <div className="absolute bottom-2">
            <Switcher />
          </div>
        </div>
      </div>
    </div>
  );
};
