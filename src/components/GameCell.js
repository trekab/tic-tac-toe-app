import React, { useState } from "react";

const GameCell = ({ className, updatePlayerTurn, cell, turn }) => {
  const [clicked, setClicked] = useState(false);
  const [cellMark, setCellMark] = useState(className);

  const cellClickHandler = () => {
    if (!clicked) {
      if (turn === "x") {
        setCellMark("x-mark");
      } else {
        setCellMark("o-mark");
      }
      setClicked(true);
      updatePlayerTurn();
    }
  };

  return (
    <div
      className={`game-grid__cell ${cellMark}`}
      onClick={cellClickHandler}
    ></div>
  );
};

export default GameCell;
