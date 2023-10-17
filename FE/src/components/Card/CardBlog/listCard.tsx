import AlphabetAvatar from "../../Avatar/avatar";
import { ArrowRight, BadgeCheck, Heart, MessageCircle } from "lucide-react";
import BlogPost from "@/types/blog";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
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
import { IconBookmark, IconDelete, IconUnBookmark } from "@/components/ui/icon";
import banner_default from "../../../asset/__banner-default.jpg";
interface GridCardProps {
  data: BlogPost;
  setActiveBlog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GridCard: React.FC<GridCardProps> = ({ data, setActiveBlog }) => {
  const formatDate = () => {
    const inputDate = data?.create_date;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };
  const userData = useSelector((state: RootState) => state.user.detail.data);
  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);
  const active = false;
  const [removing, setRemoving] = useState(false);

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
              <button className="hover:brightness-150 opacity-70 rounded-full hover:bg-input p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  id="menumeatballs"
                >
                  <path
                    fill="#ffff"
                    d="M12 10C13.1046 10 14 10.8954 14 12 14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10zM4 10C5.10457 10 6 10.8954 6 12 6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10zM20 10C21.1046 10 22 10.8954 22 12 22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10z"
                    className="color000000 svgShape"
                  ></path>
                </svg>
              </button>
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
                <IconDelete className="w-6 h-6 mr-2" />
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setDisplayCreate.on(),
                    setDisplayModal("BOOKMARK"),
                    setActiveBlog(!active);
                }}
                className="cursor-pointer"
              >
                {data.isSave ? (
                  <>
                    <IconUnBookmark className="mr-2" />
                    <span>Unbookmark</span>
                  </>
                ) : (
                  <>
                    <IconBookmark className="w-6 h-6 mr-2" />
                    <span>Bookmark</span>
                  </>
                )}
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
            src={data.avatar ? data.avatar : banner_default}
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
          <DeleteBlog
            setFlag={setDisplayCreate}
            id={data.id}
            setRemoving={setRemoving}
          />
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
