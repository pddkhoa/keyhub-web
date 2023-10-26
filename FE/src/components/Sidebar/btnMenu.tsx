import "./btnMenu.css";

interface ButtonMenuProps {
  open: boolean;
}

export const ButtonMenu: React.FC<ButtonMenuProps> = ({ open }) => {
  return (
    <div
      className={`background fixed h-8 w-8   rounded-lg duration-300 transition hover:brightness-150`}
    >
      <button className="menu__icon w-5 h-5 ">
        <span className={`${open ? "sp1" : null}`} />
        <span className={`${open ? "sp2" : null}`} />
        <span className={`${open ? "sp3" : null}`} />
      </button>
    </div>
  );
};
