import AlphabetAvatar from "../../Avatar/avatar";
import { BadgeCheck, Heart, MessageCircle } from "lucide-react";
import BlogPost from "@/types/blog";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link, useNavigate } from "react-router-dom";

interface GridCardProps {
  data: BlogPost;
}

export const GridCard: React.FC<GridCardProps> = ({ data }) => {
  const userData = useSelector((state: RootState) => state.user.detail.data);
  const navigate = useNavigate();

  return (
    <article className="mb-4 break-inside p-6  rounded-xl bg-card flex flex-col  bg-clip-border">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex justify-center items-center">
          <a className="inline-block mr-2" href="#">
            <AlphabetAvatar size={60} />
          </a>
          <div className="flex flex-col mt-2">
            <div className="flex items-center">
              <a
                className="inline-block text-md text-title-foreground font-bold mr-2"
                href="#"
              >
                {userData.name}
              </a>
              <span>
                <svg
                  className="fill-blue-500 dark:fill-slate-50 w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                </svg>
              </span>
            </div>
            <div className="text-slate-500 text-sm  ">January 22, 2021</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
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
      <h2 className="text-2xl text-title font-extrabold  whitespace-normal line-clamp-2 truncate">
        {data.title}
      </h2>
      <div className="py-4 ">
        <div
          onClick={() => {
            navigate(`/blog/${data.id}`, { state: data });
          }}
          className="flex w-full h-[200px] group"
        >
          <img
            className="w-full h-full object-cover opacity-90 rounded-lg group-hover:opacity-70"
            src={data.avatar}
          />
        </div>
      </div>

      <div className="py-1">
        <a className="inline-flex items-center" href="#">
          <span className="mr-2">
            <svg
              className="fill-rose-600 dark:fill-rose-400"
              style={{ width: 24, height: 24 }}
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </span>
          <span className="text-lg font-bold text-title-foreground">
            {data.likes}
          </span>
        </a>
      </div>
    </article>
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
