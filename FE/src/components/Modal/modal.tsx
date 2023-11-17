import { useState, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
type ModalProp = {
  children: React.ReactNode | any;
  flag: boolean;
  closeOutside?: boolean;
  center?: boolean;
  closeModal: () => void;
};

const Modal: React.FC<ModalProp> = ({
  children,
  flag,
  closeModal,
  closeOutside = true,
  center = true,
}) => {
  const [open, setOpen] = useState<boolean>(flag);
  const currentOpen = useRef<boolean>(flag);

  useEffect(() => {
    if (currentOpen.current && !flag) {
      setTimeout(() => {
        setOpen(false);
      }, 480);
    } else {
      currentOpen.current = flag;
      setOpen(flag);
    }
  }, [flag]);

  const handleStopOnClickPropagation = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!closeOutside || e.target !== e.currentTarget) {
        e.stopPropagation();
        return;
      }
    },
    [closeOutside]
  );

  return ReactDOM.createPortal(
    <>
      {open ? (
        <div
          className="fixed z-50 h-full top-0 left-0 bg-black/20 "
          onClick={closeOutside ? closeModal : undefined}
        >
          <div
            aria-hidden={!flag}
            aria-expanded={flag}
            className="w-screen h-full p-5 aria-expanded:animate-zoom-in aria-hidden:animate-zoom-out will-change-opacity"
          >
            <div
              aria-hidden={!flag}
              aria-expanded={flag}
              onClick={handleStopOnClickPropagation}
              className={`max-w-full h-full aria-expanded:animate-zoom-in aria-hidden:animate-zoom-out will-change-auto${
                center ? " flex justify-center items-center" : ""
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("root") || document.body
  );
};

export default Modal;
