import React from "react";

type ItemsProp = {
  icon: React.ReactNode | any;
  title: string;
};

export const Items: React.FC<ItemsProp> = ({ icon, title }) => {
  return (
    <div className="flex flex-1 gap-5 items-center justify-center">
      <span className="relative text-title-foreground px-1">{icon}</span>
      <span
        className={`flex flex-1 text-left transition-opacity truncate flex-row items-center text-lg  duration-300 text-title-foreground ${
          !open ? "opacity-0 " : "opacity-90"
        }`}
      >
        {title}
      </span>
    </div>
  );
};
