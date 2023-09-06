import "./search.css";
import { LiaSearchSolid } from "react-icons/lia";

export const SearchBar = () => {
  return (
    <div className="container-input duration-300 ">
      <span className="icon">
        <LiaSearchSolid className="w-5 h-5 text-black cursor-pointer" />
      </span>
      <input
        type="text"
        placeholder=""
        name="text"
        className="input input-alt border focus:w-[150%] duration-1000 transition"
      />
      <span className="input-border input-border-alt"></span>
    </div>
  );
};
