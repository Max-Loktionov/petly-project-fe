import React from "react";
import { Exit, ExitIcon, ModalWindow, MyBackdrop } from "./Modal.styled";

function Modal({ onClose, children }) {
  return (
    <MyBackdrop>
      <ModalWindow>
        <Exit onClick={onClose}>
          <ExitIcon />
        </Exit>
        {children}
      </ModalWindow>
    </MyBackdrop>
  );
}

export default Modal;
