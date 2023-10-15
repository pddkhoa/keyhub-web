import AlphabetAvatar from "@/components/Avatar/avatar";
import { Button } from "@/components/ui/button";
import { BadgeCheck, MoreHorizontal, PenSquare } from "lucide-react";
import banner from "../../../asset/__banner-default.jpg";
import convertDate from "@/components/FormatDate/formatDate";
import { Link } from "react-router-dom";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import DraftPost from "@/types/draft";

interface ReportType {
  title: string;
  description: string;
  categoryIds: CategoryType;
  tagIds: TagType[];
  seriesId: number;
  content: string;
  avatar: string;
  create_date?: string;
  id?: number;
}

interface CardDraftProps {
  data: DraftPost;
}

export const CardDraft: React.FC<CardDraftProps> = ({ data }) => {
  const formatDate = () => {
    const inputDate = data.create_date;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };

  return (
    <div className="relative w-full h-44 flex md:flex-row md:space-x-5 md:space-y-0 rounded-xl hover:shadow-lg   p-4  mx-auto cursor-pointer  hover:bg-hover">
      <div className="w-1/4 h-full ">
        <img
          src={data.avatar ? data.avatar : banner}
          alt="tailwind logo"
          className="rounded-xl w-full h-full  object-cover opacity-75"
        />
      </div>

      <div className="w-3/4 h-fit  flex flex-col space-y-1 ">
        <div className="flex justify-between item-center">
          <div className="flex space-x-2 text-title-foreground">
            <span>{formatDate()}</span>
          </div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            Draft
          </div>
        </div>

        <h3 className="text-title text-xl h-[60px] font-extrabold  whitespace-normal line-clamp-2 truncate  ">
          {data.title}
        </h3>

        <div className="w-full flex justify-between pt-2">
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
            <Link to={`/editor/${data.id}`} state={data}>
              <Button>
                Edit Draft
                <PenSquare className="w-5 h-5 ml-4" />
              </Button>
            </Link>
            <Button>
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
