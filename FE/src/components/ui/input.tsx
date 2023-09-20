import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full text-sm px-4 py-3 bg-input  brightness-105 ring-border focus:bg-input text-title border  border-border  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-title-foreground  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
