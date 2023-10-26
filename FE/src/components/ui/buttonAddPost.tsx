import { Plus } from "lucide-react";
import "./buttonAddPost.css";

export const ButtonAddPost = () => {
  return (
    <button className="flex justify-center items-center btn-add bg-gradient-to-tl from-purple-700 to-pink-500 duration-300">
      New Post
      <span className="opacity-0">
        <Plus className="w-4 h-4 ml-2 mb-1" />
      </span>
    </button>
  );
};
