import React from "react";
import { Exit, ExitIcon, ModalWindow, MyBackdrop } from "./Modal.styled";

function Modal({ children }) {
  return (
    <MyBackdrop>
      <ModalWindow>
        <Exit>
          <ExitIcon />
        </Exit>
        {children}
      </ModalWindow>
    </MyBackdrop>
  );
}

export default Modal;
