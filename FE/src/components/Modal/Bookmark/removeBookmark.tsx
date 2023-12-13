import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";

type RemoveBookmarkProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  id: number;
  setRemoving?: React.Dispatch<React.SetStateAction<boolean>>;
  setUnBookmark?: React.Dispatch<React.SetStateAction<boolean>>;
  idCategories?: string;
};
export const RemoveBookmark: React.FC<RemoveBookmarkProps> = ({
  setFlag,
  id,
  setUnBookmark,
  idCategories,
}) => {
  const { isLoading, sendRequest } = useFetch();

  const handleDeleteSave = async (id: number) => {
    const idString = id.toString();
    await sendRequest({
      type: REQUEST_TYPE.UNBOOKMARK_BLOG,
      data: null,
      slug: idString,
    });

    if (setUnBookmark) {
      setUnBookmark((prevUnBookmark) => !prevUnBookmark);
    }
    setFlag.off();

    sendRequest({ type: REQUEST_TYPE.LIST_BLOG_BOOKMARK });
    sendRequest({ type: REQUEST_TYPE.LIST_BLOG });
    sendRequest({ type: REQUEST_TYPE.GET_BLOG_CATEGORIES, slug: idCategories });
  };

  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-stone-200 overflow-y-scroll">
      <div>
        <div className="px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ">
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
        {/*body*/}
        <div className="text-center p-5 flex-auto justify-center">
          <h2 className="text-xl font-bold py-4 text-title">Are you sure?</h2>
          <p className="text-sm text-gray-500 px-8">
            Do you really want to unbookmark your blog ? This process cannot be
            undone
          </p>
        </div>
        {/*footer*/}
        <div className="p-3  mt-2 text-center space-x-4 flex justify-around">
          <Button
            onClick={() => {
              setFlag.off();
            }}
          >
            Cancel
          </Button>
          {isLoading ? (
            <Button disabled>Please wait...</Button>
          ) : (
            <Button onClick={() => handleDeleteSave(id)}>Confirm</Button>
          )}
        </div>
      </div>
    </div>
  );
};
