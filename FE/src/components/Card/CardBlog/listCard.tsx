import AlphabetAvatar, { UserAvatar } from "../../Avatar/avatar";
import { BadgeCheck, Heart, MessageCircle } from "lucide-react";
import BlogPost from "@/types/blog";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface GridCardProps {
  data: BlogPost;
  setActiveBlog?: React.Dispatch<React.SetStateAction<boolean>>;
  isUser?: boolean;
}

export const GridCard: React.FC<GridCardProps> = ({
  data,
  setActiveBlog,
  isUser,
}) => {
  const formatDate = () => {
    const inputDate = data?.create_date;
    const formattedDate = inputDate && convertDate(inputDate);

    return formattedDate;
  };
  const userData = useSelector((state: RootState) => state.user.detail.data);
  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);
  const active = false;
  const [removing, setRemoving] = useState(false);

  return (
    <div className="bg-gray-900 border p-4 rounded-xl  max-w-xl">
      <div className="flex justify-between">
        <div className="flex items-center">
          {!isUser ? (
            <UserAvatar size={55} data={data.users.avatar} />
          ) : (
            <AlphabetAvatar size={55} />
          )}
          <div className="ml-1.5 text-sm leading-tight">
            {!isUser ? (
              <>
                <span className="text-lg text-title-foreground font-bold block ">
                  {data.users.name}
                </span>
                <span className="text-md text-blue-600 font-normal block">
                  @{data.users.second_name}
                </span>
              </>
            ) : (
              <>
                <span className="text-lg text-title-foreground font-bold block ">
                  {userData.name}
                </span>
                <span className="text-md text-blue-600 font-normal block">
                  @{userData.second_name}
                </span>
              </>
            )}
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:brightness-150 opacity-70 rounded-xl hover:bg-input p-2 h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
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
      <p className="h-16 text-2xl text-title font-extrabold break-all mt-3 whitespace-normal line-clamp-2">
        {data.title}
      </p>
      <img
        className="mt-2 rounded-2xl h-64 object-cover w-full"
        src={data.avatar}
      />
      <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
        {formatDate()}
      </p>
      <div className="border-border  border border-b-0 my-1" />
      <div className="text-gray-500 dark:text-gray-400 flex ">
        <div className="flex items-center gap-2 w-fit mt-1 pt-2">
          <span className="group relative transition ease-out duration-300  bg-input h-9 px-2 py-2 text-center rounded-full hover:brightness-150 cursor-pointer hover:scale-110">
            <svg
              className="h-5 w-5 text-title-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              />
            </svg>
            <span
              className="absolute -top-10 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg text-title-foreground
   bg-card py-2 text-sm
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
            >
              Like<span></span>
            </span>
          </span>
          <span className="text-lg text-title-foreground ">100+</span>
        </div>
        <div className="flex items-center gap-2 w-fit mt-1 pt-2 pl-5">
          <span className="group relative transition ease-out duration-300 ml-4 bg-input h-9 px-2 py-2 text-center rounded-full hover:brightness-150 cursor-pointer hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              className="w-6 h-5 text-title-foreground"
              viewBox="0 0 24 24"
              id="comment"
            >
              <path
                fill="currentColor"
                d="M3.0703,17.9941v1.3257c0,1.1392,0.6533,2.1274,1.665,2.5171c0.2871,0.1108,0.582,0.1646,0.8721,0.1646
		c0.666,0,1.3086-0.2842,1.7939-0.8198l1.4307-1.5781c2.2764,0.1025,4.5771-0.0059,6.8545-0.3228
		c1.5371-0.2114,2.7617-1.4438,3.0459-3.0562c0.1099-0.5847,0.1713-1.1757,0.2094-1.7531c0.0847-0.0117,0.1729-0.0192,0.2564-0.0311
		c1.3076-0.1826,2.3516-1.2554,2.5957-2.6641C21.9307,11.0137,22,10.2041,22,9.3701c0-0.8408-0.0693-1.6538-0.2061-2.4155
		c-0.168-0.9443-0.6973-1.7583-1.4209-2.2109c-0.334-0.228-0.7471-0.3887-1.1709-0.4536c-2.6729-0.3848-5.5781-0.3862-8.2744,0.0015
		c-0.4131,0.0635-0.8105,0.2202-1.1123,0.4272c-0.7568,0.4663-1.2891,1.2808-1.4551,2.21C8.3509,6.9746,8.3483,7.0234,8.3397,7.0698
		C7.3392,7.1252,6.326,7.2106,5.2998,7.3511c-0.4922,0.0752-0.96,0.2559-1.3047,0.4917c-0.8994,0.54-1.5303,1.48-1.7275,2.5698
		C2.0898,11.3433,2,12.3213,2,13.3198s0.0898,1.9771,0.2627,2.8789C2.3701,16.8647,2.6523,17.4878,3.0703,17.9941z M10.9033,6.396
		c0.0928-0.0635,0.2129-0.1099,0.3193-0.1265c2.4863-0.3574,5.2188-0.356,7.6855-0.0015c0.1221,0.019,0.248,0.0664,0.3701,0.1489
		c0.2744,0.1719,0.4785,0.5039,0.5469,0.8892C19.9414,7.9531,20,8.6475,20,9.3701c0,0.7158-0.0586,1.4067-0.1758,2.0591
		c-0.0889,0.5127-0.4395,0.9312-0.8477,1.0205c-0.007-0.1337-0.0236-0.2635-0.0339-0.396c-0.0097-0.1236-0.019-0.2462-0.0315-0.3685
		c-0.0438-0.4293-0.0988-0.8533-0.1768-1.2633c-0.1992-1.0991-0.8301-2.0391-1.6826-2.5488
		c-0.3916-0.2661-0.8594-0.4468-1.3652-0.5239c-0.7127-0.0981-1.436-0.1658-2.1642-0.2205c-0.2556-0.02-0.51-0.0382-0.7673-0.0531
		c-0.6505-0.0359-1.3059-0.0598-1.9694-0.0659C10.6899,7.0089,10.5958,7,10.5,7c-0.0303,0-0.0596,0-0.0898,0
		C10.5107,6.7451,10.6768,6.5361,10.9033,6.396z M4.2344,10.7783c0.0977-0.54,0.3779-0.9736,0.8369-1.251
		c0.1455-0.0981,0.333-0.1689,0.5146-0.1968c1.2285-0.1685,2.459-0.2729,3.6475-0.311c0.5078-0.0122,1.0161-0.0156,1.5231-0.011
		c0.6246,0.0043,1.2455,0.0269,1.862,0.0621c0.2514,0.0137,0.5005,0.0326,0.7499,0.0513c0.6854,0.0535,1.3677,0.1153,2.031,0.2066
		c0.1963,0.0298,0.3838,0.1006,0.5762,0.229c0.4121,0.2471,0.6924,0.6807,0.792,1.23C16.9219,11.5947,17,12.4468,17,13.3198
		c0,0.0496,0.001,0.0943-0.0037,0.1432c-0.0015,0.0307-0.0023,0.0564-0.0061,0.1053c-0.0088,0.7788-0.084,1.5483-0.2246,2.2979
		c-0.1328,0.7524-0.6895,1.3418-1.3535,1.4336c-2.3115,0.3218-4.6484,0.418-6.9434,0.2822
		c-0.2969-0.0181-0.5957,0.1021-0.7998,0.3262l-1.75,1.9307c-0.1387,0.1523-0.2939,0.1987-0.4648,0.1313
		c-0.1855-0.0713-0.3838-0.2798-0.3838-0.6504v-1.7197c0-0.2778-0.1152-0.5435-0.3193-0.7324
		c-0.2695-0.2505-0.4521-0.6006-0.5186-1.0151C4.0781,15.0454,4,14.1929,4,13.3198S4.0781,11.5947,4.2344,10.7783z"
              ></path>
            </svg>
            <span
              className="absolute -top-10 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg
   bg-card py-2 text-sm text-title-foreground
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
            >
              Comment<span></span>
            </span>
          </span>
          <span className="text-lg text-title-foreground ">100+</span>
        </div>
        <div className="flex justify-end w-full mt-1 pt-2 pr-2">
          <Link to={`/blog/${data.id}`}>
            <Button
              variant={"gradient"}
              // onClick={() => {
              //   setDisplayModal("PREVIEW"), setDisplayCreate.on();
              // }}
              className="transition group relative ease-out duration-300 bg-input h-9 px-2 py-2 text-center rounded-lg text-gray-100 cursor-pointer hover:brightness-150 hover:scale-110"
            >
              <span>Read Post</span>
            </Button>
          </Link>
        </div>
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
