import React, { useEffect, useState } from "react";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";

const Modal = ({ winner, mark, msg }) => {
  const [winnerMark, setWinnerMark] = useState("");
  useEffect(() => {
    if (mark === "o") {
      setWinnerMark(iconO);
    } else {
      setWinnerMark(iconX);
    }
  }, [mark]);
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        {winner === "tie" ? (
          <p className="round-tie">round tied</p>
        ) : (
          <div className="modal-info">
            <p className="modal-p">
              {`${msg}`}
            </p>
            <h1 className="modal-msg">
              <img src={winnerMark} alt="winners mark" className="p-icon" />
              <span className={mark === "o" ? "o-color" : "x-color"}>
                takes the round
              </span>
            </h1>
          </div>
        )}

        <div className="modal-buttons">
          <button className="cancel">Quit</button>
          <button className="approve">Next Round</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
