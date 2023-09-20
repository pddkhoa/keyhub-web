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
      className="flex justify-between items-center p-2.5 rounded-lg hover:bg-hover cursor-pointer"
    >
      <span>Dark Mode</span>
      <Switch checked={darkSide} className="bg-background" id="airplane-mode" />
    </div>
  );
}
