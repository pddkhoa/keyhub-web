import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";
import React from "react";

type ItemsProp = {
  icon: React.ReactNode | any;
  title: string;
};
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Items: React.FC<ItemsProp> = ({ icon, title }) => {
  return (
    <button className="flex flex-1 gap-5 items-center justify-center">
      <span className="relative text-title-foreground px-1">{icon}</span>
      <span
        className={`flex flex-1 text-left transition-opacity truncate flex-row items-center text-lg  duration-300 text-title-foreground ${
          !open ? "opacity-0 " : "opacity-90"
        }`}
      >
        {title}
      </span>
    </button>
  );
};
