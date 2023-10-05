import AlphabetAvatar from "@/components/Avatar/avatar";
import convertDate from "@/components/FormatDate/formatDate";
import seriesType from "@/types/series";
import { Calendar, Sticker } from "lucide-react";

interface CardSeriesProps {
  data: seriesType;
}

export const CardSeries: React.FC<CardSeriesProps> = ({ data }) => {
  const formatDate = () => {
    const inputDate = data.createday;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };

  return (
    <div className="bg-card text-white w-full h-56 flex flex-col rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full w-12 h-12 border border-purple-500 border-dashed p-1.5 flex justify-between items-center">
            <span className="text-xl w-full h-full flex justify-center items-center">
              5+
            </span>
          </div>
          <div className="text-2xl truncate font-bold w-56">{data.name}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <AlphabetAvatar size={50} />
          </div>

          <div className="text-gray-500 p-1 rounded-lg bg-hover hover:brightness-150 hover:text-gray-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-more-vertical"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-4 h-52 text-gray-500 font-bold text-sm whitespace-normal ">
        {data.description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 justify-center items-center">
          <Calendar className="w-5 h-5 text-title-foreground" />
          <span className="text-gray-600 text-md">{formatDate()}</span>
        </div>
        <div className="p-2 rounded-full bg-red-700">
          <Sticker />
        </div>
      </div>
    </div>
  );
};
