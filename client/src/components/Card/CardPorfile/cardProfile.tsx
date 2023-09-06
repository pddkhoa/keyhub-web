import { FaRegHeart, FaRegCommentDots, FaRegBookmark } from "react-icons/fa";
import { CgMoreVertical } from "react-icons/cg";
import image from "../../../asset/banner.jpeg";
import AlphabetAvatar from "../../Avatar/avatar";

export const CardProfile = () => {
  return (
    <div className="max-w-md max-h-400 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <AlphabetAvatar size={40} />
          <p className="text-lg font-semibold leading-none ml-2">username</p>
        </div>

        <CgMoreVertical className=" text-black w-5 h-5 hover:text-gray-700 focus:outline-none focus:text-gray-700" />
      </div>
      <div className="w-full h-56 ">
        <img
          src={image}
          alt="Paella dish"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-2.5 space-y-1">
        <h2 className="font-bold text-xl">
          This impressive paella is a perfect party
        </h2>
        <p className="text-sm text-gray-700">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex space-x-10">
          <FaRegHeart className=" text-black w-5 h-5 hover:text-gray-700 focus:outline-none focus:text-gray-700" />

          <FaRegCommentDots className=" text-black w-5 h-5 hover:text-gray-700 focus:outline-none focus:text-gray-700" />
        </div>
        <FaRegBookmark className=" text-black w-5 h-5 hover:text-gray-700 focus:outline-none focus:text-gray-700" />
      </div>
    </div>
  );
};
