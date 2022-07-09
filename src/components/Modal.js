import React from "react";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";

const Modal = ({ status }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <p className="modal-p">oh no, you lost...</p>
        <h1 className="modal-msg">
          <img src={iconO} alt="winners mark" className="p-icon" />
          <span>takes the round</span>
        </h1>
        <div className="modal-buttons">
          <button className="cancel">Quit</button>
          <button className="approve">Next Round</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
