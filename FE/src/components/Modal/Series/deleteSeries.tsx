import { Button } from "@/components/ui/button";
import { IconDelete } from "@/components/ui/icon";
import useAuth from "@/hooks/useAuth";
import { showToast } from "@/hooks/useToast";
import { deleteSeriesSuccess } from "@/redux/seriesSlice";
import ClientServices from "@/services/client/client";
import { useDispatch } from "react-redux";

type DeleteSeriesProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  id: number;
};

export const DeleteSeries: React.FC<DeleteSeriesProps> = ({ setFlag, id }) => {
  const dispatch = useDispatch();
  const { axiosJWT, accessToken } = useAuth();

  const handleDeleteSeries = async (id: number) => {
    try {
      const { body } = await ClientServices.deleteSeries(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        dispatch(deleteSeriesSuccess(id));
        showToast("Delete  Thanh Cong", "success");
        setFlag.off();
      } else {
        console.log(body?.message);
        showToast(body?.message || "Error", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-150 overflow-y-scroll">
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
            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDeleteSeries(id)}
            className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
