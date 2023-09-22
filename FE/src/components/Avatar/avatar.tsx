import { FC } from "react";
import avatar from "./../../asset/1112.jpg";

type AlphabetAvatarProps = {
  size: number;
};

const AlphabetAvatar: FC<AlphabetAvatarProps> = ({ size }) => {
  const style = {
    width: size,
    height: size,
    padding: size > 90 ? "4px" : "2px",
  };

  return (
    <div
      style={style}
      className="relative inline-flex items-center justify-center p-1 overflow-hidden  rounded-full shadow-lg bg-gradient-to-l from-pink-400 via-red-400 to-violet-400"
    >
      <img
        className="w-[100%] h-[100%] rounded-full object-cover"
        src={avatar}
      />
    </div>
  );
};

export default AlphabetAvatar;
