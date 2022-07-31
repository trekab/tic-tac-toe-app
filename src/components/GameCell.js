import React from "react";

const GameCell = ({
  className,
  updatePlayerTurn,
  cell,
  turn,
  clickHandler,
  cellName,
  winningCells,
  winner
}) => {
  const cellClickHandler = () => {
    if (!cell.clicked) {
      if (turn === "x") {
        clickHandler(cellName, "x", true);
      } else {
        clickHandler(cellName, "o", true);
      }

      updatePlayerTurn();
    }
  };

  return (
    <div
      className={`game-grid__cell ${className} ${winningCells.includes(cellName) ? `${winner}-mark__winner`: ""}`}
      onClick={cellClickHandler}
    ></div>
  );
};

export default GameCell;
