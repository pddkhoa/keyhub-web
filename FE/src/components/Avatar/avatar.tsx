import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import User from "@/types/user";

type AlphabetAvatarProps = {
  size: number;
};

const AlphabetAvatar: FC<AlphabetAvatarProps> = ({ size }) => {
  const userData = useSelector((state: RootState) => state.user.detail.data);

  const style = {
    width: size,
    height: size,
    padding: size > 90 ? "4px" : "1px",
  };

  return (
    <div
      style={style}
      className="relative cursor-pointer bg-card flex justify-center items-center group overflow-hidden hover:brightness-110 border-2 border-border  rounded-full  "
    >
      {userData.avatar ? (
        <img
          className="w-[100%] h-[100%] rounded-full object-cover"
          src={userData.avatar}
        />
      ) : (
        <svg
          className=" w-full h-full rounded-full bg-gray-100 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

type UserAvatarProps = {
  size: number;
  data: string;
};
export const UserAvatar: FC<UserAvatarProps> = ({ size, data }) => {
  const style = {
    width: size,
    height: size,
    padding: size > 90 ? "4px" : "1px",
  };

  return (
    <div
      style={style}
      className="relative cursor-pointer bg-card flex justify-center items-center group overflow-hidden hover:brightness-110 border-2 border-border  rounded-full  "
    >
      {data ? (
        <img
          className="w-[100%] h-[100%] rounded-full object-cover"
          src={data}
        />
      ) : (
        <svg
          className=" w-full h-full rounded-full bg-gray-100 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default AlphabetAvatar;
