import { createAxios } from "@/api/createInstance";
import { showToast } from "@/hooks/useToast";
import { loginSuccess } from "@/redux/authSlice";
import { deleteSeriesSuccess } from "@/redux/seriesSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import { useDispatch, useSelector } from "react-redux";

type DeleteSeriesProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  id: number;
};

export const DeleteSeries: React.FC<DeleteSeriesProps> = ({ setFlag, id }) => {
  const auth = useSelector((state: RootState) => state.auth.login);

  const dispatch = useDispatch();
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

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
        {/*body*/}
        <div className="text-center p-5 flex-auto justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 flex items-center text-red-500 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-xl font-bold py-4 text-title">Are you sure?</h2>
          <p className="text-sm text-gray-500 px-8">
            Do you really want to delete all your blog in series? This process
            cannot be undone
          </p>
        </div>
        {/*footer*/}
        <div className="p-3  mt-2 text-center space-x-4 md:block">
          <button
            onClick={() => {
              setFlag.off();
            }}
            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDeleteSeries(id)}
            className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
