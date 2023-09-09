import { Avatar } from "../../components/Avatar/avatar";
import banner from "../../asset/banner.jpeg";
import { RiImageEditFill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import { AboutMe } from "../../components/UserProfile/aboutMe";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { CardProfile } from "../../components/Card/CardPorfile/cardProfile";
import { IconButton } from "../../components/Button/button";
import {
  FaPenNib,
  FaRegBookmark,
  FaPhotoVideo,
  FaRegHeart,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import TokenPayload from "../../types/user";
import jwt_decode from "jwt-decode";
import { RootStateToken } from "../../types/token";

export const Profile = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);
  const user = jwt_decode(data.token) as TokenPayload;

  return (
    <div className="container mx-auto min-h-0 px-4 py-6">
      <header className="mb-4 w-full">
        <div className="relative bg-slate-600 h-60 w-full rounded-xl">
          <div className="w-full h-full">
            <img
              src={banner}
              alt="banner"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-auto p-4">
            <div className="absolute right-2 top-48">
              <button
                type="button"
                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-1 focus:outline-none "
              >
                <RiImageEditFill className="w-5 h-5 text-white mr-2" />
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="relative  p-5 w-full">
          <div className="absolute -top-12">
            <Avatar />
            <div className="pl-2 mt-2">
              <h1 className="text-3xl font-bold">
                {user?.userDetails.users.name}
              </h1>
              <p className="text-gray-600">@johndoe</p>
            </div>
          </div>
          <div className="absolute right-10 top-20">
            <IconButton>
              Add New
              <MdLibraryAdd className="w-4 h-4 ml-2" />
            </IconButton>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-4 gap-4 mt-28">
        <div className="col-span-1">
          <AboutMe />
        </div>
        <div className="col-span-3">
          <div className="w-full h-54 rounded-md border shadow-sm text-black">
            <div className="flex flex-auto justify-between p-2">
              <div className=" w-full">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-5">
                  <li className="mr-2 cursor-pointer">
                    <div className="inline-flex text-black items-center justify-center p-4 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                      <FaPenNib className="mr-2 w-5 h-5" />
                      Blog
                    </div>
                  </li>
                  <li className="mr-2 cursor-pointer">
                    <div className="inline-flex text-black items-center justify-center p-4 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                      <FaPhotoVideo className="mr-2 w-5 h-5" />
                      Video
                    </div>
                  </li>
                  <li className="mr-2 cursor-pointer">
                    <div className="inline-flex text-black items-center justify-center p-4 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                      <FaRegHeart className="mr-2 w-5 h-5" />
                      Favorite
                    </div>
                  </li>
                  <li className="mr-2 cursor-pointer">
                    <div className="inline-flex text-black items-center justify-center p-4 border-b-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                      <FaRegBookmark className="mr-2 w-5 h-5" />
                      Saved
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-2 ">
                <div className="relative">
                  <div className="h-10 w-40">
                    <Dropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-0 mt-3 p-3 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-full ">
                <CardProfile />
              </div>
              <div className="col-span-1 h-full">
                <CardProfile />
              </div>
              <div className="col-span-1 h-full">
                <CardProfile />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
