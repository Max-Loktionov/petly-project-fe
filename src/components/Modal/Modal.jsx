import React from "react";
import PropTypes from "prop-types";
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

Modal.propTypes = {
  OnClose: PropTypes.func,
};

export default Modal;
