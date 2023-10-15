import AlphabetAvatar from "../../Avatar/avatar";
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  Heart,
  MessageCircle,
  Trash2,
} from "lucide-react";
import BlogPost from "@/types/blog";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import useBoolean from "@/hooks/useBoolean";
import Modal from "@/components/Modal/modal";
import { DeleteBlog } from "@/components/Modal/Blog/deleteBlog";
import convertDate from "@/components/FormatDate/formatDate";
import { SaveBlog } from "@/components/Modal/Blog/saveBlog";

interface GridCardProps {
  data: BlogPost;
}

export const GridCard: React.FC<GridCardProps> = ({ data }) => {
  const formatDate = () => {
    const inputDate = data?.create_date;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };
  const userData = useSelector((state: RootState) => state.user.detail.data);
  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  return (
    <div className="mb-4 break-inside p-6 bg-card  flex flex-col group over:brightness-90 transition-all  group  border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative  bg-clip-border cursor-pointer ">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex justify-center items-center">
          <a className="inline-block mr-2" href="#">
            <AlphabetAvatar size={60} />
          </a>
          <div className="flex flex-col">
            <div className="flex items-center">
              <a
                className="inline-block text-md text-title-foreground font-bold mr-2"
                href="#"
              >
                {userData.name}
              </a>
              <span>
                <svg
                  className="fill-blue-500 dark:fill-slate-50 w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                </svg>
              </span>
            </div>
            <div className="text-slate-500 text-sm  ">{formatDate()}.</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="text-gray-500 p-1 bg-gray-900 rounded-lg hover:bg-hover hover:brightness-150 hover:text-gray-300 cursor-pointer"
                variant="outline"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
              <DropdownMenuLabel>Option</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setDisplayCreate.on(), setDisplayModal("DELETE");
                }}
                className="cursor-pointer"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setDisplayCreate.on(), setDisplayModal("BOOKMARK");
                }}
                className="cursor-pointer"
              >
                {data.isSave ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    id="bookmark"
                    className="w-10 h-10 flex justify-center mx-auto"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1="11"
                        x2="37"
                        y1="24"
                        y2="24"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#f12711"></stop>
                        <stop offset="1" stop-color="#f5af19"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M37,7V41a1,1,0,0,1-1,1,1,1,0,0,1-.5-.14L24,35.16l-11.5,6.7A1,1,0,0,1,11,41V7a1,1,0,0,1,1-1H36A1,1,0,0,1,37,7Z"
                    ></path>
                  </svg>
                ) : (
                  <Bookmark className="w-5 h-5 mr-2" />
                )}
                <span>Bookmark</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <h2 className="text-2xl h-20 text-title font-extrabold break-words whitespace-normal line-clamp-2 truncate">
        {data.title}
      </h2>
      <div className="py-4 ">
        <div className="flex w-full h-[200px] group">
          <img
            className="w-full h-full object-cover opacity-90 rounded-lg group-hover:opacity-70"
            src={data.avatar}
          />
        </div>
      </div>

      <div className="py-1 flex justify-between">
        <a className="inline-flex items-center" href="#">
          <span className="mr-2">
            <svg
              className="fill-rose-600 dark:fill-rose-400"
              style={{ width: 24, height: 24 }}
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </span>
          <span className="text-lg font-bold text-title-foreground">
            {data.likes}
          </span>
        </a>
        <Link to={`/blog/${data.id}`}>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer group block px-5 py-2 rounded-md bg-card border-2 text-title-foreground text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90"
          >
            <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white">
              <ArrowRight className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white" />
            </span>
          </button>
        </Link>
      </div>
      <div>
        <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
        <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all absolute bottom-0" />
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal === "DELETE" ? (
          <DeleteBlog setFlag={setDisplayCreate} id={data.id} />
        ) : null}
        {displayModal === "BOOKMARK" ? (
          <SaveBlog setFlag={setDisplayCreate} id={data.id} />
        ) : null}
      </Modal>
    </div>
  );
};

export const ListCard = () => {
  return (
    <div className="relative w-full h-44 flex md:flex-row md:space-x-5 md:space-y-0 rounded-xl hover:shadow-lg   p-4  mx-auto cursor-pointer  hover:bg-hover">
      <div className="w-1/4 h-full ">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="tailwind logo"
          className="rounded-xl w-full h-full  object-cover"
        />
      </div>

      <div className="w-3/4 h-fit  flex flex-col space-y-1 ">
        <div className="flex justify-between item-center">
          <div className="flex space-x-2 text-title-foreground">
            <span className=" font-medium hidden md:block">Vacations</span>
            <span>-</span>
            <span>20/11/2022</span>
          </div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            Superhost
          </div>
        </div>

        <h3 className="font-black text-title text-xl">
          The Majestic and Wonderful Bahamas
        </h3>
        <p className="text-sm text-title-foreground ">
          The best kept secret of The Bahamas is the country’s sheer size and
          diversity. With 16 major islands, The Bahamas is an unmatched
          destination
        </p>
        <div className="w-full flex justify-between">
          <div className="flex justify-center items-center space-x-2">
            <AlphabetAvatar size={40} />
            <div className="flex text-title-foreground space-x-1">
              <span>@pddkhoa</span>
              <span>
                <BadgeCheck className="w-4 h-4 mt-1 text-blue-500" />
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <Heart className=" text-title  hover:text-title focus:outline-none focus:text-gray-700" />
            <MessageCircle className=" text-title  hover:text-titlefocus:outline-none focus:text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
