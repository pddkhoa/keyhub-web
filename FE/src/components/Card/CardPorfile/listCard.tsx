import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import image from "../../../asset/banner.jpeg";
import AlphabetAvatar from "../../Avatar/avatar";
import {
  BadgeCheck,
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
} from "lucide-react";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import BlogPost from "@/types/blog";

interface GridCardProps {
  data: BlogPost;
}

export const GridCard: React.FC<GridCardProps> = ({ data }) => {
  return (
    <div className="w-80 h-[380px] bg-card rounded-xl p-4  border  shadow-sm hover:border-title-foreground hover:cursor-pointer hover:shadow-xl">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <AlphabetAvatar size={45} />
        </div>
        <div className="p-2 hover:bg-hover rounded-xl cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MoreVertical className=" text-title  focus:outline-none focus:text-gray-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={"right"}>
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex h-24 flex-col mx-2">
        <p className="my-3  font-bold text-lg text-title  break-words">
          {data.title}
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <img
          src={data?.avatar}
          alt="Paella dish"
          className="w-full h-40 rounded-xl"
        />
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="flex justify-around w-full">
          <div className="p-1.5 hover:bg-hover rounded-xl cursor-pointer">
            <Heart className=" text-title  hover:text-title focus:outline-none focus:text-gray-700" />
          </div>
          <div className="p-1.5 hover:bg-hover rounded-xl cursor-pointer">
            <MessageCircle className=" text-title  hover:text-titlefocus:outline-none focus:text-gray-700" />
          </div>
          <div className="p-1.5 hover:bg-hover rounded-xl cursor-pointer">
            <Bookmark className=" text-title  hover:text-title focus:outline-none focus:text-gray-700" />
          </div>
        </div>
      </div>
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
