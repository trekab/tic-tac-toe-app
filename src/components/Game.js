import React from "react";
import logo from "../assets/logo.svg";
import xturn from "../assets/icon-x-turn.svg";
import oturn from "../assets/icon-o-turn-alt.svg";
import GameCell from "./GameCell";

const Game = ({
  turn,
  updatePlayerTurn,
  gameOutcome,
  cellClickHandler,
  restartButtonHandler,
  xWins,
  oWins,
  ties,
  className,
  playerOne,
  winningCells,
  winner,
}) => {
  const gameCells = Object.keys(gameOutcome).map((result) => (
    <GameCell
      className={gameOutcome[result].value}
      key={result}
      clickHandler={cellClickHandler}
      cell={gameOutcome[result]}
      cellName={result}
      turn={turn}
      updatePlayerTurn={updatePlayerTurn}
      winningCells={winningCells}
      winner={winner}
    />
  ));
  return (
    <div className={`game ${className}`}>
      <header className="game-header">
        <img src={logo} alt="logo" className="game-header__logo" />
        <div className="game-header__turn">
          <div className="turn-icon">
            <img src={turn === "x" ? xturn : oturn} alt="player turn" />
          </div>
          <p>turn</p>
        </div>
        <button className="restart" onClick={restartButtonHandler}></button>
      </header>
      <main className="game-grid">{gameCells}</main>
      <footer className="game-footer">
        <div className="game-footer__cell p1">
          <p className="p-result">
            x {`${playerOne === "x" ? "(p1)" : "(p2)"}`}
          </p>
          <p className="p-result__value">{xWins}</p>
        </div>
        <div className="game-footer__cell ties">
          <p className="p-result">ties</p>
          <p className="p-result__value">{ties}</p>
        </div>
        <div className="game-footer__cell p2">
          <p className="p-result">
            o {`${playerOne === "x" ? "(p2)" : "(p1)"}`}
          </p>
          <p className="p-result__value">{oWins}</p>
        </div>
      </footer>
    </div>
  );
};

export default Game;
