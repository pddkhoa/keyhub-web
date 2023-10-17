import { useTheme } from "../../hooks/theme-provider";
import { Switch } from "../ui/switch";

import { useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [darkSide, setDarkSide] = useState(theme === "light" ? true : false);

  const toggleMode = (checked: boolean) => {
    setDarkSide(checked);
    if (darkSide === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      onClick={() => toggleMode(!darkSide)}
      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-hover cursor-pointer"
    >
      <div className="flex items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 32 32"
          className="w-9 h-9  mr-2 bg-input p-1 rounded-full"
          id="moon"
        >
          <path
            fill="#7dccfc"
            d="M16.24 31A14.74 14.74 0 0 1 2.1 20.26a2 2 0 0 1 2.42-2.42A10.75 10.75 0 0 0 18.2 7.47a10.82 10.82 0 0 0-.41-2.91 2 2 0 0 1 2.42-2.42 14.7 14.7 0 0 1-4 28.85Z"
          ></path>
        </svg>
        <span className="text-sm">Dark Mode</span>
      </div>
      <Switch checked={darkSide} className="bg-background" id="airplane-mode" />
    </div>
  );
}
