import { createAxios } from "@/api/createInstance";
import { showToast } from "@/hooks/useToast";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type RemoveBookmarkProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  id: number;
  setRemoving: React.Dispatch<React.SetStateAction<boolean>>;
};
export const RemoveBookmark: React.FC<RemoveBookmarkProps> = ({
  setFlag,
  id,
  setRemoving,
}) => {
  const auth = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const axiosJWT = createAxios(auth, dispatch);
  const accessToken = auth?.data.token;
  const handleDeleteSave = async (id: number) => {
    try {
      setRemoving(true);
      const { body } = await ClientServices.deleteSave(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        showToast("Remove  Thanh Cong", "success");
        setFlag.off();
        setRemoving(false);
      } else {
        console.log(body?.message);
        showToast(body?.message || "Error", "error");
        setRemoving(false);
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
            width="30"
            height="30"
            className="mx-auto"
            fill="none"
            id="bookmark-subtract"
          >
            <path
              fill="url(#a)"
              d="M17 1H7a3.12 3.12 0 0 0-3 3.21v15.58a3.21 3.21 0 0 0 1.76 2.92 2.8 2.8 0 0 0 3-.34l2.68-2.11a.85.85 0 0 1 1.08 0l2.68 2.11a2.82 2.82 0 0 0 3 .34 3.21 3.21 0 0 0 1.8-2.92V4.21A3.12 3.12 0 0 0 17 1Zm-3 8h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2Z"
            ></path>
            <defs>
              <linearGradient
                id="a"
                x1="12"
                x2="12"
                y1="1"
                y2="22.997"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00C0FF"></stop>
                <stop offset="1" stop-color="#4071FF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-xl font-bold py-4 text-title">Are you sure?</h2>
          <p className="text-sm text-gray-500 px-8">
            Do you really want to unbookmark your blog ? This process cannot be
            undone
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
            onClick={() => handleDeleteSave(id)}
            className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
