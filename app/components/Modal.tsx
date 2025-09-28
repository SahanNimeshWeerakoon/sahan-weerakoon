'use client';

import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ isOpen, children, setIsOpen }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const closeModal = () => setIsOpen(false);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div
      className={`modal-overlay ${isOpen ? "visible" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`modal-content ${isOpen ? "slide-up" : "slide-down"}`}
        onClick={e => e.stopPropagation()}
      >
        <Image
          onClick={closeModal}
          src="/img/close.svg"
          alt="close icon"
          className="close"
          width={30}
          height={30}
        />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;