import { useState } from "react";
import useDarkSide from "../../hooks/useDarkSide";
import "./switch.css";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <label className="switch">
        <div>
          <input type="checkbox" />
          <span className="slider" onClick={() => toggleDarkMode(!darkSide)} />
        </div>
      </label>
    </>
  );
}
