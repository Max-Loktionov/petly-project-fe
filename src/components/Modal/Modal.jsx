import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Exit, ExitIcon, ModalWindow, MyBackdrop } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");


function Modal({tabletNoStandartWidth, onClose, children }) {
  return createPortal(
    <MyBackdrop>
      <ModalWindow tabletNoStandartWidth={tabletNoStandartWidth}
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
