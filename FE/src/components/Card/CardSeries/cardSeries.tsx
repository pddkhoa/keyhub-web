import { createAxios } from "@/api/createInstance";
import AlphabetAvatar from "@/components/Avatar/avatar";
import convertDate from "@/components/FormatDate/formatDate";
import { DeleteSeries } from "@/components/Modal/Series/deleteSeries";
import Modal from "@/components/Modal/modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useBoolean from "@/hooks/useBoolean";

import seriesType from "@/types/series";
import { Calendar, Sticker, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface CardSeriesProps {
  data: seriesType;
  setExpanded: Dispatch<SetStateAction<number | undefined>>;
  setSeriesSelected: React.Dispatch<
    React.SetStateAction<seriesType | undefined>
  >;
}

export const CardSeries: React.FC<CardSeriesProps> = ({
  data,
  setExpanded,
  setSeriesSelected,
}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const formatDate = () => {
    const inputDate = data.createday;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };

  return (
    <div
      className={`bg-card text-white w-full h-56 flex flex-col rounded-xl shadow-lg p-4  `}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <div className="rounded-full w-12 h-12 border border-purple-500 border-dashed p-1.5 flex justify-between items-center">
            <span className="text-xl w-full h-full flex justify-center items-center">
              {data.sumBlog}
            </span>
          </div>
          <div className="text-2xl truncate font-bold w-56">{data.name}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <AlphabetAvatar size={50} />
          </div>

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
                  setDisplayCreate.on(), setDisplayModal(true);
                }}
                className="cursor-pointer"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <p className="mt-4 h-52 text-gray-500 font-bold text-sm whitespace-normal ">
        {data.description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 justify-center items-center">
          <Calendar className="w-5 h-5 text-title-foreground" />
          <span className="text-gray-600 text-md">{formatDate()}.</span>
        </div>
        <Button
          title="Click to detail"
          onClick={() => {
            setExpanded(data.id), setSeriesSelected(data);
          }}
          className=" flex p-2 rounded-full bg-red-700 hover:brightness-75"
        >
          Read More
          <Sticker className="ml-2 w-6 h-6" />
        </Button>
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal ? (
          <DeleteSeries setFlag={setDisplayCreate} id={data.id} />
        ) : null}
      </Modal>
    </div>
  );
};
