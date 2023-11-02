import convertDate from "@/components/FormatDate/formatDate";
import { BadgeCheck, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { UserAvatar } from "@/components/Avatar/avatar";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal/modal";
import useBoolean from "@/hooks/useBoolean";
import { Link } from "react-router-dom";
import { useState } from "react";
import banner from "../../asset/__banner-default.jpg";
import BlogPost from "@/types/blog";
import { RemoveBookmark } from "../Modal/Bookmark/removeBookmark";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { IconDelete, IconEdit, IconUnBookmark } from "../ui/icon";
import { DeleteBlog } from "../Modal/Blog/deleteBlog";

interface CardProps {
  data: BlogPost;
  cardType: string;
  setRemoving?: React.Dispatch<React.SetStateAction<boolean>>;
}
// Shared Card component
export const Card: React.FC<CardProps> = ({ data, cardType, setRemoving }) => {
  const formatDate = () => {
    const inputDate = data.create_date;
    const formattedDate = convertDate(inputDate);
    return formattedDate;
  };

  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  return (
    <div className="relative bg-gray-800 w-full h-44 flex md:flex-row md:space-x-5 md:space-y-0 rounded-xl hover:shadow-lg p-4 mx-auto cursor-pointer hover:bg-hover shadow-xl">
      <div className="w-1/5 h-full ">
        <img
          src={data.avatar || banner}
          alt="tailwind logo"
          className="rounded-xl w-full h-full object-cover opacity-75"
        />
      </div>

      <div className="w-3/4 h-fit flex flex-col space-y-1">
        <div className="flex justify-between item-center">
          <div className="flex space-x-2 text-title-foreground">
            <span>{formatDate()}</span>
          </div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            {cardType === "draft" ? "Draft" : "Superhost"}
          </div>
        </div>

        <h3 className="text-title text-xl h-10 font-extrabold whitespace-normal line-clamp-2 truncate">
          {data.title}
        </h3>
        <p className="text-sm text-title-foreground ">{data.description}</p>

        <div className="w-full flex justify-between pt-2">
          <div className="flex justify-center items-center space-x-2">
            <UserAvatar size={40} data={data?.users?.avatar} />
            <div className="flex text-title-foreground space-x-1">
              <span>@{data?.users?.second_name}</span>
              <span>
                <BadgeCheck className="w-4 h-4 mt-1 text-blue-500" />
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            {cardType === "default" ? (
              <div className="flex justify-center items-center space-x-5">
                <Heart className=" text-title  hover:text-title focus:outline-none focus:text-gray-700" />
                <MessageCircle className=" text-title  hover:text-titlefocus:outline-none focus:text-gray-700" />
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>

                {cardType === "draft" ? (
                  <DropdownMenuContent className="w-56 mr-2">
                    <DropdownMenuLabel>Option</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        to={`/editor/${data.id}`}
                        state={data}
                        className="flex items-center"
                      >
                        <IconEdit className="mr-2 w-5 h-5 brightness-75" />
                        <span>Edit</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setDisplayCreate.on(), setDisplayModal("DELETE");
                      }}
                      className="cursor-pointer"
                    >
                      <IconDelete className="mr-2 w-5 h-5" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                ) : cardType === "bookmark" ? (
                  <DropdownMenuContent className="w-56 mr-2">
                    <DropdownMenuLabel>Option</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={() => {
                        setDisplayCreate.on(), setDisplayModal("UNBOOKMARK");
                      }}
                      className="cursor-pointer"
                    >
                      <IconUnBookmark className="mr-2 w-5 h-5" />
                      <span>Unbookmark</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                ) : null}
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal === "UNBOOKMARK" ? (
          <RemoveBookmark
            setFlag={setDisplayCreate}
            id={data.id}
            setRemoving={setRemoving}
          />
        ) : null}
        {displayModal === "DELETE" ? (
          <DeleteBlog
            setFlag={setDisplayCreate}
            id={data.id}
            setRemoving={setRemoving}
          />
        ) : null}
      </Modal>
    </div>
  );
};
interface CardBookmarkProps {
  data: BlogPost;
  setRemoving: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardBookmark: React.FC<CardBookmarkProps> = ({
  data,
  setRemoving,
}) => {
  return <Card data={data} cardType="bookmark" setRemoving={setRemoving} />;
};

interface CardDraftProps {
  data: BlogPost;
  setRemoving: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardDraft: React.FC<CardDraftProps> = ({ data }) => {
  return <Card data={data} cardType="draft" />;
};

interface CardDefaultProps {
  data: BlogPost;
}

export const CardDefault: React.FC<CardDefaultProps> = ({ data }) => {
  return <Card data={data} cardType="default" />;
};
