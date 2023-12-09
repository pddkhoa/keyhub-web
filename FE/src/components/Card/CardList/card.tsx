import convertDate from "@/components/FormatDate/formatDate";
import { BadgeCheck } from "lucide-react";
import { UserAvatar } from "@/components/Avatar/avatar";
import Modal from "@/components/Modal/modal";
import useBoolean from "@/hooks/useBoolean";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlogPost from "@/types/blog";
import { RemoveBookmark } from "../../Modal/Bookmark/removeBookmark";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { IconDelete, IconEdit, IconUnBookmark } from "../../ui/icon";
import { DeleteBlog } from "../../Modal/Blog/deleteBlog";
import { Dropdown } from "../../Dropdown/dropdown";
import { SaveBlog } from "../../Modal/Blog/saveBlog";
import Preview from "../../Modal/Blog/preview";
import { ReportBlog } from "../../Modal/Blog/reportBlog";
import { HideBlog } from "../../Modal/Blog/hideBlog";

interface CardProps {
  data: BlogPost;
  cardType: string;
  setRemoving?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Card: React.FC<CardProps> = ({ data, cardType, setRemoving }) => {
  const formatDate = () => {
    const inputDate = data.create_date;
    let formattedDate;
    if (inputDate) {
      formattedDate = convertDate(inputDate);
    }
    return formattedDate;
  };

  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
      <img
        src={data.avatar || "https://source.unsplash.com/640x480/?1"}
        alt=""
        className="h-56 w-72 bg-gray-800 aspect-video"
      />
      <div className="flex h-56 flex-col justify-center flex-1 p-6 bg-gray-900 dark:bg-white/70">
        <span className="text-xs uppercase text-gray-500">{formatDate()}</span>
        <Link
          to={`/blog/${data.id}`}
          className="text-2xl font-bold text-white dark:text-black  hover:underline"
        >
          {data.title}
        </Link>
        <p className="my-3 text-gray-500">
          {data.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam
          possimus quas, error esse quos.
        </p>
        <div className="flex justify-between mt-2">
          <div className="flex justify-center items-center space-x-2">
            <UserAvatar size={40} data={data?.users?.avatar} />
            <div className="flex text-title-foreground space-x-1">
              <span>@{data?.users?.second_name}</span>
              <span>
                <BadgeCheck className="w-4 h-4 mt-1 text-blue-500" />
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex justify-center items-center space-x-5">
              {cardType === "default" ? (
                <>
                  <div className="flex justify-center items-center space-x-5">
                    <Dropdown
                      data={data}
                      setDisplayModal={setDisplayModal}
                      setDisplayCreate={setDisplayCreate}
                    />
                  </div>
                </>
              ) : (
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
          {displayModal === "DELETE" ? (
            <DeleteBlog setFlag={setDisplayCreate} id={data.id} />
          ) : null}
          {displayModal === "BOOKMARK" ? (
            <SaveBlog setFlag={setDisplayCreate} id={data.id} />
          ) : null}

          {displayModal === "UNBOOKMARK" ? (
            <RemoveBookmark setFlag={setDisplayCreate} id={data.id} />
          ) : null}
          {displayModal === "PREVIEW" ? (
            <Preview setFlag={setDisplayCreate} data={data} />
          ) : null}
          {displayModal === "REPORT" ? (
            <ReportBlog setFlag={setDisplayCreate} data={data} />
          ) : null}
          {displayModal === "HIDE" ? (
            <HideBlog setFlag={setDisplayCreate} id={data.id} />
          ) : null}
        </Modal>
      </div>
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
