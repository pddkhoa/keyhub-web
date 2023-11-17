import convertDate from "@/components/FormatDate/formatDate";
import { DeleteSeries } from "@/components/Modal/Series/deleteSeries";
import Modal from "@/components/Modal/modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDelete } from "@/components/ui/icon";
import useBoolean from "@/hooks/useBoolean";

import seriesType from "@/types/series";
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
    <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
      <div className="flex justify-between items-center pb-4 border-bottom">
        <div className="flex items-center justify-center">
          <div
            onClick={() => {
              setExpanded(data.id), setSeriesSelected(data);
            }}
            className="rounded-full w-12 h-12 border border-purple-500 border-dashed hover:brightness-150 hover:border-solid duration-700 cursor-pointer p-1.5 flex justify-between items-center"
          >
            <span className="text-xl w-full h-full flex justify-center items-center ">
              {data.sumBlog}+
            </span>
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
                setDisplayCreate.on(), setDisplayModal(true);
              }}
              className="cursor-pointer"
            >
              <IconDelete className="w-5 h-5 mr-2" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={
              data.image
                ? data.image
                : "https://source.unsplash.com/random/480x360/?4"
            }
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>{formatDate()}</span>
          </div>
        </div>
        <div className="space-y-2">
          <a
            onClick={() => {
              setExpanded(data.id), setSeriesSelected(data);
            }}
            className="block text-gray-300 hover:brightness-150 hover:underline decoration-solid cursor-pointer"
          >
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {data.name}
            </h3>
          </a>
          <p className="leadi dark:text-gray-400">{data.description}</p>
        </div>
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal ? (
          <DeleteSeries setFlag={setDisplayCreate} id={data.id} />
        ) : null}
      </Modal>
    </div>
  );
};
