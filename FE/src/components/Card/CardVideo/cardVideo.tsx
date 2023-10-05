import AlphabetAvatar from "@/components/Avatar/avatar";
import { Heart, MessageCircle, MoreVertical, Play } from "lucide-react";

export const CardVideo = () => {
  return (
    <div className="bg-card shadow-2xl rounded-lg mb-6 tracking-wide overflow-x-hidden">
      <div className="h-64 relative md:flex-shrink-0">
        <div className="absolute top-5 right-3 z-50 hover:bg-hover p-1 rounded-lg cursor-pointer">
          <MoreVertical className="w-8 h-8 text-title-foreground" />
        </div>
        <a className="group">
          <img
            src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
            alt="mountains"
            className=" absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-60 rounded-lg rounded-b-none "
          />
          <div className="absolute top-1/2 -right-52 translate-y-8 w-full transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <Play className="w-16 h-16 text-title opacity-80 cursor-pointer p-3.5 hover:bg-hover rounded-full" />
          </div>
        </a>
      </div>
      <div className="px-4 py-2 mt-2">
        <h2 className="font-bold text-2xl text-title whitespace-normal line-clamp-2 truncate">
          My Amaizing Journey to the Mountains.
        </h2>

        <div className="flex justify-between mx-2 my-3">
          <div className="flex gap-2">
            <AlphabetAvatar size={55} />
            <div className="text-sm flex flex-col tracking-tighter mt-2 text-gray-900">
              <span className="text-title-foreground"> Mohammed Ibrahim</span>{" "}
              <span className="text-gray-600">21 SEP 2015.</span>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center text-title-foreground">
            <span>
              <Heart />
            </span>
            <span>
              <MessageCircle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
