import React from "react";
import PropTypes from "prop-types";
import { Exit, ExitIcon, ModalWindow, MyBackdrop } from "./Modal.styled";

function Modal({ onClose, tabletNoStandartWidth, children }) {
  return (
    <MyBackdrop>
      <ModalWindow tabletNoStandartWidth={tabletNoStandartWidth}>
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
