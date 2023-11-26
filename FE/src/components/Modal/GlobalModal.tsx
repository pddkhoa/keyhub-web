import { useModal } from "@/hooks/useModal";
import { useEffect } from "react";
import { Modal } from "rizzui";

export default function GlobalModal() {
  const { isOpen, view, closeModal, customSize } = useModal();
  const pathname = window.location.pathname;
  useEffect(() => {
    closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      customSize={customSize}
      overlayClassName="bg-opacity-20 backdrop-blur-sm"
      containerClassName="bg-gray-100"
    >
      {view}
    </Modal>
  );
}
