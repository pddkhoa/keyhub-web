import User from "@/types/user";
import React, { useState } from "react";
import "../../pages/Introduction/spotlight";

import useBoolean from "@/hooks/useBoolean";
import Modal from "../Modal/modal";
import { ModalUser } from "../Modal/modalUser";

interface CardUserProps {
  data: User;
  ref?: any;
  setFollowing?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardUser: React.FC<CardUserProps> = React.forwardRef(
  ({ data, setFollowing }, ref) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [displayCreate, setDisplayCreate] = useBoolean(false);

    const card = (
      <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100">
        <img
          src={data?.avatar?.toString()}
          alt=""
          className="flex-shrink-0 object-cover rounded-sm sm:h-60 bg-gray-500/25 aspect-square"
        />
        <div>
          <div className="flex py-2 justify-between">
            <h2 className="text-xl w-11/12  font-semibold  text-white">
              {data?.name}
            </h2>

            <a
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal(true);
              }}
              className="flex w-1/12 items-center justify-between cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 stroke-current text-violet-400"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <span className="block pb-2 text-sm text-blue-600">
            @{data.second_name}
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt
          </p>
        </div>
        <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
          {displayModal ? (
            <ModalUser
              setFlag={setDisplayCreate}
              data={data}
              setFollowing={setFollowing}
            />
          ) : null}
        </Modal>
      </div>
    );

    const body = <div className="bg-gray-900">{card}</div>;

    const content = ref ? (
      <div
        ref={ref}
        className="relative flex justify-center items-center rounded-xl"
      >
        {body}
      </div>
    ) : (
      <div className="relative flex justify-center items-center rounded-xl">
        {body}
      </div>
    );
    return content;
  }
);
