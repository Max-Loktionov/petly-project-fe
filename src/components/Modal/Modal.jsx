import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Exit, ExitIcon, ModalWindow, MyBackdrop } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.code === "Escape") {
        onClose(e);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  });

  const onBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose(e);
    }
  };

  return createPortal(
    <MyBackdrop onClick={onBackdrop}>
      <ModalWindow>
        <Exit onClick={onClose}>
          <ExitIcon />
        </Exit>
        {children}
      </ModalWindow>
    </MyBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  OnClose: PropTypes.func,
};

export default Modal;
