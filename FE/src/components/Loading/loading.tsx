import "./loading.css";
export const Loading: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className="fixed z-50 h-full top-0 left-0 bg-zinc-700/50">
      <div className="w-screen h-full p-5 aria-expanded:animate-zoom-in aria-hidden:animate-zoom-out will-change-opacity">
        <div className="flex justify-center items-center max-w-full h-full aria-expanded:animate-zoom-in aria-hidden:animate-zoom-out will-change-auto">
          <div
            className={`relative line-loading before:absolute before:left-0 before:h-full ${
              className ? className : ""
            }`}
          >
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
          </div>
        </div>
      </div>
    </div>
  );
};
