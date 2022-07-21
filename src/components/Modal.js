import React, { useEffect, useState } from "react";
import iconO from "../assets/icon-o.svg";
import iconX from "../assets/icon-x.svg";

const Modal = ({
  winner,
  mark,
  msg,
  restart,
  displayClass,
  nextRoundHandler,
  gameRestartHandler,
  cancelGameRestart,
}) => {
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
      <div className={`overlay ${displayClass}`}>
        <div className="modal">
          {restart ? (
            <p className="round-tie">restart game?</p>
          ) : winner === "tie" && !restart ? (
            <p className="round-tie">round tied</p>
          ) : (
            <div className="modal-info">
              <p className="modal-p">{`${msg}`}</p>
              <h1 className="modal-msg">
                <img src={winnerMark} alt="winners mark" className="p-icon" />
                <span className={mark === "o" ? "o-color" : "x-color"}>
                  takes the round
                </span>
              </h1>
            </div>
          )}

          <div className="modal-buttons">
            <button
              className="cancel"
              onClick={restart ? cancelGameRestart : gameRestartHandler}
            >
              {restart ? "No, cancel" : "Quit"}
            </button>
            <button
              className="approve"
              onClick={restart ? gameRestartHandler : nextRoundHandler}
            >
              {restart ? "Yes, restart" : "Next Round"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
