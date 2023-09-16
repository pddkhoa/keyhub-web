import { FC } from "react";
import avatar from "./../../asset/1112.jpg";

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
      className="relative inline-flex items-center justify-center  overflow-hidden  rounded-full shadow-lg"
    >
      <div className="w-full h-full items-center justify-center rounded-full">
        <div className="h-full w-full rounded-full bg-gradient-to-l from-pink-400 via-red-400 to-violet-400  p-[0.25rem]">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full rounded-full object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AlphabetAvatar;
