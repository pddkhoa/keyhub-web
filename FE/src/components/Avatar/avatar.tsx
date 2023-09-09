import { FC } from "react";

export const Avatar = () => {
  return (
    <div className="relative  w-24 h-24 inline-flex items-center justify-center  overflow-hidden bg-white rounded-full ">
      <svg
        className="justify-center w-20 h-20 text-gray-400 -left-1 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

type AlphabetAvatarProps = {
  size: number;
};

const AlphabetAvatar: FC<AlphabetAvatarProps> = ({ size }) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div
      style={style}
      className="relative inline-flex items-center justify-center  overflow-hidden bg-white rounded-full shadow-lg border"
    >
      <span
        className="capitalize font-medium "
        style={{ fontSize: 0.45 * size }}
      >
        <svg
          className="justify-center w-full h-full text-gray-400 -left-1 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default AlphabetAvatar;
