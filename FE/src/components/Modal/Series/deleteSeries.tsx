import { Button } from "@/components/ui/button";
import { IconDelete } from "@/components/ui/icon";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";

type DeleteSeriesProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  id: number;
};

export const DeleteSeries: React.FC<DeleteSeriesProps> = ({ setFlag, id }) => {
  const { isLoading, sendRequest } = useFetch();

  const isSuccess = useSelector((state: RootState) => state.series.isSuccess);

  const handleDeleteSeries = async (id: number) => {
    const idString = id.toString();
    await sendRequest({
      type: REQUEST_TYPE.DELETE_SERIES,
      data: null,
      slug: idString,
    });

    sendRequest({
      type: REQUEST_TYPE.LIST_SERIES,
    });
    sendRequest({
      type: REQUEST_TYPE.LIST_BLOG,
    });
    if (isSuccess) {
      setFlag.off();
    }
  };

  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-white overflow-y-scroll">
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
          <IconDelete className="w-16 h-16 flex items-center  mx-auto" />
          <h2 className="text-xl font-bold py-4 text-title">Are you sure?</h2>
          <p className="text-sm text-gray-500 px-8">
            Do you really want to delete all your blog in series? This process
            cannot be undone
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
            <Button disabled>Please wait..</Button>
          ) : (
            <Button onClick={() => handleDeleteSeries(id)}>Delete</Button>
          )}
        </div>
      </div>
    </div>
  );
};
