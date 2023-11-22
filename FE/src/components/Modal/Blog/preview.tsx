import { Comments } from "@/components/Comment/comment";
import BlogPost from "@/types/blog";

type PreviewProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: BlogPost;
};

export const Preview: React.FC<PreviewProps> = ({ setFlag, data }) => {
  return (
    <div className="w-2/4 h-2/3 sm:x-0  rounded-xl shadow bg-card brightness-125 ">
      <div className="h-full flex flex-col">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2 ">
          <h1 className="text-lg grow text-title">Comment</h1>
          <button
            className="block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors"
            onClick={setFlag.off}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="w-full h-full pb-4 overflow-y-auto">
          <div className="border-t-2 p-2">
            <div className="relative mx-4  flex flex-col  p-2  rounded-xl space-y-5">
              <Comments idBlog={data.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preview;
