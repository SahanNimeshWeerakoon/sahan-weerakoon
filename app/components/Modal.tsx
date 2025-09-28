import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ isOpen, children, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${isOpen ? "visible" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`modal-content ${isOpen ? "slide-up" : "slide-down"}`}
        onClick={e => e.stopPropagation()} // don’t close when clicking inside
      >
        <Image onClick={closeModal} src="/img/close.svg" alt="close icon" className="close" width={30} height={30} />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;