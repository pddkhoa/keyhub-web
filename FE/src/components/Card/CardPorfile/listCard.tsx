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
import { Bookmark, Heart, MessageCircle, MoreVertical } from "lucide-react";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const ListCard = () => {
  return (
    <div className="max-w-md h-380 bg-card rounded-xl p-4  border  shadow-sm hover:border-title-foreground hover:cursor-pointer hover:shadow-xl">
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
      <div className="flex flex-col mx-2">
        <p className="my-3  font-bold text-lg text-title  break-words">
          Let us know what you think of the daily.dev extension on the chrome
          store!
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <img src={image} alt="Paella dish" className="w-full h-40 rounded-xl" />
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
