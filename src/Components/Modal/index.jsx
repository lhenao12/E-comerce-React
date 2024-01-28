import React from "react";
import ReactDOM from "react-dom";
import "../Modal/style.css";

const Modal = ({ children, setOpenModal }) => {
  console.log("Entramos al modal");
  const handleClick = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}

      <span onClick={handleClick}></span>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
