import AlphabetAvatar from "@/components/Avatar/avatar";
import convertDate from "@/components/FormatDate/formatDate";
import { RemoveBookmark } from "@/components/Modal/Bookmark/removeBookmark";
import Modal from "@/components/Modal/modal";
import { Button } from "@/components/ui/button";
import useBoolean from "@/hooks/useBoolean";
import BlogPost from "@/types/blog";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";

interface CardBookmarkProps {
  data: BlogPost;
  setRemoving: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardBookmark: React.FC<CardBookmarkProps> = ({
  data,
  setRemoving,
}) => {
  const formatDate = () => {
    const inputDate = data?.create_date;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };
  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);
  return (
    <div className="relative w-full h-44 flex md:flex-row md:space-x-5 md:space-y-0 rounded-xl hover:shadow-lg   p-4  mx-auto cursor-pointer  hover:bg-hover">
      <div className="w-1/4 h-full ">
        <img
          src={data.avatar}
          alt="tailwind logo"
          className="rounded-xl w-full h-full  object-cover"
        />
      </div>

      <div className="w-3/4 h-fit  flex flex-col space-y-1 ">
        <div className="flex justify-between item-center">
          <div className="flex space-x-2 text-title-foreground">
            <span className=" font-medium hidden md:block">
              {data.categories.name}
            </span>
            <span>-</span>
            <span>{formatDate()}.</span>
          </div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            Superhost
          </div>
        </div>

        <h3 className="font-black text-title text-xl">{data.title}</h3>
        <p className="text-sm text-title-foreground h-10 ">
          {data.description}
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
            <Button
              type="button"
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal(true), console.log(123);
              }}
            >
              Remove
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ml-2"
                fill="none"
                id="bookmark-subtract"
              >
                <path
                  fill="url(#a)"
                  d="M17 1H7a3.12 3.12 0 0 0-3 3.21v15.58a3.21 3.21 0 0 0 1.76 2.92 2.8 2.8 0 0 0 3-.34l2.68-2.11a.85.85 0 0 1 1.08 0l2.68 2.11a2.82 2.82 0 0 0 3 .34 3.21 3.21 0 0 0 1.8-2.92V4.21A3.12 3.12 0 0 0 17 1Zm-3 8h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Z"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="12"
                    x2="12"
                    y1="1"
                    y2="22.997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00C0FF"></stop>
                    <stop offset="1" stop-color="#4071FF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal ? (
          <RemoveBookmark
            setFlag={setDisplayCreate}
            id={data.id}
            setRemoving={setRemoving}
          />
        ) : null}
      </Modal>
    </div>
  );
};
