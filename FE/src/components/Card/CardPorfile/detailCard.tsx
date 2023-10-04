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
import BlogPost from "@/types/blog";
import { da } from "date-fns/locale";

interface DetailCardProps {
  data: BlogPost;
}

export const DetailCard: React.FC<DetailCardProps> = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="w-full bg-card rounded-xl p-4  border  shadow-sm hover:border-title-foreground hover:cursor-pointer hover:shadow-xl">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <AlphabetAvatar size={60} />
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
        <div className="flex flex-col mx-2 my-3">
          <p className="font-bold text-xl text-title  break-words">
            {data.title}
          </p>
          <p className="text-title-foreground">{data.description}</p>
        </div>
        <div className="w-full overflow-hidden">
          <img
            src={data.avatar}
            alt="Paella dish"
            className="w-full h-72 rounded-xl"
          />
        </div>

        <div className="flex items-center justify-center pt-4">
          <div className="flex justify-around w-full">
            <div className="flex justify-center p-1.5 hover:bg-hover rounded-xl cursor-pointer w-1/3">
              <Heart className=" text-title  hover:text-title focus:outline-none focus:text-gray-700" />
            </div>
            <div className="flex justify-center p-1.5 hover:bg-hover rounded-xl cursor-pointer w-1/3">
              <MessageCircle className=" text-title  hover:text-titlefocus:outline-none focus:text-gray-700" />
            </div>
            <div className="flex justify-center p-1.5 hover:bg-hover rounded-xl cursor-pointer w-1/3">
              <Bookmark className=" text-title  hover:text-title focus:outline-none focus:text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
